<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Data Security and Access Control</h1>
    
    <!-- Security Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Encryption Status</h2>
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <LockIcon class="h-8 w-8 text-green-600" />
          </div>
          <div>
            <p class="font-medium text-green-600">Data Encryption Active</p>
            <p class="text-sm text-gray-600">Last updated: 2 hours ago</p>
          </div>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Access Control</h2>
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <UsersIcon class="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <p class="font-medium text-blue-600">Role-Based Access Control</p>
            <p class="text-sm text-gray-600">5 roles configured</p>
          </div>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Authentication</h2>
        <div class="flex items-center">
          <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
            <KeyIcon class="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <p class="font-medium text-purple-600">Multi-Factor Authentication</p>
            <p class="text-sm text-gray-600">Enabled for all users</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Recent Security Events -->
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">Recent Security Events</h2>
      <ul class="space-y-4">
        <li v-for="event in securityEvents" :key="event.id" class="flex items-start">
          <div :class="[
            'w-8 h-8 rounded-full flex items-center justify-center mr-3',
            event.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 
            event.type === 'error' ? 'bg-red-100 text-red-600' : 
            'bg-green-100 text-green-600'
          ]">
            <component :is="getEventIcon(event.type)" class="h-4 w-4" />
          </div>
          <div>
            <p class="font-medium">{{ event.message }}</p>
            <p class="text-sm text-gray-500">{{ event.timestamp }}</p>
          </div>
        </li>
      </ul>
    </div>
    
    <!-- Access Control Management -->
    <div class="bg-white shadow-md rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Access Control Management</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="role in roles" :key="role.name">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ role.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ role.permissions.join(', ') }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ role.users }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ role.lastModified }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LockIcon, UsersIcon, KeyIcon, AlertTriangleIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-vue-next'

const securityEvents = ref([
  { id: 1, type: 'warning', message: 'Multiple failed login attempts detected', timestamp: '10 minutes ago' },
  { id: 2, type: 'error', message: 'Unauthorized access attempt to sensitive data', timestamp: '1 hour ago' },
  { id: 3, type: 'success', message: 'System security patch successfully applied', timestamp: '3 hours ago' },
  { id: 4, type: 'warning', message: 'New device used for authentication', timestamp: '1 day ago' },
  { id: 5, type: 'success', message: 'User access permissions updated', timestamp: '2 days ago' },
])

const getEventIcon = (type) => {
  switch (type) {
    case 'warning':
      return AlertTriangleIcon
    case 'error':
      return AlertCircleIcon
    case 'success':
      return CheckCircleIcon
    default:
      return AlertCircleIcon
  }
}

const roles = ref([
  { name: 'Administrator', permissions: ['Full Access'], users: 3, lastModified: '2023-05-01' },
  { name: 'Procurement Manager', permissions: ['Create', 'Read', 'Update'], users: 8, lastModified: '2023-05-10' },
  { name: 'Finance Officer', permissions: ['Read', 'Update'], users: 12, lastModified: '2023-05-15' },
  { name: 'Supplier', permissions: ['Read (Limited)'], users: 50, lastModified: '2023-05-20' },
  { name: 'Auditor', permissions: ['Read'], users: 5, lastModified: '2023-05-25' },
])
</script>