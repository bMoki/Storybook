/// <reference types="vite/client" />

import react from '@vite/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
})