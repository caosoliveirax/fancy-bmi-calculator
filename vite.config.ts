/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',

    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: [
        'src/main.tsx',
        'src/setupTests.ts',
        'src/App.tsx',
        'src/store/index.ts',
        'src/store/hooks.ts',
        'src/styles/global.ts',
        'src/themes/themes.ts',

        'src/vite-env.d.ts',
        'src/styled.d.ts',

        '**/*.test.ts',
        '**/*.test.tsx',

        '**/*styles.ts'
      ]
    }
  }
})
