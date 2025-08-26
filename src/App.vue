<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const theme = useThemeStore()
onMounted(() => theme.init())
</script>


<template>
  <div class="min-h-full bg-base text-base">
    <SiteHeader />
    <main class="container-safe py-10">
      <RouterView v-if="theme.ready" />
    </main>
    <SiteFooter />
  </div>
</template>
