// 시작 화면 사진을 아이콘에 넣으면 어떻게 되는지 본다 (고르기용 임시 도구).
//   node tools/icon-photo-test.mjs
//
// 왜 만들어 보는가: "사진을 넣으면 안 되나" 는 말로 답하면 믿기 어렵다.
// 512px 에서는 분명 멋있다. 문제는 홈 화면에서 실제로 보이는 48px 이다.
// 네 크기를 나란히 놓고 보면 답이 그림으로 나온다.

import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defs, mark, C } from './brand.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'assets', 'candidates')
const PHOTO = join(ROOT, 'public', 'intro', 'reader.webp')

const S = 1024

// 사진에서 얼굴 주변을 정사각형으로 잘라낸다.
// 원본은 941×1672 세로 사진이라 그대로 넣으면 좌우가 비고 얼굴이 작아진다.
async function cropFace(size, { zoom = 1 } = {}) {
  const m = await sharp(PHOTO).metadata()
  const side = Math.round(Math.min(m.width, m.height / 1.5) / zoom)
  const left = Math.round((m.width - side) / 2)
  const top = Math.round(m.height * 0.10)          // 얼굴이 위쪽 3분의 1에 있다
  return sharp(PHOTO)
    .extract({ left: Math.max(0, left), top, width: side, height: side })
    .resize(size, size)
    .toBuffer()
}

// ── 사진1: 사진만 꽉 채우고 금테 ─────────────────────────
async function photoOnly() {
  const base = await cropFace(S, { zoom: 1.15 })
  const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
    <defs>
      <radialGradient id="vig" cx="50%" cy="42%" r="72%">
        <stop offset="55%" stop-color="#000" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
      </radialGradient>
      ${defs}
    </defs>
    <rect width="${S}" height="${S}" fill="url(#vig)"/>
    <rect x="18" y="18" width="${S - 36}" height="${S - 36}" rx="150" fill="none"
          stroke="url(#gold)" stroke-width="20"/>
  </svg>`)
  return sharp(base).composite([{ input: overlay }]).png().toBuffer()
}

// ── 사진2: 사진을 배경으로 깔고 카드 부채꼴을 올린다 ─────
async function photoWithCards() {
  const base = await cropFace(S, { zoom: 1.0 })
  const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}">
    <defs>${defs}</defs>
    <rect width="${S}" height="${S}" fill="${C.bgDeep}" opacity="0.52"/>
    ${mark(S, 0.78)}
  </svg>`)
  return sharp(base).composite([{ input: overlay }]).png().toBuffer()
}

const MAKE = {
  '사진1': { name: '사진만 (금테)', fn: photoOnly },
  '사진2': { name: '사진 배경 + 카드 부채꼴', fn: photoWithCards },
}

await mkdir(OUT, { recursive: true })

const SIZES = [512, 128, 72, 48]
const PAD = 30
const SHEET_W = SIZES.reduce((n, s) => n + s + PAD, PAD)
const SHEET_H = 512 + PAD * 2

for (const [key, { name, fn }] of Object.entries(MAKE)) {
  const full = await fn()
  await sharp(full).png().toFile(join(OUT, `${key}-1024.png`))

  let x = PAD
  const layers = []
  for (const s of SIZES) {
    const buf = await sharp(full).resize(s).png().toBuffer()
    const maskSvg = Buffer.from(`<svg width="${s}" height="${s}"><rect width="${s}" height="${s}" rx="${s * 0.22}"/></svg>`)
    const rounded = await sharp(buf).composite([{ input: maskSvg, blend: 'dest-in' }]).png().toBuffer()
    layers.push({ input: rounded, left: Math.round(x), top: Math.round(PAD + (512 - s) / 2) })
    x += s + PAD
  }
  await sharp({ create: { width: SHEET_W, height: SHEET_H, channels: 4, background: '#eceaf2' } })
    .composite(layers).png().toFile(join(OUT, `${key}-비교.png`))
  console.log(`  ✓ ${key} — ${name}`)
}
console.log('\n맨 오른쪽 48 이 홈 화면 실제 크기.')
