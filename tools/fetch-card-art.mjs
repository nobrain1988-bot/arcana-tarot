// 라이더-웨이트(1909) 카드 그림 78장을 위키미디어 공용에서 받아 앱용으로 만든다.
//   npm run cards
//
// ── 왜 위키미디어인가 ────────────────────────────────────────────
// 파멜라 콜먼 스미스가 1909년에 그린 원본은 작가 사후 70년이 지나 퍼블릭 도메인이다
// (작가 1951년 사망 → 2022-01-01부터 EU·영국·한국에서도 만료. 미국은 1909년 출판으로 이미 만료).
//
// 문제는 인터넷에 도는 타로 이미지 대부분이 원본이 아니라 **현대에 다시 칠한 판본**이라는 것이다.
// 그런 판본은 복원·채색에 새 저작권이 붙어 있어서, 모르고 쓰면 구글 플레이에서 앱이 내려간다.
// 위키미디어 공용은 파일마다 라이선스 근거 페이지가 붙어 있어 나중에 증빙이 된다.
// **다른 데서 주워오지 말 것.** 겉보기로는 원본과 구분이 안 된다.
//
// ── 만드는 것 ────────────────────────────────────────────────────
//   public/cards/<id>.webp     576px  — 결과 화면·카드 상세
//   public/cards/t/<id>.webp   200px  — 라이브러리 78장 격자(썸네일)
//   public/cards/CREDITS.txt          — 출처·라이선스 증빙
//
// 큰 것만 쓰면 라이브러리에서 78장을 한 번에 받느라 몇 MB가 날아간다. 그래서 두 벌을 만든다.

import sharp from 'sharp'
import { mkdir, writeFile, readFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'cards')
const OUT_T = join(OUT, 't')
// 내려받은 원본 보관소 — 저장소에는 올리지 않는다(.gitignore)
const CACHE = join(ROOT, '.cache', 'cards')
const API = 'https://commons.wikimedia.org/w/api.php'

// 스캔마다 가장자리 여백이 조금씩 달라서 원본 비율이 1~2% 어긋난다.
// 그대로 두면 3장을 나란히 놓았을 때 카드 높이가 안 맞아 줄이 지저분해진다.
// 한 규격으로 잘라 맞춘다 — 잘려나가는 건 크림색 테두리 몇 픽셀뿐이다.
const CARD_W = 576, CARD_H = 966
const THUMB_W = 200, THUMB_H = 335

// 위키미디어는 정체를 밝히지 않는 프로그램의 접근을 막는다.
const UA = 'ArcanaTarotApp/1.0 (card art fetch; contact leejiwon44@nate.com)'

// 메이저 22장 — 파일명에 카드 이름이 들어가서 표로 적어야 한다.
const MAJORS = [
  'RWS Tarot 00 Fool.jpg',            'RWS Tarot 01 Magician.jpg',
  'RWS Tarot 02 High Priestess.jpg',  'RWS Tarot 03 Empress.jpg',
  'RWS Tarot 04 Emperor.jpg',         'RWS Tarot 05 Hierophant.jpg',
  'RWS Tarot 06 Lovers.jpg',          'RWS Tarot 07 Chariot.jpg',
  'RWS Tarot 08 Strength.jpg',        'RWS Tarot 09 Hermit.jpg',
  'RWS Tarot 10 Wheel of Fortune.jpg','RWS Tarot 11 Justice.jpg',
  'RWS Tarot 12 Hanged Man.jpg',      'RWS Tarot 13 Death.jpg',
  'RWS Tarot 14 Temperance.jpg',      'RWS Tarot 15 Devil.jpg',
  'RWS Tarot 16 Tower.jpg',           'RWS Tarot 17 Star.jpg',
  'RWS Tarot 18 Moon.jpg',            'RWS Tarot 19 Sun.jpg',
  'RWS Tarot 20 Judgement.jpg',       'RWS Tarot 21 World.jpg',
]

// 마이너 56장 — 규칙적이라 계산으로 만든다. 공용의 수트 파일명은 Pents(펜타클)만 줄임말이다.
const SUIT_FILE = { w: 'Wands', c: 'Cups', s: 'Swords', p: 'Pents' }
const pad2 = (n) => String(n).padStart(2, '0')

const PLAN = [
  ...MAJORS.map((file, n) => ({ id: `m${pad2(n)}`, file })),
  ...Object.entries(SUIT_FILE).flatMap(([prefix, suit]) =>
    Array.from({ length: 14 }, (_, i) => ({ id: `${prefix}${pad2(i + 1)}`, file: `${suit}${pad2(i + 1)}.jpg` }))
  ),
]

const exists = (p) => access(p).then(() => true, () => false)

// 파일 정보(내려받을 주소 + 라이선스)를 한 번에 물어본다. titles 는 한 번에 50개까지.
async function lookup(files) {
  const out = new Map()
  for (let i = 0; i < files.length; i += 50) {
    const batch = files.slice(i, i + 50)
    const url = `${API}?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata`
      + `&titles=${batch.map((f) => encodeURIComponent('File:' + f)).join('|')}`
    const res = await fetch(url, { headers: { 'User-Agent': UA } })
    if (!res.ok) throw new Error(`목록 조회 실패 ${res.status}`)
    const data = await res.json()
    // 공용은 파일명을 정규화(_ ↔ 공백)하므로 되돌려받은 이름으로 맞춰야 한다
    const norm = new Map((data.query.normalized || []).map((n) => [n.to, n.from]))
    for (const page of Object.values(data.query.pages)) {
      const asked = (norm.get(page.title) || page.title).replace(/^File:/, '')
      if (page.missing !== undefined) { out.set(asked, null); continue }
      const ii = page.imageinfo[0]
      out.set(asked, {
        url: ii.url,
        license: ii.extmetadata?.LicenseShortName?.value ?? '(표기 없음)',
        artist: (ii.extmetadata?.Artist?.value ?? '').replace(/<[^>]*>/g, '').trim(),
        page: ii.descriptionurl,
      })
    }
  }
  return out
}

async function main() {
  await mkdir(OUT_T, { recursive: true })
  await mkdir(CACHE, { recursive: true })

  console.log(`위키미디어 공용에서 ${PLAN.length}장 조회 중…`)
  const info = await lookup(PLAN.map((p) => p.file))

  const missing = PLAN.filter((p) => !info.get(p.file))
  if (missing.length) {
    console.error('\n✗ 공용에 없는 파일:')
    missing.forEach((m) => console.error(`   ${m.id}  ${m.file}`))
    throw new Error('파일명이 바뀌었을 수 있다. 위 목록을 확인할 것.')
  }

  // 퍼블릭 도메인이 아닌 것이 섞이면 즉시 멈춘다. 이게 이 스크립트의 존재 이유다.
  const notPD = PLAN.filter((p) => !/public domain|^pd|cc0/i.test(info.get(p.file).license))
  if (notPD.length) {
    console.error('\n✗ 퍼블릭 도메인이 아닌 파일이 섞였다:')
    notPD.forEach((m) => console.error(`   ${m.id}  ${m.file}  →  ${info.get(m.file).license}`))
    throw new Error('저작권 있는 판본이다. 쓰면 안 된다.')
  }
  console.log('라이선스 확인: 78장 전부 퍼블릭 도메인 ✓\n')

  let fetched = 0, cached = 0
  for (const { id, file } of PLAN) {
    // 원본을 캐시에 남긴다(.gitignore 대상). 크기·품질을 바꿔볼 때 78장을 다시
    // 받지 않아도 된다 — 공용 서버에도 예의가 아니고 몇 분씩 걸린다.
    const raw = join(CACHE, `${id}.jpg`)
    let buf
    if (await exists(raw)) {
      buf = await readFile(raw)
      cached++
    } else {
      const res = await fetch(info.get(file).url, { headers: { 'User-Agent': UA } })
      if (!res.ok) throw new Error(`${file} 내려받기 실패 ${res.status}`)
      buf = Buffer.from(await res.arrayBuffer())
      await writeFile(raw, buf)
      fetched++
      await new Promise((r) => setTimeout(r, 120))   // 공용 서버 예의
    }

    // 폰에서 카드가 가장 크게 보이는 곳이 가로 200px 쯤(오늘의 카드).
    // 3배 해상도 화면을 감안해 576px 이면 충분하다.
    // blur(0.4) 는 100년 된 스캔의 종이 그레인을 지운다 — 그림 선은 그대로인데
    // 용량이 30% 가까이 준다. 그레인은 압축기가 제일 싫어하는 종류의 정보다.
    await sharp(buf).resize(CARD_W, CARD_H, { fit: 'cover' }).blur(0.4).webp({ quality: 76 }).toFile(join(OUT, `${id}.webp`))
    await sharp(buf).resize(THUMB_W, THUMB_H, { fit: 'cover' }).webp({ quality: 80 }).toFile(join(OUT_T, `${id}.webp`))

    process.stdout.write(`\r  ${fetched + cached}/${PLAN.length}  ${id}   `)
  }
  console.log(`\n\n완료 — 새로 받음 ${fetched}장, 캐시에서 ${cached}장`)

  const credits =
    `Arcana — card artwork credits\n` +
    `${'='.repeat(60)}\n\n` +
    `Rider-Waite-Smith Tarot (1909)\n` +
    `Artwork by Pamela Colman Smith (1878-1951), under the direction of A. E. Waite.\n\n` +
    `PUBLIC DOMAIN.\n` +
    `  - United States: published 1909, copyright expired.\n` +
    `  - EU / UK / South Korea: author died 1951; life + 70 years expired 1 January 2022.\n\n` +
    `Source: Wikimedia Commons. Every file below carries a public-domain licence tag\n` +
    `on its own description page, linked here as evidence.\n\n` +
    `Note: this is the ORIGINAL 1909 artwork. Modern recoloured or restored editions\n` +
    `(e.g. Centennial, Radiant) carry fresh copyright on the restoration and are NOT used.\n\n` +
    `${'-'.repeat(60)}\n` +
    PLAN.map(({ id, file }) => `${id}  ${file}\n      ${info.get(file).page}`).join('\n') +
    `\n`
  await writeFile(join(OUT, 'CREDITS.txt'), credits, 'utf8')
  console.log('public/cards/CREDITS.txt 기록 완료 (구글이 물어보면 이걸 낸다)')
}

main().catch((e) => { console.error('\n' + e.message); process.exit(1) })
