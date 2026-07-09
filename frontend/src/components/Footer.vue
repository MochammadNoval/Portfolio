<template>
  <footer class="py-12 border-t border-zinc-100 bg-white">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Copyright -->
      <div class="text-sm text-zinc-400 text-center md:text-left">
        &copy; {{ currentYear }} Mochammad Nouval Saputra. {{ t.rights }}
      </div>

      <!-- Social Links -->
      <div class="flex items-center gap-6">
        <a 
          v-for="social in socials" 
          :key="social.name"
          :href="social.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-zinc-400 hover:text-zinc-900 transition-colors duration-250 flex items-center justify-center p-1.5"
          :title="social.name"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" v-html="social.svgIcon"></svg>
          <span class="sr-only">{{ social.name }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../locales';

const currentYear = computed(() => new Date().getFullYear());
const { currentLanguage } = useLanguage();
const t = computed(() => translations[currentLanguage.value].footer);

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/nouvalsaputra',
    // GitHub Icon
    svgIcon: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nouvalsaputra/',
    // LinkedIn Icon
    svgIcon: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>'
  }
];
</script>
