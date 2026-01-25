import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  // Allow an env var `VITE_BASE` to control the base path at build time.
  // Netlify: leave unset (defaults to '/'). GitHub Actions below sets it to '/portfolio/'.
  const base = process.env.VITE_BASE || '/'
  return {
    base,
  }
})