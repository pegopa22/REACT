import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindscss from  '@tailwindscss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
