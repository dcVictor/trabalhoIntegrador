import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1234,  // definir a porta para 808
    host: '192.168.10.152'
    
  }
})
