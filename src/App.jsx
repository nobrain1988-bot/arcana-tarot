import { useState, useEffect, useMemo, useCallback } from 'react'
import { DECK, cardById, draw, todayKey } from './lib/deck.js'
import { SPREADS, SPREAD_LIST, ASKS_QUESTION, spreadText } from './lib/spreads.js'
import { CATEGORIES, topicsIn, catText, topicText } from './lib/topics.js'
import { interpret } from './lib/reading.js'
import { initAds, showInterstitialBeforeResult } from './lib/ads.js'
import * as ambient from './lib/ambient.js'
import * as store from './lib/storage.js'
import { useLang } from './i18n/context.jsx'
import { CardArt, CardBack } from './components/CardArt.jsx'
import ResultView from './components/ResultView.jsx'
import ChooseCards from './components/ChooseCards.jsx'
import Ambience from './components/Ambience.jsx'
import Intro from './components/Intro.jsx'
import Settings from './components/Settings.jsx'
import { IconSun, IconCards, IconBook, IconMoonList, IconBack, IconSpread } from './components/icons.jsx'

// 출시 후 실제 스토어 주소로 바꾼다. 공유 문구 끝에 붙는다.
const STORE_URL = 'https://play.google.com/store/apps/details?id=com.obok.arcana'

// 날짜는 그 언어의 표기법으로 보여준다. 언어를 골랐다는 건 그 표기에 익숙하다는 뜻이다.
// 다만 지원하지 않는 언어 코드가 들어오면 브라우저가 예외를 던지므로 감싼다.
function formatDate(d, lang, opts) {
  try { return d.toLocaleDateString(lang, opts) } catch { return d.toLocaleDateString('en-US', opts) }
}

// ──────────────────────────────────────────────────────────────
// 공유 — 안드로이드 기본 공유 시트를 띄우고, 안 되면 클립보드로 떨어진다.
// 질문 내용은 절대 넣지 않는다. 나가는 건 카드 이름 + 키워드뿐.
// ──────────────────────────────────────────────────────────────
async function shareReading(reading, ui) {
  const text = `${reading.spreadTitle}\n${reading.shareLine}\n\n${ui.share.tagline}\n${STORE_URL}`
  try {
    if (navigator.share) { await navigator.share({ title: 'Arcana', text }); return }
  } catch { /* 사용자가 공유 시트를 닫은 경우 — 아무 것도 안 한다 */ return }
  try {
    await navigator.clipboard.writeText(text)
    alert(ui.common.copied)
  } catch { alert(text) }
}

// 언어 팩에서 글자를 꺼내는 함수 묶음. interpret() 에 통째로 넘긴다.
function useText() {
  const { cardName, cardFace, fill } = useLang()
  return useMemo(() => ({ cardName, cardFace, fill }), [cardName, cardFace, fill])
}

// ──────────────────────────────────────────────────────────────
// 셔플 화면
// ──────────────────────────────────────────────────────────────
// 카드 7장이 서로 엇갈리며 섞이는 연출.
// 3장짜리 흔들기로는 '섞는다'가 안 읽혔다 — 장수가 적으면 그냥 떨리는 것처럼 보인다.
const SHUFFLE_CARDS = 7

function Shuffling({ label }) {
  const { ui } = useLang()
  return (
    <div className="shuffling">
      <div>
        <div className="shuffle-stack">
          {Array.from({ length: SHUFFLE_CARDS }, (_, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.085}s`, zIndex: i }}>
              <CardBack />
            </div>
          ))}
          {/* 마지막에 카드가 한 덩어리로 모이면서 빛이 터진다.
              이 매듭이 없으면 섞다가 그냥 화면이 바뀌어서 흐지부지된다. */}
          <div className="shuffle-flash" />
        </div>
        <div className="eyebrow" style={{ marginBottom: 4 }}>{ui.read.shuffling}</div>
        <p className="small muted" style={{ margin: 0 }}>{label}</p>
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// 1) Today — 오늘의 카드. 하루 동안 고정된다.
// ──────────────────────────────────────────────────────────────
function TodayView({ reversals }) {
  const { ui, lang } = useLang()
  const t = useText()
  const [drawn, setDrawn] = useState(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const key = todayKey()
    const saved = store.getDaily()

    // 오늘 이미 뽑았으면 저장된 id 로 복원한다(문구가 바뀌어도 최신 문구로 나오도록 id만 저장).
    if (saved && saved.dateKey === key && Array.isArray(saved.drawn)) {
      const list = saved.drawn.map((d) => ({ card: cardById(d.id), reversed: !!d.reversed })).filter((d) => d.card)
      if (list.length) {
        setDrawn(list)
        setRevealed(!!saved.revealed)   // 뒤집어 본 날이면 바로 보여준다
        return
      }
    }
    // 아직 안 뽑았으면 '날짜 + 기기고유값' 을 시드로 뽑는다 → 오늘 하루 고정, 사람마다 다름
    const list = draw(1, { seed: `${key}|${store.deviceSalt()}` })
    store.setDaily(key, list)
    setDrawn(list)
    setRevealed(false)
  }, [])

  // 언어나 역방향 설정이 바뀌면 해석을 다시 만든다.
  // (카드는 그대로고 읽는 방식만 바뀐다 — 오늘의 카드가 다른 카드로 바뀌지 않는다)
  const reading = useMemo(() => {
    if (!drawn) return null
    const applied = drawn.map((d) => ({ ...d, reversed: reversals && d.reversed }))
    return interpret(SPREADS.daily, applied, ui, t)
  }, [drawn, reversals, ui, t])

  // 방금 뒤집었을 때만 뒤집기 연출을 준다.
  // 이미 본 날 앱을 다시 켰는데 매번 뒤집히면 연출이 아니라 방해가 된다.
  const [justRevealed, setJustRevealed] = useState(false)

  const reveal = useCallback(async () => {
    await showInterstitialBeforeResult()
    setRevealed(true)
    setJustRevealed(true)
    store.markDailyRevealed()
    if (drawn) store.addJournal({ spreadId: 'daily', cards: drawn })
  }, [drawn])

  if (!reading) return null

  const today = formatDate(new Date(), lang, { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className="screen">
      <div className="eyebrow">{today}</div>
      <h1 style={{ marginBottom: 18 }}>{ui.today.title}</h1>

      {!revealed ? (
        <>
          <div style={{ maxWidth: 200, margin: '0 auto 22px' }}>
            {/* 뒤집기 전 뒷면이 천천히 숨쉰다 — 눌러야 할 것이 무엇인지 눈이 먼저 안다 */}
            <div className="card-shell card-breathe"><CardBack /></div>
          </div>
          <p className="small muted center" style={{ margin: '0 0 18px' }}>{ui.today.blurb}</p>
          <button className="btn" onClick={reveal}>{ui.today.reveal}</button>
        </>
      ) : (
        <ResultView reading={reading} reveal={justRevealed} onShare={() => shareReading(reading, ui)} />
      )}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// 2) Readings — 스프레드 선택 → (질문) → 셔플 → 결과
// ──────────────────────────────────────────────────────────────
function ReadingsView({ reversals }) {
  const { ui } = useLang()
  const t = useText()
  const [spread, setSpread] = useState(null)
  const [question, setQuestion] = useState('')
  const [phase, setPhase] = useState('pick')   // pick | ask | shuffling | choosing | result
  const [drawn, setDrawn] = useState(null)
  // 고르는 화면의 두 가지 모드.
  //   topics  — 주제별 질문 목록 (기본). 국내 앱들이 쓰는 방식이고 처음 온 사람이 고를 수 있다.
  //   spreads — 스프레드를 직접 고르고 질문을 직접 쓴다. 타로를 아는 사람용.
  const [mode, setMode] = useState('topics')
  const [cat, setCat] = useState(CATEGORIES[0])

  const reading = useMemo(
    () => (drawn && spread ? interpret(spread, drawn, ui, t) : null),
    [drawn, spread, ui, t]
  )

  const reset = () => { setSpread(null); setQuestion(''); setPhase('pick'); setDrawn(null) }

  // 의식은 세 박자다: 섞는다 → 펼친 카드에서 직접 고른다 → 순서대로 뒤집힌다.
  // 앱이 알아서 뽑아주면 '내가 고른 카드'라는 감각이 없어서 그냥 랜덤 화면이 된다.
  const runDraw = useCallback(async (s) => {
    setDrawn(null)
    setPhase('shuffling')
    // 즉시 넘어가면 '계산된 느낌'이 들어 무게가 사라진다
    await new Promise((r) => setTimeout(r, 1900))
    setPhase('choosing')
  }, [])

  // 사용자가 마지막 장을 고른 뒤. 이때 비로소 실제로 뽑는다.
  // 어느 카드를 골랐는지는 결과에 영향이 없지만(뒷면이라 알 수 없다),
  // 고르는 행위가 먼저 오고 결과가 뒤따라야 순서가 납득된다.
  const onChosen = useCallback(async () => {
    if (!spread) return
    const list = draw(spread.count, { reversals })
    await showInterstitialBeforeResult()
    store.addJournal({ spreadId: spread.id, cards: list })
    setDrawn(list)
    setPhase('result')
  }, [spread, reversals])

  const start = (s) => {
    setSpread(s)
    if (ASKS_QUESTION.has(s.id)) setPhase('ask')
    else runDraw(s)
  }

  // 주제를 고른 경우 — 질문은 이미 정해졌으니 질문칸을 건너뛰고 바로 섞는다.
  // 고른 질문은 결과 화면 위에 그대로 보여서 무엇을 물었는지 남는다.
  // 인자 이름을 topic 으로 둔다. t 로 받으면 위쪽의 번역 함수 t 를 가려서,
  // 나중에 이 안에서 번역을 쓰려는 순간 조용히 엉뚱한 값이 잡힌다.
  const startTopic = (topic) => {
    const s = SPREADS[topic.spread]
    setSpread(s)
    setQuestion(topicText(ui, topic.id))
    runDraw(s)
  }

  if (phase === 'pick') {
    // 주제별 질문 — 무엇이 궁금한지로 고른다.
    //
    // 전에는 스프레드 이름('과거 · 현재 · 미래')으로 고르게 했다. 그건 타로를 아는 사람의
    // 언어다. 처음 온 사람에게는 고를 근거가 없는 이름이라 거기서 멈춘다.
    // 국내 앱(점신·헬로우봇)은 전부 궁금한 내용으로 고르게 한다 — 그게 실제 상담 순서이기도
    // 하다. 손님이 고민을 말하면 리더가 몇 장 뽑을지 정하지, 손님이 스프레드를 고르지 않는다.
    //
    // 질문을 고르면 질문칸을 건너뛰고 바로 섞기로 간다. 타이핑이 필요 없다.
    if (mode === 'topics') {
      return (
        <div className="screen">
          <div className="eyebrow">{ui.read.eyebrow}</div>
          <h1 style={{ marginBottom: 16 }}>{ui.read.title}</h1>

          <div className="cat-row">
            {CATEGORIES.map((c) => (
              <button key={c} className={`cat${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>
                {catText(ui, c)}
              </button>
            ))}
          </div>

          {topicsIn(cat).map((t) => {
            const s = SPREADS[t.spread]
            return (
              <button key={t.id} className="topic" onClick={() => startTopic(t)}>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span className="topic-title">{topicText(ui, t.id)}</span>
                  <span className="topic-tags">
                    #{catText(ui, t.cat)} · #{spreadText(ui, s).title}
                  </span>
                </span>
                <span className="t-icon" style={{ color: 'var(--ink)' }}><IconSpread n={s.count} /></span>
              </button>
            )
          })}

          <button className="btn ghost" style={{ marginTop: 6 }} onClick={() => setMode('spreads')}>
            {ui.read.ownQuestion}
          </button>
        </div>
      )
    }

    // 스프레드를 직접 고르는 화면 — 타로를 아는 사람용. 질문도 직접 쓴다.
    return (
      <div className="screen">
        <button className="link row" onClick={() => setMode('topics')} style={{ marginBottom: 14 }}>
          <IconBack /> {ui.common.back}
        </button>
        <div className="eyebrow">{ui.read.eyebrow}</div>
        <h1 style={{ marginBottom: 6 }}>{ui.read.title}</h1>
        <p className="small muted" style={{ margin: '0 0 20px' }}>{ui.read.blurb}</p>
        {/* 오늘의 카드는 Today 탭이 담당하므로 목록에서 뺀다 */}
        {SPREAD_LIST.filter((s) => s.id !== 'daily').map((s) => {
          const st = spreadText(ui, s)
          return (
            <button key={s.id} className="tile" onClick={() => start(s)}>
              <span className="t-icon" style={{ color: 'var(--ink)' }}><IconSpread n={s.count} /></span>
              <span style={{ minWidth: 0 }}>
                <span className="t-title">{st.title}</span>
                <span className="t-sub" style={{ display: 'block' }}>{st.blurb}</span>
              </span>
            </button>
          )
        })}
      </div>
    )
  }

  if (phase === 'ask') {
    const yesno = spread.id === 'yesno'
    const examples = (ui.spreads?.[spread.id]?.examples) || []
    return (
      <div className="screen">
        <button className="link row" onClick={reset} style={{ marginBottom: 14 }}>
          <IconBack /> {ui.common.back}
        </button>
        <div className="eyebrow">{spreadText(ui, spread).title}</div>
        <h1 style={{ marginBottom: 6 }}>{yesno ? ui.read.askTitle : ui.read.focusTitle}</h1>
        <p className="small muted" style={{ margin: '0 0 16px' }}>
          {yesno ? ui.read.askBlurb : ui.read.focusBlurb}
        </p>
        <textarea
          className="field" rows={3} maxLength={200} value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={yesno ? ui.read.askPlaceholder : ui.read.focusPlaceholder}
        />

        {/* 질문 던지는 법 안내.
            해외 타로 교육(Biddy Tarot·Labyrinthos)이 공통으로 가장 강조하는 것이
            "언제/~될까요" 가 아니라 "무엇을/어떻게" 로 물으라는 것이다.
            닫힌 질문에서는 짐작밖에 안 나온다.

            설명만 적어두면 아무도 안 읽는다. 눌러서 바로 입력되는 예시가 훨씬 잘 가르치고,
            빈 입력칸 앞에서 뭘 쓸지 몰라 이탈하는 것도 같이 막는다. */}
        <p className="small muted" style={{ margin: '10px 2px 0' }}>
          {yesno ? ui.read.askTip : ui.read.focusTip}
        </p>

        {examples.length > 0 && (
          <>
            <div className="eyebrow" style={{ margin: '18px 0 8px' }}>{ui.read.tryAsking}</div>
            <div className="q-examples">
              {examples.map((q, i) => (
                <button key={i} type="button" className="q-example" onClick={() => setQuestion(q)}>
                  {q}
                </button>
              ))}
            </div>
          </>
        )}

        <div style={{ height: 18 }} />
        <button className="btn" onClick={() => runDraw(spread)}>{ui.read.draw}</button>
        {/* 실제 타로는 고민을 '머릿속으로' 떠올릴 뿐 적지 않는다.
            비워둬도 뽑히지만, 입력칸만 있으면 써야 하는 줄 알고 여기서 이탈한다. */}
        <button className="link center" style={{ display: 'block', margin: '14px auto 0' }}
                onClick={() => { setQuestion(''); runDraw(spread) }}>
          {ui.read.skip}
        </button>
      </div>
    )
  }

  if (phase === 'shuffling') {
    return (
      <div className="screen">
        <Shuffling label={question.trim() || spreadText(ui, spread).title} />
      </div>
    )
  }

  if (phase === 'choosing') {
    return (
      <div className="screen">
        <ChooseCards count={spread.count} onDone={onChosen} />
      </div>
    )
  }

  if (!reading) {
    return (
      <div className="screen">
        <Shuffling label={question.trim() || spreadText(ui, spread).title} />
      </div>
    )
  }

  return (
    <div className="screen">
      <button className="link row" onClick={reset} style={{ marginBottom: 14 }}>
        <IconBack /> {ui.read.newReading}
      </button>
      <div className="eyebrow">{reading.spreadTitle}</div>
      {question.trim() && (
        <p className="small muted" style={{ margin: '0 0 14px', fontStyle: 'italic' }}>“{question.trim()}”</p>
      )}
      <ResultView
        reading={reading}
        reveal
        onShare={() => shareReading(reading, ui)}
        onAgain={() => runDraw(spread)}
      />
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// 3) Library — 78장 사전. 스토어 검색 유입(ASO)에도 도움이 된다.
// ──────────────────────────────────────────────────────────────
function LibraryView() {
  const { ui, cardName, cardFace } = useLang()
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)

  const filters = [
    { key: 'all', label: ui.lib.filterAll },
    { key: 'major', label: ui.lib.filterMajor },
    { key: 'wands', label: ui.engine.suits.wands.name },
    { key: 'cups', label: ui.engine.suits.cups.name },
    { key: 'swords', label: ui.engine.suits.swords.name },
    { key: 'pentacles', label: ui.engine.suits.pentacles.name },
  ]

  const list = useMemo(() => DECK.filter((c) =>
    filter === 'all' ? true : filter === 'major' ? c.arcana === 'major' : c.suit === filter), [filter])

  const detail = open && {
    name: cardName(open),
    up: cardFace(open, false),
    rev: cardFace(open, true),
    sub: open.arcana === 'major'
      ? `${ui.lib.majorArcana} · ${open.n}`
      : `${ui.engine.suits[open.suit].name} — ${ui.engine.suits[open.suit].domain}`,
  }

  return (
    <div className="screen">
      <div className="eyebrow">{ui.lib.eyebrow}</div>
      <h1 style={{ marginBottom: 14 }}>{ui.lib.title}</h1>

      <div className="chips" style={{ marginBottom: 16 }}>
        {filters.map((f) => (
          <button key={f.key} className="chip" onClick={() => setFilter(f.key)}
            style={{
              border: 0, cursor: 'pointer', fontFamily: 'var(--sans)',
              background: filter === f.key ? 'var(--ink)' : 'rgba(216,178,107,.1)',
              color: filter === f.key ? '#241a05' : 'var(--ink)',
              fontWeight: filter === f.key ? 700 : 400,
            }}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map((c) => (
          <button key={c.id} className="grid-item" onClick={() => setOpen(c)}>
            <div className="card-shell"><CardArt card={c} thumb showName={false} label={cardName(c)} /></div>
            <div className="cap">{cardName(c)}</div>
          </button>
        ))}
      </div>

      {open && (
        <div className="sheet-bg" onClick={() => setOpen(null)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-grip" />
            <div style={{ maxWidth: 150, margin: '0 auto 18px' }}>
              <div className="card-shell"><CardArt card={open} label={detail.name} /></div>
            </div>
            <h2 className="center">{detail.name}</h2>
            <p className="small muted center" style={{ margin: '4px 0 18px' }}>{detail.sub}</p>

            <div className="panel">
              <div className="eyebrow">{ui.common.upright}</div>
              <div className="chips">
                {String(detail.up.k).split(' · ').filter(Boolean).map((k) => <span className="chip" key={k}>{k}</span>)}
              </div>
              <p style={{ margin: 0 }}>{detail.up.t}</p>
            </div>
            <div className="panel">
              <div className="eyebrow">{ui.common.reversed}</div>
              <div className="chips">
                {String(detail.rev.k).split(' · ').filter(Boolean).map((k) => <span className="chip" key={k}>{k}</span>)}
              </div>
              <p style={{ margin: 0 }}>{detail.rev.t}</p>
            </div>

            <button className="btn ghost" onClick={() => setOpen(null)}>{ui.common.close}</button>
          </div>
        </div>
      )}
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// 4) Journal — 내가 뽑은 기록 (이 기기 안에만 있다)
// ──────────────────────────────────────────────────────────────
function JournalView({ reversals, refreshKey }) {
  const { ui, lang, cardName } = useLang()
  const [list, setList] = useState([])
  useEffect(() => { setList(store.getJournal()) }, [refreshKey])

  if (!list.length) {
    return (
      <div className="screen">
        <div className="eyebrow">{ui.jr.eyebrow}</div>
        <h1 style={{ marginBottom: 8 }}>{ui.jr.emptyTitle}</h1>
        <p className="small muted">{ui.jr.emptyBlurb}</p>
      </div>
    )
  }

  return (
    <div className="screen">
      <div className="eyebrow">{ui.jr.eyebrow}</div>
      <h1 style={{ marginBottom: 14 }}>
        {(list.length === 1 ? ui.jr.countOne : ui.jr.countMany).replace('{n}', list.length)}
      </h1>

      {list.map((e, i) => {
        const cards = (e.cards || [])
          .map((c) => ({ card: cardById(c.id), reversed: reversals && !!c.reversed }))
          .filter((c) => c.card)
        if (!cards.length) return null
        const sp = SPREADS[e.spreadId]
        const title = sp ? spreadText(ui, sp).title : e.spreadId
        const head = cards[0].reversed
          ? `${cardName(cards[0].card)} (${ui.common.reversed})`
          : cardName(cards[0].card)
        const when = formatDate(new Date(e.at), lang, { month: 'short', day: 'numeric' })
        return (
          <div className="panel" key={i}>
            <div className="between" style={{ marginBottom: 10 }}>
              <span className="pos-label">{title}</span>
              <span className="small muted">{when}</span>
            </div>
            <div className="spread-row" style={{ maxWidth: cards.length === 1 ? 70 : 200, margin: 0 }}>
              {cards.map((c, j) => (
                <div className="card-shell" key={j} style={{ flex: '0 0 62px' }}>
                  <CardArt card={c.card} thumb reversed={c.reversed} showName={false} label={cardName(c.card)} />
                </div>
              ))}
            </div>
            <p className="small" style={{ margin: '10px 0 0' }}>{head}</p>
          </div>
        )
      })}
      <p className="small muted center" style={{ marginTop: 18 }}>{ui.jr.footer}</p>
    </div>
  )
}

// ──────────────────────────────────────────────────────────────
// 앱 껍데기 + 탭바
// ──────────────────────────────────────────────────────────────
const TABS = [
  { key: 'today',   Icon: IconSun,      label: (ui) => ui.tabs.today },
  { key: 'read',    Icon: IconCards,    label: (ui) => ui.tabs.readings },
  { key: 'library', Icon: IconBook,     label: (ui) => ui.tabs.library },
  { key: 'journal', Icon: IconMoonList, label: (ui) => ui.tabs.journal },
]

export default function App() {
  const { ui, lang } = useLang()
  // 앱을 켤 때마다 시작 화면을 거친다. 저장하지 않는 이유 —
  // 이건 '한 번 보고 마는 안내'가 아니라 매번 거치는 문이다. 들어가는 데 탭 한 번이면 된다.
  //
  // 세 단계로 나눈 이유: 시작 화면이 걷히는 것과 앱이 다가오는 것이 **같이** 일어나야 한다.
  // 시작 화면만 사라지게 하면 뒤에 멈춰 있던 화면이 툭 드러나서 컷이 튄다.
  //   intro   — 시작 화면만 보인다
  //   leaving — 시작 화면은 앞으로 밀려나며 흐려지고, 앱은 안쪽에서 다가온다 (겹치는 구간)
  //   in      — 시작 화면을 걷어낸다
  const [phase, setPhase] = useState('intro')
  const entered = phase !== 'intro'
  const [sound, setSound] = useState(() => store.getSettings().sound !== false)

  const enter = useCallback(() => {
    setPhase((p) => (p === 'intro' ? 'leaving' : p))
    // 브라우저는 사용자가 누르기 전에는 소리를 못 내게 막는다. 이 탭이 그 '한 번'이다.
    if (store.getSettings().sound !== false) ambient.start()
    // 나가는 연출(0.95초)이 끝난 뒤에 걷어낸다. 더 일찍 지우면 도중에 끊긴다.
    setTimeout(() => setPhase('in'), 1000)
  }, [])
  const [tab, setTab] = useState('today')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [reversals, setReversals] = useState(() => store.getSettings().reversals)
  // 설정에서 데이터를 지우면 저널을 다시 읽어야 한다. 이 숫자가 바뀌면 다시 읽는다.
  const [dataVersion, setDataVersion] = useState(0)

  useEffect(() => { initAds() }, [])

  const changeReversals = (v) => { setReversals(v); store.setSettings({ reversals: v }) }
  const clearData = () => { store.clearUserData(); setDataVersion((n) => n + 1); setSettingsOpen(false) }

  const changeSound = (v) => {
    setSound(v)
    store.setSettings({ sound: v })
    // 시작 화면에서 끄는 경우엔 아직 안 켜져 있으니 start 는 들어갈 때 판단한다.
    if (!v) ambient.stop()
    else if (entered) ambient.start()
  }

  // 앱을 벗어나면 배경음을 멈춘다. 다른 앱을 쓰는데 뒤에서 계속 울리면 안 된다.
  // 돌아오면 설정이 켜져 있고 이미 들어와 있을 때만 다시 켠다.
  useEffect(() => {
    const off = ambient.bindVisibility()
    const back = () => {
      if (!document.hidden && sound && entered) ambient.start()
    }
    document.addEventListener('visibilitychange', back)
    return () => { off(); document.removeEventListener('visibilitychange', back) }
  }, [sound, entered])

  // key 를 바꿔 탭 전환 시 화면이 새로 마운트되게 한다(진입 애니메이션 + 상태 초기화)
  const screen =
    tab === 'today'   ? <TodayView key={`today-${dataVersion}`} reversals={reversals} /> :
    tab === 'read'    ? <ReadingsView key="read" reversals={reversals} /> :
    tab === 'library' ? <LibraryView key="library" /> :
                        <JournalView key="journal" reversals={reversals} refreshKey={dataVersion} />

  return (
    <>
      {/* 시작 화면은 .app 바깥에 둔다. 안에 두면 들어올 때 .app 에 거는 애니메이션이
          시작 화면에도 같이 걸려서 두 움직임이 겹쳐 버린다. 화면 전체를 덮는
          position:fixed 라 밖에 있어도 보이는 자리는 똑같다. */}
      {phase !== 'in' && (
        <Intro
          leaving={phase === 'leaving'}
          sound={sound}
          onSound={changeSound}
          onEnter={enter}
        />
      )}

      {/* arriving 은 들어오는 동안에만 붙였다 뗀다.
          .screen 같은 자식에 걸면 안 된다 — 탭을 바꿀 때마다 .screen 이 새로 마운트돼서
          매번 이 무거운 연출(0.95초 + 흐림)이 다시 걸린다. .app 은 한 번 만들어지면
          다시 안 만들어지므로 여기 걸어야 딱 한 번만 돈다. */}
      <div className={`app${phase === 'leaving' ? ' arriving' : ''}`}>
      <Ambience />

      {/* 톱니바퀴가 아니라 '지금 언어'를 띄운다.
          이 버튼의 실제 용도는 언어 변경이다. 그런데 톱니바퀴는 '설정'으로 읽히고,
          정작 이 버튼이 필요한 사람은 '폰 언어 자동 감지가 틀려서 화면 글자를 못 읽는
          사용자'다. 그 사람에게 KO / EN 같은 코드는 어느 나라 사람이든 바로 알아본다. */}
      <button className="gear" onClick={() => setSettingsOpen(true)} aria-label={ui.set.title}>
        <span className="gear-lang">{String(lang).slice(0, 2).toUpperCase()}</span>
      </button>

      {screen}

      <nav className="tabbar">
        <div className="tabbar-inner">
          {TABS.map(({ key, Icon, label }) => (
            <button key={key} className={`tab ${tab === key ? 'on' : ''}`} onClick={() => setTab(key)}>
              <Icon />
              {label(ui)}
            </button>
          ))}
        </div>
      </nav>

      <Settings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        reversals={reversals}
        onReversals={changeReversals}
        sound={sound}
        onSound={changeSound}
        onClearData={clearData}
      />
      </div>
    </>
  )
}
