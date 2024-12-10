<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Workflow Optimization</h1>
    
    <!-- Procurement Process Workflow -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Procurement Process Workflow</h2>
      <div class="relative">
        <div class="flex justify-between mb-2">
          <span class="text-sm font-medium">Request</span>
          <span class="text-sm font-medium">Approval</span>
          <span class="text-sm font-medium">Sourcing</span>
          <span class="text-sm font-medium">Contract</span>
          <span class="text-sm font-medium">Delivery</span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full">
          <div class="h-full w-3/5 bg-indigo-600 rounded-full relative">
            <span class="absolute -right-2 -top-1 h-4 w-4 bg-red-500 rounded-full"></span>
          </div>
        </div>
        <p class="text-sm text-red-600 mt-2">Bottleneck detected at Sourcing stage</p>
      </div>
    </div>
    
    <!-- Stage Details -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div v-for="stage in stages" :key="stage.name" class="bg-white shadow-md rounded-lg p-6">
        <h3 class="text-lg font-semibold mb-2">{{ stage.name }}</h3>
        <p class="text-gray-600 mb-4">{{ stage.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium">Average Time: {{ stage.averageTime }}</span>
          <span :class="[
            'px-2 py-1 rounded-full text-xs font-semibold',
            stage.status === 'On Track' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          ]">{{ stage.status }}</span>
        </div>
      </div>
    </div>
    
    <!-- Optimization Suggestions -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Optimization Suggestions</h2>
      <ul class="space-y-4">
        <li v-for="suggestion in optimizationSuggestions" :key="suggestion.id" class="flex items-start">
          <LightbulbIcon class="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
          <div>
            <h4 class="font-medium">{{ suggestion.title }}</h4>
            <p class="text-gray-600">{{ suggestion.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LightbulbIcon } from 'lucide-vue-next'

const stages = ref([
  { name: 'Request', description: 'Initial procurement request submission', averageTime: '2 days', status: 'On Track' },
  { name: 'Approval', description: 'Review and approval of procurement requests', averageTime: '3 days', status: 'On Track' },
  { name: 'Sourcing', description: 'Identifying and selecting potential suppliers', averageTime: '7 days', status: 'Delayed' },
  { name: 'Contract', description: 'Negotiation and finalization of contracts', averageTime: '5 days', status: 'On Track' },
  { name: 'Delivery', description: 'Receipt and verification of goods or services', averageTime: '10 days', status: 'On Track' },
])

const optimizationSuggestions = ref([
  { id: 1, title: 'Streamline Sourcing Process', description: 'Implement a pre-qualified supplier list to reduce sourcing time by 30%.' },
  { id: 2, title: 'Automate Approval Workflows', description: 'Use AI-powered approval routing to decrease approval times by 40%.' },
  { id: 3, title: 'Enhance Supplier Communication', description: 'Implement a centralized communication platform to improve response times by 25%.' },
  { id: 4, title: 'Optimize Contract Templates', description: 'Develop standardized contract templates to reduce contract creation time by 50%.' },
])
</script>