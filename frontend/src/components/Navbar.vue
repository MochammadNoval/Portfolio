<template>
  <header class="fixed top-0 left-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md transition-all duration-300">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="font-heading font-bold text-xl tracking-tight text-zinc-900 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-brand-500"></span>
        Portfolio
      </a>

      <!-- Desktop Nav Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="item in navItems" 
          :key="item.name" 
          :href="item.href"
          class="text-sm font-medium text-zinc-500 hover:text-brand-500 transition-colors duration-200"
        >
          {{ t[item.key] }}
        </a>
        <a 
          href="#contact" 
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-950 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
        >
          {{ t.contact }}
        </a>

        <!-- Language Selector -->
        <div class="flex items-center bg-zinc-100 p-0.5 rounded-lg border border-zinc-200">
          <button 
            @click="setLanguage('id')" 
            class="px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-200"
            :class="currentLanguage === 'id' ? 'bg-white text-brand-500 shadow-sm' : 'text-zinc-400 hover:text-zinc-700'"
          >
            ID
          </button>
          <button 
            @click="setLanguage('en')" 
            class="px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-200"
            :class="currentLanguage === 'en' ? 'bg-white text-brand-500 shadow-sm' : 'text-zinc-400 hover:text-zinc-700'"
          >
            EN
          </button>
        </div>
      </div>

      <!-- Mobile Nav & Lang Switch -->
      <div class="flex items-center gap-2 md:hidden">
        <!-- Lang Switch for mobile -->
        <div class="flex items-center bg-zinc-100 p-0.5 rounded-lg border border-zinc-200 mr-2">
          <button 
            @click="setLanguage('id')" 
            class="px-2 py-0.5 text-[9px] font-bold rounded transition-all"
            :class="currentLanguage === 'id' ? 'bg-white text-brand-500 shadow-sm' : 'text-zinc-400'"
          >
            ID
          </button>
          <button 
            @click="setLanguage('en')" 
            class="px-2 py-0.5 text-[9px] font-bold rounded transition-all"
            :class="currentLanguage === 'en' ? 'bg-white text-brand-500 shadow-sm' : 'text-zinc-400'"
          >
            EN
          </button>
        </div>

        <button 
          @click="isOpen = !isOpen"
          class="p-2 text-zinc-500 hover:text-zinc-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Nav Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isOpen" class="md:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-4">
        <a 
          v-for="item in navItems" 
          :key="item.name" 
          :href="item.href"
          @click="isOpen = false"
          class="text-sm font-medium text-zinc-600 hover:text-brand-500 transition-colors duration-200 py-1"
        >
          {{ t[item.key] }}
        </a>
        <a 
          href="#contact" 
          @click="isOpen = false"
          class="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-zinc-950 rounded-lg hover:bg-zinc-800 transition-colors duration-200 text-center"
        >
          {{ t.contact }}
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../locales';

const isOpen = ref(false);
const { currentLanguage, setLanguage } = useLanguage();

const t = computed(() => translations[currentLanguage.value].nav);

const navItems = [
  { name: 'Home', key: 'home', href: '#hero' },
  { name: 'Tentang', key: 'about', href: '#about' },
  { name: 'Profil', key: 'profile', href: '#profile' },
  { name: 'Keahlian', key: 'skills', href: '#skills' },
  { name: 'Proyek', key: 'projects', href: '#projects' },
];
</script>
