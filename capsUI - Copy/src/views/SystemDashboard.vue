<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Header -->
    <header class="bg-indigo-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">
          AI-POWERED PUBLIC PROCUREMENT DATA MONITORING AND MANAGEMENT SYSTEM
        </h1>
        <div class="flex items-center space-x-4">
          <button class="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
            <BellIcon class="h-5 w-5 inline-block mr-2" />
            Notifications
          </button>
          <button class="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
            <UserIcon class="h-5 w-5 inline-block mr-2" />
            Profile
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <!-- Sidebar -->
      <aside class="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4">
        <nav>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.name">
              <router-link :to="item.href" class="flex items-center p-2 text-gray-700 hover:bg-indigo-100 rounded-md transition-colors">
                <component :is="item.icon" class="h-5 w-5 mr-3 text-indigo-600" />
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Dashboard Content -->
      <main class="flex-1 space-y-6">
        <!-- Real-time Monitoring -->
        <section class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4 flex items-center">
            <ActivityIcon class="h-6 w-6 mr-2 text-indigo-600" />
            Real-time Monitoring
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-green-100 p-4 rounded-md">
              <h3 class="font-medium text-green-800">Budget Usage</h3>
              <p class="text-2xl font-bold text-green-600">75%</p>
            </div>
            <div class="bg-yellow-100 p-4 rounded-md">
              <h3 class="font-medium text-yellow-800">Pending Tasks</h3>
              <p class="text-2xl font-bold text-yellow-600">12</p>
            </div>
            <div class="bg-blue-100 p-4 rounded-md">
              <h3 class="font-medium text-blue-800">Completed Procurements</h3>
              <p class="text-2xl font-bold text-blue-600">45</p>
            </div>
          </div>
        </section>

        <!-- AI-Driven Insights -->
        <section class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4 flex items-center">
            <BrainCircuitIcon class="h-6 w-6 mr-2 text-indigo-600" />
            AI-Driven Insights
          </h2>
          <div class="space-y-4">
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="font-medium">Top Performing Supplier</h3>
              <p>TechSupply Co. - 98% reliability score</p>
            </div>
            <div class="border-l-4 border-yellow-500 pl-4">
              <h3 class="font-medium">Unusual Spending Pattern Detected</h3>
              <p>20% increase in office supplies category</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="font-medium">Procurement Efficiency</h3>
              <p>Average processing time reduced by 15%</p>
            </div>
          </div>
        </section>

        <!-- Workflow Optimization -->
        <section class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4 flex items-center">
            <GitBranchIcon class="h-6 w-6 mr-2 text-indigo-600" />
            Workflow Optimization
          </h2>
          <div class="relative">
            <div class="flex justify-between mb-2">
              <span>Request</span>
              <span>Approval</span>
              <span>Sourcing</span>
              <span>Contract</span>
              <span>Delivery</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div class="h-full w-3/5 bg-indigo-600 rounded-full relative">
                <span class="absolute -right-2 -top-1 h-4 w-4 bg-red-500 rounded-full"></span>
              </div>
            </div>
            <p class="text-sm text-red-600 mt-2">Bottleneck detected at Sourcing stage</p>
          </div>
        </section>

        <!-- Data Security -->
        <section class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4 flex items-center">
            <ShieldCheckIcon class="h-6 w-6 mr-2 text-indigo-600" />
            Data Security and Access Control
          </h2>
          <div class="space-y-2">
            <p class="flex items-center">
              <LockIcon class="h-5 w-5 mr-2 text-green-600" />
              Data encryption enabled
            </p>
            <p class="flex items-center">
              <KeyIcon class="h-5 w-5 mr-2 text-green-600" />
              Multi-factor authentication active
            </p>
            <p class="flex items-center">
              <UsersIcon class="h-5 w-5 mr-2 text-green-600" />
              Role-based access control implemented
            </p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
//import { useRouter } from 'vue-router'
import { 
  ActivityIcon, 
  BarChartIcon, 
  BellIcon, 
  BrainCircuitIcon, 
  DatabaseIcon, 
  GitBranchIcon, 
  KeyIcon,
  LockIcon,
  ShieldCheckIcon,
  UserIcon, 
  UsersIcon
} from 'lucide-vue-next'

//const router = useRouter()

const navItems = ref([
  { name: 'Dashboard', icon: BarChartIcon, href: '/dashboard' },
  { name: 'Data Management', icon: DatabaseIcon, href: '/data-management' },
  { name: 'Monitoring', icon: ActivityIcon, href: '/monitoring' },
  { name: 'AI Insights', icon: BrainCircuitIcon, href: '/ai-insights' },
  { name: 'Workflow', icon: GitBranchIcon, href: '/workflow' },
  { name: 'Security', icon: ShieldCheckIcon, href: '/security' },
])
</script>