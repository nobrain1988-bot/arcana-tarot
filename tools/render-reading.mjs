// 결과 화면을 글자로 찍어 보는 도구.  (npm run reading -- <언어> <질문id> [횟수])
//
// 왜 필요한가: "질문과 답이 상관없어 보인다" 는 문제는 코드를 읽어서는 못 잡는다.
// 사용자가 보는 그대로 — 질문, 자리 이름, 자리 설명, 카드 본문, 마무리 — 를 한 화면에
// 늘어놓고 사람이(또는 검사 에이전트가) 읽어 봐야 "이게 답으로 읽히나" 를 판단할 수 있다.
// 브라우저를 띄우지 않고 앱의 해석 엔진(interpret)을 그대로 불러 쓴다.
//
//   node tools/render-reading.mjs ko loveMiss        한 번
//   node tools/render-reading.mjs ko loveMiss 3      세 번(카드가 매번 다르게 나온다)
//   node tools/render-reading.mjs en all             질문 전부 한 번씩
//   node tools/render-reading.mjs ko healthPregnancyWait --seed 7   같은 카드로 재현

import { loadPack, cardName, cardFace, fill } from '../src/i18n/index.js'
import { SPREADS } from '../src/lib/spreads.js'
import { TOPICS } from '../src/lib/topics.js'
import { draw } from '../src/lib/deck.js'
import { interpret } from '../src/lib/reading.js'

const argv = process.argv.slice(2)
const lang = argv[0] || 'ko'
const which = argv[1] || 'all'
const seedAt = argv.indexOf('--seed')
const seed = seedAt >= 0 ? argv[seedAt + 1] : null
const times = Number(argv[2]) || 1

const pack = await loadPack(lang)
const ui = pack.ui
const t = {
  cardName: (c) => cardName(pack, c),
  cardFace: (c, r) => cardFace(pack, c, r),
  fill,
}

const list = which === 'all' ? TOPICS : TOPICS.filter((x) => x.id === which)
if (!list.length) { console.error(`질문 id 없음: ${which}`); process.exit(1) }

const line = (s) => console.log(s)
const wrap = (s, n = 88) => String(s).replace(new RegExp(`(.{1,${n}})(\\s|$)`, 'g'), '$1\n').trimEnd()

for (const topic of list) {
  const spread = SPREADS[topic.spread]
  for (let i = 0; i < times; i++) {
    const drawn = draw(spread.count, { reversals: true, seed: seed ? `${seed}|${topic.id}|${i}` : undefined })
    const r = interpret(spread, drawn, ui, t, topic.id)
    line('═'.repeat(92))
    line(`❝ ${ui.topics[topic.id] || topic.id} ❞    [${topic.id} · ${topic.cat} · ${spread.id}]`)
    line(`   ${r.spreadTitle}`)
    if (r.verdict) line(`   ▶ ${r.verdict.word} — ${r.verdict.gloss}`)
    for (const c of r.cards) {
      line('─'.repeat(92))
      line(`[${c.position.label}]  ${c.name}  (${c.reversed ? ui.common.reversed : ui.common.upright})   ${c.keywords.join(' · ')}`)
      line(`   ✦ ${c.lead}`)
      line('   ' + wrap(c.text).split('\n').join('\n   '))
    }
    if (r.close) {
      line('─'.repeat(92))
      line(`[${ui.result.together || 'together'}]`)
      line('   ' + wrap(r.close).split('\n').join('\n   '))
    }
    if (r.summary.length) {
      line('─'.repeat(92))
      for (const s of r.summary) line('   · ' + wrap(s).split('\n').join('\n     '))
    }
  }
}
line('═'.repeat(92))
