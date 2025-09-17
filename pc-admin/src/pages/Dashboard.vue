<template>
  <div>
    <div class="mb-8">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">主控制台</h1>
          <p class="text-gray-600">欢迎回来，张管理员。</p>
        </div>
        <div class="flex space-x-3">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition">
            <i class="fas fa-plus mr-2"></i>新建任务
          </button>
          <button class="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium shadow-lg border border-gray-200 transition">
            <i class="fas fa-download mr-2"></i>导出报表
          </button>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl font-semibold mb-2">系统实时状态</h2>
          <p class="text-blue-100">所有系统运行正常，数据同步正常</p>
        </div>
        <div class="flex items-center space-x-6">
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <i class="fas fa-server text-xl"></i>
            </div>
            <div class="text-sm text-blue-100">系统状态</div>
            <div class="text-lg font-bold">正常</div>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <i class="fas fa-users text-xl"></i>
            </div>
            <div class="text-sm text-blue-100">在线用户</div>
            <div class="text-lg font-bold">24</div>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <i class="fas fa-clock text-xl"></i>
            </div>
            <div class="text-sm text-blue-100">最后更新</div>
            <div class="text-lg font-bold">1分钟前</div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm font-medium">管道线路</p>
            <p class="text-3xl font-bold text-gray-800 mt-2">156</p>
            <div class="flex items-center mt-2">
              <span class="text-green-600 text-sm font-semibold">↑ 8.2%</span>
              <span class="text-gray-500 text-sm ml-2">较上月</span>
            </div>
          </div>
          <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
            <i class="fas fa-route text-white text-2xl"></i>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm font-medium">今日巡检</p>
            <p class="text-3xl font-bold text-gray-800 mt-2">23</p>
            <div class="flex items-center mt-2">
              <span class="text-green-600 text-sm font-semibold">↑ 12.5%</span>
              <span class="text-gray-500 text-sm ml-2">较昨日</span>
            </div>
          </div>
          <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
            <i class="fas fa-clipboard-check text-white text-2xl"></i>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm font-medium">待处理缺陷</p>
            <p class="text-3xl font-bold text-gray-800 mt-2">8</p>
            <div class="flex items-center mt-2">
              <span class="text-red-600 text-sm font-semibold">↑ 3</span>
              <span class="text-gray-500 text-sm ml-2">新增</span>
            </div>
          </div>
          <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
            <i class="fas fa-exclamation-triangle text-white text-2xl"></i>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm font-medium">完成率</p>
            <p class="text-3xl font-bold text-gray-800 mt-2">94.2%</p>
            <div class="flex items-center mt-2">
              <span class="text-green-600 text-sm font-semibold">↑ 2.1%</span>
              <span class="text-gray-500 text-sm ml-2">较上月</span>
            </div>
          </div>
          <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
            <i class="fas fa-percentage text-white text-2xl"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">本月巡检进度</h3>
        <canvas id="inspectionChart" height="200"></canvas>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">缺陷等级分布</h3>
        <canvas id="defectChart" height="200"></canvas>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">最新动态</h3>
        <ul class="space-y-3 text-sm text-gray-700">
          <li>线路A-001完成巡检 <span class="text-xs text-gray-500">2分钟前</span></li>
          <li>发现紧急缺陷，需立即处理 <span class="text-xs text-gray-500">5分钟前</span></li>
          <li>消缺任务T-456已完成 <span class="text-xs text-gray-500">10分钟前</span></li>
        </ul>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">待办事项</h3>
        <ul class="space-y-3 text-sm text-gray-700">
          <li>线路B-003缺陷复查 <span class="text-xs text-gray-500">今天</span></li>
          <li>月度巡检计划制定 <span class="text-xs text-gray-500">明天</span></li>
          <li>月度报表生成 <span class="text-xs text-gray-500">本周</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js'
Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, DoughnutController, ArcElement, Tooltip, Legend)

onMounted(() => {
  const ctx1 = document.getElementById('inspectionChart')
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['1日','5日','10日','15日','20日','25日','30日'],
      datasets: [{
        label: '巡检完成数',
        data: [12,19,23,25,28,32,35],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  })

  const ctx2 = document.getElementById('defectChart')
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['一般','严重','紧急'],
      datasets: [{
        data: [45,30,25],
        backgroundColor: ['#10B981','#F59E0B','#EF4444']
      }]
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
  })
})
</script>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.card { background: #fff; border: 1px solid #eee; padding: 16px; border-radius: 6px; }
</style>