// 카드 고르는 화면 — 뒷면 카드를 부채꼴로 펼치고, 사용자가 직접 필요한 장수만큼 고른다.
//
// 왜 이 화면이 있어야 하는가:
//   실제 타로는 "섞어서 쫙 펼쳐주면 고민을 떠올리며 직접 뽑는" 것이 핵심 의식이다.
//   앱이 알아서 뽑아주면 그냥 랜덤 결과 화면이 되고, '내가 고른 카드'라는 감각이 사라진다.
//   타로를 아는 사람은 이 단계가 없으면 바로 이탈한다.
//
// 어떤 카드를 골랐는지는 결과에 영향을 주지 않는다(어차피 뒷면이라 알 수 없다).
// 그래도 고르는 행위 자체가 의미를 만든다 — 이건 연출이 아니라 타로의 작동 원리다.

import { useState, useCallback } from 'react'
import { CardBack } from './CardArt.jsx'
import { useLang } from '../i18n/context.jsx'

// 13장 × 74도로도 해봤는데 겹침이 너무 심해 답답했고, 손가락으로 노릴 폭도 좁았다.
// 장수를 줄이고 각도를 키우니 한 장씩 구분되면서 부채도 시원해진다.
const FAN = 11
const SWEEP = 84        // 부채 전체가 벌어지는 각도

export default function ChooseCards({ count, onDone }) {
  const { ui } = useLang()
  const [picked, setPicked] = useState([])
  const [leaving, setLeaving] = useState(false)

  const toggle = useCallback((i) => {
    if (leaving) return
    setPicked((prev) => {
      if (prev.includes(i)) return prev            // 한 번 고른 카드는 무르지 않는다
      const next = [...prev, i]
      if (next.length === count) {
        setLeaving(true)
        // 마지막 장을 고른 여운을 잠깐 두고 넘어간다. 즉시 넘어가면 고른 실감이 없다.
        setTimeout(onDone, 900)
      }
      return next
    })
  }, [count, leaving, onDone])

  return (
    <div className="choose">
      <div className="eyebrow center">{ui.read.chooseTitle}</div>
      <p className="small muted center" style={{ margin: '4px 0 0' }}>{ui.read.chooseBlurb}</p>

      <div className="choose-count">
        <span className="cc-now">{picked.length}</span>
        <span className="cc-sep">/</span>
        <span className="cc-all">{count}</span>
      </div>

      <div className="fan" role="group" aria-label={ui.read.chooseTitle}>
        {Array.from({ length: FAN }, (_, i) => {
          // -1 ~ 1 로 정규화한 뒤 각도로 편다. 가운데가 0도.
          const t = (i / (FAN - 1)) * 2 - 1
          const angle = t * (SWEEP / 2)
          const on = picked.includes(i)
          return (
            <button
              key={i}
              type="button"
              className={`fan-card${on ? ' on' : ''}${leaving && !on ? ' gone' : ''}`}
              style={{
                transform: `rotate(${angle}deg) translateY(${on ? -34 : 0}px)`,
                zIndex: on ? 60 : i,
                // 펼쳐지는 연출 — 가운데부터 차례로 번진다
                animationDelay: `${Math.abs(t) * 0.16 + 0.04}s`,
              }}
              onClick={() => toggle(i)}
              aria-pressed={on}
              aria-label={`${i + 1}`}
            >
              <CardBack />
            </button>
          )
        })}
      </div>
    </div>
  )
}
