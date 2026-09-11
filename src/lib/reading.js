// 해석 엔진
//
// 원칙(오복사주의 [[saju-must-be-scholarly]] 와 동일): 문장을 랜덤으로 고르지 않는다.
// 뽑힌 카드에서 계산되는 값 — 정/역방향, 메이저 장수, 원소 분포, 예/아니오 극성 —
// 만으로 결론을 만든다. 계산되지 않는 말은 쓰지 않는다.
//
// 이 파일에는 '계산'만 있고 '글자'는 없다. 글자는 전부 언어 팩에서 온다.
// interpret() 에 ui(언어 팩)와 t(카드 이름·본문을 꺼내는 함수들)를 넘기는 이유다.

import { spreadText } from './spreads.js'

// ─────────────────────────────────────────────────────────────
// 1. 예 / 아니오 극성표
//
// 타로에서 예/아니오는 카드마다 전통적으로 정해진 방향이 있다. 임의로 굴리지 않는다.
//   1 = yes, 0 = maybe(아직/조건부), -1 = no
// 이건 '계산되는 값'이라 언어와 무관하다. 표는 여기 남는다.
// ─────────────────────────────────────────────────────────────

// 메이저 22장: [정방향, 역방향] 을 따로 적는다.
// 역방향이 무조건 반대가 아니기 때문이다. 예) 15 Devil 역방향 = 속박에서 풀려남 = yes
const MAJOR_POLARITY = {
  0:  [1, 0],   1:  [1, 0],   2:  [0, 0],   3:  [1, 0],
  4:  [1, 0],   5:  [1, 0],   6:  [1, -1],  7:  [1, -1],
  8:  [1, 0],   9:  [0, 0],   10: [1, -1],  11: [0, -1],
  12: [0, -1],  13: [-1, -1], 14: [0, -1],  15: [-1, 1],
  16: [-1, 0],  17: [1, -1],  18: [-1, 1],  19: [1, 0],
  20: [1, -1],  21: [1, 0],
}

// 마이너 56장: 수트별로 랭크 1~14 순서(Ace..10, Page, Knight, Queen, King)의 정방향 극성.
// 역방향은 뒤집는다(yes↔no, maybe는 유지) — 이 앱의 역방향 본문 자체가 이미 '반대 국면'이라
// 그대로 맞아떨어진다. 예) 5 of Cups 역방향 = 받아들이고 나아감 = yes
const MINOR_POLARITY = {
  //          A   2   3   4   5   6   7   8   9  10   P   Kn  Q   K
  wands:     [1,  1,  1,  1, -1,  1,  0,  1,  0, -1,  1,  1,  1,  1],
  cups:      [1,  1,  1, -1, -1,  1,  0, -1,  1,  1,  1,  1,  1,  1],
  swords:    [1, -1, -1,  0, -1,  1, -1, -1, -1, -1,  0,  0,  0,  0],
  pentacles: [1,  0,  1,  0, -1,  1,  0,  1,  1,  1,  1,  0,  1,  1],
}

const flip = (v) => (v === 0 ? 0 : -v)

export function polarity(drawn) {
  const { card, reversed } = drawn
  if (card.arcana === 'major') {
    const pair = MAJOR_POLARITY[card.n]
    return pair ? pair[reversed ? 1 : 0] : 0
  }
  const row = MINOR_POLARITY[card.suit]
  const base = row ? row[card.n - 1] : 0
  return reversed ? flip(base) : base
}

const TONE = { '1': 'yes', '0': 'maybe', '-1': 'no' }

// ─────────────────────────────────────────────────────────────
// 2. 셀 수 있는 값들
// ─────────────────────────────────────────────────────────────

export function tally(drawn) {
  const els = { fire: 0, water: 0, air: 0, earth: 0 }
  let majors = 0
  let reversed = 0
  for (const d of drawn) {
    els[d.card.el] = (els[d.card.el] || 0) + 1
    if (d.card.arcana === 'major') majors++
    if (d.reversed) reversed++
  }
  // 우세 원소 = 과반을 넘긴 원소만 인정한다. 1:1:1 로 갈리면 우세 원소는 없다.
  let dominant = null
  const total = drawn.length
  for (const [el, n] of Object.entries(els)) {
    if (n / total > 0.5) dominant = el
  }
  return { els, majors, reversed, total, dominant }
}

// 전체 요약 — 전부 위에서 센 숫자에서만 나온다. 문장은 언어 팩에서 꺼낸다.
function summarise(t, ui, fill) {
  const lines = []
  const E = ui.engine

  // 1장짜리(오늘의 카드·예/아니오)는 요약을 만들지 않는다.
  // 카드가 하나면 '전체 경향'이라는 게 성립하지 않고, 카드 본문과 수트 설명이 이미 같은 말을 한다.
  if (t.total < 2) return lines

  if (t.majors === 0) lines.push(E.majors.none)
  else if (t.majors === t.total) lines.push(E.majors.all)
  else if (t.majors >= t.total / 2) lines.push(fill(E.majors.most, { n: t.majors, total: t.total }))

  if (t.dominant) lines.push(E.element[t.dominant])

  if (t.reversed === 0) lines.push(E.reversals.none)
  else if (t.reversed === t.total) lines.push(E.reversals.all)
  else if (t.reversed >= t.total / 2) lines.push(E.reversals.most)

  return lines
}

// ─────────────────────────────────────────────────────────────
// 3. 최종 조립
//
//   spread : SPREADS 의 항목 (구조만 들어있다)
//   drawn  : [{ card, reversed }]
//   ui     : 언어 팩의 ui
//   t      : { cardName, cardFace, fill } — 언어 팩에서 글자를 꺼내는 함수 묶음
// ─────────────────────────────────────────────────────────────
export function interpret(spread, drawn, ui, t) {
  const tal = tally(drawn)
  const st = spreadText(ui, spread)

  const cards = drawn.map((d, i) => {
    const pos = st.positions[i] || st.positions[st.positions.length - 1]
    const f = t.cardFace(d.card, d.reversed)
    const suit = d.card.arcana === 'minor' ? ui.engine.suits[d.card.suit] : null
    return {
      ...d,
      name: t.cardName(d.card),
      position: pos,
      // 키워드는 가운뎃점으로 이어붙인 한 줄이다. 화면에서는 칩 여러 개로 쪼개 보여준다.
      keywords: String(f.k || '').split(' · ').filter(Boolean),
      text: f.t || '',
      lead: pos.lead,
      domain: suit ? `${suit.name} — ${suit.domain}` : null,
      polarity: polarity(d),
    }
  })

  // 예/아니오 스프레드일 때만 판정을 낸다
  let verdict = null
  if (spread.id === 'yesno') {
    const tone = TONE[String(polarity(drawn[0]))]
    const v = ui.engine.verdict[tone]
    verdict = {
      tone,
      word: v.word,
      gloss: v.gloss,
      detail: t.fill(ui.result.drawnOn, {
        card: cards[0].name,
        orientation: (drawn[0].reversed ? ui.common.reversed : ui.common.upright).toLowerCase(),
      }),
    }
  }

  // 헤드라인 = 첫 카드 이름 (+역방향 표시). 저널 목록과 공유 문구에 쓴다.
  const lead = cards[0]
  const headline = lead.reversed ? `${lead.name} (${ui.common.reversed})` : lead.name

  return {
    spreadId: spread.id,
    spreadTitle: st.title,
    cards,
    verdict,
    tally: tal,
    summary: summarise(tal, ui, t.fill),
    headline,
    // 공유 문구 — 카드 이름과 키워드만 나간다. 질문 내용은 절대 내보내지 않는다.
    shareLine: `${headline} — ${lead.keywords.join(', ')}`,
  }
}
