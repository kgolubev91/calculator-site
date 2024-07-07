<template>
    <div class="container mx-auto px-4 py-8">
        <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span class="block xl:inline">{{ $t('pages.home.title', 'Welcome to CalcHub') }}</span>
            </h1>
            <p
                class="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {{ $t('pages.home.subtitle', 'Your one-stop calculator resource') }}
            </p>
        </div>

        <div class="mt-12">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {{ $t('pages.home.popularCalculators', 'Popular Calculators') }}
            </h2>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CalculatorCard v-for="calculator in calculators" :key="calculator.key"
                    :title="$t(`calculators.${calculator.key}.title`, calculator.defaultTitle)"
                    :description="$t(`calculators.${calculator.key}.description`, calculator.defaultDescription)"
                    :icon="calculator.icon" :color="calculator.color" :link="getCalculatorPath(calculator.key)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CalculatorCard from '~/components/calculators/CalculatorCard.vue'
import { 
  CurrencyDollarIcon, 
  ScaleIcon, 
  BanknotesIcon, 
  CurrencyEuroIcon, 
  HeartIcon, 
  HomeIcon 
} from '@heroicons/vue/24/outline'
import { useRouter, useRoute } from 'vue-router'

const { $i18n } = useNuxtApp()
const router = useRouter()
const route = useRoute()

// Extract locale from the URL
const urlLocale = computed(() => {
  const match = route.path.match(/^\/([a-z]{2})/)
  return match ? match[1] : 'en'
})

// Update locale if it's in the URL
if (urlLocale.value !== $i18n.locale.value) {
  $i18n.locale.value = urlLocale.value
}

const getCalculatorPath = (key) => {
  return `/${urlLocale.value}/calculators/${key}`
}

const calculators = ref([
    {
        key: 'loan',
        icon: CurrencyDollarIcon,
        color: 'blue',
        defaultTitle: 'Loan Calculator',
        defaultDescription: 'Calculate loan payments and interest'
    },
    {
        key: 'tax',
        icon: ScaleIcon,
        color: 'green',
        defaultTitle: 'Tax Calculator',
        defaultDescription: 'Estimate your tax liability'
    },
    {
        key: 'savings',
        icon: BanknotesIcon,
        color: 'purple',
        defaultTitle: 'Savings Calculator',
        defaultDescription: 'Plan your financial future'
    },
    {
        key: 'currency',
        icon: CurrencyEuroIcon,
        color: 'red',
        defaultTitle: 'Currency Converter',
        defaultDescription: 'Convert between currencies'
    },
    {
        key: 'bmi',
        icon: HeartIcon,
        color: 'yellow',
        defaultTitle: 'BMI Calculator',
        defaultDescription: 'Check your Body Mass Index'
    },
    {
        key: 'mortgage',
        icon: HomeIcon,
        color: 'indigo',
        defaultTitle: 'Mortgage Calculator',
        defaultDescription: 'Estimate your mortgage payments'
    },
])
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>