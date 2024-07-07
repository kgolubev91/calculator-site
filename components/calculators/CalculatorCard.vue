<template>
  <div class="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
    <div class="px-4 py-5 sm:p-6">
      <div class="flex items-center">
        <div :class="`rounded-md bg-${color}-100 dark:bg-${color}-900 p-3`">
          <component :is="icon" class="h-6 w-6" :class="`text-${color}-600 dark:text-${color}-400`" />
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">{{ title }}</h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-700 px-4 py-4 sm:px-6">
      <div class="text-sm">
        <NuxtLink :to="link" class="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200">
          {{ $t('common.useCalculator', 'Use calculator') }}<span aria-hidden="true"> &rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Quick and easy calculations'
  },
  icon: {
    type: Object,
    required: true
  },
  color: {
    type: String,
    default: 'blue'
  },
  link: {
    type: String,
    required: true
  }
})
</script>