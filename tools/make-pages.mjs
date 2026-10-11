// 9개 국어 랜딩 페이지 + sitemap 생성.  node make-pages.mjs
//
// 왜 9개나 만드는가: 지금 랜딩 페이지는 영어·한국어 둘뿐이다. 타로 검색량이 가장 큰
// 시장은 브라질(tarô), 스페인어권(tarot), 일본, 러시아, 터키인데 전부 비어 있다.
// 구글 웹 검색은 그 언어로 쓰인 페이지가 있어야 그 언어 검색 결과에 넣어 준다 —
// 영어 페이지 하나로는 'tarô grátis' 를 검색하는 사람에게 닿지 않는다.
//
// 분류 이름(연애·짝사랑·일·돈·건강)은 앱의 번역 파일에서 직접 읽는다.
// 손으로 다시 쓰면 앱 화면과 웹 문구가 어긋나고, 그건 '설명과 다르다' 는 리뷰로 돌아온다.
//
// 질문 개수는 적지 않는다. 적으면 질문을 더할 때마다 9개 파일을 다시 고쳐야 하고,
// 고치기 전까지는 틀린 숫자가 떠 있게 된다.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadPack } from '../src/i18n/index.js'
import { T } from './pages-text.mjs'
import { defs, mark } from './brand.mjs'

const SITE = 'https://nobrain1988-bot.github.io/arcana-tarot'
const PLAY = 'https://play.google.com/store/apps/details?id=com.obok.arcana'
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOCS = path.join(ROOT, 'docs')

const LANGS = Object.keys(T)                        // en 이 기본(루트), 나머지는 /<code>/
const href = (c) => (c === 'en' ? `${SITE}/` : `${SITE}/${c}/`)
const rel = (c, f) => (c === 'en' ? f : `../${f}`)  // 하위 폴더에서는 한 단계 올라간다

// 이미 엔티티로 쓴 것(&mdash; 등)은 건드리지 않는다
const esc = (s) => String(s).replace(/&(?!#?\w+;)/g, '&amp;')
const attr = (s) => esc(s).replace(/"/g, '&quot;')

// 머리글 아이콘 — 앱 아이콘과 같은 그림을 tools/brand.mjs 에서 가져온다.
// 전에는 SVG 를 여기에 베껴 뒀다가 아이콘을 바꾸면 이 페이지만 옛 그림이 남았다.
const ICON = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arcana">
      <defs>${defs}</defs>
      <rect width="1024" height="1024" rx="228" fill="url(#bg)"/>
      ${mark(1024, 0.92)}
    </svg>`

const CSS = `  :root {
    --bg: #0b0918; --lift: #16123099; --line: #2e2757;
    --gold: #d8b26b; --gold-hi: #e3c07c; --gold-dim: #8d7a4f;
    --ink: #ece9f6; --muted: #948cb5;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 0; background: var(--bg); color: var(--ink);
    font: 16px/1.7 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-image: radial-gradient(ellipse 80% 50% at 50% -10%, #2a1f57 0%, transparent 70%);
    background-repeat: no-repeat;
  }
  main { max-width: 680px; margin: 0 auto; padding: 72px 20px 64px; }
  header { text-align: center; margin-bottom: 44px; }
  .icon { width: 104px; height: 104px; margin-bottom: 22px; }
  h1 {
    font-size: 42px; margin: 0 0 10px; letter-spacing: .01em; font-weight: 600;
    background: linear-gradient(135deg, var(--gold-hi), var(--gold-dim));
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .tagline { color: var(--muted); font-size: 17px; margin: 0 0 26px; }
  .cta {
    display: inline-block; padding: 14px 30px; border-radius: 999px;
    background: linear-gradient(135deg, var(--gold-hi), #c9a15c);
    color: #16122a; font-weight: 700; text-decoration: none; font-size: 16px;
    box-shadow: 0 10px 30px rgba(216,178,107,.22);
  }
  .cta:hover { color: #0b0918; filter: brightness(1.06); }
  .cta-sub { display: block; margin-top: 10px; font-size: 13.5px; color: var(--muted); }
  h2 {
    font-size: 13px; text-transform: uppercase; letter-spacing: .14em;
    color: var(--gold-dim); margin: 48px 0 16px; font-weight: 600;
  }
  p { color: #c8c3dd; }
  .lead { font-size: 17px; }
  .grid { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
  .card {
    background: var(--lift); border: 1px solid var(--line);
    border-radius: 12px; padding: 16px 18px;
  }
  .card h3 { margin: 0 0 5px; font-size: 15px; color: var(--gold); font-weight: 600; }
  .card p { margin: 0; font-size: 14px; color: var(--muted); line-height: 1.6; }
  .shots { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 6px; margin: 0 -2px; }
  .shots img {
    width: 168px; flex: 0 0 auto; border-radius: 12px;
    border: 1px solid var(--line); background: #140f2c;
  }
  .langs { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; padding: 0; margin: 0; }
  .langs li, .langs a {
    border: 1px solid var(--line); border-radius: 999px;
    padding: 5px 13px; font-size: 14px; color: #bfb8db;
    text-decoration: none; display: inline-block;
  }
  .langs a:hover { border-color: var(--gold-dim); color: var(--gold-hi); }
  .langs a[aria-current] { border-color: var(--gold-dim); color: var(--gold); }
  a { color: var(--gold); }
  a:hover { color: var(--gold-hi); }
  footer {
    margin-top: 64px; padding-top: 24px; border-top: 1px solid var(--line);
    color: var(--muted); font-size: 13.5px; line-height: 1.8;
  }
  @media (max-width: 560px) {
    main { padding: 48px 18px 48px; }
    h1 { font-size: 34px; }
  }`

// 한국어는 단어 중간에서 줄이 끊기면 읽기 나쁘다
const EXTRA = { ko: '\n  body { word-break: keep-all; }' }

async function page(code) {
  const v = T[code]
  const pack = await loadPack(code)
  const cats = pack.ui.cats
  const note = (pack.ui.catNote && pack.ui.catNote.health) || ''

  // 분류 카드 — 이름은 앱에서 그대로 가져오고, 설명은 그 분류의 질문들이
  // 실제로 무엇을 묻는지 한 줄로 줄인 것이다.
  const cards = [
    [cats.love, v.blurb.love],
    [cats.crush, v.blurb.crush],
    [cats.work, v.blurb.work],
    [cats.life, v.blurb.life],
    [cats.health, note],
    [v.daily.h, v.daily.p],
  ]
    .filter(([h, p]) => h && p)
    .map(([h, p]) => `<div class="card"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`)
    .join('\n    ')

  const hreflang = LANGS.map((c) => `<link rel="alternate" hreflang="${c}" href="${href(c)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${SITE}/">`)
    .join('\n')

  const switcher = LANGS.map((c) =>
    `<a href="${href(c)}" hreflang="${c}"${c === code ? ' aria-current="page"' : ''}>${esc(T[c].name)}</a>`
  ).join('')

  return `<!doctype html>
<html lang="${code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>${esc(v.title)}</title>
<meta name="description" content="${attr(v.desc)}">

<!-- 같은 내용이 9개 언어로 있다. canonical 과 hreflang 이 없으면 서로의 순위를
     깎아먹고, 구글이 어느 페이지를 어느 나라에 보여줄지 못 고른다. -->
<link rel="canonical" href="${href(code)}">
${hreflang}

<!-- 링크를 공유했을 때 카드로 펼쳐지게 한다. 없으면 제목 없는 맨 링크로 보이고
     클릭률이 눈에 띄게 떨어진다. -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Arcana">
<meta property="og:locale" content="${code}">
<meta property="og:title" content="Arcana — ${attr(v.tagline)}">
<meta property="og:description" content="${attr(v.ogDesc)}">
<meta property="og:url" content="${href(code)}">
<meta property="og:image" content="${SITE}/og.png">
<meta property="og:image:width" content="1024">
<meta property="og:image:height" content="500">
<meta name="twitter:card" content="summary_large_image">

<!-- 구글이 '앱' 으로 알아보게 하는 구조화 데이터. 검색 결과에 가격·플랫폼이 붙는다. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Arcana",
  "operatingSystem": "Android 7.0+",
  "applicationCategory": "LifestyleApplication",
  "inLanguage": ${JSON.stringify(LANGS)},
  "description": ${JSON.stringify(v.desc)},
  "url": "${href(code)}",
  "installUrl": "${PLAY}",
  "downloadUrl": "${PLAY}",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "JBRO Company" }
}
</script>

<style>
${CSS}${EXTRA[code] || ''}
</style>
</head>
<body>
<main>

  <header>
    ${ICON}
    <h1>Arcana</h1>
    <p class="tagline">${esc(v.tagline)}</p>
    <a class="cta" href="${PLAY}">${esc(v.cta)}</a>
    <span class="cta-sub">${esc(v.ctaSub)}</span>
  </header>

  <p class="lead">${esc(v.lead)}</p>

  <h2>${esc(v.hPick)}</h2>
  <p>${esc(v.pPick)}</p>

  <div class="shots">
    <img src="${rel(code, 'shots/01-intro.png')}" alt="${attr(v.alts[0])}" loading="lazy" width="168">
    <img src="${rel(code, 'shots/02-questions.png')}" alt="${attr(v.alts[1])}" loading="lazy" width="168">
    <img src="${rel(code, 'shots/03-choose.png')}" alt="${attr(v.alts[2])}" loading="lazy" width="168">
    <img src="${rel(code, 'shots/04-reading.png')}" alt="${attr(v.alts[3])}" loading="lazy" width="168">
  </div>

  <h2>${esc(v.hAsk)}</h2>
  <p>${v.pAsk}</p>

  <div class="grid">
    ${cards}
  </div>

  <h2>${esc(v.hCalc)}</h2>
  <p>${esc(v.pCalc)}</p>

  <h2>${esc(v.hLangs)}</h2>
  <ul class="langs">
    ${LANGS.map((c) => `<li>${esc(T[c].name)}</li>`).join('')}
  </ul>
  <p>${esc(v.pLangs)}</p>

  <h2>${esc(v.hPriv)}</h2>
  <p>${v.pPriv}</p>
  <p><a href="${rel(code, 'privacy.html')}">${esc(v.privLink)}</a></p>

  <h2>${esc(v.other)}</h2>
  <div class="langs">${switcher}</div>

  <footer>
    Arcana · <code>com.obok.arcana</code><br>
    ${esc(v.pub)}<br>
    <a href="mailto:leejiwon44@nate.com">leejiwon44@nate.com</a> ·
    <a href="${rel(code, 'privacy.html')}">${esc(v.privName)}</a> ·
    <a href="${PLAY}">Google Play</a><br>
    ${esc(v.disc)}
  </footer>

</main>
</body>
</html>
`
}

for (const code of LANGS) {
  const dir = code === 'en' ? DOCS : path.join(DOCS, code)
  fs.mkdirSync(dir, { recursive: true })
  const html = await page(code)
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  console.log(`${code.padEnd(3)} ${String(html.length).padStart(6)} B  ${code === 'en' ? 'docs/index.html' : `docs/${code}/index.html`}`)
}

// sitemap — 9개 전부 + 각 항목마다 전체 hreflang 묶음
const alts = LANGS.map((c) => `    <xhtml:link rel="alternate" hreflang="${c}" href="${href(c)}"/>`)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`)
  .join('\n')
const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(DOCS, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map((c) => `  <url>
    <loc>${href(c)}</loc>
    <lastmod>${today}</lastmod>
${alts}
  </url>`).join('\n')}
  <url><loc>${SITE}/privacy.html</loc><lastmod>${today}</lastmod></url>
</urlset>
`
)
console.log(`\nsitemap.xml — 주소 ${LANGS.length + 1} 개`)
