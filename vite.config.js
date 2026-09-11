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
})
