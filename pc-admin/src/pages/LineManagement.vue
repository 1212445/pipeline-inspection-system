<template>
  <div>
    <!-- 面包屑 -->
    <div class="mb-6 text-sm text-gray-500 flex items-center">
      <router-link to="/dashboard" class="hover:text-gray-700">控制台</router-link>
      <i class="fas fa-chevron-right mx-2"></i>
      <span class="text-gray-900 font-medium">线路管理</span>
    </div>

    <!-- 标题与操作 -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">线路管理</h1>
        <p class="text-gray-600 mt-1">管理管道线路信息、里程桩设置和线路维护</p>
      </div>
      <div class="flex space-x-3">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>新增线路</span>
        </button>
        <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
          <i class="fas fa-file-export"></i>
          <span>导出数据</span>
        </button>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">总线路数</p>
            <p class="text-3xl font-bold text-gray-900">24</p>
          </div>
          <div class="bg-blue-100 p-3 rounded-lg">
            <i class="fas fa-route text-blue-600 text-xl"></i>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">总里程</p>
            <p class="text-3xl font-bold text-gray-900">485.6</p>
            <p class="text-xs text-gray-500">公里</p>
          </div>
          <div class="bg-green-100 p-3 rounded-lg">
            <i class="fas fa-road text-green-600 text-xl"></i>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">正常运行</p>
            <p class="text-3xl font-bold text-gray-900">22</p>
          </div>
          <div class="bg-green-100 p-3 rounded-lg">
            <i class="fas fa-check-circle text-green-600 text-xl"></i>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">维护中</p>
            <p class="text-3xl font-bold text-gray-900">2</p>
          </div>
          <div class="bg-yellow-100 p-3 rounded-lg">
            <i class="fas fa-wrench text-yellow-600 text-xl"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 搜索和筛选 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input type="text" placeholder="搜索线路名称或编号..." 
                   class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
          <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>全部状态</option>
            <option>正常运行</option>
            <option>维护中</option>
            <option>停用</option>
          </select>
          <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>全部区域</option>
            <option>东区</option>
            <option>西区</option>
            <option>南区</option>
            <option>北区</option>
          </select>
        </div>
        <button class="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
          <i class="fas fa-sync-alt"></i>
          <span>刷新</span>
        </button>
      </div>
    </div>

    <!-- 线路列表表格（静态占位） -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">线路列表</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" class="rounded border-gray-300">
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">线路编号</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">线路名称</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">起点</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">终点</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">长度</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最近巡检</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-gray-300">
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL001</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">东区主干管道</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">泵站A</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">储罐B</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15.2 km</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">正常运行</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex items-center space-x-2">
                  <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                  <button class="text-green-600 hover:text-green-800"><i class="fas fa-edit"></i></button>
                  <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">显示 1-10 条，共 24 条记录</div>
          <div class="flex items-center space-x-2">
            <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">上一页</button>
            <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">3</button>
            <button class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">下一页</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.toolbar { margin-bottom: 12px; display: flex; gap: 8px; }
.grid { display: grid; grid-template-columns: 420px 1fr; gap: 16px; }
.card { background: #fff; border: 1px solid #eee; padding: 16px; border-radius: 6px; }
</style>