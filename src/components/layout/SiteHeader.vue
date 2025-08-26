<script setup lang="ts">
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
</script>

<template>
  <header class="border-b border-base">
    <div class="container-safe flex h-16 items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="h-8 w-8 rounded-lg bg-[hsl(var(--primary))]"></div>
        <span class="font-semibold">Art of Digital Marketing</span>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink to="/" class="hover:text-[hsl(var(--primary))]">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-[hsl(var(--primary))]">About</RouterLink>
        <RouterLink to="/resources" class="hover:text-[hsl(var(--primary))]">Resources</RouterLink>
        <RouterLink to="/contact" class="hover:text-[hsl(var(--primary))]">Contact</RouterLink>
      </nav>
      <div class="flex items-center gap-3">
        <ThemeToggle />
        <button class="md:hidden btn btn-outline">
          <span>Menu</span>
        </button>
      </div>
    </div>
  </header>
</template>
