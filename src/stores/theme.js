import { defineStore } from 'pinia'


export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: 'system',
    isDark: false,
    ready: false,
  }),
  actions: {
    init() {
      const saved = localStorage.getItem('theme-mode')
      this.mode = saved ?? 'system'
      this.apply()
      this.ready = true
      // واکنش به تغییر تم سیستم
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.mode === 'system') this.apply()
      })
    },
    setMode(mode) {
      this.mode = mode
      localStorage.setItem('theme-mode', mode)
      this.apply()
    },
    apply() {
      const root = document.documentElement
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.isDark = this.mode === 'dark' || (this.mode === 'system' && prefersDark)
      root.classList.toggle('dark', this.isDark)
    },
    toggle() {
      this.setMode(this.isDark ? 'light' : 'dark')
    },
  },
})