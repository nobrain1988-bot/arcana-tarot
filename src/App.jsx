import { useState, useEffect, useMemo, useCallback } from 'react'
import { DECK, cardById, draw, todayKey } from './lib/deck.js'
import { SPREADS, SPREAD_LIST, ASKS_QUESTION, spreadText } from './lib/spreads.js'
import { interpret } from './lib/reading.js'
import { initAds, showInterstitialBeforeResult } from './lib/ads.js'
import * as store from './lib/storage.js'
import { useLang } from './i18n/context.jsx'
import { CardArt, CardBack } from './components/CardArt.jsx'
import ResultView from './components/ResultView.jsx'
import ChooseCards from './components/ChooseCards.jsx'
import Ambience from './components/Ambience.jsx'
import Settings from './components/Settings.jsx'
import { IconSun, IconCards, IconBook, IconMoonList, IconBack, IconSpread, IconGear } from './components/icons.jsx'

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

  if (phase === 'pick') {
    return (
      <div className="screen">
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
        <div style={{ height: 16 }} />
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
            <div className="card-shell"><CardArt card={c} showName={false} label={cardName(c)} /></div>
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
                  <CardArt card={c.card} reversed={c.reversed} showName={false} label={cardName(c.card)} />
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
  const { ui } = useLang()
  const [tab, setTab] = useState('today')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [reversals, setReversals] = useState(() => store.getSettings().reversals)
  // 설정에서 데이터를 지우면 저널을 다시 읽어야 한다. 이 숫자가 바뀌면 다시 읽는다.
  const [dataVersion, setDataVersion] = useState(0)

  useEffect(() => { initAds() }, [])

  const changeReversals = (v) => { setReversals(v); store.setSettings({ reversals: v }) }
  const clearData = () => { store.clearUserData(); setDataVersion((n) => n + 1); setSettingsOpen(false) }

  // key 를 바꿔 탭 전환 시 화면이 새로 마운트되게 한다(진입 애니메이션 + 상태 초기화)
  const screen =
    tab === 'today'   ? <TodayView key={`today-${dataVersion}`} reversals={reversals} /> :
    tab === 'read'    ? <ReadingsView key="read" reversals={reversals} /> :
    tab === 'library' ? <LibraryView key="library" /> :
                        <JournalView key="journal" reversals={reversals} refreshKey={dataVersion} />

  return (
    <div className="app">
      <Ambience />

      <button className="gear" onClick={() => setSettingsOpen(true)} aria-label={ui.set.title}>
        <IconGear />
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
        onClearData={clearData}
      />
    </div>
  )
}
