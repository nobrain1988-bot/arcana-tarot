// 공유 그림 미리보기 생성기  (npm run share:preview)
//
// 왜: 캔버스로 그린 그림은 코드만 읽어서는 어떻게 생겼는지 모른다.
// 글자가 겹치는지, 카드가 잘리는지, 역방향이 뒤집혀 그려지는지는 봐야 안다.
//
// 앱 화면을 조작하지 않고 앱의 모듈을 직접 불러 쓴다 — 공유 버튼을 누르면
// 공유 시트가 떠서 자동 조작이 거기서 막히고, 화면을 거칠 이유도 없다.

import puppeteer from 'puppeteer-core'
import { existsSync, writeFileSync, mkdirSync } from 'node:fs'

const URL = process.env.SHOTS_URL || 'http://localhost:5174/'
const OUT = 'share-preview'
const CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
]
const chrome = CANDIDATES.find((p) => p && existsSync(p))

// 세 장짜리 / 한 장짜리(예·아니오) / 다른 언어 — 깨질 만한 경우를 고른다
const CASES = [
  { lang: 'ko', topic: 'loveMiss', name: '3장-한국어' },
  { lang: 'ko', topic: 'lifeChoice', name: '1장-예아니오' },
  { lang: 'ja', topic: 'healthExpecting', name: '3장-일본어' },
  { lang: 'de', topic: 'workBlock', name: '3장-독일어-긴이름' },
]

mkdirSync(OUT, { recursive: true })
const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new' })

try {
  const page = await browser.newPage()
  page.on('console', (m) => { if (m.type() === 'error') console.log('    [브라우저 오류]', m.text().slice(0, 160)) })
  await page.goto(URL, { waitUntil: 'networkidle0' })

  for (const c of CASES) {
    const dataUrl = await page.evaluate(async ({ lang, topic }) => {
      try {
        const i18n = await import('/src/i18n/index.js')
        const { SPREADS } = await import('/src/lib/spreads.js')
        const { TOPICS } = await import('/src/lib/topics.js')
        const { draw } = await import('/src/lib/deck.js')
        const { interpret } = await import('/src/lib/reading.js')
        const share = await import('/src/lib/share.js')

        const pack = await i18n.loadPack(lang)
        const t = {
          cardName: (card) => i18n.cardName(pack, card),
          cardFace: (card, rev) => i18n.cardFace(pack, card, rev),
          fill: i18n.fill,
        }
        const tp = TOPICS.find((x) => x.id === topic)
        const spread = SPREADS[tp.spread]
        const drawn = draw(spread.count, { reversals: true, seed: `probe|${topic}` })
        const reading = interpret(spread, drawn, pack.ui, t, tp.id)
        const blob = await share.makeShareImage(reading, pack.ui, pack.ui.topics[tp.id])
        return await new Promise((res) => {
          const r = new FileReader()
          r.onloadend = () => res(r.result)
          r.readAsDataURL(blob)
        })
      } catch (e) {
        return 'ERR:' + (e && e.message)
      }
    }, c)

    if (!dataUrl || String(dataUrl).startsWith('ERR:')) {
      console.log(`  ❌ ${c.name} — ${dataUrl}`)
      continue
    }
    writeFileSync(`${OUT}/${c.name}.png`, Buffer.from(String(dataUrl).split(',')[1], 'base64'))
    console.log(`  ✓ ${c.name}`)
  }
} finally {
  await browser.close()
}
console.log(`\n→ ${OUT}`)
