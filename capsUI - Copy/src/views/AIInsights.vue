<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">AI-Driven Insights</h1>
    
    <!-- Supplier Performance -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Top Performing Suppliers</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reliability Score</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-Time Delivery</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality Rating</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="supplier in topSuppliers" :key="supplier.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ supplier.rank }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ supplier.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ supplier.reliabilityScore }}%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ supplier.onTimeDelivery }}%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ supplier.qualityRating }}/5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Unusual Spending Patterns -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Unusual Spending Patterns</h2>
      <div class="space-y-4">
        <div v-for="pattern in unusualPatterns" :key="pattern.id" class="border-l-4 border-yellow-500 pl-4">
          <h3 class="font-medium text-lg">{{ pattern.category }}</h3>
          <p class="text-gray-600">{{ pattern.description }}</p>
          <p class="text-sm text-gray-500 mt-1">Detected on: {{ pattern.detectedDate }}</p>
        </div>
      </div>
    </div>
    
    <!-- Procurement Efficiency -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Procurement Efficiency Insights</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-medium mb-2">Processing Time Reduction</h3>
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mr-4">
              <span class="text-2xl font-bold text-green-500">15%</span>
            </div>
            <p class="text-gray-600">Average processing time reduced from 14 days to 12 days</p>
          </div>
        </div>
        <div>
          <h3 class="font-medium mb-2">Cost Savings</h3>
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center mr-4">
              <span class="text-2xl font-bold text-blue-500">8%</span>
            </div>
            <p class="text-gray-600">Total cost savings of $120,000 in the last quarter</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const topSuppliers = ref([
  { id: 1, rank: 1, name: 'TechSupply Co.', reliabilityScore: 98, onTimeDelivery: 99, qualityRating: 4.9 },
  { id: 2, rank: 2, name: 'Office Essentials Ltd.', reliabilityScore: 96, onTimeDelivery: 98, qualityRating: 4.8 },
  { id: 3, rank: 3, name: 'Global Logistics Inc.', reliabilityScore: 95, onTimeDelivery: 97, qualityRating: 4.7 },
  { id: 4, rank: 4, name: 'Eco Friendly Supplies', reliabilityScore: 94, onTimeDelivery: 96, qualityRating: 4.8 },
  { id: 5, rank: 5, name: 'Quick Ship Solutions', reliabilityScore: 93, onTimeDelivery: 98, qualityRating: 4.6 },
])

const unusualPatterns = ref([
  { id: 1, category: 'Office Supplies', description: '20% increase in spending over the last month', detectedDate: '2023-05-15' },
  { id: 2, category: 'IT Equipment', description: 'Sudden spike in purchases from a new supplier', detectedDate: '2023-05-10' },
  { id: 3, category: 'Travel Expenses', description: '30% decrease in spending compared to last quarter', detectedDate: '2023-05-05' },
])
</script>