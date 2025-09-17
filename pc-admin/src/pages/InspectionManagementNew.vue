<template>
  <div>
    <div class="mb-6 text-sm text-gray-500 flex items-center">
      <router-link to="/dashboard" class="hover:text-gray-700">控制台</router-link>
      <i class="fas fa-chevron-right mx-2"></i>
      <span class="text-gray-900 font-medium">巡检管理（新）</span>
    </div>

    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-bold text-gray-900">巡检管理（新）</h1>
      <div class="flex gap-2">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"><i class="fas fa-plus"></i><span>新增计划</span></button>
        <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"><i class="fas fa-share"></i><span>批量分配</span></button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左：计划列表 -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="p-4 border-b">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">巡检计划</h3>
              <div class="text-sm text-gray-500">共 6 个</div>
            </div>
          </div>
          <div class="divide-y">
            <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-blue-500 bg-blue-50">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-medium text-gray-800">东区周检计划</h4>
                  <p class="text-xs text-gray-500 mt-1">周期：周 / 负责人：王强</p>
                </div>
                <span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">启用</span>
              </div>
            </div>
            <div class="p-4 hover:bg-gray-50 cursor-pointer">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-medium text-gray-800">东区月度巡检</h4>
                  <p class="text-xs text-gray-500 mt-1">周期：月 / 负责人：李雷</p>
                </div>
                <span class="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">停用</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右：任务列表 -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="p-4 border-b flex items-center justify-between">
            <div class="flex items-center gap-3">
              <button class="px-3 py-2 rounded bg-blue-600 text-white text-sm">任务列表</button>
              <button class="px-3 py-2 rounded border border-gray-300 text-sm bg-white">任务看板</button>
            </div>
            <div class="flex items-center gap-3">
              <div class="relative">
                <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input placeholder="搜索任务" class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
              </div>
              <select class="px-3 py-2 border border-gray-300 rounded-lg">
                <option>全部状态</option>
                <option>进行中</option>
                <option>待回执</option>
                <option>已完成</option>
                <option>超时</option>
              </select>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"><input type="checkbox" class="rounded border-gray-300"/></th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">任务编号</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">计划</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">人员</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">截止</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4"><input type="checkbox" class="rounded border-gray-300"/></td>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">T-2025-010</td>
                  <td class="px-6 py-4 text-sm text-gray-500">东区周检计划</td>
                  <td class="px-6 py-4 text-sm text-gray-500">王强</td>
                  <td class="px-6 py-4"><span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">进行中</span></td>
                  <td class="px-6 py-4 text-sm text-gray-500">2025-01-22 18:00</td>
                  <td class="px-6 py-4 text-sm">
                    <div class="flex items-center gap-2">
                      <button class="text-blue-600 hover:text-blue-800"><i class="fas fa-eye"></i></button>
                      <button class="text-green-600 hover:text-green-800"><i class="fas fa-edit"></i></button>
                      <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div class="text-sm text-gray-500">显示 1-10 条，共 18 条</div>
            <div class="flex items-center gap-2">
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
  </div>
</template>

<script setup>
</script>