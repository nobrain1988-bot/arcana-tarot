// 미리보기용 '한 파일짜리' 빌드
//
// 왜 필요한가:
//   보통 빌드(dist/)는 index.html + js + css 로 파일이 쪼개진다. 안드로이드 앱에는 그게 맞지만,
//   링크 하나로 폰에서 열어보려면 파일이 하나여야 한다.
//   이 스크립트는 dist 의 js·css 를 index.html 안으로 밀어넣어 단일 html 을 만든다.
//
// 실행: npm run build:single  →  dist-single/arcana.html

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const DIST = 'dist'
const OUT_DIR = 'dist-single'
const OUT = join(OUT_DIR, 'arcana.html')

let html = readFileSync(join(DIST, 'index.html'), 'utf8')
const assets = readdirSync(join(DIST, 'assets'))

// ⚠️ 치환할 때 반드시 '함수'를 넘긴다.
//    문자열을 넘기면 그 안의 $& · $1 같은 글자를 JS가 치환 기호로 해석해서
//    번들 코드 중간에 엉뚱한 내용이 박힌다(React 코드 안에 "$&" 가 실제로 들어있다).
//    함수 형태는 이 해석을 하지 않는다.
const put = (re, text) => { html = html.replace(re, () => text) }

// 1) 쓰지 않는 미리불러오기 링크 제거 — 어차피 아래에서 본문을 통째로 넣는다
html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, '')

// 2) <link rel=stylesheet href=...css> → <style>...</style>
for (const f of assets.filter((f) => f.endsWith('.css'))) {
  const css = readFileSync(join(DIST, 'assets', f), 'utf8')
  put(new RegExp(`<link[^>]*href="[^"]*${f}"[^>]*>`), `<style>\n${css}\n</style>`)
}

// 3) <script src=...js> → <script>...</script>
//    본문에 </script> 문자열이 있으면 태그가 조기 종료되므로 쪼개서 넣는다.
for (const f of assets.filter((f) => f.endsWith('.js'))) {
  const js = readFileSync(join(DIST, 'assets', f), 'utf8').replace(/<\/script>/g, '<\\/script>')
  put(new RegExp(`<script[^>]*src="[^"]*${f}"[^>]*></script>`), `<script type="module">\n${js}\n</script>`)
}

// 4) 검증 — <head> 안에 외부 파일 참조가 남아 있으면 폰에서 열었을 때 깨진다.
//    (번들 코드 '안에' 우연히 들어있는 문자열까지 잡지 않도록 태그 속성만 본다)
const leftover = html.match(/<(?:script|link)[^>]*(?:src|href)="[^"]*assets\/[^"]+"[^>]*>/g)
if (leftover) {
  console.error('✗ 인라인 실패:', leftover.join(', '))
  process.exit(1)
}

mkdirSync(OUT_DIR, { recursive: true })
writeFileSync(OUT, html)
console.log(`✓ ${OUT} — ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`)

// 5) 아티팩트(공유 링크)용 판본
//    아티팩트는 <html>·<head>·<body> 껍데기를 자기가 씌우므로, 알맹이만 남겨야 한다.
//    → <title> + <style> + <body> 안쪽 + <script> 만 뽑는다.
const ART = join(OUT_DIR, 'arcana.artifact.html')

// Vite 는 <script> 를 <head> 에 넣는다. <body> 안쪽만 떼면 앱 코드가 통째로 빠지므로
// 스크립트는 문서 전체에서 따로 긁어온 뒤 마지막에 붙인다.
const styleBlocks = [...html.matchAll(/<style>[\s\S]*?<\/style>/g)].map((m) => m[0]).join('\n')
const scriptBlocks = [...html.matchAll(/<script[^>]*>[\s\S]*?<\/script>/g)].map((m) => m[0]).join('\n')
const bodyInner = ((html.match(/<body[^>]*>([\s\S]*)<\/body>/) || [])[1] || '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/g, '')   // 아래에서 다시 붙이므로 중복 제거

// 제목은 한 단어짜리 고유명으로 둔다. 갤러리 목록에서 이름으로 읽혀야 하기 때문이다.
const artifact = `<title>Arcana</title>\n${styleBlocks}\n${bodyInner}\n${scriptBlocks}\n`
writeFileSync(ART, artifact)

if (!/id="root"/.test(artifact) || Buffer.byteLength(artifact) < 100 * 1024) {
  console.error('✗ 아티팩트 판본에 앱 코드가 안 들어갔다')
  process.exit(1)
}
console.log(`✓ ${ART} — ${(Buffer.byteLength(artifact) / 1024).toFixed(0)} KB`)
