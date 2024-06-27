import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
    ],
    build: {
        outDir: '../dist',
        sourcemap: true
    },
    server: {
        open: true,
        port: 4000
    },
    root: 'src',
    base: '/vanillajs-app/'
})
