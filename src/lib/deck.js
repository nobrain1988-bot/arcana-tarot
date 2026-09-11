// 78장 덱 조립 + 카드 뽑기
//
// majors.js(22장) + minors.js(56장) 을 하나의 배열로 합치고, 각 카드에 고유 id 를 붙인다.
// id 는 저장·공유·URL 에 쓰이므로 한 번 정하면 절대 바꾸지 않는다.
//   메이저: 'm00' ~ 'm21'
//   마이너: 'w01'(Ace of Wands) ~ 'p14'(King of Pentacles)

import { MAJORS } from './majors.js'
import { MINORS, SUITS } from './minors.js'

const SUIT_PREFIX = { wands: 'w', cups: 'c', swords: 's', pentacles: 'p' }
const pad2 = (n) => String(n).padStart(2, '0')

export const DECK = [
  ...MAJORS.map((c) => ({ ...c, arcana: 'major', id: `m${pad2(c.n)}` })),
  ...MINORS.map((c) => ({ ...c, arcana: 'minor', id: `${SUIT_PREFIX[c.suit]}${pad2(c.n)}` })),
]

export const DECK_SIZE = DECK.length // 78
export { SUITS }

const BY_ID = new Map(DECK.map((c) => [c.id, c]))
export const cardById = (id) => BY_ID.get(id) || null

// ─────────────────────────────────────────────────────────────
// 시드 난수 (mulberry32)
//
// 왜 그냥 Math.random() 을 안 쓰는가:
//   '오늘의 카드'는 같은 날 앱을 몇 번 다시 열어도 같은 카드가 나와야 한다.
//   Math.random() 은 열 때마다 달라져서 "다시 뽑기"로 원하는 카드가 나올 때까지
//   돌릴 수 있게 되고, 그러면 결과에 무게가 사라진다.
//   → 날짜를 시드로 넣으면 그 날 하루는 결과가 고정된다.
// ─────────────────────────────────────────────────────────────
function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// 문자열 → 32비트 정수 (FNV-1a). 시드 문자열을 숫자로 바꾸는 용도.
function hashStr(str) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h >>> 0
}

// seed 를 주면 고정 결과, 안 주면 매번 다른 결과
export function makeRng(seed) {
  if (seed == null) return Math.random
  return mulberry32(typeof seed === 'number' ? seed : hashStr(String(seed)))
}

// ─────────────────────────────────────────────────────────────
// 카드 뽑기
// ─────────────────────────────────────────────────────────────

// n장을 중복 없이 뽑는다. 각 장은 약 30% 확률로 역방향.
// (전통적으로 셔플 중 일부만 뒤집히므로 50%가 아니라 낮게 잡는다.
//  50%로 두면 역방향이 너무 자주 나와 결과가 전반적으로 어둡게 읽힌다.)
const REVERSE_CHANCE = 0.3

// draw(3)                              → 매번 다른 결과
// draw(1, { seed: '2026-09-10|abc' })  → 그 시드로는 항상 같은 결과 (오늘의 카드)
// draw(3, { reversals: false })        → 역방향 없이 정방향만 (설정에서 끌 수 있다)
export function draw(n, opts = {}) {
  const { seed, reversals = true } = opts
  const rng = makeRng(seed)
  const pool = DECK.slice()
  // 피셔-예이츠 셔플: 뒤에서부터 임의의 앞 카드와 자리를 바꾼다
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  // 셔플이 위에서 이미 끝났으므로, 역방향을 켜든 끄든 '뽑히는 카드'는 같다.
  // 설정에서 역방향을 꺼도 오늘의 카드가 다른 카드로 바뀌지 않는다는 뜻이다.
  return pool.slice(0, n).map((card) => {
    const roll = rng()
    return { card, reversed: reversals && roll < REVERSE_CHANCE }
  })
}

// 로컬 날짜 'YYYY-MM-DD' — 오늘의 카드 시드로 쓴다.
// toISOString() 은 UTC 라 한국·미국에서 날짜가 하루 어긋나므로 쓰지 않는다.
export function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}
