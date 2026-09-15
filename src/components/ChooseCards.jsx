// 카드 고르는 화면 — 뒷면 카드를 늘어놓고 사용자가 직접 필요한 장수만큼 고른다.
//
// 왜 이 화면이 있어야 하는가:
//   실제 타로는 "섞어서 펼쳐주면 고민을 떠올리며 직접 뽑는" 것이 핵심 의식이다.
//   앱이 알아서 뽑아주면 그냥 랜덤 결과 화면이 되고, '내가 고른 카드'라는 감각이 사라진다.
//
// 왜 부채꼴이 아니라 격자인가:
//   처음엔 실제 타로처럼 부채꼴로 폈다. 그림은 그럴듯한데 **고르기가 어렵다** —
//   카드가 서로 깊게 겹쳐서 손가락으로 노릴 수 있는 폭이 20~30px 밖에 안 되고,
//   내가 어느 카드를 누르는지도 눈으로 확인이 안 된다.
//   격자는 한 장 한 장이 온전히 보이고 60×100px 을 통째로 누를 수 있다.
//   의식의 핵심은 '펼친 모양'이 아니라 '내가 고른다'는 사실이므로 이쪽이 맞다.
//
// 어떤 카드를 골랐는지는 결과에 영향을 주지 않는다(어차피 뒷면이라 알 수 없다).
// 그래도 고르는 행위 자체가 의미를 만든다 — 연출이 아니라 타로의 작동 원리다.

import { useState, useCallback } from 'react'
import { CardBack } from './CardArt.jsx'
import { useLang } from '../i18n/context.jsx'

// 5열 × 5줄 = 25장. 부채꼴 때는 11장이었다.
// 줄 수는 화면에 실제로 재보고 정했다 — 4줄이면 아래가 184px 남고, 6줄이면 탭바에 닿는다.
const COLS = 5
const ROWS = 5
const SPREAD_OUT = COLS * ROWS

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

      <div className="pick-grid" role="group" aria-label={ui.read.chooseTitle}>
        {Array.from({ length: SPREAD_OUT }, (_, i) => {
          const on = picked.includes(i)
          const row = Math.floor(i / COLS)
          const col = i % COLS
          return (
            <button
              key={i}
              type="button"
              className={`pick-card${on ? ' on' : ''}${leaving && !on ? ' gone' : ''}`}
              // 왼쪽 위에서 오른쪽 아래로 비스듬히 번지며 깔린다.
              // 한꺼번에 나타나면 카드를 늘어놓은 게 아니라 그냥 화면이 바뀐 것으로 보인다.
              style={{ animationDelay: `${(row + col) * 0.045}s` }}
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
