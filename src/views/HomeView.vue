<script setup lang="ts">
import Hero from '@/features/home/Hero.vue'
import WhySubscribe from '@/features/home/WhySubscribe.vue'
import NewsletterCTA from '@/features/home/NewsletterCTA.vue'
import RecentPosts from '@/features/home/RecentPosts.vue'
import FinalCTA from '@/features/home/FinalCTA.vue'
</script>

<template>
  <section class="space-y-16">
    <Hero />
    <WhySubscribe />
    <NewsletterCTA />
    <RecentPosts />
    <FinalCTA />
  </section>
</template>
