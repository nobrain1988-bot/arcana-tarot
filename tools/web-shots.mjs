// 랜딩 페이지에 쓸 스크린샷 사본을 만든다.  (npm run shots:web)
//
// 왜 따로 만드는가: 스토어용 원본은 1080×1920 이다. 그걸 그대로 웹에 쓰면
// 168px 폭으로 보이는 그림 네 장에 7MB 를 내려받게 된다 — 모바일에서 페이지가
// 안 뜬다. 레티나 화면까지 생각해도 3배인 504px 이면 충분하다.
//
// 영어판을 쓴다. 랜딩 페이지는 9개 국어지만 그림까지 아홉 벌 두면
// 저장소가 무거워지고, 그림 속 글자는 어차피 작아서 안 읽힌다.

import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const WIDTH = 504
const SHOTS = ['01-intro', '02-questions', '03-choose', '04-reading']

await mkdir('docs/shots', { recursive: true })

let total = 0
for (const name of SHOTS) {
  const src = `store/screenshots/en/${name}.png`
  const out = `docs/shots/${name}.png`
  const info = await sharp(src).resize(WIDTH).png({ compressionLevel: 9 }).toFile(out)
  total += info.size
  console.log(`  ✓ ${out}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)}KB`)
}
console.log(`\n네 장 합계 ${(total / 1024).toFixed(0)}KB`)
