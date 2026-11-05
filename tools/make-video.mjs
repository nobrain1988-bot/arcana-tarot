// 홍보 영상 만들기  (npm run video)
//
// 앱을 실제로 조작하면서 화면을 녹화하고, 자막을 얹어 세로 영상 한 편을 만든다.
// 유튜브 쇼츠 규격(1080×1920)이다 — 이 앱이 세로 화면이고, 쇼츠가 노출이 가장 넓다.
//
// 왜 스크립트인가: 손으로 녹화하면 화면을 고칠 때마다 다시 찍어야 하고,
// 어느 장면을 몇 초 보여줄지가 사람 기억에만 남는다. 여기 적어 두면 한 줄로 다시 뽑는다.
//
// 자막은 **브라우저 안에서** 그린다. ffmpeg 의 drawtext 나 SVG 로 한글을 얹으면
// 글꼴이 깨지기 쉽다. 페이지에 자막 요소를 넣으면 앱이 쓰는 글꼴로 그대로 그려진다.
//
// 광고법 주의: 효능·적중률을 말하지 않는다. '제가 만든 앱' 과 면책 문구를 끝에 넣는다.
// 자세한 기준은 README 가 아니라 이 파일의 SCENES 자막에 그대로 반영돼 있다.

import puppeteer from 'puppeteer-core'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const URL = process.env.SHOTS_URL || 'http://localhost:5174/'
const W = 360          // CSS 픽셀
const H = 640
const DSF = 3          // → 1080 × 1920
const FPS = 15
const OUT = 'video'
const FRAMES = join(OUT, 'frames')

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
].find((p) => p && existsSync(p))
if (!CHROME) { console.error('크롬을 못 찾았습니다.'); process.exit(1) }

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

// ── 자막 ────────────────────────────────────────────────────
// top = 위쪽에 띄움(카드가 아래에 있을 때), bottom = 아래쪽
const CAPTION_CSS = `
#vcap {
  position: fixed; left: 0; right: 0; z-index: 99999;
  padding: 0 18px; text-align: center; pointer-events: none;
  font-family: -apple-system, 'Segoe UI', 'Malgun Gothic', sans-serif;
  opacity: 0; transition: opacity .35s ease;
}
#vcap.on { opacity: 1; }
#vcap .box {
  display: inline-block; background: #0a0818;
  border: 1.5px solid rgba(216,178,107,.6); border-radius: 13px;
  padding: 10px 15px; color: #fff; font-size: 16px; font-weight: 700;
  line-height: 1.45; letter-spacing: -.01em; word-break: keep-all;
  box-shadow: 0 10px 34px rgba(0,0,0,.85), 0 0 0 6px rgba(10,8,24,.55);
}
#vcap .sub { display: block; margin-top: 4px; font-size: 12px; font-weight: 500; color: #d8b26b; }
`

async function setCaption(page, text, { pos = 'bottom', sub = null } = {}) {
  await page.evaluate(
    (t, p, s) => {
      const el = document.getElementById('vcap')
      if (!el) return
      el.style.top = p === 'top' ? '14px' : ''
      el.style.bottom = p === 'top' ? '' : '18px'
      el.innerHTML = t ? `<span class="box">${t}${s ? `<span class="sub">${s}</span>` : ''}</span>` : ''
      el.classList.toggle('on', !!t)
    },
    text, pos, sub
  )
}

// ── 장면 ────────────────────────────────────────────────────
// 각 장면은 { 자막, 위치, 머무는 시간(초), 그 장면에서 할 조작 }
const SCENES = [
  {
    cap: '타로 앱을 하나 만들었어요',
    sub: '직접 만든 앱이에요',
    pos: 'bottom', hold: 2.6,
    act: async (page) => { await page.waitForSelector('.intro'); await wait(900) },
  },
  {
    cap: '스프레드 말고<br><b>질문</b>으로 고릅니다',
    pos: 'bottom', hold: 3.2,
    act: async (page) => {
      await page.click('.intro')
      await page.waitForFunction(() => document.querySelectorAll('button.topic').length > 5, { timeout: 20000 })
      await wait(1400)
    },
  },
  {
    cap: '연애 · 짝사랑 · 일 · 돈 · 건강',
    pos: 'top', hold: 2.8,
    act: async (page) => {
      // 질문 목록을 천천히 훑는다 — 이 앱이 뭘 해 주는지가 여기서 다 보인다
      for (let i = 0; i < 16; i++) {
        await page.evaluate(() => window.scrollBy(0, 26))
        await wait(55)
      }
      await wait(500)
    },
  },
  {
    cap: '「내가 놓치고 있는 건?」',
    pos: 'top', hold: 2.4,
    act: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 0))
      await wait(400)
      await page.evaluate(() => document.querySelectorAll('button.topic')[5].click())
      await page.waitForSelector('.pick-grid', { timeout: 25000 })
      await wait(500)
    },
  },
  {
    cap: '카드는 <b>직접</b> 뽑아요',
    sub: '손가락이 닿기 전까지 아무것도 정해지지 않아요',
    pos: 'top', hold: 3.4,
    act: async (page) => {
      // 한 장씩 천천히 — 고르는 맛이 이 앱의 핵심이다
      for (const i of [0, 1, 2]) {
        await page.evaluate((k) => document.querySelectorAll('.pick-card')[k * 5 + 2].click(), i)
        await wait(620)
      }
      await wait(600)
    },
  },
  {
    cap: '뽑힌 카드에서 답을 만듭니다',
    pos: 'bottom', hold: 4.2,
    act: async (page) => {
      await page.waitForFunction(
        () => [...document.querySelectorAll('.panel')].some((e) => e.innerText.trim().length > 120),
        { timeout: 30000 }
      )
      await wait(2200)
    },
  },
  {
    cap: '자리마다 뜻이 다르고',
    sub: '보이는 것 / 가려진 것 / 알아야 할 것',
    pos: 'bottom', hold: 3.6,
    act: async (page) => {
      for (let i = 0; i < 26; i++) { await page.evaluate(() => window.scrollBy(0, 22)); await wait(55) }
      await wait(500)
    },
  },
  {
    cap: '세 장이 어떻게<br>하나의 답이 되는지까지',
    pos: 'bottom', hold: 3.8,
    act: async (page) => {
      await page.evaluate(() => {
        const el = [...document.querySelectorAll('.eyebrow')].find((e) => e.innerText.length < 20)
        if (el) el.scrollIntoView({ block: 'center' })
      })
      await wait(2400)
    },
  },
  {
    cap: '78장 전부 · 9개 국어<br>계정 없이, 무료로',
    sub: '※ 재미와 성찰을 위한 앱이에요. 의료·법률·재정 상담을 대신하지 않아요.',
    pos: 'bottom', hold: 4.6,
    act: async (page) => {
      for (let i = 0; i < 22; i++) { await page.evaluate(() => window.scrollBy(0, -30)); await wait(50) }
      await wait(1600)
    },
  },
]

// ── 녹화 ────────────────────────────────────────────────────
await rm(OUT, { recursive: true, force: true })
await mkdir(FRAMES, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [`--window-size=${W},${H}`, '--hide-scrollbars', '--autoplay-policy=no-user-gesture-required'],
})

let n = 0
let recordedMs = 0
const stamps = []   // { name, t } — 프레임마다 받은 시각
try {
  const page = await browser.newPage()
  await page.setViewport({ width: W, height: H, deviceScaleFactor: DSF, isMobile: true, hasTouch: true })
  await page.evaluateOnNewDocument(() => {
    try {
      localStorage.setItem('arcana.settings', JSON.stringify({ lang: 'ko', reversals: true, sound: false, soundFix: 2 }))
    } catch {}
  })
  await page.goto(URL, { waitUntil: 'networkidle0' })

  // 자막 요소를 심는다
  await page.addStyleTag({ content: CAPTION_CSS })
  await page.evaluate(() => {
    const d = document.createElement('div')
    d.id = 'vcap'
    document.body.appendChild(d)
  })

  // CDP 화면중계. page.screenshot() 은 1080×1920 에서 초당 8장이 한계였고
  // 그 정도면 스크롤이 눈에 띄게 끊긴다. 중계는 브라우저가 바뀐 프레임을 직접 밀어 준다.
  const client = await page.createCDPSession()
  const pending = []
  client.on('Page.screencastFrame', async (f) => {
    const name = `f${String(n++).padStart(5, '0')}.jpg`
    // 받은 시각을 같이 적어 둔다. 중계는 '바뀔 때마다' 보내므로 간격이 제각각이다 —
    // 움직임이 많은 첫 화면은 초당 60장, 가만히 있는 구간은 몇 장이다.
    stamps.push({ name, t: (f.metadata && f.metadata.timestamp) || Date.now() / 1000 })
    pending.push(writeFile(join(FRAMES, name), Buffer.from(f.data, 'base64')))
    try { await client.send('Page.screencastFrameAck', { sessionId: f.sessionId }) } catch {}
  })
  await client.send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: 1080, maxHeight: 1920, everyNthFrame: 1 })
  const t0 = Date.now()

  const shoot = (seconds) => wait(seconds * 1000)

  for (const [i, sc] of SCENES.entries()) {
    await setCaption(page, sc.cap, { pos: sc.pos, sub: sc.sub })
    // 조작과 촬영을 같이 — 조작 중의 움직임이 영상의 전부다
    await Promise.all([sc.act(page), shoot(sc.hold)])
    console.log(`  ✓ ${i + 1}/${SCENES.length}  ${String(sc.cap).replace(/<[^>]+>/g, ' ').slice(0, 30)}`)
  }

  // 끝 화면 — 어디서 받는지
  await setCaption(page, '구글 플레이에서<br><b>Tarot Card Reading</b>', { pos: 'bottom', sub: '검색해 보세요' })
  await shoot(2.6)

  recordedMs = Date.now() - t0
  try { await client.send('Page.stopScreencast') } catch {}
  await Promise.all(pending)
} finally {
  await browser.close()
}

console.log(`\n프레임 ${n}장 → 영상으로 묶는 중...`)

// ── ffmpeg 로 묶기 ──────────────────────────────────────────
// 프레임마다 머문 시간이 다르므로 concat 목록에 duration 을 하나씩 적는다.
// 고정 fps 로 묶었더니 움직임이 많던 첫 화면이 3초가 아니라 12초로 늘어졌다.
// 상한은 4초로 둔다 — 0.5초로 조였더니 자막만 떠 있는 정지 구간이 통째로 날아갔다.
stamps.sort((a, b) => a.t - b.t)
const lines = []
for (let i = 0; i < stamps.length; i++) {
  // 마지막 장은 '어디서 받는지' 안내 화면이다. 다음 프레임이 없어 간격을 못 재므로
  // 따로 2.6초를 준다 — 안 주면 0.07초만 스치고 끝나서 안내가 아예 안 읽힌다.
  const dur = i + 1 < stamps.length ? Math.min(Math.max(stamps[i + 1].t - stamps[i].t, 1 / 60), 4) : 2.6
  lines.push(`file '${stamps[i].name}'`, `duration ${dur.toFixed(4)}`)
}
lines.push(`file '${stamps[stamps.length - 1].name}'`)
const listPath = join(FRAMES, 'list.txt')
await writeFile(listPath, lines.join('\n'))

const out = join(OUT, 'arcana-shorts.mp4')
execFileSync('ffmpeg', [
  '-y', '-hide_banner', '-loglevel', 'error',
  '-f', 'concat', '-safe', '0', '-i', listPath,
  '-vf', `fps=${FPS},scale=1080:1920:flags=lanczos,format=yuv420p`,
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '20',
  '-movflags', '+faststart',
  out,
], { stdio: 'inherit' })

const secs = (recordedMs / 1000).toFixed(1)
console.log(`\n✓ ${out}  약 ${secs}초, ${FPS}fps, 1080×1920`)
console.log('  소리는 없습니다 — 유튜브 오디오 보관함에서 음악을 얹으세요.')
