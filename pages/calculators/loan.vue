<template>
    <div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{{ $t('calculators.loan.title') }}</h1>
      <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField 
            id="loanAmount"
            v-model="loanAmount"
            :label="$t('calculators.loan.amount')"
            type="number"
            :placeholder="$t('calculators.loan.amountPlaceholder')"
          />
          <InputField 
            id="interestRate"
            v-model="interestRate"
            :label="$t('calculators.loan.interestRate')"
            type="number"
            step="0.1"
            :placeholder="$t('calculators.loan.interestRatePlaceholder')"
          />
          <InputField 
            id="loanTerm"
            v-model="loanTerm"
            :label="$t('calculators.loan.term')"
            type="number"
            :placeholder="$t('calculators.loan.termPlaceholder')"
          />
        </div>
        <div class="mt-6">
          <button
            @click="calculateLoan"
            class="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            {{ $t('common.calculate') }}
          </button>
        </div>
        <div v-if="monthlyPayment" class="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{{ $t('calculators.loan.results') }}</h2>
          <p class="text-gray-700 dark:text-gray-300">{{ $t('calculators.loan.monthlyPayment') }}: <span class="font-bold">€{{ monthlyPayment.toFixed(2) }}</span></p>
          <p class="text-gray-700 dark:text-gray-300">{{ $t('calculators.loan.totalPayment') }}: <span class="font-bold">€{{ totalPayment.toFixed(2) }}</span></p>
          <p class="text-gray-700 dark:text-gray-300">{{ $t('calculators.loan.totalInterest') }}: <span class="font-bold">€{{ totalInterest.toFixed(2) }}</span></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import InputField from '~/components/ui/InputField.vue'
  
  const loanAmount = ref(100000)
  const interestRate = ref(5)
  const loanTerm = ref(30)
  const monthlyPayment = ref(null)
  
  const calculateLoan = () => {
    const principal = loanAmount.value
    const monthlyRate = interestRate.value / 100 / 12
    const numberOfPayments = loanTerm.value * 12
  
    const x = Math.pow(1 + monthlyRate, numberOfPayments)
    const monthly = (principal * x * monthlyRate) / (x - 1)
  
    monthlyPayment.value = monthly
  }
  
  const totalPayment = computed(() => {
    if (monthlyPayment.value) {
      return monthlyPayment.value * loanTerm.value * 12
    }
    return 0
  })
  
  const totalInterest = computed(() => {
    if (monthlyPayment.value) {
      return totalPayment.value - loanAmount.value
    }
    return 0
  })
  </script>