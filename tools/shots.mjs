// 플레이스토어 스크린샷 생성기  (npm run shots [언어…])
//
// 왜 스크립트인가: 스크린샷을 손으로 찍으면 화면을 고칠 때마다 다시 찍어야 하고,
// 크기·언어·어느 화면을 담을지가 사람 기억에만 남는다. 여기서 정해 두면
// UI 를 고친 뒤 한 줄로 다시 뽑는다. 아이콘(make-icons.mjs)과 같은 생각이다.
//
// 왜 9개 국어인가: 플레이는 등록정보마다 다른 스크린샷을 받는다. 일본 사용자가
// 일본어 화면을 보는 것과 영어 화면을 보는 것은 설치 전환율이 다르고, 전환율은
// 다시 검색 순위로 돌아온다. 영어 다섯 장을 아홉 나라에 똑같이 보여주는 건
// 가장 싼 자리를 비워 두는 것이다.
//
// 이 PC 에는 안드로이드 스튜디오가 없으므로 에뮬레이터로는 못 찍는다.
// 대신 이미 깔려 있는 크롬을 폰 크기로 띄워서 진짜 앱을 조작하며 찍는다.
// (puppeteer-core 는 브라우저를 따로 내려받지 않는다 — 있는 크롬을 쓴다)
//
// 구글 플레이 휴대전화 스크린샷 규격: 9:16 또는 16:9, 짧은 변 320px 이상.
// 1080 × 1920 으로 뽑는다 — 스토어에서 가장 선명하게 보이는 크기다.
//
//   npm run shots              9개 국어 전부
//   npm run shots -- ko ja     두 언어만

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

const ALL = ['en', 'ko', 'ja', 'es', 'pt', 'ru', 'tr', 'fr', 'de']
const langs = process.argv.slice(2).filter((a) => ALL.includes(a))
const TARGETS = langs.length ? langs : ALL

// 어느 질문으로 들어갈지 — 글자가 아니라 순번으로 고른다.
// 글자로 찾으면 언어마다 다른 문장을 적어 둬야 하고, 질문 문구를 한 번 다듬으면
// 아홉 군데가 조용히 깨진다. TOPICS 의 순서는 언어와 무관하게 같다.
// 5 = loveMiss('내가 놓치고 있는 건?') — hidden 스프레드라
// 자리 이름이 과거·현재·미래가 아닌, 이 앱만의 화면이 찍힌다.
const TOPIC_INDEX = 5

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

// 조건이 참이 될 때까지 기다린다. 고정 시간으로 기다리면 PC 가 느린 날 빈 화면이 찍힌다.
async function until(page, label, fn, timeout = 20000) {
  const t0 = Date.now()
  while (Date.now() - t0 < timeout) {
    if (await page.evaluate(fn)) return
    await wait(200)
  }
  throw new Error(`${label} — ${timeout}ms 안에 안 나타났습니다`)
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: 'new',
  // 자동재생 제한을 꺼 둔다. 안 그러면 스피커 아이콘이 '막힘' 상태로 고리를 뿜는
  // 순간이 찍힌다. 안드로이드 앱도 이 제한을 꺼 두므로 실제 앱과 같은 모습이다.
  args: [`--window-size=${W},${H}`, '--hide-scrollbars', '--autoplay-policy=no-user-gesture-required'],
})

async function run(lang) {
  const dir = join(OUT, lang)
  if (existsSync(dir)) for (const f of await readdir(dir)) await rm(join(dir, f))
  await mkdir(dir, { recursive: true })

  const page = await browser.newPage()
  const shot = async (n, name) => {
    const file = join(dir, `${String(n).padStart(2, '0')}-${name}.png`)
    await page.screenshot({ path: file })
    return file
  }

  try {
    await page.setViewport({ width: W, height: H, deviceScaleFactor: DSF, isMobile: true, hasTouch: true })

    // 언어를 심어 둔다. 소리는 켠 상태로 — 꺼 두면 스피커에 × 가 그려져 고장처럼 보인다.
    await page.evaluateOnNewDocument((l) => {
      try {
        localStorage.setItem('arcana.settings', JSON.stringify({ lang: l, reversals: true, sound: true, soundFix: 2 }))
      } catch {}
    }, lang)

    await page.goto(URL, { waitUntil: 'networkidle0' })

    // 1. 시작 화면 — 이 앱의 첫인상이자 가장 눈에 띄는 화면이다
    await page.waitForSelector('.intro')
    await wait(2500)                     // 사진이 다 뜨고 촛불 흔들림이 자리 잡을 때까지
    await shot(1, 'intro')

    // 2. 질문 목록 — 이 앱이 무엇을 해 주는지가 한 화면에 다 보인다
    await page.click('.intro')
    await until(page, '질문 목록', () => document.querySelectorAll('button.topic').length > 5)
    await wait(1800)                     // 들어가는 연출이 끝날 때까지
    await shot(2, 'questions')

    // 3. 카드 고르기 — '내가 직접 고른다' 가 이 앱의 핵심 경험이다
    await page.evaluate((i) => document.querySelectorAll('button.topic')[i].click(), TOPIC_INDEX)
    await page.waitForSelector('.pick-grid', { timeout: 25000 })   // 섞기(1.9초)가 끝나야 나온다
    await wait(900)
    await shot(3, 'choose')

    // 4. 결과 — 자리 이름과 해석이 같이 보이는 화면.
    //    언어 묶음을 그때 내려받으므로, 해설 글이 실제로 그려질 때까지 기다린다.
    await page.evaluate(() => {
      ;[...document.querySelectorAll('.pick-card')].slice(0, 3).forEach((c) => c.click())
    })
    await until(page, '결과 해설', () => {
      const p = document.querySelectorAll('.panel')
      return p.length >= 3 && [...p].some((e) => e.innerText.trim().length > 120)
    }, 30000)
    await wait(1200)                     // 뒤집기·올라오기 연출이 멈출 때까지
    await shot(4, 'reading')

    // 5. 9개 국어 — 이걸 눈으로 보여주는 것이 전환율에 가장 크게 기여한다
    await page.click('.gear')
    await until(page, '설정 창', () => !!document.querySelector('.sheet, .modal, .settings'))
    await wait(900)
    await shot(5, 'languages')

    return { lang, ok: true }
  } catch (e) {
    return { lang, ok: false, why: e.message }
  } finally {
    await page.close()
  }
}

try {
  console.log(`크롬: ${chrome}`)
  console.log(`주소: ${URL}`)
  console.log(`언어: ${TARGETS.join(' ')}\n`)

  const results = []
  for (const lang of TARGETS) {
    const r = await run(lang)
    results.push(r)
    console.log(r.ok ? `  ✓ ${lang}  5장 → ${OUT}/${lang}/` : `  ❌ ${lang}  ${r.why}`)
  }

  const bad = results.filter((r) => !r.ok)
  console.log(bad.length ? `\n❌ 실패 ${bad.length}개 / ${results.length}개` : `\n끝. ${results.length}개 국어 × 5장 = ${results.length * 5}장.`)
  process.exitCode = bad.length ? 1 : 0
} finally {
  await browser.close()
}
