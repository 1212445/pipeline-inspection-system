<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部导航栏 -->
    <nav class="bg-white shadow-lg border-b border-gray-200 fixed w-full top-0 z-50">
      <div class="px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <i class="fas fa-industry text-white text-lg"></i>
              </div>
              <div>
                <h1 class="text-xl font-bold text-gray-800">工业管道安全巡检系统</h1>
                <p class="text-xs text-gray-500">Industrial Pipeline Safety Inspection System</p>
              </div>
            </div>
            <div class="hidden lg:block h-6 w-px bg-gray-300 ml-6"></div>
            <div class="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <i class="fas fa-map-marker-alt text-blue-500"></i>
              <span>石化园区A区管理中心</span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="hidden md:block relative">
              <input type="text" placeholder="搜索任务、线路、人员..." 
                     class="w-80 pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition"/>
              <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <div class="relative">
              <button class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition relative">
                <i class="fas fa-bell text-xl"></i>
                <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">8</span>
              </button>
            </div>
            <button class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              <i class="fas fa-envelope text-xl"></i>
            </button>
            <div class="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" class="w-10 h-10 rounded-full border-2 border-gray-200"/>
              <div class="hidden lg:block">
                <p class="text-sm font-semibold text-gray-800">张管理员</p>
                <p class="text-xs text-gray-500">系统管理员</p>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="flex pt-20">
      <!-- 侧边栏 -->
      <aside class="w-72 min-h-screen shadow-2xl fixed sidebar-gradient">
        <div class="p-6 text-white">
          <div class="mb-8 flex items-center space-x-3">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i class="fas fa-tachometer-alt text-white text-xl"></i>
            </div>
            <div>
              <h2 class="font-bold text-lg">控制台</h2>
              <p class="text-blue-200 text-sm">管理中心</p>
            </div>
          </div>
          <nav class="space-y-2">
            <div class="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">主要功能</div>
            <RouterLink to="/dashboard" class="sidebar-item flex items-center px-4 py-3 text-blue-100 hover:text-white rounded-xl" :class="{ active: isActive('/dashboard') }">
              <i class="fas fa-tachometer-alt w-6 text-lg"></i>
              <span class="ml-3 font-medium">主控制台</span>
            </RouterLink>
            <RouterLink to="/lines" class="sidebar-item flex items-center px-4 py-3 text-blue-100 hover:text-white rounded-xl" :class="{ active: isActive('/lines') }">
              <i class="fas fa-route w-6 text-lg"></i>
              <span class="ml-3 font-medium">线路管理</span>
            </RouterLink>
            <RouterLink to="/inspection" class="sidebar-item flex items-center px-4 py-3 text-blue-100 hover:text-white rounded-xl" :class="{ active: isActive('/inspection') }">
              <i class="fas fa-clipboard-check w-6 text-lg"></i>
              <span class="ml-3 font-medium">巡检管理</span>
            </RouterLink>
            <RouterLink to="/defects" class="sidebar-item flex items-center px-4 py-3 text-blue-100 hover:text-white rounded-xl" :class="{ active: isActive('/defects') }">
              <i class="fas fa-exclamation-triangle w-6 text-lg"></i>
              <span class="ml-3 font-medium">缺陷管理</span>
            </RouterLink>
            <div class="text-blue-200 text-xs font-semibold uppercase tracking-wider mt-8 mb-4">数据分析</div>
            <RouterLink to="/statistics" class="sidebar-item flex items-center px-4 py-3 text-blue-100 hover:text-white rounded-xl" :class="{ active: isActive('/statistics') }">
              <i class="fas fa-chart-bar w-6 text-lg"></i>
              <span class="ml-3 font-medium">统计报表</span>
            </RouterLink>
          </nav>
        </div>
      </aside>

      <!-- 主内容区 -->
      <main class="flex-1 ml-72 p-8 bg-gray-50 w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
const isActive = (path) => route.path.startsWith(path)
</script>

<style scoped>
.sidebar-gradient {
  background: linear-gradient(180deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%);
}
.sidebar-item { transition: all .2s ease; }
.sidebar-item:hover { background: rgba(255,255,255,.1); transform: translateX(4px); }
.sidebar-item.active { background: rgba(255,255,255,.15); border-left: 4px solid #fbbf24; }
</style>