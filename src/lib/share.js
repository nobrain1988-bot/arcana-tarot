// 결과 공유 — 글자가 아니라 **그림 한 장**으로 내보낸다.
//
// 왜 그림인가: 사람들이 타로 앱을 퍼뜨리는 방식은 "이 앱 좋아, 깔아봐" 가 아니라
// "나 이거 나왔어" 다. 카드 그림이 든 한 장이면 인스타 스토리·카톡에 그대로 올라가고
// 그게 광고가 된다. 글자 몇 줄은 올려도 아무도 안 본다.
//
// 왜 네이티브 플러그인인가: 안드로이드 WebView 는 navigator.share 를 지원하지 않는다.
// 그래서 지금까지 앱에서 공유 버튼은 사실상 '클립보드 복사' 로만 떨어지고 있었다.
// @capacitor/share 는 안드로이드 기본 공유 시트를 띄우고 파일도 같이 보낼 수 있다.
//
// 공유 링크에는 꼬리표(referrer)를 붙인다. 플레이 콘솔의 획득 보고서에서
// '공유로 몇 명이 설치했는지' 가 숫자로 보인다. 지금은 아예 모르는 상태다.

import { Share } from '@capacitor/share'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Capacitor } from '@capacitor/core'

const ID = 'com.obok.arcana'
export const STORE_URL = `https://play.google.com/store/apps/details?id=${ID}`
// utm_source 까지 넣어야 콘솔이 출처를 쪼개 보여준다
export const SHARE_URL = `${STORE_URL}&referrer=utm_source%3Dapp_share%26utm_medium%3Dreading`

// ── 그림 규격 ───────────────────────────────────────────────
// 1080×1350 (4:5). 인스타 피드가 가장 크게 보여주는 비율이고,
// 카톡·트위터에서도 잘린 채로 뜨지 않는다. 정사각형보다 카드가 커 보인다.
const W = 1080
const H = 1350
const PAD = 76

const C = {
  bg0: '#241a4d',
  bg1: '#0b0918',
  gold: '#d8b26b',
  goldHi: '#f0d495',
  text: '#ece9f6',
  muted: '#9a92bd',
}
const SERIF = `'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif`
const SANS = `-apple-system, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif`

// 글자를 폭에 맞춰 줄바꿈한다. 넘치면 마지막 줄에 줄임표.
function wrap(ctx, text, maxW, maxLines) {
  const words = String(text).split(/\s+/)
  const lines = []
  let line = ''
  for (const w of words) {
    const next = line ? `${line} ${w}` : w
    if (ctx.measureText(next).width <= maxW || !line) { line = next; continue }
    lines.push(line)
    line = w
    if (lines.length === maxLines) break
  }
  if (lines.length < maxLines && line) lines.push(line)
  // 한국어·일본어는 공백이 적어 단어 단위로는 안 끊긴다. 넘치면 글자 단위로 다시 자른다.
  if (lines.some((l) => ctx.measureText(l).width > maxW)) {
    const out = []
    let cur = ''
    for (const ch of String(text)) {
      if (ctx.measureText(cur + ch).width > maxW && cur) {
        out.push(cur)
        cur = ch
        if (out.length === maxLines) break
      } else cur += ch
    }
    if (out.length < maxLines && cur) out.push(cur)
    return out
  }
  return lines
}

const loadImage = (src) =>
  new Promise((res, rej) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => res(img)
    img.onerror = rej
    img.src = src
  })

// 둥근 네모 (구형 WebView 에 roundRect 가 없다)
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

// ── 결과 그림 한 장 만들기 ──────────────────────────────────
export async function makeShareImage(reading, ui, question) {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')

  // 배경 — 앱과 같은 보라에서 검정으로
  const g = ctx.createRadialGradient(W / 2, H * 0.34, 0, W / 2, H * 0.34, H * 0.78)
  g.addColorStop(0, C.bg0)
  g.addColorStop(1, C.bg1)
  ctx.fillStyle = g
  ctx.fillRect(0, 0, W, H)

  let y = PAD + 42

  // 스프레드 이름 (작게, 금빛)
  ctx.font = `600 27px ${SANS}`
  ctx.fillStyle = C.gold
  ctx.textAlign = 'center'
  ctx.fillText(String(reading.spreadTitle || '').toUpperCase(), W / 2, y)
  y += 60

  // 질문 — 고정 목록에서 고른 것만 들어온다. 직접 입력한 글은 애초에 없다.
  if (question) {
    ctx.font = `600 50px ${SERIF}`
    ctx.fillStyle = C.text
    for (const line of wrap(ctx, question, W - PAD * 2, 2)) {
      ctx.fillText(line, W / 2, y)
      y += 62
    }
    y += 10
  }

  // 예·아니오 판정이 있으면 크게
  if (reading.verdict) {
    ctx.font = `700 72px ${SERIF}`
    ctx.fillStyle = C.goldHi
    ctx.fillText(reading.verdict.word, W / 2, y + 56)
    y += 110
  }

  // ── 카드 ──────────────────────────────────────────────
  const n = reading.cards.length
  const gap = 22
  const ROW_PAD = 56                 // 카드 줄만 여백을 좁게 — 카드가 클수록 눈에 띈다
  const cardW = n === 1 ? 372 : Math.floor((W - ROW_PAD * 2 - gap * (n - 1)) / n)
  const cardH = Math.round(cardW * 1.6)
  const rowW = cardW * n + gap * (n - 1)
  const x = (W - rowW) / 2

  // 카드 이름이 몇 줄이 될지 미리 재 둔다 — 아래 덩어리 높이를 알아야 세로 가운데를 맞춘다
  ctx.font = `600 ${n > 2 ? 26 : 32}px ${SERIF}`
  const nameLineCount = Math.max(
    ...reading.cards.map((c) => wrap(ctx, c.name, cardW + gap - 6, 2).length)
  )
  const labelH = n > 1 ? 36 : 6
  const namesH = labelH + nameLineCount * 32 + 34
  const KW_H = 46
  const FOOT_TOP = H - 212

  // 머리글 아래와 바닥 사이에 카드+이름+키워드를 통째로 가운데 맞춘다.
  // 전에는 카드를 H*0.40 에 고정했더니 아래에 빈 공간이 300px 씩 남았다.
  const blockH = cardH + namesH + KW_H
  const top = Math.round(Math.max(y + 20, y + (FOOT_TOP - y - blockH) / 2))

  const imgs = await Promise.all(
    reading.cards.map((c) =>
      loadImage(`${import.meta.env.BASE_URL}cards/${c.card.id}.webp`).catch(() => null)
    )
  )

  reading.cards.forEach((c, i) => {
    const cx = x + i * (cardW + gap)
    ctx.save()
    roundRect(ctx, cx, top, cardW, cardH, 14)
    ctx.clip()
    ctx.fillStyle = '#140f2c'
    ctx.fillRect(cx, top, cardW, cardH)
    const img = imgs[i]
    if (img) {
      if (c.reversed) {
        // 역방향은 그림을 180도 돌려 그린다 — 앱 화면과 같아야 한다
        ctx.translate(cx + cardW / 2, top + cardH / 2)
        ctx.rotate(Math.PI)
        ctx.drawImage(img, -cardW / 2, -cardH / 2, cardW, cardH)
      } else {
        ctx.drawImage(img, cx, top, cardW, cardH)
      }
    }
    ctx.restore()
    ctx.strokeStyle = C.gold
    ctx.lineWidth = 3
    roundRect(ctx, cx + 1.5, top + 1.5, cardW - 3, cardH - 3, 14)
    ctx.stroke()
  })

  y = top + cardH + 44

  // 자리 이름 + 카드 이름
  reading.cards.forEach((c, i) => {
    const cx = x + i * (cardW + gap) + cardW / 2
    ctx.textAlign = 'center'
    if (n > 1) {
      ctx.font = `600 ${n > 2 ? 21 : 24}px ${SANS}`
      ctx.fillStyle = C.gold
      ctx.fillText(c.position.label, cx, y)
    }
    ctx.font = `600 ${n > 2 ? 26 : 32}px ${SERIF}`
    ctx.fillStyle = C.text
    const nameLines = wrap(ctx, c.name, cardW + gap - 6, 2)
    nameLines.forEach((l, k) => ctx.fillText(l, cx, y + labelH + k * 32))
    ctx.font = `400 ${n > 2 ? 19 : 22}px ${SANS}`
    ctx.fillStyle = C.muted
    ctx.fillText(c.reversed ? ui.common.reversed : ui.common.upright, cx, y + labelH + nameLineCount * 32 + 4)
  })

  // 키워드 한 줄 — 이름 바로 아래에 붙인다 (바닥에 고정하면 가운데가 빈다)
  const lead = reading.cards[0]
  ctx.textAlign = 'center'
  ctx.font = `400 28px ${SANS}`
  ctx.fillStyle = C.muted
  const kw = lead.keywords.join('  ·  ')
  for (const line of wrap(ctx, kw, W - PAD * 2, 1)) {
    ctx.fillText(line, W / 2, y + labelH + nameLineCount * 32 + KW_H + 8)
  }

  // ── 바닥: 앱 이름 ─────────────────────────────────────
  ctx.font = `700 46px ${SERIF}`
  ctx.fillStyle = C.goldHi
  ctx.fillText('ARCANA', W / 2, H - 118)
  ctx.font = `400 25px ${SANS}`
  ctx.fillStyle = C.muted
  // 'Arcana — 무료 타로 리딩' 처럼 앱 이름이 앞에 붙어 오므로 떼어낸다.
  // 줄표는 언어마다 다르다 — 독일어는 en-dash(–) 를 써서 em-dash(—) 만 걸렀을 때 중복으로 찍혔다.
  ctx.fillText(String(ui.share.tagline).replace(/^\s*Arcana\s*[—–-]\s*/i, ''), W / 2, H - 72)

  return new Promise((res) => canvas.toBlob((b) => res(b), 'image/png'))
}

const blobToBase64 = (blob) =>
  new Promise((res, rej) => {
    const r = new FileReader()
    r.onloadend = () => res(String(r.result).split(',')[1])
    r.onerror = rej
    r.readAsDataURL(blob)
  })

// ── 공유 ────────────────────────────────────────────────────
// 1) 앱 안(안드로이드) — 그림을 캐시에 쓰고 네이티브 공유 시트로 보낸다
// 2) 폰 브라우저 — navigator.share 가 파일을 받으면 그걸로
// 3) 둘 다 안 되면 글자만이라도 클립보드로
export async function shareReading(reading, ui, question) {
  const text = `${reading.spreadTitle}\n${reading.shareLine}\n\n${ui.share.tagline}\n${SHARE_URL}`

  let blob = null
  try {
    blob = await makeShareImage(reading, ui, question)
  } catch { /* 그림을 못 만들어도 글자로는 보낸다 */ }

  if (Capacitor.isNativePlatform()) {
    try {
      let files
      if (blob) {
        const name = `arcana-${reading.spreadId}.png`
        const w = await Filesystem.writeFile({
          path: name,
          data: await blobToBase64(blob),
          directory: Directory.Cache,
        })
        files = [w.uri]
      }
      await Share.share({ title: 'Arcana', text, files })
      return
    } catch {
      // 사용자가 공유 시트를 닫았거나 파일 공유가 막힌 경우 — 글자만으로 한 번 더
      try { await Share.share({ title: 'Arcana', text }); return } catch { return }
    }
  }

  // 브라우저
  try {
    if (blob && navigator.canShare) {
      const file = new File([blob], 'arcana.png', { type: 'image/png' })
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ title: 'Arcana', text, files: [file] })
        return
      }
    }
    if (navigator.share) { await navigator.share({ title: 'Arcana', text }); return }
  } catch { return }

  try {
    await navigator.clipboard.writeText(text)
    alert(ui.common.copied)
  } catch { alert(text) }
}
