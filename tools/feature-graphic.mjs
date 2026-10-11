// 플레이스토어 그래픽 이미지 생성기  (npm run feature)
//
// 구글 플레이 목록 맨 위에 걸리는 1024 × 500 짜리 가로 이미지다.
// 검색 결과와 추천 자리에서 앱 아이콘보다 먼저 보이는 그림이라, 여기서
// '무슨 앱인지'와 '분위기'가 한눈에 안 잡히면 눌리지 않는다.
//
// **글자는 여기에 넣는다.** 앱 아이콘에 앱 이름을 쓰면 48px 로 줄었을 때
// 글자는 얼룩이 되고 그림도 같이 작아져 둘 다 죽는다. 그래픽 이미지는
// 축소되지 않고 가로가 넓으므로 글자가 제 몫을 한다.
//
// 안전 영역 주의: 구글이 기기에 따라 좌우를 잘라낸다. 글자는 가운데 800px 안에 둔다.
// --guides 를 주면 그 선을 그려서 확인할 수 있다.
//
// 그림은 tools/brand.mjs 에서 가져온다 — 아이콘과 같은 부채꼴이라 스토어와 앱이
// 따로 놀지 않는다. 전에는 여기서 브라우저를 띄워 따로 그렸다.

import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { svgFeature } from './brand.mjs'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'store')
const guides = process.argv.includes('--guides')

await mkdir(OUT, { recursive: true })
const file = guides ? 'feature-graphic-안전선.png' : 'feature-graphic.png'
await sharp(Buffer.from(svgFeature({ guides }))).png().toFile(join(OUT, file))
console.log(`  ✓ store/${file}  1024×500`)
if (!guides) console.log('    (안전 영역을 눈으로 보려면: npm run feature -- --guides)')
