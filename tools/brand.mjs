// 아르카나의 상징 — 아이콘·스플래시·그래픽 이미지가 모두 여기서 그림을 가져간다.
//
// 왜 한곳에 모으는가: 전에는 아이콘 생성기와 그래픽 이미지 생성기가 각자 그림을
// 그렸다. 색을 한 번 바꾸면 두 군데를 고쳐야 하고, 한쪽만 고치면 스토어와 앱이
// 따로 논다. 그림은 여기 하나뿐이고 나머지는 크기만 정한다.
//
// 그림의 뜻: 타로의 네 수트는 원래 4원소다 — 완드=불, 컵=물, 소드=공기,
// 펜타클=흙. 부채꼴로 편 다섯 장 중 바깥 네 장이 그 색을 하나씩 갖고,
// 가운데 금색 한 장이 메이저 아르카나 자리다. 색이 장식이 아니라 뜻이다.
//
// 크기 규칙(이게 핵심): 1024 로 그려서 48 로 줄이면 21배가 줄어든다.
//   · 48px 에서 1px 로 보이려면 1024 에서 21px 이어야 한다 → 선을 그만큼 굵게.
//   · 별이 48px 에서 읽히려면 지름 13px 이상 → 1024 에서 280px 이상.
// 처음에 선을 카드폭의 3% 로 잡았다가 48px 에서 0.4px 이 되어 전부 뭉갰다.
// 지금은 5~6.5% 다. 여기를 건드릴 때는 반드시 48px 로 줄여서 눈으로 확인할 것.

export const C = {
  bgDeep: '#0b0918',   // 앱 배경 (capacitor.config.json 의 backgroundColor 와 같아야 한다)
  bgLift: '#2a1f57',
  goldHi: '#f0d495',
  goldMid: '#d8b26b',
  goldLo: '#b8904c',
}

// 카드 속색. [위, 아래, 테두리색] — 테두리는 그 색의 밝은 쪽이라 카드가 또렷해진다.
export const TINT = {
  gold:  ['#2b2059', '#160f31', 'url(#gold)'],
  fire:  ['#7a2420', '#2e0d10', '#e08457'],   // 완드 — 불
  water: ['#17537d', '#071e33', '#5fb6d9'],   // 컵   — 물
  air:   ['#3b4a7d', '#121733', '#9fb0e0'],   // 소드 — 공기
  earth: ['#1f6340', '#07210f', '#6cc48c'],   // 펜타클 — 흙
}

const tintDefs = Object.entries(TINT)
  .map(([k, [a, b]]) => `
  <linearGradient id="t-${k}" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="${a}"/><stop offset="100%" stop-color="${b}"/>
  </linearGradient>`)
  .join('')

export const defs = `
  <radialGradient id="bg" cx="50%" cy="42%" r="75%">
    <stop offset="0%"   stop-color="#3a2a6e"/>
    <stop offset="45%"  stop-color="${C.bgLift}"/>
    <stop offset="100%" stop-color="${C.bgDeep}"/>
  </radialGradient>
  <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="${C.goldHi}"/>
    <stop offset="50%"  stop-color="${C.goldMid}"/>
    <stop offset="100%" stop-color="${C.goldLo}"/>
  </linearGradient>
  <!-- 별을 금색 하나로 채우면 가운데가 죽는다. 위는 밝은 금, 아래는 장미금 — 입체가 생긴다 -->
  <linearGradient id="starFill" x1="20%" y1="0%" x2="80%" y2="100%">
    <stop offset="0%"   stop-color="#ffe9b8"/>
    <stop offset="45%"  stop-color="${C.goldMid}"/>
    <stop offset="100%" stop-color="#c97f63"/>
  </linearGradient>
  <radialGradient id="glow">
    <stop offset="0%"   stop-color="#ffe9b8" stop-opacity="0.6"/>
    <stop offset="45%"  stop-color="${C.goldMid}" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="${C.goldMid}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="au2" cx="80%" cy="30%" r="52%">
    <stop offset="0%" stop-color="#8e2a7a" stop-opacity="0.8"/><stop offset="100%" stop-color="#8e2a7a" stop-opacity="0"/>
  </radialGradient>
  ${tintDefs}`

export function starPath(cx, cy, points, rOuter, rInner) {
  const step = Math.PI / points
  const d = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? rOuter : rInner
    const a = -Math.PI / 2 + i * step
    d.push(`${i === 0 ? 'M' : 'L'} ${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return d.join(' ') + ' Z'
}

// 방사광 — 별 뒤에서 뻗는 가는 빛살. 작은 크기에서는 금빛 띠로 뭉치는데 그게 노린 효과다.
export function rays(cx, cy, n, rIn, rOut, halfDeg, offsetDeg = 0) {
  const w = (halfDeg * Math.PI) / 180
  const out = []
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + ((offsetDeg + (i * 360) / n) * Math.PI) / 180
    const p = (r, ang) => `${(cx + r * Math.cos(ang)).toFixed(2)} ${(cy + r * Math.sin(ang)).toFixed(2)}`
    out.push(`M ${p(rIn, a - w)} L ${p(rOut, a)} L ${p(rIn, a + w)} Z`)
  }
  return out.join(' ')
}

export const sparkle = (cx, cy, r, fill = 'url(#gold)') =>
  `<path d="${starPath(cx, cy, 4, r, r * 0.22)}" fill="${fill}"/>`

// 카드 한 장.
//   pivot  — 회전 중심. 부채꼴은 카드 **아래쪽**을 축으로 돌려야 손에 쥔 모양이 된다.
//            카드 한가운데를 축으로 돌리면 아래가 벌어져 어색하다.
//   ornate — 이중 테 + 네 모서리 마름모. 고전 타로 카드 테두리의 느낌.
export function card(cx, cy, w, h, rot, opt = {}) {
  const { face = false, stroke = 0.065, pivot = null, ornate = false, rayN = 0, tint = 'gold' } = opt
  const edge = TINT[tint][2]
  const x = cx - w / 2
  const y = cy - h / 2
  const r = w * 0.085
  const sw = w * stroke
  const [px, py] = pivot || [cx, cy]

  let frame = ''
  if (ornate) {
    const i = sw * 1.9
    frame = `<rect x="${x + i}" y="${y + i}" width="${w - i * 2}" height="${h - i * 2}"
            rx="${r * 0.62}" fill="none" stroke="${edge}" stroke-width="${sw * 0.42}" opacity="0.9"/>`
    const d = sw * 1.05
    for (const [mx, my] of [[x + i, y + i], [x + w - i, y + i], [x + i, y + h - i], [x + w - i, y + h - i]]) {
      frame += `<path d="M ${mx} ${my - d} L ${mx + d} ${my} L ${mx} ${my + d} L ${mx - d} ${my} Z" fill="${edge}"/>`
    }
  }

  let inner = ''
  if (face) {
    const ray = rayN
      ? `<path d="${rays(cx, cy, rayN, w * 0.30, w * 0.62, 1.5, 360 / rayN / 2)}" fill="url(#gold)" opacity="0.75"/>`
      : ''
    inner = `
      <circle cx="${cx}" cy="${cy}" r="${w * 0.72}" fill="url(#glow)"/>
      ${ray}
      <circle cx="${cx}" cy="${cy}" r="${w * 0.50}" fill="none" stroke="url(#gold)" stroke-width="${sw * 0.38}" opacity="0.55"/>
      <path d="${starPath(cx, cy, 8, w * 0.40, w * 0.155)}" fill="url(#starFill)"/>
      <circle cx="${cx}" cy="${cy}" r="${w * 0.068}" fill="${C.bgDeep}" opacity="0.95"/>`
  }

  return `<g transform="rotate(${rot} ${px} ${py})">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="url(#t-${tint})"
          stroke="${edge}" stroke-width="${sw}"/>
    ${frame}${inner}
  </g>`
}

// ── 상징: 4원소 부채꼴 다섯 장 ───────────────────────────
// scale 은 가운데를 기준으로 전체를 줄인다. 적응형 아이콘 앞면처럼
// 안드로이드가 둥글게 잘라내는 자리에서는 0.6 안팎으로 줄여야 살아남는다.
export function mark(S, scale = 1) {
  const c = S / 2
  const w = S * 0.295
  const h = w * 1.62
  const cy = c - h * 0.01
  const piv = [c, cy + h * 0.8]
  const back = (rot, tint) => card(c, cy, w, h, rot, { tint, stroke: 0.052, pivot: piv, ornate: true })
  const body = `
    ${sparkle(S * 0.115, S * 0.175, S * 0.034)}
    ${sparkle(S * 0.895, S * 0.205, S * 0.027)}
    ${back(-34, 'fire')} ${back(34, 'earth')}
    ${back(-17, 'water')} ${back(17, 'air')}
    ${card(c, cy, w, h, 0, { face: true, ornate: true, rayN: 16 })}`
  return scale === 1 ? body : `<g transform="translate(${c} ${c}) scale(${scale}) translate(${-c} ${-c})">${body}</g>`
}

export const svgIcon = (S, scale = 1) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <defs>${defs}</defs>
  <rect width="${S}" height="${S}" fill="url(#bg)"/>
  ${mark(S, scale)}
</svg>`

// 배경만 / 문양만 — 안드로이드 적응형 아이콘은 두 장을 따로 받아 겹쳐 움직인다
export const svgBackground = (S) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <defs>${defs}</defs><rect width="${S}" height="${S}" fill="url(#bg)"/>
</svg>`

export const svgForeground = (S, scale) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <defs>${defs}</defs>${mark(S, scale)}
</svg>`

// ── 플레이스토어 그래픽 이미지 1024 × 500 ────────────────
// 구글이 기기에 따라 **좌우를 잘라낸다.** 글자는 가운데 800px(x 112~912) 안에 둬야 한다.
// 처음에 오른쪽 끝을 930까지 뽑았다가 잘릴 뻔했다.
export const FW = 1024
export const FH = 500
export const SAFE = [112, 912]

export function svgFeature({ guides = false } = {}) {
  const tx = 488                      // 글자 왼쪽 시작 — 안전선 안쪽
  const guide = guides
    ? `<rect x="${SAFE[0]}" y="0" width="${SAFE[1] - SAFE[0]}" height="${FH}" fill="none" stroke="#0f0" stroke-width="2" stroke-dasharray="8 8"/>`
    : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${FW}" height="${FH}" viewBox="0 0 ${FW} ${FH}">
  <defs>${defs}
    <radialGradient id="fbg" cx="26%" cy="45%" r="90%">
      <stop offset="0%" stop-color="#3a2a6e"/><stop offset="55%" stop-color="${C.bgLift}"/><stop offset="100%" stop-color="${C.bgDeep}"/>
    </radialGradient>
  </defs>
  <rect width="${FW}" height="${FH}" fill="url(#fbg)"/>
  <rect width="${FW}" height="${FH}" fill="url(#au2)" opacity="0.45"/>
  ${sparkle(FW * 0.47, FH * 0.15, 12)}
  ${sparkle(FW * 0.86, FH * 0.78, 10)}
  ${sparkle(FW * 0.58, FH * 0.88, 8)}
  <g transform="translate(${FW * 0.293} ${FH * 0.5}) scale(0.40) translate(-512 -512)">
    ${mark(1024)}
  </g>
  <text x="${tx}" y="${FH * 0.42}" font-family="Georgia, 'Times New Roman', serif" font-size="78"
        font-weight="700" fill="url(#gold)" letter-spacing="6">ARCANA</text>
  <text x="${tx + 3}" y="${FH * 0.585}" font-family="Georgia, 'Times New Roman', serif" font-size="33"
        fill="#d9d2f0" letter-spacing="2">Daily Tarot Reading</text>
  <text x="${tx + 4}" y="${FH * 0.725}" font-family="Georgia, 'Times New Roman', serif" font-size="22"
        fill="#9a92bd" letter-spacing="1.2">78 cards · 9 languages · no account</text>
  ${guide}
</svg>`
}
