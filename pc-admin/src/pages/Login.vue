<template>
  <div class="login-bg min-h-screen relative overflow-hidden">
    <!-- 轮播背景图片 -->
    <div class="bg-carousel">
      <div class="bg-slide active"></div>
      <div class="bg-slide"></div>
      <div class="bg-slide"></div>
      <div class="bg-slide"></div>
    </div>

    <!-- 背景遮罩 -->
    <div class="bg-overlay"></div>

    <!-- 粒子效果 -->
    <div class="particles" ref="particlesRef"></div>

    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden z-[3] pointer-events-none">
      <div class="absolute -top-4 -right-4 w-72 h-72 bg-white opacity-5 rounded-full floating"></div>
      <div class="absolute top-1/4 -left-8 w-48 h-48 bg-white opacity-30 rounded-full floating" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-10 right-1/4 w-32 h-32 bg-white opacity-5 rounded-full floating" style="animation-delay: 4s;"></div>
      <div class="absolute top-1/3 right-1/3 w-16 h-16 bg-white opacity-10 rounded-full floating" style="animation-delay: 1s;"></div>
    </div>

    <div class="relative z-10 min-h-screen flex">
      <!-- 左侧信息区域 -->
      <div class="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 slide-in">
        <div class="text-white">
          <h1 class="text-6xl font-bold mb-6 leading-tight">工业管道安全<br><span class="text-blue-200">巡检系统</span></h1>
          <p class="text-2xl text-blue-100 mb-12 font-light">Industrial Pipeline Safety Inspection System</p>
          <div class="space-y-6">
            <div class="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                <i class="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-1">安全可靠</h3>
                <p class="text-blue-100 text-lg">企业级安全保障，数据加密传输</p>
              </div>
            </div>
            <div class="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                <i class="fas fa-mobile-alt text-white text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-1">移动办公</h3>
                <p class="text-blue-100 text-lg">支持PC端与移动端协同作业</p>
              </div>
            </div>
            <div class="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                <i class="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-1">数据分析</h3>
                <p class="text-blue-100 text-lg">智能统计分析，科学决策支持</p>
              </div>
            </div>
            <div class="flex items-center space-x-6 group hover:scale-105 transition-all duration-300">
              <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all">
                <i class="fas fa-cogs text-white text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-1">智能管理</h3>
                <p class="text-blue-100 text-lg">自动化流程，提升运营效率</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧登录表单 -->
      <div class="w-full lg:w-1/2 flex items-center justify-end px-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 w-80 hover:shadow-3xl transition-all duration-300 border border-white/20">
          <!-- Logo区域 -->
          <div class="text-center mb-6">
            <div class="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500/80 to-purple-500/80 rounded-2xl flex items-center justify-center mb-4 shadow-xl hover:scale-110 transition-transform duration-300">
              <i class="fas fa-industry text-white text-2xl"></i>
            </div>
            <h2 class="text-xl font-bold text-white mb-1">管理员登录</h2>
            <p class="text-white/80 text-sm">工业管道安全巡检系统</p>
          </div>

          <!-- 登录表单 -->
          <form class="space-y-4" @submit.prevent="onLogin">
            <div class="group">
              <label class="block text-sm font-semibold text-white/90 mb-2">
                <i class="fas fa-user mr-2 text-blue-300"></i>用户名
              </label>
              <input v-model="username" type="text" placeholder="请输入管理员用户名" 
                     class="w-full px-3 py-2.5 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-white placeholder-white/60 text-sm backdrop-blur-sm">
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-white/90 mb-2">
                <i class="fas fa-lock mr-2 text-blue-300"></i>密码
              </label>
              <div class="relative">
                <input v-model="password" :type="showPwd ? 'text' : 'password'" placeholder="请输入密码" 
                       class="w-full px-3 py-2.5 pr-10 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-white placeholder-white/60 text-sm backdrop-blur-sm">
                <button type="button" @click="showPwd = !showPwd" class="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors">
                  <i :class="['fas', showPwd ? 'fa-eye-slash' : 'fa-eye', 'text-sm']"></i>
                </button>
              </div>
            </div>

            <div class="group">
              <label class="block text-sm font-semibold text-white/90 mb-2">
                <i class="fas fa-shield-alt mr-2 text-blue-300"></i>验证码
              </label>
              <div class="flex space-x-2">
                <input v-model="captcha" type="text" placeholder="验证码" 
                       class="flex-1 px-3 py-2.5 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-white/20 transition-all duration-300 text-white placeholder-white/60 text-sm backdrop-blur-sm">
                <div class="w-20 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30" @click="refreshCaptcha">
                  {{ captchaText }}
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center group cursor-pointer">
                <input v-model="remember" type="checkbox" class="rounded border-white/30 text-blue-500 focus:ring-blue-400 w-4 h-4 bg-white/10">
                <span class="ml-2 text-white/80 group-hover:text-white transition-colors">记住我</span>
              </label>
              <a href="#" class="text-blue-300 hover:text-blue-200 transition-colors font-medium">忘记密码？</a>
            </div>

            <button type="submit" :disabled="loading"
                    class="w-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white py-2.5 rounded-lg transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform active:scale-95 backdrop-blur-sm"
                    :class="loading ? 'opacity-80 cursor-not-allowed' : 'hover:from-blue-600/80 hover:to-purple-600/80 hover:scale-105'">
              <i :class="['fas', loading ? 'fa-spinner fa-spin' : 'fa-sign-in-alt', 'mr-2']"></i>
              {{ loading ? '登录中...' : '安全登录' }}
            </button>
          </form>

          <!-- 底部信息 -->
          <div class="mt-6 text-center">
            <div class="flex justify-center space-x-4 text-xs text-white/60 mb-3">
              <a href="#" class="hover:text-blue-300 transition-colors">用户协议</a>
              <a href="#" class="hover:text-blue-300 transition-colors">隐私政策</a>
              <a href="#" class="hover:text-blue-300 transition-colors">技术支持</a>
            </div>
            <div class="border-t border-white/20 pt-3">
              <p class="text-xs text-white/60">© 2025 工业管道安全巡检系统 v2.1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const particlesRef = ref(null)
const slideTimer = ref(null)
const username = ref('')
const password = ref('')
const captcha = ref('')
const captchaText = ref('8A3X')
const remember = ref(false)
const showPwd = ref(false)
const loading = ref(false)

const nextSlide = () => {
  const slides = document.querySelectorAll('.bg-slide')
  if (!slides.length) return
  let current = Array.from(slides).findIndex(s => s.classList.contains('active'))
  slides[current].classList.remove('active')
  current = (current + 1) % slides.length
  slides[current].classList.add('active')
}

const createParticles = () => {
  const container = particlesRef.value
  if (!container) return
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 15 + 's'
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
    container.appendChild(particle)
  }
}

const refreshCaptcha = () => {
  const text = Math.random().toString(36).substring(2, 6).toUpperCase()
  captchaText.value = text
}

const onLogin = async () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    router.push('/dashboard')
  }, 1200)
}

onMounted(() => {
  slideTimer.value = setInterval(nextSlide, 5000)
  createParticles()
})

onBeforeUnmount(() => {
  if (slideTimer.value) clearInterval(slideTimer.value)
})
</script>

<style scoped>
.login-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.bg-carousel { position: absolute; inset: 0; z-index: 0; }
.bg-slide { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 2s ease-in-out; }
.bg-slide.active { opacity: 1; }
.bg-slide:nth-child(1) { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center'); }
.bg-slide:nth-child(2) { background-image: url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1920&h=1080&fit=crop&crop=center'); }
.bg-slide:nth-child(3) { background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center'); }
.bg-slide:nth-child(4) { background-image: url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center'); }
.bg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,.3); z-index: 1; }
.particles { position: absolute; inset: 0; z-index: 2; pointer-events: none; }
.particle { position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.6); border-radius: 50%; animation: particle-float 15s infinite linear; }
@keyframes particle-float {
  0% { transform: translateY(100vh) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px) translateX(100px); opacity: 0; }
}
.floating { animation: floating 6s ease-in-out infinite; }
@keyframes floating { 0% { transform: translateY(0); } 50% { transform: translateY(-20px);} 100% { transform: translateY(0);} }
.slide-in { animation: slideIn 1s ease-out; }
@keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
</style>