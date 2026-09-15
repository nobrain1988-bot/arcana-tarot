// 플레이스토어 스크린샷 생성기  (npm run shots)
//
// 왜 스크립트인가: 스크린샷을 손으로 찍으면 화면을 고칠 때마다 다시 찍어야 하고,
// 크기·언어·어느 화면을 담을지가 사람 기억에만 남는다. 여기서 정해 두면
// UI 를 고친 뒤 한 줄로 다시 뽑는다. 아이콘(make-icons.mjs)과 같은 생각이다.
//
// 이 PC 에는 안드로이드 스튜디오가 없으므로 에뮬레이터로는 못 찍는다.
// 대신 이미 깔려 있는 크롬을 폰 크기로 띄워서 진짜 앱을 조작하며 찍는다.
// (puppeteer-core 는 브라우저를 따로 내려받지 않는다 — 있는 크롬을 쓴다)
//
// 구글 플레이 휴대전화 스크린샷 규격: 9:16 또는 16:9, 짧은 변 320px 이상.
// 1080 × 1920 으로 뽑는다 — 스토어에서 가장 선명하게 보이는 크기다.

import puppeteer from 'puppeteer-core'
import { mkdir, readdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

// 폰 화면 크기는 'CSS 픽셀' 로 360×640 이고, 여기에 화면 배율 3배가 붙어
// 실제 파일은 1080×1920 이 된다. 이 둘을 헷갈리면 안 된다 —
// 처음에 1080 을 CSS 폭으로 잡았더니 글자가 개미만 하고 질문이 19개나 들어가는,
// 폰이 아니라 데스크톱 화면이 찍혔다.
const W = 360      // CSS 픽셀 (폰에서 보이는 폭)
const H = 640
const DSF = 3      // 화면 배율 → 파일은 1080 × 1920
const OUT = 'store/screenshots'
const URL = process.env.SHOTS_URL || 'http://localhost:4173/'

// 설치된 크롬을 찾는다. 없으면 엣지라도 쓴다 — 둘 다 크로미움이라 결과가 같다.
const CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
]
const chrome = CANDIDATES.find((p) => p && existsSync(p))
if (!chrome) {
  console.error('크롬(또는 엣지)을 못 찾았습니다. 경로를 tools/shots.mjs 에 추가해 주세요.')
  process.exit(1)
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

// 화면에 원하는 글자가 나타날 때까지 기다린다.
// 고정 시간으로 기다리면 PC 가 느린 날 빈 화면이 찍힌다.
async function untilText(page, text, timeout = 12000) {
  const t0 = Date.now()
  while (Date.now() - t0 < timeout) {
    const ok = await page.evaluate((s) => document.body.innerText.includes(s), text)
    if (ok) return true
    await wait(200)
  }
  throw new Error(`화면에서 "${text}" 를 못 찾았습니다`)
}

// 글자로 버튼을 찾아 누른다. 좌표로 누르면 화면을 조금만 고쳐도 엉뚱한 데를 누른다.
async function clickText(page, selector, text) {
  const done = await page.evaluate((sel, s) => {
    const el = [...document.querySelectorAll(sel)].find((e) => e.innerText.includes(s))
    if (!el) return false
    el.click()
    return true
  }, selector, text)
  if (!done) throw new Error(`"${text}" 버튼을 못 찾았습니다 (${selector})`)
}

async function shot(page, n, name) {
  const file = join(OUT, `${String(n).padStart(2, '0')}-${name}.png`)
  await page.screenshot({ path: file })
  console.log(`  ✓ ${file}`)
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: 'new',
  // 자동재생 제한을 꺼 둔다. 안 그러면 스피커 아이콘이 '막힘' 상태로 고리를 뿜는
  // 순간이 찍힌다. 안드로이드 앱도 이 제한을 꺼 두므로 실제 앱과 같은 모습이다.
  args: [`--window-size=${W},${H}`, '--hide-scrollbars', '--autoplay-policy=no-user-gesture-required'],
})

try {
  if (existsSync(OUT)) for (const f of await readdir(OUT)) await rm(join(OUT, f))
  await mkdir(OUT, { recursive: true })

  const page = await browser.newPage()
  await page.setViewport({ width: W, height: H, deviceScaleFactor: DSF, isMobile: true, hasTouch: true })

  // 영어로 고정한다. 스토어 기본 등록정보가 영어다.
  // 소리는 켠 상태로 둔다 — 꺼 두면 스피커에 × 가 그려져서 고장처럼 보인다.
  await page.evaluateOnNewDocument(() => {
    try { localStorage.setItem('arcana.settings', JSON.stringify({ lang: 'en', reversals: true, sound: true, soundFix: 2 })) } catch {}
  })

  console.log(`크롬: ${chrome}`)
  console.log(`주소: ${URL}`)
  await page.goto(URL, { waitUntil: 'networkidle0' })

  // 1. 시작 화면 — 이 앱의 첫인상이자 가장 눈에 띄는 화면이다
  await page.waitForSelector('.intro')
  await wait(2500)                       // 사진이 다 뜨고 촛불 흔들림이 자리 잡을 때까지
  await shot(page, 1, 'intro')

  // 2. 질문 목록 — 이 앱이 무엇을 해 주는지가 한 화면에 다 보인다
  await page.click('.intro')
  await wait(2600)                       // 들어가는 연출 1.6초 + 여유
  await untilText(page, 'What')
  await shot(page, 2, 'questions')

  // 3. 카드 고르기 — '내가 직접 고른다' 가 이 앱의 핵심 경험이다
  await clickText(page, 'button.topic', 'not seeing')
  await page.waitForSelector('.pick-grid', { timeout: 20000 })   // 섞기(1.9초)가 끝나야 나온다
  await wait(900)
  await shot(page, 3, 'choose')

  // 4. 결과 — 자리 이름과 해석이 같이 보이는 화면
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.choose-card, .pick-card')].slice(0, 3).forEach((c) => c.click())
  })
  await wait(4000)
  await shot(page, 4, 'reading')

  // 5. 9개 국어 — 이걸 눈으로 보여주는 것이 전환율에 가장 크게 기여한다
  await page.click('.gear')
  await wait(900)
  await shot(page, 5, 'languages')

  console.log('\n끝. store/screenshots/ 에 5장.')
} finally {
  await browser.close()
}
