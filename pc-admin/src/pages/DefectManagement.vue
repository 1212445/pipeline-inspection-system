<template>
  <div>
    <div class="mb-6 text-sm text-gray-500 flex items-center">
      <router-link to="/dashboard" class="hover:text-gray-700">控制台</router-link>
      <i class="fas fa-chevron-right mx-2"></i>
      <span class="text-gray-900 font-medium">缺陷管理</span>
    </div>

    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-bold text-gray-900">缺陷管理</h1>
      <div class="flex gap-2">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"><i class="fas fa-plus"></i><span>新建缺陷</span></button>
      </div>
    </div>

    <!-- 筛选工具栏 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div class="flex flex-wrap items-center gap-3">
        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>全部等级</option>
          <option>一般</option>
          <option>严重</option>
          <option>紧急</option>
        </select>
        <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>全部类型</option>
          <option>腐蚀</option>
          <option>泄漏</option>
          <option>异物</option>
        </select>
        <div class="relative">
          <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input placeholder="搜索缺陷" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
        </div>
        <button class="text-blue-600 hover:text-blue-800 flex items-center gap-2"><i class="fas fa-sync-alt"></i><span>刷新</span></button>
      </div>
    </div>

    <!-- 列表 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 class="text-lg font-semibold">缺陷列表</h3>
        <div class="text-sm text-gray-500">共 8 条</div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">编号</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">线路</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">里程桩</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">等级</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上报时间</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-gray-900">D-0008</td>
              <td class="px-6 py-4 text-sm text-gray-500">东区主干管道</td>
              <td class="px-6 py-4 text-sm text-gray-500">K12+300</td>
              <td class="px-6 py-4 text-sm text-gray-500">腐蚀</td>
              <td class="px-6 py-4"><span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">紧急</span></td>
              <td class="px-6 py-4"><span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">待处理</span></td>
              <td class="px-6 py-4 text-sm text-gray-500">2025-01-16 10:12</td>
              <td class="px-6 py-4 text-sm">
                <div class="flex items-center gap-2">
                  <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                  <button class="text-green-600 hover:text-green-800"><i class="fas fa-wrench"></i></button>
                  <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.toolbar { margin-bottom: 12px; display: flex; gap: 8px; }
.card { background: #fff; border: 1px solid #eee; padding: 16px; border-radius: 6px; }
</style>