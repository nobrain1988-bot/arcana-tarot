// 미리보기(단일 파일) 전용 빌드 설정.
// 평소 앱 빌드는 vite.config.js 를 쓴다. 이건 링크 하나로 폰에서 열어보기 위한 용도다.
//
// 보통 빌드는 코드를 여러 js 파일로 쪼갠다(로딩이 빨라서). 단일 파일로 만들려면
// 쪼개지 않게 해야 하므로 inlineDynamicImports 를 켠다.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    cssCodeSplit: false,
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
})
