<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
const { isDark, mode } = storeToRefs(theme)

const nextMode = () => {
  if (mode.value === 'system') theme.setMode('light')
  else if (mode.value === 'light') theme.setMode('dark')
  else theme.setMode('system')
}
</script>

<template>
  <button class="btn btn-outline" @click="nextMode" :aria-pressed="isDark">
    <span v-if="mode === 'system'">System</span>
    <span v-else-if="mode === 'light'">Light</span>
    <span v-else>Dark</span>
  </button>
</template>
