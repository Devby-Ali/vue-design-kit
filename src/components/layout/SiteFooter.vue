<template>
  <footer class="mt-16 border-t border-base">
    <div class="container-safe py-8 text-sm text-muted">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} — All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-[hsl(var(--primary))]">Twitter</a>
          <a href="#" class="hover:text-[hsl(var(--primary))]">LinkedIn</a>
          <a href="#" class="hover:text-[hsl(var(--primary))]">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>
