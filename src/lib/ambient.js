// 배경 음악 — 음원 파일을 쓰지 않고 그 자리에서 소리를 만들어 낸다(Web Audio).
//
// 왜 파일을 안 쓰는가:
//   1) 저작권. 카드 그림에서 겪은 것과 똑같은 함정이다. 인터넷의 '무료 BGM' 대부분은
//      출처 표기 의무나 상업 이용 제한이 붙어 있고, 겉보기로는 구분이 안 된다.
//      직접 만든 소리에는 그 위험이 0이다.
//   2) 용량. 3분짜리 음원은 3~5MB다. 이건 0KB다.
//   3) 끝이 없다. 루프가 도는 티가 안 난다 — 종소리가 매번 다른 시점에 다른 높이로 난다.
//
// 구성: 낮게 깔리는 드론(화음) + 가끔 울리는 종소리. 둘 다 아주 작은 음량으로.
// 타로 앱의 배경음은 들으라고 트는 게 아니라 '조용하지 않다'는 감각만 주면 된다.

const BASE = 110          // A2. 더 낮추면 폰 스피커에서 웅웅거리기만 한다
const DRONE = [1, 1.5, 2] // 근음 · 5도 · 옥타브
// 종소리 음정 — 5음 음계(펜타토닉). 어떤 두 음을 겹쳐도 불협이 안 난다.
const BELLS = [3, 3.375, 4, 4.5, 5.0625, 6]

let ctx = null
let master = null
let nodes = []
let bellTimer = null
let running = false

const now = () => (ctx ? ctx.currentTime : 0)

// 종소리 한 번. 치고 나서 천천히 사라진다.
function ring() {
  if (!ctx || !master) return
  const f = BASE * BELLS[Math.floor(Math.random() * BELLS.length)]
  const t = now()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = 'sine'
  osc.frequency.value = f
  // 때리는 순간만 살짝 높았다가 제자리로 — 실제 종이 이렇게 운다
  osc.frequency.setValueAtTime(f * 1.006, t)
  osc.frequency.exponentialRampToValueAtTime(f, t + 0.25)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(0.07, t + 0.04)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 5.5)
  osc.connect(gain).connect(master)
  osc.start(t)
  osc.stop(t + 6)
  osc.onended = () => { try { gain.disconnect() } catch {} }
}

function scheduleBell() {
  // 4~11초 사이 무작위. 일정한 간격이면 기계가 치는 티가 난다.
  bellTimer = setTimeout(() => {
    if (!running) return
    ring()
    scheduleBell()
  }, 4000 + Math.random() * 7000)
}

export function isRunning() {
  return running
}

// 브라우저는 사용자가 뭔가 누르기 전에는 소리를 못 내게 막는다.
// 그래서 시작 화면의 '들어가기' 를 누르는 순간에 부른다.
export async function start() {
  if (running) return false
  try {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return false
    if (!ctx) ctx = new AC()
    if (ctx.state === 'suspended') await ctx.resume()

    master = ctx.createGain()
    master.gain.setValueAtTime(0.0001, now())
    // 4초에 걸쳐 천천히 들어온다. 갑자기 나면 깜짝 놀란다.
    master.gain.exponentialRampToValueAtTime(0.16, now() + 4)

    // 너무 밝으면 거슬린다. 높은 쪽을 깎아 멀리서 들리는 소리로 만든다.
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 900
    lp.Q.value = 0.6
    master.connect(lp).connect(ctx.destination)

    nodes = []
    DRONE.forEach((mult, i) => {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.type = i === 0 ? 'sine' : 'triangle'
      // 살짝씩 어긋나게 둔다. 정확히 맞으면 전자음처럼 들리고, 어긋나면 넘실거린다.
      osc.frequency.value = BASE * mult * (1 + (i - 1) * 0.0016)
      g.gain.value = [0.5, 0.26, 0.14][i]

      // 아주 느린 숨쉬기
      const lfo = ctx.createOscillator()
      const lfoGain = ctx.createGain()
      lfo.frequency.value = 0.045 + i * 0.017
      lfoGain.gain.value = g.gain.value * 0.45
      lfo.connect(lfoGain).connect(g.gain)

      osc.connect(g).connect(master)
      osc.start()
      lfo.start()
      nodes.push(osc, lfo)
    })

    running = true
    scheduleBell()
    return true
  } catch {
    // 소리가 안 나는 건 앱이 안 되는 것과는 다르다. 조용히 포기한다.
    running = false
    return false
  }
}

export function stop() {
  if (!running) return
  running = false
  if (bellTimer) { clearTimeout(bellTimer); bellTimer = null }
  try {
    // 1.2초에 걸쳐 사라지고 나서 정리한다. 뚝 끊으면 '틱' 하고 잡음이 난다.
    master.gain.cancelScheduledValues(now())
    master.gain.setValueAtTime(master.gain.value, now())
    master.gain.exponentialRampToValueAtTime(0.0001, now() + 1.2)
  } catch {}
  const dying = nodes
  nodes = []
  setTimeout(() => {
    dying.forEach((n) => { try { n.stop() } catch {} ; try { n.disconnect() } catch {} })
  }, 1400)
}

// 앱을 벗어나면 멈춘다. 다른 앱을 쓰는데 뒤에서 계속 울리면 안 된다.
// 돌아왔을 때 다시 켤지는 App 쪽이 설정값을 보고 정한다.
export function bindVisibility(onHidden) {
  const handler = () => { if (document.hidden && running) { stop(); onHidden && onHidden() } }
  document.addEventListener('visibilitychange', handler)
  return () => document.removeEventListener('visibilitychange', handler)
}
