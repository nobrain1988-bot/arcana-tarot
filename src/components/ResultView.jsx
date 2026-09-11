// 결과 화면 — 오늘의 카드 / 3장 스프레드 / 예·아니오 전부 이 컴포넌트 하나로 그린다.
// reading 은 lib/reading.js 의 interpret() 이 만든 객체이고, 안의 글자는 이미 번역돼 있다.

import { CardArt } from './CardArt.jsx'
import { IconShare } from './icons.jsx'
import { useLang } from '../i18n/context.jsx'

// 카드 여러 장을 한 줄로 늘어놓는다. 1장이면 크게, 3장이면 나란히.
function Spread({ cards }) {
  const single = cards.length === 1
  return (
    <div className="spread-row" style={single ? { maxWidth: 210, margin: '0 auto 6px' } : undefined}>
      {cards.map((c, i) => (
        <div key={i} className="card-shell card-enter" style={{ animationDelay: `${i * 0.13}s` }}>
          <CardArt card={c.card} reversed={c.reversed} label={c.name} />
        </div>
      ))}
    </div>
  )
}

function CardBlock({ c, showPosition, ui }) {
  return (
    <div className="panel">
      {showPosition && <div className="pos-label">{c.position.label}</div>}
      <h2 style={{ marginTop: showPosition ? 6 : 0 }}>{c.name}</h2>
      <div className="row" style={{ marginTop: 4, flexWrap: 'wrap' }}>
        <span className="rev-flag">{c.reversed ? ui.common.reversed : ui.common.upright}</span>
        {c.domain && <span className="small muted">· {c.domain}</span>}
      </div>
      <div className="chips">
        {c.keywords.map((k) => <span className="chip" key={k}>{k}</span>)}
      </div>
      {showPosition && c.lead && (
        <p className="small" style={{ color: 'var(--ink)', margin: '0 0 8px' }}>{c.lead}</p>
      )}
      <p style={{ margin: 0 }}>{c.text}</p>
    </div>
  )
}

export default function ResultView({ reading, onShare, onAgain }) {
  const { ui } = useLang()
  const multi = reading.cards.length > 1

  return (
    <div className="stack">
      <Spread cards={reading.cards} />

      {/* 예/아니오 판정 — 이 스프레드에서만 나온다 */}
      {reading.verdict && (
        <div className={`panel verdict ${reading.verdict.tone}`}>
          <div className="v-word">{reading.verdict.word}</div>
          <p className="small muted" style={{ margin: 0 }}>
            {reading.verdict.gloss} {reading.verdict.detail}
          </p>
        </div>
      )}

      {reading.cards.map((c, i) => <CardBlock key={i} c={c} showPosition={multi} ui={ui} />)}

      {/* 전체 요약 — 전부 셀 수 있는 값(메이저 수·역방향 수·원소)에서 나온 문장이다 */}
      {reading.summary.length > 0 && (
        <div className="panel">
          <div className="eyebrow">{ui.result.whole}</div>
          {reading.summary.map((s, i) => (
            <p key={i} className="small" style={{ margin: i === 0 ? 0 : '10px 0 0' }}>{s}</p>
          ))}
        </div>
      )}

      <button className="btn ghost" onClick={onShare}>
        <span className="row" style={{ justifyContent: 'center' }}>
          <IconShare /> {ui.result.share}
        </span>
      </button>
      {onAgain && <button className="btn ghost" onClick={onAgain}>{ui.result.again}</button>}
    </div>
  )
}
