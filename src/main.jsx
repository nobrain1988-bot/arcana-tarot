import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LangProvider } from './i18n/context.jsx'
import './styles.css'

// LangProvider 가 언어 팩을 불러오는 동안(보통 한순간) 빈 화면 대신 배경색만 깔아둔다.
// 흰 화면이 번쩍였다가 어두운 앱이 뜨면 싸구려로 보인다.
const Splash = <div style={{ minHeight: '100vh', background: 'var(--bg)' }} />

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider fallback={Splash}>
      <App />
    </LangProvider>
  </React.StrictMode>
)
