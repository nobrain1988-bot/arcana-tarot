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
// 템포. 처음엔 화음 13초·악구 사이 4~9초로 아주 느리게 뒀는데 "너무 느리다" 는
// 지적을 받았다. 잔잔한 것과 멈춰 있는 것은 다르다 — 움직임이 느껴져야 한다.
const CHORD_HOLD = 9    // 한 화음이 머무는 시간(초)
const CHORD_FADE = 3.5  // 겹치면서 넘어가는 시간(초). 길수록 경계가 안 보인다

// 음량 균형. 처음엔 가락이 패드보다 16dB 작아서 완전히 묻혔다 —
// 스펙트럼을 재 보고 나서야 알았다. 패드는 '바닥'이고 가락이 들려야 할 쪽이다.
const PAD_PEAK = 0.19   // 화음 한 덩어리
const MEL_PEAK = 0.17   // 가락 종 한 번
const DEEP_PEAK = 0.11  // 아주 가끔 울리는 낮은 종
// 은하수 별 한 알. 이건 '효과음' 이지 주인공이 아니다 — 배경에 어우러져야 한다.
// 0.14 → 0.075 로 한 번 줄였는데도 앞으로 나온다는 지적을 받아 한 번 더 줄인다.
// 알이 22~30개씩 겹치므로 한 알을 조금만 낮춰도 합쳐진 소리는 많이 내려간다.
const SHIM_PEAK = 0.040

// 전체 음량. 0.5 로 뒀다가 "사운드를 높여 달라" 는 요청을 받았다.
// 뒤에 리미터를 물려 뒀으므로 올려도 찢어지지 않는다.
// 0.85 로 올려 놓고 재 보니 파형 최고치가 0.432 — 쓸 수 있는 크기의 절반도
// 안 쓰고 있었다. 리미터가 뒤를 받치고 있으므로 더 올린다. 이 값에서 최고치는
// 0.63 쯤이고, 별빛과 화음이 겹치는 드문 순간에만 리미터가 살짝 눌러 준다.
const MASTER = 1.25

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

// ── 별빛 (촤르르르) ─────────────────────────────────────────
// 하프를 손등으로 훑거나 윈드차임(마크트리)을 쓸어내릴 때 나는 소리.
// 높은 음을 40~80ms 간격으로 우르르 쏟아 놓으면 하나하나가 아니라 한 줄기로 들린다.
//
// 5음 음계(펜타토닉)만 쓴다. 이 다섯 음은 어떤 두 개를 동시에 울려도 부딪히지 않아서,
// 12개가 한꺼번에 울려도 탁해지지 않는다. 7음 음계로 하면 반음이 섞여 뭉개진다.
// A4(440Hz)부터 G7(3136Hz)까지 — 이 높이라야 '별빛'이지, 낮으면 그냥 실로폰이다.
const SPARKLE = [
  24, 27, 29, 31, 34,   // A4  C5  D5  E5  G5
  36, 39, 41, 43, 46,   // A5  C6  D6  E6  G6
  48, 51, 53, 55, 58,   // A6  C7  D7  E7  G7
]

let ctx = null
let master = null          // 전체 음량
let padBus = null          // 패드 — 멀리서 들리게 어둡게 깎는다
let melBus = null          // 가락 — 패드보다 밝게 둬야 묻히지 않는다
let shimBus = null         // 별빛 — 제일 밝게. 여기를 깎으면 '촤르르'가 '뚱뚱'해진다
let wet = null             // 리버브로 보내는 양
let shimWet = null         // 별빛은 훨씬 더 젖게 보낸다 — 꼬리가 길어야 흐르는 느낌이 난다
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

// ── 은하수 한 줄기 ──────────────────────────────────────────
// 처음엔 윈드차임(마크트리)으로 만들었다 — 40ms 간격으로 쓸어내리는 '촤라랑'.
// 그건 끊기는 소리라서 별이 쏟아지는 느낌이 아니었다.
// 은하수는 끊기지 않는다. 그래서 셋을 반대로 바꿨다.
//
//   빠르기 — 알 간격을 40ms 에서 150ms 안팎으로. 한 줄기가 0.5초가 아니라 4초쯤 흐른다.
//   맺힘   — 때리지 않고 부풀어 오르게 한다(0.05~0.12초). '땅' 이 아니라 '스…' 하고 맺힌다.
//   배음   — 쇠막대 배음(2.76·5.4)을 뺐다. 그게 금속성을 만든다.
//            옥타브와 12도만 아주 옅게 얹어 유리처럼 맑게 둔다.
//
// 꼬리가 3~6초라 알들이 서로 겹쳐 하나의 흐름이 된다 — 그게 '촤라라라라~' 다.
function star(freq, peak, attack, decay, pan, at) {
  const t = at
  const g = ctx.createGain()
  g.gain.setValueAtTime(0.000001, t)
  g.gain.exponentialRampToValueAtTime(peak, t + attack)
  g.gain.exponentialRampToValueAtTime(0.000001, t + decay)

  const parts = [[1, 1], [2, 0.10], [3, 0.04]]
  const oscs = parts.map(([ratio, amt]) => {
    const o = ctx.createOscillator()
    o.type = 'sine'
    o.frequency.value = freq * ratio
    const vg = ctx.createGain()
    vg.gain.value = amt
    o.connect(vg).connect(g)
    o.start(t)
    o.stop(t + decay + 0.4)
    return o
  })

  // 좌우로 흘려 보낸다. 한가운데서만 나면 '쏟아진다'가 아니라 '울린다'가 된다.
  let tail = g
  if (ctx.createStereoPanner) {
    const pn = ctx.createStereoPanner()
    pn.pan.value = Math.max(-1, Math.min(1, pan))
    g.connect(pn)
    tail = pn
  }
  tail.connect(shimBus)
  tail.connect(shimWet)
  oscs[0].onended = () => { try { g.disconnect() } catch {} }
}

// 한 줄기 = 별 22~30알이 120~240ms 간격으로 위에서 아래로 흘러내린다.
export function sparkle() {
  if (!running || !ctx || !shimBus) return
  const n = 22 + Math.floor(Math.random() * 9)
  const gap = 0.12 + Math.random() * 0.12
  const t0 = now() + 0.05
  const phase = Math.random() * Math.PI * 2

  // 위에서 시작해 아래로 흐른다. 곧게 내려오면 음계 연습처럼 들리므로
  // 다섯에 한 번쯤 거슬러 올라가게 둔다 — 그래야 '흐른다'가 된다.
  let ix = SPARKLE.length - 1 - Math.floor(Math.random() * 3)

  for (let i = 0; i < n; i++) {
    const semi = SPARKLE[Math.max(0, Math.min(SPARKLE.length - 1, ix))]
    const f = hz(semi)
    // 가운데가 가장 굵고 양끝이 스러진다 — 몰려왔다 빠져나가는 모양
    const shape = 0.35 + 0.65 * Math.sin((Math.PI * i) / (n - 1))
    // 높은 별일수록 빨리 사라진다. 낮은 쪽이 오래 남아 바닥을 만든다.
    const decay = Math.max(2.2, Math.min(6, 5.5 * Math.pow(620 / f, 0.28)))
    const attack = 0.05 + Math.random() * 0.07
    // 좌우로 천천히 쓸고 지나간다(알마다 튀지 않게 부드러운 곡선으로)
    const pan = 0.62 * Math.sin((i / (n - 1)) * Math.PI * 1.6 + phase)
    star(f, SHIM_PEAK * shape, attack, decay, pan, t0 + i * gap)

    ix += Math.random() < 0.8 ? -(1 + (Math.random() < 0.3 ? 1 : 0)) : 1
    // 바닥까지 내려오면 다시 위쪽 어딘가에서 이어 흐른다
    if (ix < 0) ix = Math.floor(SPARKLE.length * (0.55 + Math.random() * 0.45))
  }
}

function scheduleSparkle() {
  if (!running) return
  sparkle()
  // 16~34초에 한 번. 한 줄기가 4초쯤 흐르므로 앞보다 사이를 띄웠다.
  later(scheduleSparkle, 16000 + Math.random() * 18000)
}

// 악구 하나를 친다 — 네 음을 천천히, 그러고 나서 한참 쉰다.
// 쉬는 구간이 없으면 계속 딸랑거려서 귀가 쉬지 못한다.
function playPhrase() {
  if (!running) return
  const phrase = pick(PHRASES)
  const gap = 620 + Math.random() * 420    // 음과 음 사이
  phrase.forEach((step, i) => {
    // 가끔 한 음을 건너뛴다. 같은 조각이라도 매번 다르게 들린다.
    if (i > 0 && Math.random() < 0.15) return
    later(() => {
      if (!running) return
      const semi = SCALE[Math.min(step, SCALE.length - 1)]
      bell(hz(semi), MEL_PEAK, 3.2)
    }, i * gap)
  })
  // 악구가 끝나고 2~5초 쉰다
  const total = phrase.length * gap + 2000 + Math.random() * 3000
  later(playPhrase, total)
}

// 아주 가끔 바닥을 한 번 울린다. 20~45초에 한 번.
function playDeep() {
  if (!running) return
  bell(hz(pick([0, 7, 12])), DEEP_PEAK, 7)
  later(playDeep, 14000 + Math.random() * 16000)
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
  const open = async () => {
    if (!ctx || running) return
    try { await ctx.resume() } catch {}
    // 빗장이 풀린 뒤에야 비로소 연주를 짓는다.
    if (ctx.state === 'running') { disarm(); build() }
  }
  const evs = ['pointerdown', 'touchstart', 'mousedown', 'keydown']
  evs.forEach((e) => document.addEventListener(e, open, { passive: true }))
  unlock = () => evs.forEach((e) => document.removeEventListener(e, open))
}
function disarm() { if (unlock) { unlock(); unlock = null } }

// 실제로 소리를 짓고 연주를 시작한다. ctx 가 확실히 running 일 때만 부른다.
//
// 맨 앞의 빗장이 중요하다. 화면을 한 번 누르면 pointerdown 과 click 이 둘 다 온다.
// pointerdown 은 armUnlock 이 받아서 ctx.resume() 을 기다리고, 그 사이에 click 이
// enter() → start() 로 먼저 연주를 지어 버린다. 그러고 나서 기다리던 쪽이 깨어나
// 한 번 더 짓는다 — 같은 음악이 두 벌 겹쳐서 두 배로 시끄럽고 탁해진다.
// 한 번 지었으면 두 번 짓지 않는다.
function build() {
  if (running) return true
  try {
    master = ctx.createGain()
    // 3초에 걸쳐 들어온다. 갑자기 나면 깜짝 놀라고, 너무 길면 시작 화면이
    // 조용한 것처럼 느껴진다(실제로 그런 지적을 받았다).
    // 지수로 올리면 앞이 거의 안 들리다가 끝에서 훅 커진다 — 직선이 맞다.
    master.gain.setValueAtTime(0, now())
    master.gain.linearRampToValueAtTime(MASTER, now() + 3)

    // 마지막에 리미터를 문다. 음량을 올려 달라는 요청을 받았는데, 그냥 올리면
    // 별빛 12알 + 화음 + 종이 겹치는 순간 파형이 1.0 을 넘어 찢어진다(클리핑).
    // 리미터는 그 순간에만 눌러 주므로, 평소 음량은 키우면서 찢어짐은 막는다.
    // 폰 스피커는 여유가 적어서 이게 특히 중요하다.
    const limiter = ctx.createDynamicsCompressor()
    limiter.threshold.value = -3
    limiter.knee.value = 3
    limiter.ratio.value = 14
    limiter.attack.value = 0.003
    limiter.release.value = 0.22
    master.connect(limiter).connect(ctx.destination)

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

    // 별빛은 제일 밝게 통과시킨다. 3kHz 위를 깎으면 '촤르르'의 반짝임이 사라진다.
    shimBus = ctx.createBiquadFilter()
    shimBus.type = 'lowpass'
    shimBus.frequency.value = 9000
    shimBus.Q.value = 0.5
    shimBus.connect(master)
    shimWet = ctx.createGain()
    shimWet.gain.value = 0.5   // 종보다는 젖게. 0.8 은 꼬리가 너무 남아서 배경이 아니라 앞이었다
    shimWet.connect(rev)

    running = true
    chordIx = 0
    pad = null
    nextChord()
    later(playPhrase, 3500)      // 패드가 자리를 잡은 뒤에 가락이 들어온다
    later(playDeep, 9000)
    later(scheduleSparkle, 5000)   // 가락이 한 번 지나간 뒤에 첫 별빛
    return true
  } catch {
    // 소리가 안 나는 건 앱이 안 되는 것과는 다르다. 조용히 포기한다.
    running = false
    return false
  }
}

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
    if (ctx.state !== 'running') { try { await ctx.resume() } catch {} }

    if (ctx.state !== 'running') {
      // 아직 막혀 있다. **여기서 연주를 시작하면 안 된다.**
      //
      // 막혀 있는 동안 ctx.currentTime 은 멈춰 있는데 setTimeout 은 계속 돈다.
      // 그대로 두면 9초마다 만들어지는 화음이 전부 '같은 시각'에 예약되고,
      // 사용자가 화면을 눌러 빗장이 풀리는 순간 그게 한꺼번에 터진다.
      // 음악이 아니라 굉음이 된다 — 처음엔 이걸 몰라서 시작 화면에서
      // 소리가 이상하게 나거나 아예 안 나는 것처럼 들렸다.
      //
      // 그래서 짓지 않고 기다린다. 첫 터치가 오면 그때 build() 한다.
      armUnlock()
      return false
    }
    return build()
  } catch {
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
