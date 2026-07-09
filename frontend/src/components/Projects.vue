<template>
  <section id="projects" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">{{ t.tag }}</span>
        <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2">{{ t.heading }}</h2>
        <div class="w-12 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex flex-col items-center justify-center py-20">
        <div class="w-10 h-10 border-4 border-brand-100 border-t-brand-500 rounded-full animate-spin"></div>
        <p class="text-zinc-400 text-sm mt-4">{{ t.loading }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 max-w-md mx-auto">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-500 mb-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
        <h3 class="font-heading text-lg font-bold text-zinc-900 mb-2">Error</h3>
        <p class="text-zinc-500 text-sm mb-6">{{ t.error }}</p>
        <button 
          @click="fetchProjects" 
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-950 rounded-lg hover:bg-zinc-800 transition"
        >
          {{ t.tryAgain }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white border border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
        >
          <!-- Thumbnail -->
          <div class="relative overflow-hidden aspect-video bg-zinc-100">
            <img 
              :src="project.thumbnail" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <!-- Status Badge -->
            <span 
              class="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border"
              :class="project.status === 'Completed' 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                : 'bg-amber-50 text-amber-700 border-amber-100'"
            >
              {{ project.status === 'Completed' ? t.statusSelesai : t.statusProses }}
            </span>
          </div>

          <!-- Card Content -->
          <div class="p-6 flex flex-col flex-grow">
            <!-- Title -->
            <h3 class="font-heading text-lg font-bold text-zinc-900 group-hover:text-brand-500 transition-colors duration-250 mb-2">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
              {{ project.description }}
            </p>

            <!-- Tech Badges -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2.5 py-1 bg-zinc-50 border border-zinc-100 rounded-lg text-xs text-zinc-600 font-medium"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="grid grid-cols-2 gap-4 mt-auto">
              <a 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-4 py-2.5 border border-zinc-200 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 hover:border-zinc-300 rounded-xl transition duration-200"
              >
                {{ t.btnDemo }}
                <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition duration-200"
              >
                {{ t.btnGithub }}
                <svg class="w-4 h-4 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../locales';

const projects = ref([]);
const isLoading = ref(true);
const error = ref(null);

const { currentLanguage } = useLanguage();
const t = computed(() => translations[currentLanguage.value].projects);

const fetchProjects = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/projects?lang=${currentLanguage.value}`);
    if (response.data && response.data.success) {
      projects.value = response.data.data;
    } else {
      throw new Error('Invalid project response.');
    }
  } catch (err) {
    console.error('Error fetching projects:', err);
    error.value = t.value.error;
  } finally {
    isLoading.value = false;
  }
};

// Re-fetch projects if language shifts
watch(currentLanguage, () => {
  fetchProjects();
});

onMounted(() => {
  fetchProjects();
});
</script>
