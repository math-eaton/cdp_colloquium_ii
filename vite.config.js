import { defineConfig } from 'vite'

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/cdp_colloquium_ii/' : '/',
  })