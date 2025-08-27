<script setup lang="ts">
const posts = [
  { id: 1, title: 'بهینه‌سازی لندینگ برای تبدیل', img: 'https://picsum.photos/seed/a/640/360' },
  { id: 2, title: 'تبلیغات نمایشی که می‌فروشند', img: 'https://picsum.photos/seed/b/640/360' },
  { id: 3, title: 'اندازه‌گیری درست KPI ها', img: 'https://picsum.photos/seed/c/640/360' },
]
</script>

<template>
  <section id="posts" class="space-y-6">
    <h3 class="text-xl font-semibold">آخرین پست‌ها</h3>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="p in posts" :key="p.id" class="card overflow-hidden">
        <img :src="p.img" :alt="p.title" class="h-40 w-full object-cover" />
        <div class="p-4">
          <h4 class="font-medium">{{ p.title }}</h4>
          <button class="mt-3 btn btn-outline">مطالعه</button>
        </div>
      </article>
    </div>
  </section>
</template>
