// 앱 전체에 '현재 언어 팩'을 공급한다.
//
// 화면 컴포넌트는 useLang() 한 줄로 문구를 꺼내 쓴다:
//   const { ui } = useLang()
//   <h1>{ui.today.title}</h1>

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { loadPack, cardName as pickName, cardFace as pickFace, fill } from './index.js'
import { detectLang } from './langs.js'
import * as store from '../lib/storage.js'

const Ctx = createContext(null)

export function useLang() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useLang must be used inside <LangProvider>')
  return v
}

export function LangProvider({ children, fallback = null }) {
  const [pack, setPack] = useState(null)

  // 첫 실행: 사용자가 고른 언어가 있으면 그것, 없으면 폰 언어
  useEffect(() => {
    const saved = store.getSettings().lang
    let alive = true
    loadPack(saved || detectLang()).then((p) => { if (alive) setPack(p) })
    return () => { alive = false }
  }, [])

  const setLang = useCallback(async (code) => {
    const p = await loadPack(code)
    store.setSettings({ lang: code })   // 직접 고른 순간부터는 폰 언어를 따라가지 않는다
    setPack(p)
    // 스크린리더·브라우저가 어떤 언어인지 알 수 있게 알려준다
    try { document.documentElement.lang = code } catch {}
  }, [])

  useEffect(() => {
    if (pack) { try { document.documentElement.lang = pack.code } catch {} }
  }, [pack])

  // 언어 파일을 불러오는 동안(보통 한순간)은 아무것도 그리지 않는다.
  // 영어로 먼저 그렸다가 바꾸면 화면이 한 번 번쩍인다.
  if (!pack) return fallback

  const value = {
    lang: pack.code,
    ui: pack.ui,
    setLang,
    fill,
    cardName: (card) => pickName(pack, card),
    cardFace: (card, reversed) => pickFace(pack, card, reversed),
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
