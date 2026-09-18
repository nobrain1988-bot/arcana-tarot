// 로컬 저장 — 서버도 로그인도 없다. 전부 이 기기 안에만 남는다.
//
// 이렇게 하는 이유:
//   · 서버비 0원 (사용자가 100만 명이어도 고정비가 안 늘어난다)
//   · 회원가입 이탈이 없다 (설치 → 바로 사용)
//   · 개인정보를 아예 수집하지 않으므로 구글 '데이터 안전' 심사가 단순해진다
//
// localStorage 는 시크릿 모드·저장공간 부족 등에서 예외를 던질 수 있으므로 전부 try 로 감싼다.

const K = {
  daily: 'arcana.daily',       // 오늘의 카드 (하루 고정)
  journal: 'arcana.journal',   // 뽑은 기록
  salt: 'arcana.salt',         // 이 기기 고유값 (오늘의 카드 시드에 섞는다)
  seen: 'arcana.seen',         // 첫 실행 여부
  settings: 'arcana.settings', // 언어·역방향 사용 여부
}

const read = (k, fallback) => {
  try {
    const raw = localStorage.getItem(k)
    return raw == null ? fallback : JSON.parse(raw)
  } catch { return fallback }
}

const write = (k, v) => {
  try { localStorage.setItem(k, JSON.stringify(v)); return true } catch { return false }
}

// ── 기기 고유값 ───────────────────────────────────────────────
// 오늘의 카드 시드를 날짜만으로 만들면 전 세계 모든 사용자가 같은 카드를 받는다.
// 기기마다 다른 값을 한 번 만들어 섞어서, "내 카드"가 되게 한다.
export function deviceSalt() {
  let s = read(K.salt, null)
  if (typeof s !== 'string' || !s) {
    s = Math.random().toString(36).slice(2) + Date.now().toString(36)
    write(K.salt, s)
  }
  return s
}

// ── 오늘의 카드 ───────────────────────────────────────────────
// { dateKey, revealed, drawn: [{ id, reversed }] } 형태로 저장한다.
//
// 카드 객체를 통째로 저장하지 않는 이유: 나중에 카드 문구를 고치면
// 저장된 옛날 문구가 그대로 나와버린다. id만 저장하고 매번 덱에서 다시 찾는다.
//
// revealed 를 따로 저장하는 이유: 이미 뒤집어 본 날 앱을 다시 켜면 바로 카드가 보여야 한다.
// 매번 "뒤집으세요" 부터 다시 시키면 전면광고도 다시 뜨고(정책 위험) 사용자도 짜증난다.
export const getDaily = () => read(K.daily, null)

export const setDaily = (dateKey, drawn, revealed = false) =>
  write(K.daily, {
    dateKey,
    revealed,
    drawn: drawn.map((d) => ({ id: d.card.id, reversed: d.reversed })),
  })

export function markDailyRevealed() {
  const d = read(K.daily, null)
  if (d) write(K.daily, { ...d, revealed: true })
}

// ── 저널 (뽑은 기록) ──────────────────────────────────────────
const JOURNAL_MAX = 60   // 무한정 쌓이면 저장공간을 먹으므로 최근 60개만 남긴다

export const getJournal = () => {
  const j = read(K.journal, [])
  return Array.isArray(j) ? j : []
}

// 번역된 글자(카드 이름·스프레드 제목)는 저장하지 않는다.
// 저장해두면 사용자가 나중에 언어를 바꿨을 때 옛날 기록만 이전 언어로 남는다.
// id 만 저장하고, 보여줄 때 그때의 언어로 다시 만든다.
export function addJournal(entry) {
  const list = getJournal()
  list.unshift({
    at: Date.now(),
    spreadId: entry.spreadId,
    // 어느 질문에서 왔는지(id 만). 사용자가 타이핑한 글이 아니라 목록의 질문이라 민감하지 않고,
    // 나중에 기록을 다시 열 때 그 질문의 말로 자리 설명을 되살릴 수 있다.
    topicId: entry.topicId || null,
    // 질문 원문은 저장하지 않는다 — 민감할 수 있고, 없어도 기록의 목적은 달성된다
    cards: entry.cards.map((c) => ({ id: c.card.id, reversed: c.reversed })),
  })
  write(K.journal, list.slice(0, JOURNAL_MAX))
}

export const clearJournal = () => write(K.journal, [])

// ── 첫 실행 ───────────────────────────────────────────────────
export const isFirstRun = () => read(K.seen, null) !== true
export const markSeen = () => write(K.seen, true)

// ── 설정 ──────────────────────────────────────────────────────
// lang 이 null 이면 '아직 고른 적 없음' = 폰 언어를 따라간다.
// 사용자가 한 번이라도 직접 고르면 그 뒤로는 폰 언어가 바뀌어도 고른 값을 지킨다.
const SETTINGS_DEFAULT = { lang: null, reversals: true, sound: true }

export function getSettings() {
  const s = read(K.settings, null)
  return s && typeof s === 'object' ? { ...SETTINGS_DEFAULT, ...s } : { ...SETTINGS_DEFAULT }
}

export function setSettings(patch) {
  const next = { ...getSettings(), ...patch }
  write(K.settings, next)
  return next
}

// ── 한 번만 도는 손질 ─────────────────────────────────────────
// 시작 화면의 스피커 버튼에 버그가 있었다. 브라우저가 소리를 막아서
// '켜져 있는데 조용한' 상태일 때 그 버튼을 누르면, 소리가 켜지는 게 아니라
// 꺼진 채로 저장됐다. 누른 사람 입장에서는 "소리를 켜려고" 누른 건데
// 정반대로 저장된 것이다. 그러고 나면 그 기기는 계속 조용하다 —
// 앱을 아무리 고쳐도 저장된 '꺼짐'이 이기기 때문에 증상이 안 사라진다.
//
// 본인이 끈 게 아니라 버그로 꺼진 것이므로 딱 한 번 되돌린다.
// 표시를 남겨 두므로, 이 뒤로 직접 끈 것은 그대로 지킨다.
const SOUND_FIX = 2
try {
  const s = read(K.settings, null)
  if (s && typeof s === 'object' && s.soundFix !== SOUND_FIX) {
    write(K.settings, { ...s, sound: true, soundFix: SOUND_FIX })
  }
} catch { /* localStorage 를 못 쓰는 환경 — 어차피 기본값이 '켜짐'이다 */ }

// 설정창의 '저장된 것 전부 지우기' — 설정(언어)은 남긴다.
// 언어까지 초기화하면 사용자가 방금 고른 언어가 풀려서 화면이 갑자기 영어로 바뀐다.
export function clearUserData() {
  try {
    localStorage.removeItem(K.daily)
    localStorage.removeItem(K.journal)
    return true
  } catch { return false }
}
