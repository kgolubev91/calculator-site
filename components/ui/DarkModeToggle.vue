<template>
    <button
      @click="toggleDarkMode"
      class="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <SunIcon v-if="isDarkMode" class="h-6 w-6" aria-hidden="true" />
      <MoonIcon v-else class="h-6 w-6" aria-hidden="true" />
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
  
  const isDarkMode = ref(false)
  
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    updateDarkMode()
  }
  
  const updateDarkMode = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }
  
  onMounted(() => {
    isDarkMode.value = localStorage.getItem('darkMode') === 'true'
    updateDarkMode()
  })
  
  watch(isDarkMode, updateDarkMode)
  </script>