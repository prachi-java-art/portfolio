import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is '/' because this app is deployed on Vercel at the domain root.
export default defineConfig({
    plugins: [react()],
    base: '/',
})
