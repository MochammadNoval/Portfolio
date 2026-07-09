<template>
  <section id="about" class="py-20 bg-zinc-50/50 border-y border-zinc-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">{{ t.tag }}</span>
        <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2">{{ t.heading }}</h2>
        <div class="w-12 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <!-- Story Column -->
        <div class="space-y-6">
          <h3 class="font-heading text-xl font-bold text-zinc-900">{{ t.titleStory }}</h3>
          <p class="text-zinc-600 leading-relaxed text-sm md:text-base">
            {{ t.bodyStory1 }}
          </p>
          <p class="text-zinc-600 leading-relaxed text-sm md:text-base">
            {{ t.bodyStory2 }}
          </p>
        </div>

        <!-- Career & Interest Column -->
        <div class="space-y-6">
          <h3 class="font-heading text-xl font-bold text-zinc-900">{{ t.titleValue }}</h3>
          <p class="text-zinc-600 leading-relaxed text-sm md:text-base">
            {{ t.bodyValue1 }}
          </p>
          <p class="text-zinc-600 leading-relaxed text-sm md:text-base">
            {{ t.bodyValue2 }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../locales';

const { currentLanguage } = useLanguage();
const t = computed(() => translations[currentLanguage.value].about);
</script>
