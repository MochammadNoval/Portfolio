<template>
  <section id="contact" class="py-20 bg-zinc-50/50 border-t border-zinc-100">
    <div class="max-w-xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest">{{ t.tag }}</span>
        <h2 class="font-heading text-3xl md:text-4xl font-extrabold text-zinc-900 mt-2">{{ t.heading }}</h2>
        <div class="w-12 h-1 bg-brand-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-zinc-500 text-sm mt-4">
          {{ t.description }}
        </p>
      </div>

      <!-- Form Card -->
      <div class="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm">
        <!-- Success Alert -->
        <div 
          v-if="submitSuccess" 
          class="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-start gap-3"
        >
          <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <div class="font-semibold text-sm">{{ t.successTitle }}</div>
            <div class="text-xs text-emerald-700 mt-0.5">{{ responseMessage }}</div>
          </div>
        </div>

        <!-- Error Alert -->
        <div 
          v-if="submitError" 
          class="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-800 flex items-start gap-3"
        >
          <svg class="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <div class="font-semibold text-sm">{{ t.errorTitle }}</div>
            <div class="text-xs text-red-700 mt-0.5">{{ responseMessage }}</div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name Input -->
          <div>
            <label for="name" class="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{{ t.labelName }}</label>
            <input 
              id="name"
              v-model="form.name"
              type="text" 
              required
              :placeholder="t.placeName"
              class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors duration-200"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{{ t.labelEmail }}</label>
            <input 
              id="email"
              v-model="form.email"
              type="email" 
              required
              :placeholder="t.placeEmail"
              class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors duration-200"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Message Input -->
          <div>
            <label for="message" class="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">{{ t.labelMessage }}</label>
            <textarea 
              id="message"
              v-model="form.message"
              rows="4" 
              required
              :placeholder="t.placeMessage"
              class="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-colors duration-200 resize-none"
              :disabled="isSubmitting"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl focus:outline-none disabled:opacity-50 transition-all duration-200"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="flex items-center gap-2">
              <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ t.btnSubmitting }}
            </span>
            <span v-else>{{ t.btnSend }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
import { useLanguage } from '../composables/useLanguage';
import { translations } from '../locales';

const { currentLanguage } = useLanguage();
const t = computed(() => translations[currentLanguage.value].contact);

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);
const responseMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = false;
  responseMessage.value = '';

  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.post(`${apiUrl}/contact`, {
      name: form.name,
      email: form.email,
      message: form.message
    });

    if (response.data && response.data.success) {
      submitSuccess.value = true;
      responseMessage.value = response.data.message;
      // Reset form
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      throw new Error(response.data.message || 'Error occurred.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    submitError.value = true;
    if (error.response && error.response.data && error.response.data.message) {
      responseMessage.value = error.response.data.message;
    } else {
      responseMessage.value = currentLanguage.value === 'id' 
        ? 'Gagal terhubung dengan server. Harap pastikan backend server Anda berjalan.' 
        : 'Failed to connect to the server. Please verify your backend server is running.';
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>
