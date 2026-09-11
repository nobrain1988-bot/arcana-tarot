// 언어 팩 불러오기 + 영어로 자동 대체
//
// 설계 두 가지가 핵심이다.
//
// 1) 필요한 언어 하나만 불러온다 (import() = 지연 로딩)
//    9개 국어 카드 해석을 전부 앱에 넣고 시작하면 시작이 느려진다.
//    사용자는 그 중 하나만 읽는다. 고른 언어 파일만 그때 불러온다.
//
// 2) 빠진 번역은 자동으로 영어가 된다 (deepMerge)
//    번역이 덜 된 상태로 출시해도 화면이 비거나 앱이 죽지 않는다.
//    '터키어 80% + 영어 20%' 는 서비스가 되지만, 빈 화면은 서비스가 안 된다.

import EN from './ui/en.js'
import { DECK } from '../lib/deck.js'
import { DEFAULT_LANG, LANG_CODES } from './langs.js'

// ── 언어 파일 목록 ───────────────────────────────────────────
// import() 안에는 변수를 못 쓴다(빌드할 때 어떤 파일인지 알아야 쪼갤 수 있다).
// 그래서 언어마다 한 줄씩 직접 적는다.
const UI = {
  es: () => import('./ui/es.js'), pt: () => import('./ui/pt.js'),
  ko: () => import('./ui/ko.js'), ja: () => import('./ui/ja.js'),
  ru: () => import('./ui/ru.js'), tr: () => import('./ui/tr.js'),
  fr: () => import('./ui/fr.js'), de: () => import('./ui/de.js'),
}
const CARDS = {
  es: () => import('./cards/es.js'), pt: () => import('./cards/pt.js'),
  ko: () => import('./cards/ko.js'), ja: () => import('./cards/ja.js'),
  ru: () => import('./cards/ru.js'), tr: () => import('./cards/tr.js'),
  fr: () => import('./cards/fr.js'), de: () => import('./cards/de.js'),
}

// ── 영어 카드 데이터 ─────────────────────────────────────────
// 영어 원문은 majors.js / minors.js 에 있다. 그걸 언어팩과 같은 모양으로 바꿔서
// 대체용 기준으로 쓴다. 같은 내용을 두 군데 적지 않기 위해서다.
const EN_CARDS = (() => {
  const names = {}
  const cards = {}
  for (const c of DECK) {
    names[c.id] = c.name
    cards[c.id] = { up: c.up, rev: c.rev }
  }
  return { names, cards }
})()

// ── 깊은 병합 ────────────────────────────────────────────────
// base(영어) 위에 over(번역)를 덮는다. over 에 없는 키는 base 값이 그대로 남는다.
// 빈 문자열도 '번역 안 된 것'으로 보고 영어를 쓴다 — 화면에 빈칸이 뜨는 것보다 낫다.
function deepMerge(base, over) {
  if (over == null) return base
  if (typeof base !== 'object' || base === null || Array.isArray(base)) {
    if (typeof over === 'string' && over.trim() === '') return base
    return over
  }
  if (typeof over !== 'object' || over === null) return base
  const out = { ...base }
  for (const k of Object.keys(over)) out[k] = deepMerge(base[k], over[k])
  return out
}

// ── 문구 안의 자리표시자 채우기 ──────────────────────────────
// fill('{n} of {total} cards', { n: 2, total: 3 }) → '2 of 3 cards'
export function fill(str, vars) {
  if (typeof str !== 'string') return ''
  return str.replace(/\{(\w+)\}/g, (m, k) => (vars && k in vars ? String(vars[k]) : m))
}

// ── 언어 팩 한 벌 만들기 ─────────────────────────────────────
export async function loadPack(code) {
  const lang = LANG_CODES.includes(code) ? code : DEFAULT_LANG

  if (lang === DEFAULT_LANG) {
    return { code: lang, ui: EN, names: EN_CARDS.names, cards: EN_CARDS.cards }
  }

  // 번역 파일을 못 불러와도(파일 없음·네트워크 문제) 앱은 영어로 계속 돌아가야 한다
  const [ui, cards] = await Promise.all([
    UI[lang]().then((m) => m.default).catch(() => null),
    CARDS[lang]().then((m) => m.default).catch(() => null),
  ])

  return {
    code: lang,
    ui: deepMerge(EN, ui),
    names: deepMerge(EN_CARDS.names, cards && cards.names),
    cards: deepMerge(EN_CARDS.cards, cards && cards.cards),
  }
}

// ── 카드 이름 / 카드 본문 꺼내기 ─────────────────────────────

// 메이저는 팩에 이름이 그대로 들어있고, 마이너는 '랭크 + 수트' 로 조립한다.
// 조립 방법(어순·연결어)은 언어마다 다르므로 팩이 가진 minorName() 을 쓴다.
//
// short 가 따로 있는 이유 — 언어에 따라 '목록에 쓰는 형태'와 '이름에 넣는 형태'가 다르다.
//   터키어: 필터 칩엔 Değnekler(복수), 카드 이름엔 Değnek Ası(단수+소유형)
//   러시아어: 필터 칩엔 Жезлы(주격), 카드 이름엔 Туз Жезлов(생격)
// short 가 없으면 name 을 그대로 쓴다(영어·스페인어 등은 형태가 같다).
export function cardName(pack, card) {
  if (card.arcana === 'major') return pack.names[card.id] || card.name
  const rank = (pack.ui.ranks && pack.ui.ranks[card.n]) || card.rank
  const s = pack.ui.engine.suits[card.suit] || {}
  const suit = s.short || s.name || card.suit
  const make = pack.ui.minorName
  return typeof make === 'function' ? make(rank, suit, card) : `${rank} ${suit}`
}

// 뽑힌 카드({ card, reversed })의 그 방향 본문 { k(키워드), t(본문) }
export function cardFace(pack, card, reversed) {
  const entry = pack.cards[card.id] || { up: card.up, rev: card.rev }
  return (reversed ? entry.rev : entry.up) || (reversed ? card.rev : card.up)
}
