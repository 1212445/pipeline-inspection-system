import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', name: 'login', component: () => import('@/pages/Login.vue'), meta: { hidden: true } },
  {
    path: '/',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard', name: 'dashboard', component: () => import('@/pages/Dashboard.vue'), meta: { title: '仪表盘', icon: 'HomeFilled' } },
      { path: 'inspection', name: 'inspection', component: () => import('@/pages/InspectionManagement.vue'), meta: { title: '巡检管理', icon: 'List' } },
      { path: 'inspection-new', name: 'inspection-new', component: () => import('@/pages/InspectionManagementNew.vue'), meta: { title: '巡检管理（新）', icon: 'List' } },
      { path: 'lines', name: 'lines', component: () => import('@/pages/LineManagement.vue'), meta: { title: '线路管理', icon: 'Location' } },
      { path: 'defects', name: 'defects', component: () => import('@/pages/DefectManagement.vue'), meta: { title: '缺陷管理', icon: 'Warning' } },
      { path: 'statistics', name: 'statistics', component: () => import('@/pages/Statistics.vue'), meta: { title: '统计', icon: 'DataAnalysis' } }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router