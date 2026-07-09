<template>
  <section id="hero" class="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
    <!-- Soft Decorative Gradient Spots -->
    <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-100/40 blur-3xl -z-10"></div>
    <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-50/50 blur-3xl -z-10"></div>

    <div class="max-w-4xl mx-auto px-6 text-center animate-fade-in">
      <!-- Badge/Intro -->
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
        {{ t.badge }}
      </span>

      <!-- Headline -->
      <h1 class="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-zinc-900 tracking-tight leading-[1.1] mb-6">
        {{ t.greeting }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">Mochammad Nouval Saputra</span>
      </h1>

      <h2 class="font-heading text-xl md:text-2xl font-semibold text-zinc-700 tracking-tight mb-6">
        {{ t.title }}
      </h2>

      <!-- Description -->
      <p class="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
        {{ t.description }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#projects" 
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-brand-500 rounded-xl hover:bg-brand-600 active:bg-brand-700 shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 transition-all duration-200"
        >
          {{ t.btnProjects }}
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
        <a 
          href="#contact" 
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 active:bg-zinc-100 transition-all duration-200"
        >
          {{ t.btnContact }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../locales';

const { currentLanguage } = useLanguage();
const t = computed(() => translations[currentLanguage.value].hero);
</script>
