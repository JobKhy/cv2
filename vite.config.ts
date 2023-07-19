import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //configure @ to be used as an alias to /src in vite config
  resolve: {
    alias: {
      '@': '/src'
    }
  }
  
})
