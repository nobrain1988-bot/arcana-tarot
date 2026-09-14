// 타로 카드 그림.
//
// 앞면은 라이더-웨이트(1909) 원본 사진을 쓴다. public/cards/<id>.webp
// 파멜라 콜먼 스미스 사후 70년이 지나 퍼블릭 도메인이며, 위키미디어 공용에서
// 라이선스 근거와 함께 받았다(tools/fetch-card-art.mjs, public/cards/CREDITS.txt).
//
// 처음에는 78장을 전부 SVG 로 직접 그렸다. 저작권 위험 0, 용량 수십 KB 라는 장점이
// 있었지만 — 타로를 아는 사람이 보면 실제 덱이 아니라서 바로 이탈한다.
// 사람들이 기대하는 그림이 있는 분야에서는 그 그림이어야 한다.
//
// 그 SVG 는 CardArtSvg 로 남겨 두고, 사진을 못 불러왔을 때 대신 나온다.
// 카드가 아예 안 보이는 것보다는 낫다.
//
// SVG 좌표계는 100 × 160. 사진은 576 × 966(비율 0.596)이라 미세하게 다른데,
// 카드 테두리(.card-shell)가 사진 비율을 기준으로 잡고 있어 대체 시 위아래가
// 아주 조금 남는다. 드물게 일어나는 대체 상황이라 이대로 둔다.

import { useState } from 'react'

const W = 100
const H = 160
const CX = W / 2   // 가로 중앙 50
const CY = 78      // 그림 중심 (이름·번호 자리를 빼고 살짝 위)

// 공통 스타일 — 선은 금색, 채움은 거의 안 쓴다(미니멀)
const S = { stroke: 'var(--ink)', strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
const S_THIN = { ...S, strokeWidth: 1 }
const FILL = { fill: 'var(--ink)', stroke: 'none' }

// ── 자주 쓰는 조각들 ───────────────────────────────────────────
const Circle = (p) => <circle {...S} {...p} />
const Line = (p) => <line {...S} {...p} />
const Path = (p) => <path {...S} {...p} />

// n각 별 (꼭짓점 n개). 8각별=Star 카드, 5각별=펜타클
function star(cx, cy, r, points, innerRatio = 0.4) {
  const pts = []
  for (let i = 0; i < points * 2; i++) {
    const rad = (Math.PI * i) / points - Math.PI / 2
    const rr = i % 2 === 0 ? r : r * innerRatio
    pts.push(`${(cx + Math.cos(rad) * rr).toFixed(2)},${(cy + Math.sin(rad) * rr).toFixed(2)}`)
  }
  return pts.join(' ')
}

// 오각성(펜타클) — 한 획으로 이어 그리는 별
function pentagram(cx, cy, r) {
  const p = []
  for (let i = 0; i < 5; i++) {
    const rad = (Math.PI * 2 * i) / 5 - Math.PI / 2
    p.push([cx + Math.cos(rad) * r, cy + Math.sin(rad) * r])
  }
  const o = [0, 2, 4, 1, 3, 0]
  return o.map((i, k) => `${k === 0 ? 'M' : 'L'}${p[i][0].toFixed(2)},${p[i][1].toFixed(2)}`).join(' ')
}

// 초승달
const crescent = (cx, cy, r) =>
  `M${cx},${cy - r} A${r},${r} 0 1,0 ${cx},${cy + r} A${r * 0.78},${r * 0.78} 0 1,1 ${cx},${cy - r}Z`

// 무한대 기호 (Magician / Strength)
const infinity = (cx, cy, w = 9, h = 5) =>
  `M${cx},${cy} C${cx - w},${cy - h * 2} ${cx - w * 1.6},${cy + h * 2} ${cx},${cy} C${cx + w},${cy - h * 2} ${cx + w * 1.6},${cy + h * 2} ${cx},${cy}Z`

// 두 기둥 (High Priestess / Moon 등)
const Pillars = ({ y = CY, h = 34, gap = 30 }) => (
  <>
    <Line x1={CX - gap} y1={y - h / 2} x2={CX - gap} y2={y + h / 2} />
    <Line x1={CX + gap} y1={y - h / 2} x2={CX + gap} y2={y + h / 2} />
    <Line x1={CX - gap - 4} y1={y - h / 2} x2={CX - gap + 4} y2={y - h / 2} />
    <Line x1={CX + gap - 4} y1={y - h / 2} x2={CX + gap + 4} y2={y - h / 2} />
  </>
)

// ── 메이저 아르카나 22장 그림 ─────────────────────────────────
const MAJOR_ART = {
  // 0 The Fool — 절벽 끝에 선 원(자기 자신)과 끊어진 땅
  0: () => (<>
    <Circle cx={CX} cy={CY - 8} r={11} />
    <Circle cx={CX} cy={CY - 8} r={3} {...FILL} />
    <Path d={`M20,${CY + 16} L${CX + 4},${CY + 16}`} />
    <Path d={`M${CX + 14},${CY + 16} L80,${CY + 16}`} {...S_THIN} strokeDasharray="3 4" />
    <Path d={`M${CX - 16},${CY + 22} L${CX - 16},${CY + 34}`} {...S_THIN} />
  </>),
  // 1 The Magician — 무한대 아래 수직 지팡이, 위아래를 잇는다
  1: () => (<>
    <Path d={infinity(CX, CY - 20)} />
    <Line x1={CX} y1={CY - 8} x2={CX} y2={CY + 26} />
    <Line x1={CX - 16} y1={CY + 8} x2={CX + 16} y2={CY + 8} />
    <Circle cx={CX} cy={CY + 30} r={3} {...FILL} />
  </>),
  // 2 The High Priestess — 두 기둥 사이의 초승달
  2: () => (<>
    <Pillars />
    <Path d={crescent(CX, CY - 2, 12)} />
    <Circle cx={CX} cy={CY + 22} r={2.5} {...FILL} />
  </>),
  // 3 The Empress — 금성(비너스) 기호 + 자라는 곡선
  3: () => (<>
    <Circle cx={CX} cy={CY - 10} r={12} />
    <Line x1={CX} y1={CY + 2} x2={CX} y2={CY + 26} />
    <Line x1={CX - 8} y1={CY + 16} x2={CX + 8} y2={CY + 16} />
    <Path d={`M${CX - 22},${CY + 26} Q${CX - 22},${CY + 4} ${CX - 13},${CY - 2}`} {...S_THIN} />
    <Path d={`M${CX + 22},${CY + 26} Q${CX + 22},${CY + 4} ${CX + 13},${CY - 2}`} {...S_THIN} />
  </>),
  // 4 The Emperor — 각진 옥좌와 숫양 뿔
  4: () => (<>
    <Path d={`M${CX - 18},${CY + 26} L${CX - 18},${CY - 8} L${CX + 18},${CY - 8} L${CX + 18},${CY + 26}`} />
    <Path d={`M${CX - 18},${CY - 8} Q${CX - 24},${CY - 20} ${CX - 12},${CY - 22}`} />
    <Path d={`M${CX + 18},${CY - 8} Q${CX + 24},${CY - 20} ${CX + 12},${CY - 22}`} />
    <Line x1={CX - 18} y1={CY + 8} x2={CX + 18} y2={CY + 8} />
  </>),
  // 5 The Hierophant — 삼중 십자 (제도·전통)
  5: () => (<>
    <Line x1={CX} y1={CY - 26} x2={CX} y2={CY + 28} />
    <Line x1={CX - 8} y1={CY - 18} x2={CX + 8} y2={CY - 18} />
    <Line x1={CX - 13} y1={CY - 6} x2={CX + 13} y2={CY - 6} />
    <Line x1={CX - 18} y1={CY + 6} x2={CX + 18} y2={CY + 6} />
    <Circle cx={CX} cy={CY - 30} r={3} />
  </>),
  // 6 The Lovers — 겹친 두 원(베시카) 위의 태양
  6: () => (<>
    <Circle cx={CX - 9} cy={CY + 6} r={14} />
    <Circle cx={CX + 9} cy={CY + 6} r={14} />
    <Circle cx={CX} cy={CY - 22} r={6} {...FILL} />
  </>),
  // 7 The Chariot — 바퀴 둘과 차체, 위에 별
  7: () => (<>
    <Path d={`M${CX - 20},${CY + 6} L${CX - 20},${CY - 10} L${CX + 20},${CY - 10} L${CX + 20},${CY + 6}Z`} />
    <Circle cx={CX - 14} cy={CY + 18} r={9} />
    <Circle cx={CX + 14} cy={CY + 18} r={9} />
    <polygon points={star(CX, CY - 22, 6, 4, 0.35)} {...FILL} />
  </>),
  // 8 Strength — 무한대 아래 사자(둥근 아치)
  8: () => (<>
    <Path d={infinity(CX, CY - 22)} />
    <Path d={`M${CX - 16},${CY + 24} Q${CX - 16},${CY - 6} ${CX},${CY - 6} Q${CX + 16},${CY - 6} ${CX + 16},${CY + 24}`} />
    <Circle cx={CX - 6} cy={CY + 4} r={1.8} {...FILL} />
    <Circle cx={CX + 6} cy={CY + 4} r={1.8} {...FILL} />
    <Path d={`M${CX - 5},${CY + 13} Q${CX},${CY + 17} ${CX + 5},${CY + 13}`} {...S_THIN} />
  </>),
  // 9 The Hermit — 지팡이와 육각별 등불
  9: () => (<>
    <Line x1={CX + 16} y1={CY - 24} x2={CX + 16} y2={CY + 28} />
    <Circle cx={CX - 10} cy={CY - 4} r={12} />
    <polygon points={star(CX - 10, CY - 4, 6.5, 6, 0.55)} {...S_THIN} />
    <Line x1={CX - 10} y1={CY - 16} x2={CX - 10} y2={CY - 22} {...S_THIN} />
    <Line x1={CX - 10} y1={CY - 22} x2={CX + 16} y2={CY - 22} {...S_THIN} />
  </>),
  // 10 Wheel of Fortune — 살 8개짜리 바퀴
  10: () => (<>
    <Circle cx={CX} cy={CY} r={22} />
    <Circle cx={CX} cy={CY} r={7} />
    {[0, 45, 90, 135].map((a) => {
      const r = (a * Math.PI) / 180
      return <Line key={a} x1={CX - Math.cos(r) * 22} y1={CY - Math.sin(r) * 22}
        x2={CX + Math.cos(r) * 22} y2={CY + Math.sin(r) * 22} {...S_THIN} />
    })}
  </>),
  // 11 Justice — 저울
  11: () => (<>
    <Line x1={CX} y1={CY - 24} x2={CX} y2={CY + 26} />
    <Line x1={CX - 24} y1={CY - 14} x2={CX + 24} y2={CY - 14} />
    <Path d={`M${CX - 32},${CY - 4} L${CX - 16},${CY - 4} L${CX - 24},${CY + 8}Z`} />
    <Path d={`M${CX + 16},${CY - 4} L${CX + 32},${CY - 4} L${CX + 24},${CY + 8}Z`} />
    <Line x1={CX - 24} y1={CY - 14} x2={CX - 24} y2={CY - 4} {...S_THIN} />
    <Line x1={CX + 24} y1={CY - 14} x2={CX + 24} y2={CY - 4} {...S_THIN} />
  </>),
  // 12 The Hanged Man — 거꾸로 매달린 삼각형
  12: () => (<>
    <Line x1={CX - 24} y1={CY - 26} x2={CX + 24} y2={CY - 26} />
    <Line x1={CX} y1={CY - 26} x2={CX} y2={CY - 10} />
    <Path d={`M${CX - 16},${CY - 10} L${CX + 16},${CY - 10} L${CX},${CY + 20}Z`} />
    <Circle cx={CX} cy={CY + 20} r={5} />
  </>),
  // 13 Death — 낫
  13: () => (<>
    <Line x1={CX - 12} y1={CY + 28} x2={CX + 8} y2={CY - 24} />
    <Path d={`M${CX + 8},${CY - 24} Q${CX - 20},${CY - 20} ${CX - 22},${CY + 2}`} />
    <Circle cx={CX + 14} cy={CY + 12} r={3} {...FILL} />
    <Circle cx={CX + 18} cy={CY + 22} r={2} {...FILL} />
  </>),
  // 14 Temperance — 위아래 삼각형(불/물)이 겹친 연금술 기호
  14: () => (<>
    <Path d={`M${CX},${CY - 26} L${CX + 20},${CY + 6} L${CX - 20},${CY + 6}Z`} />
    <Path d={`M${CX},${CY + 28} L${CX + 20},${CY - 4} L${CX - 20},${CY - 4}Z`} {...S_THIN} />
    <Circle cx={CX} cy={CY + 1} r={3} {...FILL} />
  </>),
  // 15 The Devil — 역오각성
  15: () => (<>
    <Circle cx={CX} cy={CY} r={23} {...S_THIN} />
    <g transform={`rotate(180 ${CX} ${CY})`}><Path d={pentagram(CX, CY, 19)} /></g>
    <Line x1={CX - 12} y1={CY + 28} x2={CX - 12} y2={CY + 34} {...S_THIN} />
    <Line x1={CX + 12} y1={CY + 28} x2={CX + 12} y2={CY + 34} {...S_THIN} />
  </>),
  // 16 The Tower — 벼락 맞는 탑
  16: () => (<>
    <Path d={`M${CX - 13},${CY + 30} L${CX - 10},${CY - 12} L${CX + 10},${CY - 12} L${CX + 13},${CY + 30}`} />
    <Path d={`M${CX - 15},${CY - 12} L${CX + 15},${CY - 12} L${CX + 11},${CY - 20} L${CX - 11},${CY - 20}Z`} />
    <Path d={`M${CX + 6},${CY - 30} L${CX - 4},${CY - 14} L${CX + 3},${CY - 14} L${CX - 7},${CY + 4}`} strokeWidth={2.2} />
    <Line x1={CX - 2} y1={CY + 2} x2={CX - 2} y2={CY + 14} {...S_THIN} />
  </>),
  // 17 The Star — 큰 팔각별 + 작은 별들
  17: () => (<>
    <polygon points={star(CX, CY - 4, 19, 8, 0.42)} />
    <polygon points={star(CX - 26, CY - 20, 5, 5, 0.4)} {...S_THIN} />
    <polygon points={star(CX + 26, CY - 16, 4, 5, 0.4)} {...S_THIN} />
    <Path d={`M${CX - 20},${CY + 26} Q${CX},${CY + 20} ${CX + 20},${CY + 26}`} {...S_THIN} />
  </>),
  // 18 The Moon — 초승달 + 두 탑
  18: () => (<>
    <Path d={crescent(CX, CY - 6, 15)} />
    <Path d={`M${CX - 30},${CY + 28} L${CX - 30},${CY + 8} L${CX - 24},${CY + 2} L${CX - 18},${CY + 8} L${CX - 18},${CY + 28}`} {...S_THIN} />
    <Path d={`M${CX + 18},${CY + 28} L${CX + 18},${CY + 8} L${CX + 24},${CY + 2} L${CX + 30},${CY + 8} L${CX + 30},${CY + 28}`} {...S_THIN} />
    <Circle cx={CX} cy={CY + 22} r={2} {...FILL} />
  </>),
  // 19 The Sun — 태양과 광선
  19: () => (<>
    <Circle cx={CX} cy={CY} r={14} />
    {Array.from({ length: 12 }, (_, i) => {
      const r = (Math.PI * 2 * i) / 12
      return <Line key={i} x1={CX + Math.cos(r) * 19} y1={CY + Math.sin(r) * 19}
        x2={CX + Math.cos(r) * 26} y2={CY + Math.sin(r) * 26} {...S_THIN} />
    })}
  </>),
  // 20 Judgement — 나팔과 소리
  20: () => (<>
    <Path d={`M${CX - 26},${CY - 6} L${CX + 10},${CY - 14} L${CX + 10},${CY + 6} L${CX - 26},${CY - 2}Z`} />
    <Path d={`M${CX + 16},${CY - 20} Q${CX + 24},${CY - 4} ${CX + 16},${CY + 12}`} {...S_THIN} />
    <Path d={`M${CX + 24},${CY - 26} Q${CX + 34},${CY - 4} ${CX + 24},${CY + 18}`} {...S_THIN} />
    <Line x1={CX - 20} y1={CY + 6} x2={CX - 20} y2={CY + 26} {...S_THIN} />
  </>),
  // 21 The World — 월계관 타원 + 네 모서리
  21: () => (<>
    <ellipse {...S} cx={CX} cy={CY} rx={20} ry={28} />
    <Circle cx={CX} cy={CY} r={7} {...S_THIN} />
    {[[-30, -28], [30, -28], [-30, 28], [30, 28]].map(([dx, dy], i) => (
      <polygon key={i} points={star(CX + dx, CY + dy, 4.5, 4, 0.35)} {...S_THIN} />
    ))}
  </>),
}

// ── 수트 기호 (마이너 아르카나) ────────────────────────────────
function suitGlyph(suit, x, y, s = 1) {
  const k = { transform: `translate(${x} ${y}) scale(${s})` }
  if (suit === 'wands') return (
    <g key={`${x}-${y}`} {...k}>
      <Line x1={0} y1={-9} x2={0} y2={9} />
      <Path d="M0,-4 Q-5,-7 -5,-11" {...S_THIN} />
      <Path d="M0,-1 Q5,-4 5,-8" {...S_THIN} />
    </g>
  )
  if (suit === 'cups') return (
    <g key={`${x}-${y}`} {...k}>
      <Path d="M-6,-8 L6,-8 Q6,2 0,2 Q-6,2 -6,-8Z" />
      <Line x1={0} y1={2} x2={0} y2={7} />
      <Line x1={-4.5} y1={9} x2={4.5} y2={9} />
    </g>
  )
  if (suit === 'swords') return (
    <g key={`${x}-${y}`} {...k}>
      <Line x1={0} y1={-10} x2={0} y2={7} />
      <Line x1={-5} y1={4} x2={5} y2={4} />
      <Line x1={0} y1={7} x2={0} y2={10} {...S_THIN} />
    </g>
  )
  return (
    <g key={`${x}-${y}`} {...k}>
      <Circle cx={0} cy={0} r={9} />
      <Path d={pentagram(0, 0, 6.5)} {...S_THIN} />
    </g>
  )
}

// 숫자 카드(2~10)의 기호 배치 좌표 — 실제 카드처럼 좌우 대칭으로 놓는다
const PIP_LAYOUT = {
  2:  [[0, -20], [0, 20]],
  3:  [[0, -24], [0, 0], [0, 24]],
  4:  [[-16, -18], [16, -18], [-16, 18], [16, 18]],
  5:  [[-16, -20], [16, -20], [0, 0], [-16, 20], [16, 20]],
  6:  [[-16, -22], [16, -22], [-16, 0], [16, 0], [-16, 22], [16, 22]],
  7:  [[-16, -24], [16, -24], [-16, -2], [16, -2], [0, 11], [-16, 24], [16, 24]],
  8:  [[-16, -26], [16, -26], [-16, -9], [16, -9], [-16, 9], [16, 9], [-16, 26], [16, 26]],
  9:  [[-17, -26], [0, -26], [17, -26], [-17, 0], [0, 0], [17, 0], [-17, 26], [0, 26], [17, 26]],
  10: [[-17, -28], [0, -28], [17, -28], [-17, -9], [17, -9], [-17, 9], [17, 9], [-17, 28], [0, 28], [17, 28]],
}

// 코트 카드 왕관/투구
function courtCrown(rank) {
  const y = CY - 26
  if (rank === 'Page')   return <Path d={`M${CX - 11},${y + 8} L${CX - 8},${y} L${CX + 8},${y} L${CX + 11},${y + 8}Z`} />
  if (rank === 'Knight') return <Path d={`M${CX - 12},${y + 8} L${CX},${y - 4} L${CX + 12},${y + 8}Z`} />
  if (rank === 'Queen')  return (<>
    <Path d={`M${CX - 13},${y + 8} L${CX - 13},${y} Q${CX - 6.5},${y - 8} ${CX},${y} Q${CX + 6.5},${y - 8} ${CX + 13},${y} L${CX + 13},${y + 8}Z`} />
  </>)
  return <Path d={`M${CX - 13},${y + 8} L${CX - 13},${y - 2} L${CX - 6},${y + 3} L${CX},${y - 6} L${CX + 6},${y + 3} L${CX + 13},${y - 2} L${CX + 13},${y + 8}Z`} />
}

function minorArt(card) {
  const { suit, rank, n } = card
  if (n === 1) return <g>{suitGlyph(suit, CX, CY, 2.1)}</g>            // Ace = 큰 기호 하나
  if (n <= 10) return <g>{PIP_LAYOUT[n].map(([dx, dy]) => suitGlyph(suit, CX + dx, CY + dy, 0.95))}</g>
  return (<g>
    {courtCrown(rank)}
    {suitGlyph(suit, CX, CY + 8, 1.5)}
  </g>)
}

// 로마 숫자 (메이저 아르카나 번호)
const ROMAN = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI',
  'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI']

const SHORT_SUIT = { wands: 'WANDS', cups: 'CUPS', swords: 'SWORDS', pentacles: 'PENTACLES' }

// ── 카드 앞면 ────────────────────────────────────────────────
//
// 카드 그림 위의 글자(로마숫자·카드 이름)는 9개 국어를 지원해도 영어로 둔다. 이유:
//   1) 실제 타로 덱이 그렇다. 어느 나라에서 파는 라이더-웨이트든 카드에는 THE FOOL 이라고 찍혀 있다.
//   2) 이 자리는 6.4px 대문자 + 넓은 자간으로 짜여 있어서, 키릴·CJK 를 넣으면 넘치거나 뭉갠다.
// 번역된 이름은 카드 바로 아래 본문에 크게 나오므로 사용자가 못 알아볼 일은 없다.
// label 로 번역된 이름을 받아 화면낭독기(시각장애인용)에만 전달한다.
// 앞면 — 라이더-웨이트 사진. thumb 이면 작은 판(라이브러리 78장 격자용)을 쓴다.
// 큰 것만 쓰면 격자 한 번 여는 데 10MB 가 날아간다.
export function CardArt({ card, reversed = false, showName = true, label, className = '', style, thumb = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <CardArtSvg card={card} reversed={reversed} showName={showName}
                       label={label} className={className} style={style} />
  }

  // BASE_URL 을 붙여야 깃허브 페이지처럼 하위 경로에 올려도 깨지지 않는다
  const src = `${import.meta.env.BASE_URL}cards/${thumb ? 't/' : ''}${card.id}.webp`

  return (
    <img
      src={src}
      className={`card-img ${className}`}
      style={{ ...style, transform: reversed ? 'rotate(180deg)' : undefined }}
      alt={`${label || card.name}${reversed ? ', reversed' : ''}`}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
    />
  )
}

// 예전 자체 제작 SVG — 이제는 사진을 못 불러왔을 때의 대비책이다.
export function CardArtSvg({ card, reversed = false, showName = true, label, className = '', style }) {
  const isMajor = card.arcana === 'major'
  const top = isMajor ? ROMAN[card.n] : card.rank.toUpperCase()
  const bottom = isMajor ? card.name.toUpperCase() : SHORT_SUIT[card.suit]
  const art = isMajor ? (MAJOR_ART[card.n] || (() => null))() : minorArt(card)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={`card-svg ${className}`} style={style}
      role="img" aria-label={`${label || card.name}${reversed ? ', reversed' : ''}`}>
      <rect x={0} y={0} width={W} height={H} rx={7} fill="var(--card-bg)" />
      <rect x={3} y={3} width={W - 6} height={H - 6} rx={5} fill="none" stroke="var(--ink)" strokeWidth={0.9} opacity={0.85} />
      <rect x={6.5} y={6.5} width={W - 13} height={H - 13} rx={3} fill="none" stroke="var(--ink)" strokeWidth={0.4} opacity={0.45} />

      {/* 역방향이면 카드 전체를 180도 돌린다 — 실제 타로와 동일 */}
      <g transform={reversed ? `rotate(180 ${CX} ${H / 2})` : undefined}>
        {top && (
          <text x={CX} y={22} textAnchor="middle" className="card-num">{top}</text>
        )}
        <g className="card-art">{art}</g>
        {showName && (
          <text x={CX} y={H - 13} textAnchor="middle" className="card-name">{bottom}</text>
        )}
      </g>
    </svg>
  )
}

// ── 카드 뒷면 (뒤집기 전) ─────────────────────────────────────
// 뒷면은 사진과 같은 비율(576:966 ≒ 100:168)로 그린다.
// 앞뒤 비율이 다르면 뒤집는 순간 카드가 늘었다 줄어드는 것처럼 보인다.
const BACK_H = 168

export function CardBack({ className = '', style }) {
  return (
    <svg viewBox={`0 0 ${W} ${BACK_H}`} className={`card-svg ${className}`} style={style} aria-hidden="true">
      <rect x={0} y={0} width={W} height={BACK_H} rx={7} fill="var(--card-back)" />
      <rect x={3} y={3} width={W - 6} height={BACK_H - 6} rx={5} fill="none" stroke="var(--ink)" strokeWidth={0.9} opacity={0.7} />
      <g opacity={0.75}>
        <Circle cx={CX} cy={BACK_H / 2} r={22} {...S_THIN} />
        <Circle cx={CX} cy={BACK_H / 2} r={15} {...S_THIN} />
        <polygon points={star(CX, BACK_H / 2, 11, 8, 0.42)} {...S_THIN} />
        {[40, BACK_H - 40].map((y) => (
          <polygon key={y} points={star(CX, y, 5, 4, 0.3)} {...S_THIN} />
        ))}
      </g>
    </svg>
  )
}
