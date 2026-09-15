// 설정 시트 — 언어, 역방향 사용 여부, 저장된 데이터 삭제.
//
// 언어를 제일 위에 둔다. 폰 언어 자동 감지가 틀렸을 때 사용자가 찾아오는 곳이고,
// 그 사용자는 지금 화면 글자를 못 읽는 상태라 아래로 스크롤해 찾게 하면 안 된다.

import { useLang } from '../i18n/context.jsx'
import { LANGS } from '../i18n/langs.js'
import { IconCheck } from './icons.jsx'

function Row({ children, onClick, selected }) {
  return (
    <button
      onClick={onClick}
      className="between"
      style={{
        width: '100%', border: 0, cursor: 'pointer', textAlign: 'left',
        background: selected ? 'rgba(216,178,107,.1)' : 'transparent',
        color: selected ? 'var(--ink)' : 'var(--text)',
        padding: '13px 14px', borderRadius: 11, fontSize: 15.5,
        fontFamily: 'var(--sans)', fontWeight: selected ? 650 : 450,
      }}>
      {children}
    </button>
  )
}

export default function Settings({ open, onClose, reversals, onReversals, sound, onSound, onClearData }) {
  const { ui, lang, setLang } = useLang()
  if (!open) return null

  const confirmClear = () => {
    if (!confirm(ui.set.clearDataConfirm)) return
    onClearData()
  }

  return (
    <div className="sheet-bg" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-grip" />
        <h2 className="center" style={{ marginBottom: 20 }}>{ui.set.title}</h2>

        {/* ── 언어 ── */}
        <div className="panel">
          <div className="eyebrow">{ui.set.language}</div>
          <p className="small muted" style={{ margin: '0 0 10px' }}>{ui.set.languageBlurb}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {LANGS.map((l) => (
              <Row key={l.code} selected={l.code === lang} onClick={() => setLang(l.code)}>
                <span>
                  {l.label}
                  {l.label !== l.en && (
                    <span className="small muted" style={{ marginLeft: 8 }}>{l.en}</span>
                  )}
                </span>
                {l.code === lang && <IconCheck />}
              </Row>
            ))}
          </div>
        </div>

        {/* ── 역방향 카드 ── */}
        <div className="panel">
          <div className="between">
            <div style={{ minWidth: 0 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>{ui.set.reversals}</div>
              <p className="small muted" style={{ margin: 0 }}>{ui.set.reversalsBlurb}</p>
            </div>
            <button
              role="switch" aria-checked={reversals} aria-label={ui.set.reversals}
              onClick={() => onReversals(!reversals)}
              style={{
                flex: '0 0 50px', width: 50, height: 30, borderRadius: 999, border: 0,
                cursor: 'pointer', padding: 3, transition: 'background .18s ease',
                background: reversals ? 'var(--ink)' : 'var(--line)',
              }}>
              <span style={{
                display: 'block', width: 24, height: 24, borderRadius: '50%',
                background: reversals ? '#241a05' : 'var(--muted)',
                transform: `translateX(${reversals ? 20 : 0}px)`,
                transition: 'transform .18s ease',
              }} />
            </button>
          </div>
        </div>

        {/* ── 배경음 ──
            시작 화면에도 끄는 버튼이 있지만, 들어온 뒤에 거슬릴 수도 있으니 여기에도 둔다. */}
        <div className="panel">
          <div className="between">
            <div style={{ minWidth: 0 }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>{ui.common.sound}</div>
              <p className="small muted" style={{ margin: 0 }}>{ui.set.soundBlurb}</p>
            </div>
            <button
              role="switch" aria-checked={sound} aria-label={ui.common.sound}
              onClick={() => onSound(!sound)}
              style={{
                flex: '0 0 50px', width: 50, height: 30, borderRadius: 999, border: 0,
                cursor: 'pointer', padding: 3, transition: 'background .18s ease',
                background: sound ? 'var(--ink)' : 'var(--line)',
              }}>
              <span style={{
                display: 'block', width: 24, height: 24, borderRadius: '50%',
                background: sound ? '#241a05' : 'var(--muted)',
                transform: `translateX(${sound ? 20 : 0}px)`,
                transition: 'transform .18s ease',
              }} />
            </button>
          </div>
        </div>

        {/* ── 내 데이터 ── */}
        <div className="panel">
          <div className="eyebrow">{ui.set.data}</div>
          <p className="small muted" style={{ margin: '0 0 12px' }}>{ui.set.dataBlurb}</p>
          <button className="link" onClick={confirmClear} style={{ color: 'var(--no)' }}>
            {ui.set.clearData}
          </button>
        </div>

        <button className="btn ghost" onClick={onClose}>{ui.set.done}</button>
      </div>
    </div>
  )
}
