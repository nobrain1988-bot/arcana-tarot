// 앱 아이콘 · 스플래시 원본 생성기  (npm run icons)
//
// 왜 스크립트인가: 아이콘을 손으로 그려 PNG 로 갖고 있으면, 색을 한 번 바꿀 때마다
// 다시 그려야 하고 '무슨 색이었는지'가 파일 안에 갇힌다. 여기서는 앱과 같은 색 상수를
// 쓰고 도형을 계산해서 그린다 → 색·모양을 바꾸려면 이 파일만 고치면 된다.
//
// 만드는 것 (assets/):
//   icon.png             1024  일반 아이콘 (배경+문양)
//   icon-foreground.png  1024  적응형 아이콘 앞면 (문양만, 여백 넉넉히)
//   icon-background.png  1024  적응형 아이콘 뒷면 (배경만)
//   splash.png           2732  실행 화면
//   splash-dark.png      2732  실행 화면 (다크) — 이 앱은 원래 다크라 동일
//
// 이 파일들을 @capacitor/assets 가 읽어서 안드로이드의 수십 가지 크기로 뽑아준다.

import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'assets')

// 앱과 같은 색 (src/styles.css · capacitor.config.json 과 일치시킬 것)
const C = {
  bgDeep: '#0b0918',   // 앱 배경
  bgLift: '#2a1f57',   // 가운데 살짝 밝은 보라
  goldHi: '#e3c07c',
  goldMid: '#d8b26b',
  goldLo: '#c9a15c',
}

// 꼭짓점 n개짜리 별. 긴 반지름과 짧은 반지름을 번갈아 찍는다.
function starPath(cx, cy, points, rOuter, rInner) {
  const step = Math.PI / points
  const d = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? rOuter : rInner
    const a = -Math.PI / 2 + i * step          // -90도(위)에서 시작
    d.push(`${i === 0 ? 'M' : 'L'} ${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return d.join(' ') + ' Z'
}

const defs = `
  <radialGradient id="bg" cx="50%" cy="42%" r="72%">
    <stop offset="0%"   stop-color="${C.bgLift}"/>
    <stop offset="100%" stop-color="${C.bgDeep}"/>
  </radialGradient>
  <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="${C.goldHi}"/>
    <stop offset="55%"  stop-color="${C.goldMid}"/>
    <stop offset="100%" stop-color="${C.goldLo}"/>
  </linearGradient>`

// 문양: 8각별 + 가는 금테.
// 작은 장식별을 넣어봤다가 뺐다 — 런처 크기(48px)에서는 안 보이고,
// 큰 크기에서는 별 광선과 겹쳐 지저분해진다. 아이콘은 한 덩어리로 읽혀야 한다.
function mark(size, scale = 1) {
  const c = size / 2
  const R = size * 0.30 * scale          // 별 긴 반지름
  const r = size * 0.115 * scale         // 별 짧은 반지름
  const ring = size * 0.425 * scale

  return `
    <circle cx="${c}" cy="${c}" r="${ring}" fill="none"
            stroke="url(#gold)" stroke-width="${size * 0.011 * scale}" opacity="0.55"/>
    <path d="${starPath(c, c, 8, R, r)}" fill="url(#gold)"/>
    <circle cx="${c}" cy="${c}" r="${size * 0.052 * scale}" fill="${C.bgDeep}" opacity="0.92"/>`
}

const svgIcon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${defs}</defs>
  <rect width="${size}" height="${size}" fill="url(#bg)"/>
  ${mark(size, 1)}
</svg>`

// 적응형 아이콘 앞면: 시스템이 원형·둥근네모로 잘라내므로 가운데 66% 안에만 그린다.
const svgForeground = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${defs}</defs>
  ${mark(size, 0.62)}
</svg>`

const svgBackground = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${defs}</defs>
  <rect width="${size}" height="${size}" fill="url(#bg)"/>
</svg>`

const svgSplash = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${defs}</defs>
  <rect width="${size}" height="${size}" fill="url(#bg)"/>
  ${mark(size, 0.30)}
</svg>`

const png = (svg, file) =>
  sharp(Buffer.from(svg)).png().toFile(join(OUT, file)).then(() => console.log('  ✓', file))

await mkdir(OUT, { recursive: true })
await Promise.all([
  png(svgIcon(1024), 'icon.png'),
  png(svgForeground(1024), 'icon-foreground.png'),
  png(svgBackground(1024), 'icon-background.png'),
  png(svgSplash(2732), 'splash.png'),
  png(svgSplash(2732), 'splash-dark.png'),
])

// 원본 SVG 도 남긴다. 스토어 그래픽·홍보물에서 확대해 써야 할 때 필요하다.
await writeFile(join(OUT, 'icon.svg'), svgIcon(1024), 'utf8')
console.log('  ✓ icon.svg (벡터 원본)')
console.log('\nassets/ 생성 완료 → 다음: npx @capacitor/assets generate --android')
