import { ref } from 'vue';

const currentLanguage = ref(localStorage.getItem('lang') || 'id');

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang;
    localStorage.setItem('lang', lang);
  };

  return {
    currentLanguage,
    setLanguage
  };
}
