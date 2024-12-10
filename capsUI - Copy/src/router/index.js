import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/SystemDashboard.vue';
import DataManagement from '../views/DataManagement.vue';
import Monitoring from '../views/SystemMonitoring.vue';
import AIInsights from '../views/AIInsights.vue';
import Workflow from '../views/SystemWorkflow.vue';
import Security from '../views/SystemSecurity.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard,
    meta: { 
      title: 'Dashboard - AI-Powered Procurement System',
      description: 'Overview of the procurement system'
    }
  },
  {
    path: '/data-management',
    name: 'DataManagement',
    component: DataManagement,
    meta: {
      title: 'Data Management - AI-Powered Procurement System',
      description: 'Manage procurement data and records'
    }
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring,
    meta: {
      title: 'Monitoring - AI-Powered Procurement System',
      description: 'Real-time monitoring of procurement activities'
    }
  },
  {
    path: '/ai-insights',
    name: 'AIInsights',
    component: AIInsights,
    meta: {
      title: 'AI Insights - AI-Powered Procurement System',
      description: 'AI-driven insights and analytics'
    }
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: Workflow,
    meta: {
      title: 'Workflow - AI-Powered Procurement System',
      description: 'Procurement workflow optimization'
    }
  },
  {
    path: '/security',
    name: 'Security',
    component: Security,
    meta: {
      title: 'Security - AI-Powered Procurement System',
      description: 'Data security and access control'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Update page title and meta description
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'AI-Powered Procurement System';
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = to.meta.description || 'AI-Powered Public Procurement Data Monitoring and Management System';
  
  next();
});

export default router;