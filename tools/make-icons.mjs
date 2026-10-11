// 앱 아이콘 · 스플래시 · 스토어 아이콘 원본 생성기  (npm run icons)
//
// 왜 스크립트인가: 아이콘을 손으로 그려 PNG 로 갖고 있으면, 색을 한 번 바꿀 때마다
// 다시 그려야 하고 '무슨 색이었는지'가 파일 안에 갇힌다. 그림은 tools/brand.mjs 에
// 한 벌만 있고 여기서는 크기와 쓰임만 정한다 → 아이콘·스플래시·스토어·그래픽 이미지가
// 절대 따로 놀지 않는다.
//
// 만드는 것 (assets/):
//   icon.png             1024  일반 아이콘 (배경+문양)
//   icon-foreground.png  1024  적응형 아이콘 앞면 (문양만, 여백 넉넉히)
//   icon-background.png  1024  적응형 아이콘 뒷면 (배경만)
//   splash.png           2732  실행 화면
//   splash-dark.png      2732  실행 화면 (다크) — 이 앱은 원래 다크라 동일
// 그리고 public/ 의 PWA 아이콘, store/icon-512.png (플레이 콘솔에 올리는 것).
//
// 이 파일들을 @capacitor/assets 가 읽어서 안드로이드의 수십 가지 크기로 뽑아준다.

import sharp from 'sharp'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { svgIcon, svgForeground, svgBackground } from './brand.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'assets')
const PUB = join(ROOT, 'public')
const STORE = join(ROOT, 'store')

// 적응형 아이콘 앞면: 안드로이드가 원형·둥근네모·물방울 등으로 잘라낸다.
// 108dp 중 실제로 보이는 건 72dp, 어떤 모양으로 잘려도 남는 안전지대는 가운데 66dp 다.
// 부채꼴은 가로로 넓어서 특히 조심해야 한다 — 0.58 로 줄여야 양 끝 카드가 안 잘린다.
const FOREGROUND = 0.58
const MASKABLE = 0.62     // PWA 쪽은 안드로이드보다 덜 깎는다
const SPLASH = 0.26       // 실행 화면은 가운데 작게

const png = (svg, file, dir = OUT) =>
  sharp(Buffer.from(svg)).png().toFile(join(dir, file)).then(() => console.log('  ✓', file))

await mkdir(OUT, { recursive: true })
await mkdir(PUB, { recursive: true })
await mkdir(STORE, { recursive: true })

await Promise.all([
  png(svgIcon(1024), 'icon.png'),
  png(svgForeground(1024, FOREGROUND), 'icon-foreground.png'),
  png(svgBackground(1024), 'icon-background.png'),
  png(svgIcon(2732, SPLASH), 'splash.png'),
  png(svgIcon(2732, SPLASH), 'splash-dark.png'),

  // 홈 화면에 추가(PWA)용 — 폰 브라우저에서 앱처럼 띄울 때 쓴다.
  // public/ 에 두면 Vite 가 dist 로 복사하고, 그대로 앱 번들에도 들어간다.
  png(svgIcon(192), 'pwa-192.png', PUB),
  png(svgIcon(512), 'pwa-512.png', PUB),
  png(svgIcon(512, MASKABLE), 'pwa-maskable-512.png', PUB),

  // 플레이 콘솔에 올리는 앱 아이콘 (512×512, 투명 없음)
  png(svgIcon(512), 'icon-512.png', STORE),
])

// 원본 SVG 도 남긴다. 스토어 그래픽·홍보물에서 확대해 써야 할 때 필요하다.
await writeFile(join(OUT, 'icon.svg'), svgIcon(1024), 'utf8')
console.log('  ✓ icon.svg (벡터 원본)')
console.log('\nassets/ 생성 완료 → 다음: npx @capacitor/assets generate --android')
