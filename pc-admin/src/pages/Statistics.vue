<template>
  <div>
    <div class="mb-6 text-sm text-gray-500 flex items-center">
      <router-link to="/dashboard" class="hover:text-gray-700">控制台</router-link>
      <i class="fas fa-chevron-right mx-2"></i>
      <span class="text-gray-900 font-medium">统计报表</span>
    </div>

    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900">统计报表</h1>
      <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"><i class="fas fa-download"></i><span>导出</span></button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">任务统计</h3>
        <div class="h-64 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">图表占位</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">缺陷统计</h3>
        <div class="h-64 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">图表占位</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">人员统计</h3>
        <div class="h-64 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">图表占位</div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">地图热力</h3>
        <div class="h-64 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">热力图占位</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.card { background: #fff; border: 1px solid #eee; padding: 16px; border-radius: 6px; }
</style>