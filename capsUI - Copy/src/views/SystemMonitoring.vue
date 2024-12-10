<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Real-Time Monitoring</h1>
    
    <!-- Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-2">Budget Usage</h2>
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full border-4 border-indigo-500 flex items-center justify-center mr-4">
            <span class="text-2xl font-bold">75%</span>
          </div>
          <div>
            <p class="text-gray-600">Total Budget: $1,000,000</p>
            <p class="text-gray-600">Used: $750,000</p>
          </div>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-2">Pending Tasks</h2>
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full border-4 border-yellow-500 flex items-center justify-center mr-4">
            <span class="text-2xl font-bold">12</span>
          </div>
          <div>
            <p class="text-gray-600">High Priority: 3</p>
            <p class="text-gray-600">Medium Priority: 5</p>
            <p class="text-gray-600">Low Priority: 4</p>
          </div>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-2">Completed Procurements</h2>
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center mr-4">
            <span class="text-2xl font-bold">45</span>
          </div>
          <div>
            <p class="text-gray-600">This Month: 15</p>
            <p class="text-gray-600">This Quarter: 45</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Activity Feed -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul class="space-y-4">
        <li v-for="activity in activities" :key="activity.id" class="flex items-start">
          <div :class="[
            'w-8 h-8 rounded-full flex items-center justify-center mr-3',
            activity.type === 'update' ? 'bg-blue-100 text-blue-500' : 
            activity.type === 'alert' ? 'bg-red-100 text-red-500' : 
            'bg-green-100 text-green-500'
          ]">
            <component :is="getActivityIcon(activity.type)" class="h-4 w-4" />
          </div>
          <div>
            <p class="font-medium">{{ activity.message }}</p>
            <p class="text-sm text-gray-500">{{ activity.timestamp }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { AlertCircleIcon, CheckCircleIcon, RefreshCwIcon } from 'lucide-vue-next'

const activities = ref([
  { id: 1, type: 'update', message: 'New supplier "Tech Solutions Inc" added to the system', timestamp: '2 minutes ago' },
  { id: 2, type: 'alert', message: 'Budget overrun detected in IT department', timestamp: '15 minutes ago' },
  { id: 3, type: 'complete', message: 'Procurement #1234 for office supplies completed', timestamp: '1 hour ago' },
  { id: 4, type: 'update', message: 'Contract with "Cleaning Services Ltd" renewed', timestamp: '3 hours ago' },
  { id: 5, type: 'alert', message: 'Delivery delay reported for order #5678', timestamp: '5 hours ago' },
])

const getActivityIcon = (type) => {
  switch (type) {
    case 'update':
      return RefreshCwIcon
    case 'alert':
      return AlertCircleIcon
    case 'complete':
      return CheckCircleIcon
    default:
      return RefreshCwIcon
  }
}
</script>