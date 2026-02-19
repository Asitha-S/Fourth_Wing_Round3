import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/Fourth_Wing_Round3/',
    server: {
        port: 5173,
        open: false
    }
})
