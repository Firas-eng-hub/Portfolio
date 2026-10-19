import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'
import { normalizeSiteUrl, seoPlugin } from './scripts/seo.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL?.trim() || 'https://portfolioo-psi-rouge.vercel.app/')
  return {
    base: new URL(siteUrl).pathname,
    define: {
      // Vercel builds previews in production mode too; exclude them from GA.
      'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(
        process.env.VERCEL_ENV === 'preview' ? '' : env.VITE_GA_MEASUREMENT_ID || '',
      ),
    },
    plugins: [
      seoPlugin(siteUrl),
      react({
        babel: { plugins: [['babel-plugin-react-compiler']] },
      }),
    ],
  }
})
