// 플레이스토어 그래픽 이미지 생성기  (npm run feature)
//
// 구글 플레이 목록 맨 위에 걸리는 1024 × 500 짜리 가로 이미지다.
// 검색 결과와 추천 자리에서 앱 아이콘보다 먼저 보이는 그림이라, 여기서
// '무슨 앱인지'와 '분위기'가 한눈에 안 잡히면 눌리지 않는다.
//
// 왜 브라우저로 그리는가: 앱과 똑같은 색·글꼴·카드 그림을 써야 스토어와 앱이
// 따로 놀지 않는다. 그 값들은 이미 styles.css 와 public/cards 에 있으므로,
// 그림판에서 다시 만들지 말고 같은 재료를 그대로 불러 쓴다.
//
// 안전 영역 주의: 구글이 기기에 따라 좌우를 잘라낸다. 글자는 가운데 800px 안에 둔다.

import puppeteer from 'puppeteer-core'
import { mkdir, writeFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const W = 1024
const H = 500
const OUT = 'store'
const URL = process.env.SHOTS_URL || 'http://localhost:4173/'

const CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
]
const chrome = CANDIDATES.find((p) => p && existsSync(p))
if (!chrome) { console.error('크롬을 못 찾았습니다.'); process.exit(1) }

// 가운데에 세울 카드 다섯 장. 부채처럼 펼친다.
// 유명하고 그림이 강한 것들로 골랐다 — 작게 줄여도 무엇인지 알아볼 수 있어야 한다.
const CARDS = ['m18', 'm17', 'm01', 'm10', 'm21']   // 달 · 별 · 마법사 · 수레바퀴 · 세계

const html = `
<!doctype html><html><head><meta charset="utf-8"><style>
  :root {
    --bg: #0b0918; --bg-2: #14102b; --ink: #d8b26b; --text: #ece9f6; --muted: #948cb5;
    --serif: 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, 'Times New Roman', serif;
    --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${W}px; height: ${H}px; overflow: hidden; background: var(--bg); }

  .wrap { position: relative; width: 100%; height: 100%; display: flex; align-items: center; }

  /* 바닥 — 가운데가 살짝 밝은 어둠. 완전한 단색이면 인쇄물처럼 납작해 보인다 */
  .bg {
    position: absolute; inset: 0;
    background:
      radial-gradient(120% 90% at 62% 45%, #241a52 0%, #14102b 45%, #0b0918 100%);
  }
  /* 촛불 같은 따뜻한 빛 한 덩이 — 타로 자리의 분위기를 만드는 건 결국 이 빛이다 */
  .glow {
    position: absolute; width: 620px; height: 620px; right: 40px; top: -120px;
    background: radial-gradient(circle, rgba(216,178,107,.20) 0%, rgba(216,178,107,0) 62%);
  }

  /* 글자 — 좌우가 잘려도 살아남게 왼쪽 안전 영역 안에 둔다 */
  .copy { position: relative; padding-left: 112px; width: 470px; }
  .title {
    font-family: var(--serif); font-size: 84px; font-weight: 600;
    color: var(--ink); letter-spacing: .06em; line-height: 1;
    text-shadow: 0 2px 30px rgba(216,178,107,.30);
  }
  .rule { width: 84px; height: 1px; background: var(--ink); opacity: .55; margin: 22px 0 20px; }
  .tag {
    font-family: var(--serif); font-size: 27px; line-height: 1.35; color: var(--text);
  }
  .sub {
    font-family: var(--sans); font-size: 16px; letter-spacing: .10em;
    text-transform: uppercase; color: var(--muted); margin-top: 20px;
  }

  /* 카드 부채 */
  .fan { position: absolute; right: 56px; bottom: 54px; width: 430px; height: 400px; }
  .fan img {
    position: absolute; bottom: 0; left: 50%; width: 150px; border-radius: 9px;
    transform-origin: 50% 128%;
    box-shadow: 0 18px 46px rgba(0,0,0,.62), 0 0 0 1px rgba(216,178,107,.34);
  }
</style></head><body>
  <div class="wrap">
    <div class="bg"></div><div class="glow"></div>
    <div class="fan">
      ${CARDS.map((id, i) => {
        const a = (i - (CARDS.length - 1) / 2) * 12        // 부채 각도
        const x = -75 + (i - (CARDS.length - 1) / 2) * 26  // 살짝 벌린다
        return `<img src="cards/${id}.webp" style="transform: translateX(${x}px) rotate(${a}deg); z-index:${i}">`
      }).join('')}
    </div>
    <div class="copy">
      <div class="title">Arcana</div>
      <div class="rule"></div>
      <div class="tag">All 78 cards.<br>You pick them yourself.</div>
      <div class="sub">9 languages · no sign-up</div>
    </div>
  </div>
</body></html>`

const browser = await puppeteer.launch({ executablePath: chrome, headless: 'new', args: ['--hide-scrollbars'] })
try {
  await mkdir(OUT, { recursive: true })
  const page = await browser.newPage()
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 })

  // 미리보기 서버 주소로 먼저 들어간 다음 내용만 바꿔치기한다.
  // 그래야 cards/*.webp 를 상대경로로 그대로 쓸 수 있다.
  await page.goto(URL, { waitUntil: 'domcontentloaded' })
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.evaluate(() => Promise.all(
    [...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r })))
  ))

  const file = join(OUT, 'feature-graphic.png')
  if (existsSync(file)) await rm(file)
  await page.screenshot({ path: file })
  console.log(`  ✓ ${file}  (${W}×${H})`)
} finally {
  await browser.close()
}
