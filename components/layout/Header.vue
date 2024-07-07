<template>
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <CalculatorIcon class="h-8 w-8 text-blue-500 dark:text-blue-400" />
              <span class="ml-2 text-xl font-bold text-gray-900 dark:text-white">{{ t('site.title') }}</span>
            </NuxtLink>
          </div>
          <div class="hidden md:flex space-x-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.name" 
              :to="item.href" 
              class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              {{ t(item.name) }}
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <LanguageSwitcher class="mr-4" />
            <button class="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <MagnifyingGlassIcon class="h-6 w-6" />
            </button>
            <DarkModeToggle class="ml-4" />
            <button class="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden">
              <Bars3Icon class="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { CalculatorIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/vue/24/outline'
  import DarkModeToggle from '~/components/ui/DarkModeToggle.vue'
  import LanguageSwitcher from '~/components/ui/LanguageSwitcher.vue'
  
  const { t } = useI18n()
  
  const navItems = ref([
    { name: 'nav.financial', href: '/financial' },
    { name: 'nav.mathematical', href: '/mathematical' },
    { name: 'nav.household', href: '/household' },
  ])
  </script>