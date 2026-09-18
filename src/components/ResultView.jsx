// 결과 화면 — 오늘의 카드 / 3장 스프레드 / 예·아니오 전부 이 컴포넌트 하나로 그린다.
// reading 은 lib/reading.js 의 interpret() 이 만든 객체이고, 안의 글자는 이미 번역돼 있다.

import { CardArt, CardBack } from './CardArt.jsx'
import { IconShare } from './icons.jsx'
import { useLang } from '../i18n/context.jsx'

// 뒤집기 연출 타이밍(초). CSS 애니메이션 지연으로만 처리한다 —
// 타이머를 쓰면 화면을 벗어났다 돌아올 때 순서가 꼬인다.
const FLIP_WAIT = 0.3    // 화면이 자리잡을 때까지
const FLIP_GAP = 0.62    // 카드 사이 간격
const FLIP_DUR = 0.75    // 한 장이 뒤집히는 시간

export const revealDelay = (n) => FLIP_WAIT + (n - 1) * FLIP_GAP + FLIP_DUR + 0.15

// 카드 여러 장을 한 줄로 늘어놓는다. 1장이면 크게, 3장이면 나란히.
// reveal=true 면 뒷면으로 시작해 왼쪽부터 한 장씩 뒤집힌다.
function Spread({ cards, reveal }) {
  const single = cards.length === 1
  return (
    <div className="spread-row" style={single ? { maxWidth: 210, margin: '0 auto 6px' } : undefined}>
      {cards.map((c, i) =>
        reveal ? (
          // 고른 카드가 아래에서 날아와 자리를 잡고(dealIn) → 뒤집히고(flipIn)
          // → 앞면 위로 빛이 한 번 스친다(gleam). 세 연출의 시점이 어긋나면 안 된다.
          <div key={i} className="flip" style={{ animationDelay: `${i * 0.11}s` }}>
            <div
              className="flip-inner"
              style={{
                animationDelay: `${FLIP_WAIT + i * FLIP_GAP}s`,
                // 뒤집힘이 끝나는 순간에 맞춰 빛을 흘린다
                '--gleam-delay': `${FLIP_WAIT + i * FLIP_GAP + FLIP_DUR * 0.72}s`,
              }}
            >
              <div className="flip-face flip-back card-shell"><CardBack /></div>
              <div className="flip-face flip-front card-shell">
                <CardArt card={c.card} reversed={c.reversed} label={c.name} />
              </div>
            </div>
          </div>
        ) : (
          <div key={i} className="card-shell card-enter" style={{ animationDelay: `${i * 0.13}s` }}>
            <CardArt card={c.card} reversed={c.reversed} label={c.name} />
          </div>
        )
      )}
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
      {/* 자리 설명. 세 장짜리에서는 항상, 한 장짜리(예/아니오)에서는 질문 전용 문장일 때만.
          전에는 showPosition 에만 묶여 있어서 예/아니오 결과에 질문 전용 문장이 있어도
          한 줄도 안 보였다 — 열 개 질문의 답이 '판정 + 카드 본문' 뿐이라 질문과 겉돌았다. */}
      {(showPosition || c.topicLead) && c.lead && (
        <p className="small" style={{ color: 'var(--ink)', margin: '0 0 8px' }}>{c.lead}</p>
      )}
      <p style={{ margin: 0 }}>{c.text}</p>
    </div>
  )
}

export default function ResultView({ reading, onShare, onAgain, reveal = false }) {
  const { ui } = useLang()
  const multi = reading.cards.length > 1

  // 카드가 다 뒤집힌 뒤에 해설이 통째로 올라오게 한다.
  // 카드와 글이 동시에 나오면 어디를 봐야 할지 몰라 연출이 흩어진다.
  // 한 덩어리로 나타내지 않고 패널이 위에서부터 차례로 올라오게 한다.
  // 기준 시각만 변수로 내려주고, 순서 간격은 CSS 가 nth-child 로 준다.
  const rest = reveal
    ? { className: 'stack reveal-stack', style: { '--late': `${revealDelay(reading.cards.length)}s` } }
    : { className: 'stack' }

  return (
    <div className="stack">
      <Spread cards={reading.cards} reveal={reveal} />

      <div {...rest}>
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

        {/* 마무리 — 이 질문에 세 장이 어떻게 하나의 답이 되는지.
            카드 세 장을 따로 읽고 나면 "그래서 답이 뭔데" 가 남는다. 그 빈자리를 메우는
            패널이라 요약(셀 수 있는 값)보다 앞에 둔다. 주제별 질문에서 왔을 때만 있다. */}
        {reading.close && (
          <div className="panel">
            {/* 한 장짜리(예/아니오)에 '세 장을 합치면' 이 찍히면 화면이 스스로를 의심하게 만든다 */}
            <div className="eyebrow">{multi ? ui.result.together : ui.result.togetherOne}</div>
            <p style={{ margin: 0 }}>{reading.close}</p>
          </div>
        )}

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
    </div>
  )
}
