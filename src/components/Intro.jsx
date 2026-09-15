// 시작 화면 — 앱을 열면 기능 화면이 아니라 '방에 들어가는 순간'이 먼저 온다.
//
// 왜 필요한가:
//   앱을 켜자마자 '오늘의 카드 / 카드 뒤집기' 가 딱 나오면 도구를 켠 느낌이지
//   타로를 보러 간 느낌이 아니다. 타로는 분위기가 곧 신뢰도인 분야다.
//   실제로도 문을 열고 들어가 자리에 앉는 몇 초가 있고, 그 시간이 태도를 만든다.
//
//   자동으로 넘어가지 않고 **직접 눌러야** 들어간다. 누르는 행위 자체가 선언이다.
//   자동 재생되는 스플래시는 그냥 기다림이지 의식이 아니다.
//   그리고 브라우저는 사용자가 누르기 전에 소리를 못 내게 막으므로,
//   이 한 번의 탭이 배경음을 켜는 자리이기도 하다.
//
// 그림은 화면을 꽉 채운다. 처음엔 아치 안에 넣었는데, 받은 그림이 인물만이 아니라
// 촛불·카드·방까지 한 장면이라 액자에 가두면 그 분위기가 다 잘려나갔다.

import { useState, useCallback } from 'react'
import { useLang } from '../i18n/context.jsx'

const IMG = `${import.meta.env.BASE_URL}intro/reader.webp`
const IMG_TINY = `${import.meta.env.BASE_URL}intro/reader-blur.webp`

function IconSound({ on }) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none"
         stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" opacity=".75" />
        </>
      ) : (
        <path d="M16 9.5l5 5M21 9.5l-5 5" />
      )}
    </svg>
  )
}

export default function Intro({ onEnter, sound, onSound }) {
  const { ui } = useLang()
  const [leaving, setLeaving] = useState(false)

  const go = useCallback(() => {
    if (leaving) return
    setLeaving(true)
    setTimeout(onEnter, 620)   // 장막이 걷히는 연출을 끝까지 보여주고 넘긴다
  }, [leaving, onEnter])

  return (
    <div className={`intro${leaving ? ' leaving' : ''}`} onClick={go} role="button" tabIndex={0}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') go() }}>

      {/* 아주 작은 흐린 판을 먼저 깔아 둔다 — 큰 그림이 오기 전 검은 화면이 번쩍이지 않는다 */}
      <div className="intro-bg" style={{ backgroundImage: `url("${IMG_TINY}")` }} />
      <img className="intro-photo" src={IMG} alt="" aria-hidden="true" />

      {/* 촛불빛이 흔들리는 느낌 — 사진 속 촛불과 박자를 맞춘다 */}
      <div className="intro-flicker" aria-hidden="true" />
      {/* 아래쪽을 어둡게 깔아야 글자가 읽힌다. 사진 위에 그냥 얹으면 안 읽힌다 */}
      <div className="intro-shade" aria-hidden="true" />

      {/* 소리 켜고 끄기. 들어가기 전에 먼저 보이게 둔 이유 —
          누르자마자 소리가 나는데 미리 끌 방법이 없으면 곤란한 자리(지하철·사무실)가 있다. */}
      <button
        className="intro-sound"
        aria-label={ui.common.sound}
        aria-pressed={sound}
        onClick={(e) => { e.stopPropagation(); onSound(!sound) }}
      >
        <IconSound on={sound} />
      </button>

      <div className="intro-foot">
        <h1 className="intro-title">Arcana</h1>
        <p className="intro-tagline">{ui.intro.tagline}</p>
        <span className="intro-enter">{ui.intro.enter}</span>
      </div>
    </div>
  )
}
