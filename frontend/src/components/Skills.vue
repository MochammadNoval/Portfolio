<template>
  <section id="skills" class="py-20 bg-zinc-50/50 border-y border-zinc-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">{{ t.tag }}</span>
        <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2">{{ t.heading }}</h2>
        <div class="w-12 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Categories -->
      <div class="space-y-12">
        <!-- Programming & Web Development -->
        <div>
          <h3 class="font-heading text-lg font-bold text-zinc-800 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-4 bg-brand-500 rounded-full"></span>
            {{ t.catWeb }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="skill in webSkills" 
              :key="skill.name"
              class="bg-white border border-zinc-100 rounded-2xl p-4 text-center hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
            >
              <div 
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                :class="skill.bgColor"
              >
                <svg 
                  class="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
                  :class="skill.iconColor"
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  v-html="skill.svgPath"
                ></svg>
              </div>
              <h4 class="font-semibold text-zinc-700 text-xs md:text-sm">{{ skill.name }}</h4>
            </div>
          </div>
        </div>

        <!-- Design & Others -->
        <div>
          <h3 class="font-heading text-lg font-bold text-zinc-800 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-4 bg-brand-500 rounded-full"></span>
            {{ t.catOther }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="skill in otherSkills" 
              :key="skill.name"
              class="bg-white border border-zinc-100 rounded-2xl p-4 text-center hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
            >
              <div 
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                :class="skill.bgColor"
              >
                <svg 
                  class="w-5 h-5 transition-transform duration-300 group-hover:rotate-6"
                  :class="skill.iconColor"
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  v-html="skill.svgPath"
                ></svg>
              </div>
              <h4 class="font-semibold text-zinc-700 text-xs md:text-sm">{{ skill.name }}</h4>
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
const t = computed(() => translations[currentLanguage.value].skills);

const webSkills = [
  {
    name: 'HTML',
    bgColor: 'bg-orange-50 group-hover:bg-orange-100',
    iconColor: 'text-orange-500',
    svgPath: '<path d="M12 2L2 5v14l10 3 10-3V5L12 2zm6 14.5l-6 1.8-6-1.8V7.5h12v9z M9 9.5h6v1.5H9v-1.5z M9 12.5h6v1.5H9v-1.5z" />'
  },
  {
    name: 'CSS',
    bgColor: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-500',
    svgPath: '<path d="M12 2L2 5v14l10 3 10-3V5L12 2zm6 14.5l-6 1.8-6-1.8V7.5h12v9z M9 9.5h6v1.5H9v-1.5z M9 12.5h3v1.5H9v-1.5z" />'
  },
  {
    name: 'JavaScript',
    bgColor: 'bg-amber-50 group-hover:bg-amber-100',
    iconColor: 'text-amber-500',
    svgPath: '<path d="M3 3h18v18H3V3zm12.525 10.938c-.378-.638-1.077-1.066-1.848-1.066-.889 0-1.467.502-1.467 1.198 0 .809.525 1.13 1.589 1.597 1.489.654 2.213 1.258 2.213 2.686 0 1.523-1.189 2.584-2.868 2.584-1.63 0-2.613-.801-2.997-2.001l1.582-.924c.31.674.778 1.055 1.41 1.055.698 0 1.192-.351 1.192-.989 0-.693-.418-.949-1.442-1.399-1.353-.59-2.317-1.157-2.317-2.628 0-1.378 1.066-2.409 2.646-2.409 1.402 0 2.298.674 2.678 1.634l-1.558.857zm-6.621.042c-.378-.638-1.077-1.066-1.848-1.066-.889 0-1.467.502-1.467 1.198 0 .809.525 1.13 1.589 1.597 1.489.654 2.213 1.258 2.213 2.686 0 1.523-1.189 2.584-2.868 2.584-1.63 0-2.613-.801-2.997-2.001l1.582-.924c.31.674.778 1.055 1.41 1.055.698 0 1.192-.351 1.192-.989 0-.693-.418-.949-1.442-1.399-1.353-.59-2.317-1.157-2.317-2.628 0-1.378 1.066-2.409 2.646-2.409 1.402 0 2.298.674 2.678 1.634l-1.558.857z" />'
  },
  {
    name: 'AJAX',
    bgColor: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-500',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V6h2v2z" />'
  },
  {
    name: 'jQuery',
    bgColor: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12h-2v-2h-3v2h-2v-5h2v2h3v-2h2v5z" />'
  },
  {
    name: 'PHP',
    bgColor: 'bg-indigo-50 group-hover:bg-indigo-100',
    iconColor: 'text-indigo-500',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12h-2v-2h-3v2h-2v-5h2v2h3v-2h2v5z" />'
  },
  {
    name: 'Laravel',
    bgColor: 'bg-red-50 group-hover:bg-red-100',
    iconColor: 'text-red-500',
    svgPath: '<path d="M12 2L2 7.7v10.6L12 22l10-5.7V7.7L12 2zm0 15L7.7 13.5l1.3-1.3L12 15l3-3 1.3 1.3L12 17z M12 11L7.7 7.5l1.3-1.3L12 9l3-3 1.3 1.3L12 11z" />'
  },
  {
    name: 'Tailwind CSS',
    bgColor: 'bg-sky-50 group-hover:bg-sky-100',
    iconColor: 'text-sky-400',
    svgPath: '<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.513 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />'
  },
  {
    name: 'Bootstrap 5',
    bgColor: 'bg-purple-50 group-hover:bg-purple-100',
    iconColor: 'text-purple-600',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.5 12h-2v-2h-3v2h-2v-5h2v2h3v-2h2v5z" />'
  },
  {
    name: 'React JS',
    bgColor: 'bg-sky-50 group-hover:bg-sky-100',
    iconColor: 'text-sky-500',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V6h2v2z" />'
  },
  {
    name: 'MySQL',
    bgColor: 'bg-sky-50 group-hover:bg-sky-100',
    iconColor: 'text-sky-600',
    svgPath: '<path d="M18.1 14c-.6-1.5-1.9-2.7-3.6-3.1-.7-.2-1.5-.3-2.2-.3-1.2 0-2.4.3-3.4.8-1.6.8-2.6 2.2-2.9 3.8-.4 2.3.8 4.6 3 5.4.9.3 1.8.4 2.7.4 2.4 0 4.7-1 6-2.9 1.1-1.7 1.2-2.7.4-4.1zM12 19c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />'
  },
  {
    name: 'Java',
    bgColor: 'bg-red-50 group-hover:bg-red-100',
    iconColor: 'text-red-600',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-6h2v6zm0-8h-2V6h2v2z" />'
  },
  {
    name: 'C++',
    bgColor: 'bg-blue-50 group-hover:bg-blue-100',
    iconColor: 'text-blue-600',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-6h2v6zm0-8h-2V6h2v2z" />'
  }
];

const otherSkills = [
  {
    name: 'Figma',
    bgColor: 'bg-orange-50 group-hover:bg-orange-100',
    iconColor: 'text-orange-600',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z" />'
  },
  {
    name: 'Git',
    bgColor: 'bg-orange-50 group-hover:bg-orange-100',
    iconColor: 'text-orange-600',
    svgPath: '<path d="M2.3 12c0-.5.2-1 .6-1.4L10.6 2.9c.8-.8 2-.8 2.8 0l7.7 7.7c.8.8.8 2 0 2.8l-7.7 7.7c-.8.8-2 .8-2.8 0L2.9 13.4c-.4-.4-.6-.9-.6-1.4zm10.7-3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.3 1.3h-3.4c-.6 0-1.1.5-1.1 1.1v.2c0 .6.5 1.1 1.1 1.1h3.4l-1.3 1.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l3-3c.4-.4.4-1 0-1.4l-3-3z" />'
  },
  {
    name: 'UI/UX Design',
    bgColor: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-500',
    svgPath: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 12h-2v-2h-3v2h-2v-5h2v2h3v-2h2v5z" />'
  }
];
</script>
