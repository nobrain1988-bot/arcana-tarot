// 지원 언어 목록.
//
// label 은 '그 언어를 쓰는 사람이 자기 언어를 부르는 이름'으로 적는다.
// 설정창에서 Spanish 가 아니라 Español 로 보여야 그 사람이 자기 언어를 찾을 수 있다.
// (영어를 못 읽는 사용자에게 'Spanish' 는 아무 의미가 없다)

export const LANGS = [
  { code: 'en', label: 'English',    en: 'English' },
  { code: 'es', label: 'Español',    en: 'Spanish' },
  { code: 'pt', label: 'Português',  en: 'Portuguese' },
  { code: 'ko', label: '한국어',      en: 'Korean' },
  { code: 'ja', label: '日本語',      en: 'Japanese' },
  { code: 'ru', label: 'Русский',    en: 'Russian' },
  { code: 'tr', label: 'Türkçe',     en: 'Turkish' },
  { code: 'fr', label: 'Français',   en: 'French' },
  { code: 'de', label: 'Deutsch',    en: 'German' },
]

export const LANG_CODES = LANGS.map((l) => l.code)
export const DEFAULT_LANG = 'en'

// 폰 언어에서 우리가 가진 언어를 골라낸다.
//
// navigator.languages 는 ['pt-BR', 'pt', 'en-US'] 처럼 지역까지 붙어서 온다.
// 우리는 지역을 구분하지 않으므로(pt-BR·pt-PT 둘 다 pt) 앞의 두 글자만 본다.
// 순서대로 훑어서 처음 맞는 걸 쓴다 — 사용자가 폰에서 정한 우선순위를 그대로 존중하는 것이다.
export function detectLang() {
  try {
    const wanted = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || DEFAULT_LANG]
    for (const raw of wanted) {
      const two = String(raw).toLowerCase().slice(0, 2)
      if (LANG_CODES.includes(two)) return two
    }
  } catch { /* navigator 가 없는 환경 */ }
  return DEFAULT_LANG
}
