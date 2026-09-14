import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Capacitor(안드로이드 앱)는 파일을 file:// 로 읽는다.
  // 절대경로(/assets/...)로 빌드되면 앱 안에서 파일을 못 찾아 흰 화면이 뜨므로 상대경로로 고정한다.
  base: './',
  build: { outDir: 'dist' },
  // 오복사주(D:\project\fortune)가 기본 포트 5173 을 쓰고 있어서 겹친다.
  // 두 앱을 동시에 띄울 일이 많으므로 이쪽은 다른 포트로 고정한다.
  server: { port: Number(process.env.PORT) || 5174 },
  preview: {
    port: 4173,
    // Vite 는 모르는 도메인으로 들어온 요청을 막는다(DNS 리바인딩 방어).
    // 폰으로 확인할 때 cloudflared 임시 터널을 쓰므로 그 도메인만 열어준다.
    // 이건 로컬 확인용 서버 설정이라 실제 앱(APK)과는 무관하다.
    allowedHosts: ['.trycloudflare.com'],
  },
})
