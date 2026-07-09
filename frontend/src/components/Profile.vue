<template>
  <section id="profile" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">{{ t.tag }}</span>
        <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2">{{ t.heading }}</h2>
        <div class="w-12 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <!-- Contact & Education Card -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Detail Kontak -->
          <div class="bg-zinc-50 border border-zinc-100 rounded-3xl p-6 shadow-sm">
            <h3 class="font-heading text-lg font-bold text-zinc-900 border-b border-zinc-200 pb-3 mb-5">{{ t.contactTitle }}</h3>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-white border border-zinc-200 rounded-lg text-brand-500 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">{{ t.labelName }}</div>
                  <div class="text-sm font-semibold text-zinc-800">Mochammad Nouval Saputra</div>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 bg-white border border-zinc-200 rounded-lg text-brand-500 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">{{ t.labelDomisili }}</div>
                  <div class="text-sm font-semibold text-zinc-800">{{ t.valDomisili }}</div>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 bg-white border border-zinc-200 rounded-lg text-brand-500 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <div class="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">{{ t.labelEmail }}</div>
                  <a href="mailto:novalsaputraaa726@gmail.com" class="text-sm font-semibold text-zinc-800 hover:text-brand-500 transition-colors break-words">
                    novalsaputraaa726@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="p-2 bg-white border border-zinc-200 rounded-lg text-brand-500 shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">{{ t.labelPhone }}</div>
                  <a href="tel:+62895396001362" class="text-sm font-semibold text-zinc-800 hover:text-brand-500 transition-colors">
                    +62 895-3960-01362
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Pendidikan -->
          <div class="bg-zinc-50 border border-zinc-100 rounded-3xl p-6 shadow-sm">
            <h3 class="font-heading text-lg font-bold text-zinc-900 border-b border-zinc-200 pb-3 mb-5">{{ t.educationTitle }}</h3>
            <div class="relative pl-4 border-l border-brand-200 space-y-1">
              <span class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-500 border border-white"></span>
              <div class="text-sm font-bold text-zinc-800">{{ t.eduSchool }}</div>
              <div class="text-xs text-brand-600 font-medium">{{ t.eduDegree }}</div>
              <div class="text-[11px] text-zinc-400">Sep 2020 – Agu 2024</div>
              <div class="text-xs font-semibold text-zinc-600 mt-2 bg-white inline-block px-2.5 py-1 rounded border border-zinc-250">{{ t.eduGpa }}</div>
            </div>
          </div>
        </div>

        <!-- Experience Timeline -->
        <div class="lg:col-span-2 bg-zinc-50 border border-zinc-100 rounded-3xl p-8 shadow-sm">
          <h3 class="font-heading text-lg font-bold text-zinc-900 border-b border-zinc-200 pb-3 mb-6">{{ t.experienceTitle }}</h3>
          
          <div class="space-y-8">
            <!-- ICP -->
            <div class="relative pl-6 border-l border-zinc-200">
              <span class="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-brand-500 border-2 border-white"></span>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 class="text-base font-bold text-zinc-800">{{ t.icpTitle }}</h4>
                <span class="text-xs text-zinc-400 font-semibold bg-white border border-zinc-100 px-2 py-0.5 rounded-full">
                  {{ currentLanguage === 'id' ? 'Apr 2025 - Sekarang' : 'Apr 2025 - Present' }}
                </span>
              </div>
              <div class="text-xs font-semibold text-brand-600 mb-3">{{ t.icpComp }}</div>
              <ul class="list-disc pl-4 space-y-1.5 text-xs text-zinc-500">
                <li v-for="point in t.icpPoints" :key="point">{{ point }}</li>
              </ul>
            </div>

            <!-- Kemenag -->
            <div class="relative pl-6 border-l border-zinc-200">
              <span class="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-zinc-400 border-2 border-white"></span>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 class="text-base font-bold text-zinc-800">{{ t.kemenagTitle }}</h4>
                <span class="text-xs text-zinc-400 font-semibold bg-white border border-zinc-100 px-2 py-0.5 rounded-full">
                  {{ currentLanguage === 'id' ? 'Agu 2024 - Sep 2024' : 'Aug 2024 - Sep 2024' }}
                </span>
              </div>
              <div class="text-xs font-semibold text-brand-600 mb-3">{{ t.kemenagComp }}</div>
              <ul class="list-disc pl-4 space-y-1.5 text-xs text-zinc-500">
                <li v-for="point in t.kemenagPoints" :key="point">{{ point }}</li>
              </ul>
            </div>

            <!-- Infinite Learning -->
            <div class="relative pl-6 border-l border-zinc-200">
              <span class="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-zinc-400 border-2 border-white"></span>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 class="text-base font-bold text-zinc-800">{{ t.infTitle }}</h4>
                <span class="text-xs text-zinc-400 font-semibold bg-white border border-zinc-100 px-2 py-0.5 rounded-full">
                  {{ currentLanguage === 'id' ? 'Agu 2023 - Des 2023' : 'Aug 2023 - Dec 2023' }}
                </span>
              </div>
              <div class="text-xs font-semibold text-brand-600 mb-3">{{ t.infComp }}</div>
              <ul class="list-disc pl-4 space-y-1.5 text-xs text-zinc-500">
                <li v-for="point in t.infPoints" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
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
const t = computed(() => translations[currentLanguage.value].profile);
</script>
