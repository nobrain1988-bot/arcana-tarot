// 번역 파일 검사기.
//
// 9개 국어 × 78장 × 4항목 = 2,808개를 눈으로 확인하는 건 불가능하다.
// 빠진 것, 영어가 그대로 남은 것, 구조가 어긋난 것을 이 스크립트가 잡는다.
//
// 실행: npm run check:i18n

import { LANGS } from '../src/i18n/langs.js'
import EN from '../src/i18n/ui/en.js'
import { DECK } from '../src/lib/deck.js'

const ID_LIST = DECK.map((c) => c.id)
const MAJOR_IDS = DECK.filter((c) => c.arcana === 'major').map((c) => c.id)

// en.js 의 키 구조를 평평한 목록으로 만든다 ('today.title' 같은 형태)
function keyPaths(obj, prefix = '') {
  const out = []
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'string') out.push(path)
    else if (v && typeof v === 'object' && typeof v !== 'function') out.push(...keyPaths(v, path))
  }
  return out
}
const at = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj)

const EN_KEYS = keyPaths(EN)
let failed = false
const rows = []

for (const { code, label } of LANGS) {
  const problems = []
  let ui = EN
  let pack = { names: {}, cards: {} }

  if (code !== 'en') {
    ui = (await import(`../src/i18n/ui/${code}.js`)).default
    pack = (await import(`../src/i18n/cards/${code}.js`)).default
  }

  // 1) UI 키가 다 있는가
  const missingUi = EN_KEYS.filter((k) => {
    const v = at(ui, k)
    return typeof v !== 'string' || v.trim() === ''
  })
  if (missingUi.length) problems.push(`UI 누락 ${missingUi.length}개 (예: ${missingUi.slice(0, 3).join(', ')})`)

  // 2) 마이너 카드 이름을 만드는 함수가 있는가
  if (typeof ui.minorName !== 'function') problems.push('minorName() 없음')

  // 3) 메이저 22장 이름
  const missingNames = code === 'en' ? [] : MAJOR_IDS.filter((id) => !pack.names || !pack.names[id])
  const namesDone = MAJOR_IDS.length - missingNames.length

  // 4) 카드 78장 본문 — 네 항목(up.k, up.t, rev.k, rev.t)이 모두 채워졌는가
  let cardsDone = 0
  const broken = []
  for (const id of ID_LIST) {
    if (code === 'en') { cardsDone++; continue }
    const c = pack.cards && pack.cards[id]
    if (!c) continue
    const ok = ['up', 'rev'].every((o) => c[o] && typeof c[o].k === 'string' && c[o].k.trim()
      && typeof c[o].t === 'string' && c[o].t.trim())
    if (ok) cardsDone++
    else if (c) broken.push(id)
  }
  if (broken.length) problems.push(`항목이 덜 찬 카드: ${broken.join(', ')}`)

  // 5) 키워드 구분자 — 화면에서 ' · ' 로 잘라 칩을 만든다. 다른 걸 쓰면 한 덩어리로 붙어 나온다.
  const badSep = ID_LIST.filter((id) => {
    const c = pack.cards && pack.cards[id]
    return c && c.up && typeof c.up.k === 'string' && c.up.k.includes('·') && !c.up.k.includes(' · ')
  })
  if (badSep.length) problems.push(`키워드 구분자가 ' · ' 가 아님: ${badSep.slice(0, 5).join(', ')}`)

  // 6) 덱에 없는 id 를 만들어 놓지 않았는가 (오타 잡기)
  const unknown = Object.keys(pack.cards || {}).filter((id) => !ID_LIST.includes(id))
  if (unknown.length) problems.push(`덱에 없는 카드 id: ${unknown.join(', ')}`)

  // 7) 그 언어에 있을 수 없는 글자가 섞이지 않았는가.
  //
  //    9개 국어를 이어서 쓰다 보면 앞 언어가 손에 남아 옆 언어로 새어 들어간다.
  //    실제로 일본어 본문에 'analyze' 가, 러시아어 키워드에 '新' 이 남아 있었다.
  //    사람 눈으로는 절대 못 잡는 종류의 오류라 기계가 잡는다.
  const KANA = '\\u3040-\\u30ff'
  const HANGUL = '\\uac00-\\ud7a3'
  const CJK = '\\u4e00-\\u9fff'
  const CYRILLIC = '\\u0400-\\u04ff'
  const FORBIDDEN = {
    // 라틴 문자권: 한글·가나·한자·키릴이 나오면 안 된다
    es: `[${KANA}${HANGUL}${CJK}${CYRILLIC}]`,
    pt: `[${KANA}${HANGUL}${CJK}${CYRILLIC}]`,
    fr: `[${KANA}${HANGUL}${CJK}${CYRILLIC}]`,
    de: `[${KANA}${HANGUL}${CJK}${CYRILLIC}]`,
    tr: `[${KANA}${HANGUL}${CJK}${CYRILLIC}]`,
    // 키릴권: 한글·가나·한자, 그리고 번역이 덜 된 영어 단어
    ru: `[${KANA}${HANGUL}${CJK}]|[A-Za-z]{4,}`,
    // 한국어: 가나·키릴은 안 되지만 한자는 허용한다 ('불(火)' 처럼 병기하기 때문)
    ko: `[${KANA}${CYRILLIC}]|[A-Za-z]{4,}`,
    // 일본어: 한글·키릴은 안 된다 (한자는 당연히 허용)
    ja: `[${HANGUL}${CYRILLIC}]|[A-Za-z]{4,}`,
  }

  if (FORBIDDEN[code]) {
    const re = new RegExp(FORBIDDEN[code], 'g')
    const strays = []
    // 일부러 영어로 두는 두 가지는 검사에서 뺀다:
    //   {card} · {n} 같은 자리표시자 — 코드가 값을 끼워 넣는 자리라 번역하면 안 된다
    //   'Arcana' — 앱 이름이라 어느 언어에서도 그대로 쓴다
    const strip = (t) => String(t || '').replace(/\{\w+\}/g, '').replace(/Arcana/g, '')
    const scan = (where, text) => {
      const hit = strip(text).match(re)
      if (hit) strays.push(`${where}: ${[...new Set(hit)].join(',')}`)
    }
    for (const id of ID_LIST) {
      const c = pack.cards && pack.cards[id]
      if (!c) continue
      for (const o of ['up', 'rev']) {
        for (const f of ['k', 't']) scan(`${id}.${o}.${f}`, c[o] && c[o][f])
      }
    }
    for (const [id, name] of Object.entries(pack.names || {})) scan(`names.${id}`, name)
    for (const k of EN_KEYS) scan(`ui.${k}`, at(ui, k))
    if (strays.length) problems.push(`다른 언어 글자가 섞임 → ${strays.slice(0, 4).join(' / ')}`)
  }

  // ── 말투(높임 단계) 일관성 ──────────────────────────────────
  //
  // 번역이 틀리지 않아도 한 문단 안에서 말투가 오가면 읽는 사람은 바로 어색해한다.
  // 실제로 한국어 본문 156개 중 49개가 합쇼체(~습니다)와 해요체(~예요)를 섞어 쓰고 있었다.
  // 뜻은 다 맞는데 "번역기 돌린 것 같다"는 인상이 여기서 나온다.
  //
  // 이 앱의 목소리는 해요체다 — 타로는 한 사람에게 말을 거는 형식이라
  // 합쇼체는 거리가 너무 멀다. UI 문구도 전부 해요체로 되어 있다.
  //
  // 기계로 잡을 수 있는 언어만 검사한다. 러시아어처럼 대명사를 생략하는 언어는
  // 이 방식으로 판정할 수 없어서 넣지 않았다 — 못 잡는 걸 잡은 척하면 더 나쁘다.
  // 주의: '~ㅂ니다'(무너집니다·가져갑니다)의 ㅂ은 앞 글자의 받침이라
  // 'ㅂ니다' 라는 문자열로는 절대 안 잡힌다. 처음에 그렇게 썼다가 48문장을 놓쳤다.
  // 합쇼체 서술형은 사실상 전부 '…니다' 로 끝나므로 그것으로 잡는다.
  //
  // 한국어만 검사한다. 다른 언어는 어미만 보고는 판정이 안 되기 때문이다:
  //   · 일본어 — だ 로 끝나는 보통체를 잡으려 했더니 '二人のあいだ(두 사람 사이)',
  //     'まだ(아직)' 같은 명사·부사까지 걸렸다. 못 잡는 것보다 헛경보가 나쁘다.
  //   · 러시아어 — 동사 어미에 인칭이 들어 있어 대명사(ты/вы)를 아예 안 쓴다.
  //   · 스페인어·프랑스어 — tu/su/le 가 3인칭과 겹쳐 구분이 안 된다.
  // 기계가 확실히 아는 것만 검사하고, 나머지는 사람이 봐야 한다고 정직하게 남겨둔다.
  const TONE = {
    ko: { want: '해요체', bad: /(니다|십시오)[.!?]?$/ },
  }
  if (TONE[code]) {
    const { want, bad } = TONE[code]
    const hits = []
    const checkText = (where, text) => {
      if (!text) return
      for (const s of String(text).split(/(?<=[.!?。！？])\s+/)) {
        if (bad.test(s.trim())) { hits.push(where); return }
      }
    }
    for (const id of ID_LIST) {
      const c = pack.cards && pack.cards[id]
      if (!c) continue
      for (const o of ['up', 'rev']) checkText(`${id}.${o}`, c[o] && c[o].t)
    }
    // 화면 문구도 같이 본다. 특히 engine.* 은 3장 리딩마다 나오는 문장이라
    // 여기 말투가 어긋나면 카드 해설을 아무리 고쳐도 티가 난다.
    for (const k of EN_KEYS) checkText(`ui.${k}`, at(ui, k))
    if (hits.length) {
      problems.push(`말투가 ${want}가 아닌 문장 ${hits.length}곳 → ${hits.slice(0, 5).join(', ')}${hits.length > 5 ? ' …' : ''}`)
    }
  }

  if (problems.length) failed = true
  rows.push({ code, label, namesDone, cardsDone, problems })
}

// ── 출력 ────────────────────────────────────────────────────
console.log('언어    이름(22)   카드(78)   상태')
console.log('─'.repeat(60))
for (const r of rows) {
  const full = r.cardsDone === ID_LIST.length && r.namesDone === MAJOR_IDS.length
  const mark = r.problems.length ? '✗' : full ? '✓ 완료' : '· 번역중'
  console.log(
    `${r.code.padEnd(6)}  ${String(r.namesDone).padStart(2)}/22    ${String(r.cardsDone).padStart(2)}/78     ${mark}`
  )
  for (const p of r.problems) console.log(`         └ ${p}`)
}
console.log('─'.repeat(60))

if (failed) {
  console.error('구조 오류가 있다. 위 항목을 고칠 것.')
  process.exit(1)
}
console.log('구조 이상 없음. (카드 수가 78 미만인 언어는 그만큼 영어로 표시된다)')
