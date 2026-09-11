// 탭바·버튼용 아이콘. 아이콘 라이브러리를 안 쓰고 직접 그린다(용량 + 톤 통일).
const I = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const IconSun = () => (
  <svg viewBox="0 0 24 24" {...I}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" />
  </svg>
)

export const IconCards = () => (
  <svg viewBox="0 0 24 24" {...I}>
    <rect x="8.4" y="4" width="11" height="16" rx="2" />
    <path d="M5.6 6.6 A2 2 0 0 0 4 8.5 v9 A2 2 0 0 0 6 19.5 h1.2" />
  </svg>
)

export const IconBook = () => (
  <svg viewBox="0 0 24 24" {...I}>
    <path d="M4 4.8h6.2a2.4 2.4 0 0 1 2.4 2.4v12a2 2 0 0 0-2-2H4Z" />
    <path d="M20.6 4.8h-6.2a2.4 2.4 0 0 0-2.4 2.4v12a2 2 0 0 1 2-2h6.6Z" />
  </svg>
)

export const IconMoonList = () => (
  <svg viewBox="0 0 24 24" {...I}>
    <path d="M4.8 6.4h9M4.8 12h9M4.8 17.6h6" />
    <path d="M20.4 5.6a3.4 3.4 0 1 0 .3 5.6 4.2 4.2 0 0 1-.3-5.6Z" />
  </svg>
)

export const IconBack = () => (
  <svg viewBox="0 0 24 24" {...I} style={{ width: 22, height: 22 }}>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
)

export const IconShare = () => (
  <svg viewBox="0 0 24 24" {...I} style={{ width: 18, height: 18 }}>
    <path d="M12 15.5V4M12 4 8.4 7.6M12 4l3.6 3.6" />
    <path d="M5.5 12.8v5.4a1.8 1.8 0 0 0 1.8 1.8h9.4a1.8 1.8 0 0 0 1.8-1.8v-5.4" />
  </svg>
)

export const IconGear = () => (
  <svg viewBox="0 0 24 24" {...I} style={{ width: 21, height: 21 }}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.1 14.3a1.5 1.5 0 0 0 .3 1.65l.05.05a1.8 1.8 0 1 1-2.55 2.55l-.05-.05a1.5 1.5 0 0 0-1.65-.3 1.5 1.5 0 0 0-.9 1.37v.13a1.8 1.8 0 1 1-3.6 0v-.07a1.5 1.5 0 0 0-.98-1.37 1.5 1.5 0 0 0-1.65.3l-.05.05a1.8 1.8 0 1 1-2.55-2.55l.05-.05a1.5 1.5 0 0 0 .3-1.65 1.5 1.5 0 0 0-1.37-.9h-.13a1.8 1.8 0 1 1 0-3.6h.07a1.5 1.5 0 0 0 1.37-.98 1.5 1.5 0 0 0-.3-1.65l-.05-.05a1.8 1.8 0 1 1 2.55-2.55l.05.05a1.5 1.5 0 0 0 1.65.3h.07a1.5 1.5 0 0 0 .9-1.37v-.13a1.8 1.8 0 1 1 3.6 0v.07a1.5 1.5 0 0 0 .9 1.37 1.5 1.5 0 0 0 1.65-.3l.05-.05a1.8 1.8 0 1 1 2.55 2.55l-.05.05a1.5 1.5 0 0 0-.3 1.65v.07a1.5 1.5 0 0 0 1.37.9h.13a1.8 1.8 0 1 1 0 3.6h-.07a1.5 1.5 0 0 0-1.37.9Z" />
  </svg>
)

export const IconCheck = () => (
  <svg viewBox="0 0 24 24" {...I} strokeWidth={2.4} style={{ width: 17, height: 17 }}>
    <path d="M5 12.6 9.6 17 19 7.4" />
  </svg>
)

// 스프레드 목록 타일용 — 카드 장수를 그림으로 보여준다
export const IconSpread = ({ n = 1 }) => (
  <svg viewBox="0 0 24 24" {...I} style={{ width: 22, height: 22 }}>
    {n === 1 ? (
      <rect x="8.6" y="4.6" width="6.8" height="14.8" rx="1.6" />
    ) : (
      <>
        <rect x="2.4" y="6.4" width="5.6" height="11.2" rx="1.4" />
        <rect x="9.2" y="4.6" width="5.6" height="14.8" rx="1.4" />
        <rect x="16" y="6.4" width="5.6" height="11.2" rx="1.4" />
      </>
    )}
  </svg>
)
