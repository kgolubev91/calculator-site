<template>
    <footer class="bg-gray-800 dark:bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-2">
            <h2 class="text-2xl font-bold text-white">CalcHub</h2>
            <p class="mt-2 text-gray-300 dark:text-gray-400">Your one-stop calculator resource for all your calculation needs.</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">Resources</h3>
            <ul class="mt-4 space-y-4">
              <li v-for="item in resources" :key="item.name">
                <NuxtLink :to="item.href" class="text-base text-gray-300 dark:text-gray-400 hover:text-white">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">Legal</h3>
            <ul class="mt-4 space-y-4">
              <li v-for="item in legal" :key="item.name">
                <NuxtLink :to="item.href" class="text-base text-gray-300 dark:text-gray-400 hover:text-white">
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 dark:border-gray-600 pt-8 flex justify-between items-center">
          <p class="text-base text-gray-400">&copy; {{ new Date().getFullYear() }} CalcHub. All rights reserved.</p>
          <div class="flex space-x-6">
            <!-- Add social media icons here if needed -->
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const resources = ref([
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
  ])
  
  const legal = ref([
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ])
  </script>