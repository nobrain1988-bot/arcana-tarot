// 배경 음악 — 음원 파일을 쓰지 않고 그 자리에서 만들어 낸다(Web Audio).
//
// 왜 파일을 안 쓰는가:
//   1) 저작권. 카드 그림에서 겪은 것과 똑같은 함정이다. 인터넷의 '무료 BGM' 대부분은
//      출처 표기 의무나 상업 이용 제한이 붙어 있고, 겉보기로는 구분이 안 된다.
//      직접 만든 소리에는 그 위험이 0이다.
//   2) 용량. 3분짜리 음원은 3~5MB다. 이건 0KB다.
//   3) 끝이 없다. 루프가 도는 티가 안 난다 — 화음도 가락도 매번 다르게 지나간다.
//
// 처음에는 화음 하나를 깔고 종소리만 얹었는데, 화음이 끝까지 안 바뀌니
// "계속 같은 음"으로 들렸다. 음악은 '변하는 것'이 있어야 음악이다. 그래서 셋을 둔다.
//
//   패드   — 네 개의 화음이 천천히 돈다. 겹쳐서 넘어가므로 바뀌는 순간이 안 보인다.
//   가락   — 짧은 악구(4음)를 하나 고르고, 쉬었다가 또 하나. 종 소리로 친다.
//   낮은 종 — 아주 가끔 바닥을 한 번 울린다.
//
// 전부 A 단조 안에서만 움직인다. 어떤 음이 겹쳐도 어긋나지 않는다.

// ── 음정 ────────────────────────────────────────────────────
// 반음 수로 센다. A2(110Hz)가 0. 주파수를 직접 적으면 나중에 손댈 수가 없다.
const A2 = 110
const hz = (semi) => A2 * Math.pow(2, semi / 12)

// 화음 넷. Am → Fmaj7 → Dm7 → Em7.
// 넷 다 '풀리지 않는' 화음이라 끝나지 않고 계속 맴도는 느낌이 난다.
// C4·A3 가 여러 화음에 공통으로 들어 있어서 넘어갈 때 덜컥거리지 않는다.
const CHORDS = [
  [0, 7, 12, 15],   // Am    A2 E3 A3 C4
  [8, 12, 15, 19],  // Fmaj7 F3 A3 C4 E4
  [5, 8, 12, 15],   // Dm7   D3 F3 A3 C4
  [7, 10, 14, 19],  // Em7   E3 G3 B3 E4
]
const CHORD_HOLD = 13   // 한 화음이 머무는 시간(초)
const CHORD_FADE = 5    // 겹치면서 넘어가는 시간(초). 길수록 경계가 안 보인다

// 음량 균형. 처음엔 가락이 패드보다 16dB 작아서 완전히 묻혔다 —
// 스펙트럼을 재 보고 나서야 알았다. 패드는 '바닥'이고 가락이 들려야 할 쪽이다.
const PAD_PEAK = 0.19   // 화음 한 덩어리
const MEL_PEAK = 0.17   // 가락 종 한 번
const DEEP_PEAK = 0.11  // 아주 가끔 울리는 낮은 종

// A 자연단음계를 계단으로 펴 둔다. 가락은 이 계단의 '칸 번호'로만 적는다.
// 반음을 직접 적으면 손댈 때마다 음이 어긋난다.
const SCALE = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22, 24, 26, 27, 29, 31]

// 짧은 가락 조각들. 무작위로 흩뿌리면 '소리'지 '가락'이 아니다.
// 조각을 정해 두고 그걸 골라 써야 사람이 가락으로 듣는다.
// 칸 번호 11~18 = E4~E5. 이 높이라야 종소리가 또렷하게 노래한다.
const PHRASES = [
  [11, 13, 14, 13],
  [14, 13, 11, 9],
  [11, 14, 16, 14],
  [13, 14, 16, 18],
  [16, 14, 13, 11],
  [14, 16, 17, 16],
  [9, 11, 14, 13],
  [18, 16, 14, 11],
]

let ctx = null
let master = null          // 전체 음량
let padBus = null          // 패드 — 멀리서 들리게 어둡게 깎는다
let melBus = null          // 가락 — 패드보다 밝게 둬야 묻히지 않는다
let wet = null             // 리버브로 보내는 양
let pad = null             // 지금 울리고 있는 화음
let chordIx = 0
let timers = []
let running = false
let unlock = null          // 브라우저가 소리를 막았을 때 붙여 두는 '첫 터치' 감시

const now = () => (ctx ? ctx.currentTime : 0)
const pick = (a) => a[Math.floor(Math.random() * a.length)]
const later = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

// ── 화음을 겹쳐 넘기는 곡선 ─────────────────────────────────
// 처음엔 exponentialRamp 로 넣고 뺐는데, 그러면 13초마다 소리가 푹 꺼졌다 살아난다.
// 지수 곡선은 뺄 때는 처음부터 뚝 떨어지고(1초 만에 78% 감소), 넣을 때는 끝에 가서야
// 올라온다. 그래서 둘을 겹치면 가운데가 비는 구간이 생긴다 — 13초마다 숨이 끊긴다.
//
// sin/cos 를 쓰면 두 소리의 힘의 합이 어디서나 일정하다(등파워 교차). 소리에서
// 두 음원을 바꿔치기할 때 쓰는 표준 방법이다. 귀에는 아무 일도 안 일어난 것처럼 들린다.
const CURVE_N = 96
const CURVE_IN = new Float32Array(CURVE_N)
const CURVE_OUT = new Float32Array(CURVE_N)
for (let i = 0; i < CURVE_N; i++) {
  const x = (i / (CURVE_N - 1)) * (Math.PI / 2)
  CURVE_IN[i] = Math.sin(x)
  CURVE_OUT[i] = Math.cos(x)
}
const scaled = (curve, peak) => {
  const out = new Float32Array(CURVE_N)
  for (let i = 0; i < CURVE_N; i++) out[i] = Math.max(curve[i] * peak, 0.000001)
  return out
}

// ── 공간감 ──────────────────────────────────────────────────
// 잡음을 한 번 터뜨리고 천천히 사라지게 만든 것을 '방의 울림'으로 쓴다.
// 울림이 없으면 아무리 좋은 음을 써도 스피커에서 나는 소리로 들리지,
// 어떤 공간 안에 있는 소리로는 안 들린다. 신비로운 느낌의 절반이 여기서 나온다.
function makeReverb(seconds, decay) {
  const rate = ctx.sampleRate
  const len = Math.max(1, Math.floor(rate * seconds))
  const buf = ctx.createBuffer(2, len, rate)
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch)
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay)
    }
  }
  const c = ctx.createConvolver()
  c.buffer = buf
  return c
}

// ── 패드 ────────────────────────────────────────────────────
// 화음 하나를 통째로 만들어 켠다. 끌 때는 천천히 사라지게 두고 뒤에서 정리한다.
function ringChord(semis) {
  const t = now()
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.000001, t)
  g.gain.setValueCurveAtTime(scaled(CURVE_IN, PAD_PEAK), t, CHORD_FADE)
  g.connect(padBus)

  const parts = []
  semis.forEach((semi, i) => {
    const osc = ctx.createOscillator()
    osc.type = i === 0 ? 'sine' : 'triangle'
    // 살짝씩 어긋나게 둔다. 정확히 맞으면 전자음처럼 들리고, 어긋나면 넘실거린다.
    osc.frequency.value = hz(semi) * (1 + (i - 1.5) * 0.0013)

    const vg = ctx.createGain()
    vg.gain.value = [0.50, 0.30, 0.22, 0.16][i] ?? 0.16

    // 아주 느린 숨쉬기. 음량이 가만히 있으면 기계음으로 들린다.
    const lfo = ctx.createOscillator()
    const lg = ctx.createGain()
    lfo.frequency.value = 0.04 + i * 0.013
    lg.gain.value = vg.gain.value * 0.4
    lfo.connect(lg).connect(vg.gain)

    osc.connect(vg).connect(g)
    osc.start(t)
    lfo.start(t)
    parts.push(osc, lfo)
  })
  return { g, parts }
}

function fadeChord(c, seconds) {
  if (!c) return
  const t = now()
  try {
    c.g.gain.setValueCurveAtTime(scaled(CURVE_OUT, PAD_PEAK), t, seconds)
  } catch {
    // 앞의 곡선이 아직 안 끝난 드문 경우 — 직선으로라도 뺀다
    try {
      c.g.gain.cancelScheduledValues(t)
      c.g.gain.setValueAtTime(Math.max(c.g.gain.value, 0.000001), t)
      c.g.gain.linearRampToValueAtTime(0.000001, t + seconds)
    } catch {}
  }
  setTimeout(() => {
    c.parts.forEach((n) => { try { n.stop() } catch {} ; try { n.disconnect() } catch {} })
    try { c.g.disconnect() } catch {}
  }, seconds * 1000 + 300)
}

function nextChord() {
  if (!running) return
  const old = pad
  pad = ringChord(CHORDS[chordIx % CHORDS.length])
  chordIx += 1
  // 새 화음이 다 들어온 뒤가 아니라 들어오는 동안 겹쳐서 빼야 경계가 안 들린다.
  fadeChord(old, CHORD_FADE)
  later(nextChord, CHORD_HOLD * 1000)
}

// ── 종 ──────────────────────────────────────────────────────
// 가락도 낮은 종도 같은 소리틀을 쓴다. 높이와 길이만 다르다.
function bell(freq, peak, decay) {
  if (!ctx || !melBus) return
  const t = now()
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(peak, t + 0.03)   // 때리는 순간
  g.gain.exponentialRampToValueAtTime(0.0001, t + decay) // 길게 사라진다

  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(freq * 1.006, t)  // 때릴 때 살짝 높았다가 제자리로
  osc.frequency.exponentialRampToValueAtTime(freq, t + 0.3)
  osc.connect(g)

  // 한 옥타브 위를 아주 작게 얹는다. 순수한 사인파는 종이 아니라 신호음으로 들린다.
  const hi = ctx.createOscillator()
  const hg = ctx.createGain()
  hi.type = 'sine'
  hi.frequency.value = freq * 2.01
  hg.gain.setValueAtTime(0.0001, t)
  hg.gain.exponentialRampToValueAtTime(peak * 0.22, t + 0.02)
  hg.gain.exponentialRampToValueAtTime(0.0001, t + decay * 0.45)
  hi.connect(hg).connect(g)

  g.connect(melBus)
  g.connect(wet)
  osc.start(t); hi.start(t)
  osc.stop(t + decay + 0.4); hi.stop(t + decay + 0.4)
  osc.onended = () => { try { g.disconnect() } catch {} }
}

// 악구 하나를 친다 — 네 음을 천천히, 그러고 나서 한참 쉰다.
// 쉬는 구간이 없으면 계속 딸랑거려서 귀가 쉬지 못한다.
function playPhrase() {
  if (!running) return
  const phrase = pick(PHRASES)
  const gap = 1100 + Math.random() * 700   // 음과 음 사이
  phrase.forEach((step, i) => {
    // 가끔 한 음을 건너뛴다. 같은 조각이라도 매번 다르게 들린다.
    if (i > 0 && Math.random() < 0.15) return
    later(() => {
      if (!running) return
      const semi = SCALE[Math.min(step, SCALE.length - 1)]
      bell(hz(semi), MEL_PEAK, 4.2)
    }, i * gap)
  })
  // 악구가 끝나고 4~9초 쉰다
  const total = phrase.length * gap + 4000 + Math.random() * 5000
  later(playPhrase, total)
}

// 아주 가끔 바닥을 한 번 울린다. 20~45초에 한 번.
function playDeep() {
  if (!running) return
  bell(hz(pick([0, 7, 12])), DEEP_PEAK, 7)
  later(playDeep, 20000 + Math.random() * 25000)
}

export function isRunning() {
  return running
}

// 소리가 실제로 나고 있는지. running 은 '켜려고 했다'는 뜻이고,
// 브라우저가 막고 있으면 켜 놓고도 소리는 안 난다. 둘은 다르다.
export function isAudible() {
  return running && !!ctx && ctx.state === 'running'
}

// 브라우저는 사용자가 화면을 한 번 누르기 전에는 소리를 못 내게 막는다.
// 이건 웹 표준이라 우회할 수 없다. 대신 막혀 있으면 '첫 터치'를 기다렸다가
// 그때 자동으로 연다 — 사용자는 아무것도 몰라도 된다.
// (안드로이드 앱 안에서는 이 제한 자체를 꺼 두므로 처음부터 소리가 난다)
function armUnlock() {
  if (unlock || !ctx) return
  const open = () => {
    if (!ctx) return
    ctx.resume().catch(() => {})
    if (ctx.state === 'running') disarm()
  }
  const evs = ['pointerdown', 'touchstart', 'mousedown', 'keydown']
  evs.forEach((e) => document.addEventListener(e, open, { passive: true }))
  unlock = () => evs.forEach((e) => document.removeEventListener(e, open))
}
function disarm() { if (unlock) { unlock(); unlock = null } }

export async function start() {
  // 이미 켜져 있는데 브라우저가 막고 있는 경우 — 다시 열어만 본다
  if (running) {
    if (ctx && ctx.state !== 'running') { try { await ctx.resume() } catch {} }
    return isAudible()
  }
  try {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return false
    if (!ctx) ctx = new AC()
    if (ctx.state === 'suspended') { try { await ctx.resume() } catch {} }

    master = ctx.createGain()
    // 5초에 걸쳐 천천히 들어온다. 갑자기 나면 깜짝 놀란다.
    // 지수로 올리면 앞 4초가 거의 안 들리다가 끝에서 훅 커진다 — 직선이 맞다.
    master.gain.setValueAtTime(0, now())
    master.gain.linearRampToValueAtTime(0.5, now() + 5)
    master.connect(ctx.destination)

    const rev = makeReverb(3.2, 2.4)
    const revOut = ctx.createGain()
    revOut.gain.value = 0.85
    rev.connect(revOut).connect(master)
    wet = ctx.createGain()
    wet.gain.value = 0.42        // 종을 이만큼 울림으로 보낸다
    wet.connect(rev)

    // 패드는 어둡게 — 멀리서 들리는 소리가 된다
    padBus = ctx.createBiquadFilter()
    padBus.type = 'lowpass'
    padBus.frequency.value = 820
    padBus.Q.value = 0.6
    padBus.connect(master)
    const padWet = ctx.createGain()
    padWet.gain.value = 0.25
    padBus.connect(padWet).connect(rev)

    // 가락은 밝게 — 어둡게 깎으면 패드에 묻혀서 안 들린다
    melBus = ctx.createBiquadFilter()
    melBus.type = 'lowpass'
    melBus.frequency.value = 2600
    melBus.Q.value = 0.5
    melBus.connect(master)

    running = true
    chordIx = 0
    pad = null
    nextChord()
    later(playPhrase, 6000)      // 패드가 자리를 잡은 뒤에 가락이 들어온다
    later(playDeep, 14000)

    if (ctx.state !== 'running') armUnlock()
    return isAudible()
  } catch {
    // 소리가 안 나는 건 앱이 안 되는 것과는 다르다. 조용히 포기한다.
    running = false
    return false
  }
}

export function stop() {
  if (!running) return
  running = false
  disarm()
  timers.forEach(clearTimeout)
  timers = []
  try {
    // 1.5초에 걸쳐 사라지고 나서 정리한다. 뚝 끊으면 '틱' 하고 잡음이 난다.
    master.gain.cancelScheduledValues(now())
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now())
    master.gain.exponentialRampToValueAtTime(0.0001, now() + 1.5)
  } catch {}
  const dying = pad
  pad = null
  setTimeout(() => {
    if (dying) dying.parts.forEach((n) => { try { n.stop() } catch {} ; try { n.disconnect() } catch {} })
    try { master.disconnect() } catch {}
  }, 1800)
}

// 앱을 벗어나면 멈춘다. 다른 앱을 쓰는데 뒤에서 계속 울리면 안 된다.
// 돌아왔을 때 다시 켤지는 App 쪽이 설정값을 보고 정한다.
export function bindVisibility(onHidden) {
  const handler = () => { if (document.hidden && running) { stop(); onHidden && onHidden() } }
  document.addEventListener('visibilitychange', handler)
  return () => document.removeEventListener('visibilitychange', handler)
}
