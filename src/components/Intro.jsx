// 시작 화면 — 앱을 열면 기능 화면이 아니라 '방에 들어가는 순간'이 먼저 온다.
//
// 왜 필요한가:
//   앱을 켜자마자 '오늘의 카드 / 카드 뒤집기' 가 딱 나오면 도구를 켠 느낌이지
//   타로를 보러 간 느낌이 아니다. 타로는 분위기가 곧 신뢰도인 분야다.
//   실제로도 문을 열고 들어가서 자리에 앉는 시간이 있고, 그 몇 초가 태도를 만든다.
//
//   그래서 자동으로 넘어가지 않고 **직접 눌러야** 들어가게 했다. 누르는 행위 자체가
//   '들어가겠다'는 선언이다. 자동 재생되는 스플래시는 그냥 기다림이지 의식이 아니다.
//
// 사람 이미지:
//   public/intro/reader.png 에 파일을 넣으면 그 그림이 아치 안에 들어간다.
//   없으면 아래의 후드 실루엣이 그대로 나온다 — 이미지가 없어도 화면이 비지 않는다.
//   (사장님이 이미지를 구해 넣기 전까지 이 상태로 쓸 수 있어야 한다)

import { useState, useCallback } from 'react'
import { useLang } from '../i18n/context.jsx'

const READER_SRC = `${import.meta.env.BASE_URL}intro/reader.png`

export default function Intro({ onEnter }) {
  const { ui } = useLang()
  const [leaving, setLeaving] = useState(false)
  const [hasPhoto, setHasPhoto] = useState(true)

  const go = useCallback(() => {
    if (leaving) return
    setLeaving(true)
    // 화면이 걷히는 연출을 끝까지 보여주고 넘긴다
    setTimeout(onEnter, 620)
  }, [leaving, onEnter])

  return (
    <div className={`intro${leaving ? ' leaving' : ''}`} onClick={go} role="button" tabIndex={0}
         onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') go() }}>

      {/* 달 — 아주 흐리게. 위쪽에 시선을 한 번 걸어준다 */}
      <svg className="intro-moon" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="moonGlow">
            <stop offset="55%" stopColor="#e3c07c" stopOpacity=".5" />
            <stop offset="100%" stopColor="#e3c07c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill="url(#moonGlow)" />
        <circle cx="50" cy="50" r="17" fill="none" stroke="#e3c07c" strokeWidth="1.1" opacity=".55" />
      </svg>

      {/* 아치 — 천막 문을 통해 안을 들여다보는 구도 */}
      <div className="intro-arch">
        <div className="intro-arch-in">
          {hasPhoto && (
            <img
              className="intro-reader"
              src={READER_SRC}
              alt=""
              onError={() => setHasPhoto(false)}
            />
          )}
          {!hasPhoto && (
            // 사진이 없을 때의 후드 실루엣. 얼굴을 그리지 않는 게 핵심이다 —
            // 눈코입을 넣는 순간 '누구'가 되어 버려서 신비로움이 깨진다.
            <svg className="intro-figure" viewBox="0 0 256 230" aria-hidden="true">
              <defs>
                <linearGradient id="figBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1b1540" />
                  <stop offset="100%" stopColor="#0b0918" />
                </linearGradient>
                <radialGradient id="figHalo" cx="50%" cy="34%" r="46%">
                  <stop offset="0%" stopColor="#e3c07c" stopOpacity=".38" />
                  <stop offset="100%" stopColor="#e3c07c" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="128" cy="86" rx="96" ry="86" fill="url(#figHalo)" />
              <path
                d="M40 230 C40 176 66 150 88 138 C80 74 100 34 128 34 C156 34 176 74 168 138
                   C190 150 216 176 216 230 Z"
                fill="url(#figBody)" stroke="#d8b26b" strokeWidth="1.2" strokeOpacity=".45"
              />
              {/* 손 위에 놓인 카드 세 장 — 무엇을 하는 사람인지 한눈에 알게 한다 */}
              <g opacity=".9">
                <rect x="96" y="196" width="26" height="38" rx="3" transform="rotate(-13 109 215)"
                      fill="#2a1f57" stroke="#d8b26b" strokeWidth="1" strokeOpacity=".7" />
                <rect x="115" y="192" width="26" height="38" rx="3"
                      fill="#2a1f57" stroke="#d8b26b" strokeWidth="1" strokeOpacity=".8" />
                <rect x="134" y="196" width="26" height="38" rx="3" transform="rotate(13 147 215)"
                      fill="#2a1f57" stroke="#d8b26b" strokeWidth="1" strokeOpacity=".7" />
              </g>
            </svg>
          )}
        </div>
      </div>

      {/* 양쪽 촛불 — 흔들리는 불꽃이 정지 화면을 살아있게 만든다 */}
      <div className="intro-candles" aria-hidden="true">
        {[0, 1].map((i) => (
          <span className="candle" key={i}>
            <span className="flame" style={{ animationDelay: `${i * 0.37}s` }} />
            <span className="wax" />
          </span>
        ))}
      </div>

      <h1 className="intro-title">Arcana</h1>
      <p className="intro-tagline">{ui.intro.tagline}</p>

      <span className="intro-enter">{ui.intro.enter}</span>
    </div>
  )
}
