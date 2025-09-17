import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

/**
 * 认证状态管理
 * 管理用户登录状态、权限、用户信息等
 */
export const useAuthStore = defineStore('auth', () => {
  // 状态
  const token = ref(localStorage.getItem('token') || '')
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo') || 'null'))
  const permissions = ref([])
  const isLoggedIn = computed(() => !!token.value && !!userInfo.value)

  /**
   * 登录
   * @param {Object} loginData - 登录数据
   * @param {string} loginData.username - 用户名
   * @param {string} loginData.password - 密码
   * @param {string} loginData.captcha - 验证码
   * @param {boolean} loginData.remember - 记住我
   */
  const login = async (loginData) => {
    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 模拟登录验证
      if (loginData.username === 'admin' && loginData.password === '123456') {
        const mockToken = 'mock-jwt-token-' + Date.now()
        const mockUserInfo = {
          id: 1,
          username: 'admin',
          name: '张管理员',
          role: 'admin',
          roleName: '系统管理员',
          orgId: 1,
          orgName: '石化园区A区管理中心',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          permissions: ['dashboard', 'inspection', 'lines', 'defects', 'statistics']
        }

        // 保存到状态
        token.value = mockToken
        userInfo.value = mockUserInfo
        permissions.value = mockUserInfo.permissions

        // 持久化存储
        localStorage.setItem('token', mockToken)
        localStorage.setItem('userInfo', JSON.stringify(mockUserInfo))
        
        ElMessage.success('登录成功')
        return { success: true, data: mockUserInfo }
      } else {
        ElMessage.error('用户名或密码错误')
        return { success: false, message: '用户名或密码错误' }
      }
    } catch (error) {
      ElMessage.error('登录失败，请重试')
      return { success: false, message: '登录失败' }
    }
  }

  /**
   * 登出
   */
  const logout = () => {
    token.value = ''
    userInfo.value = null
    permissions.value = []
    
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    
    ElMessage.success('已退出登录')
  }

  /**
   * 检查权限
   * @param {string} permission - 权限标识
   */
  const hasPermission = (permission) => {
    return permissions.value.includes(permission)
  }

  /**
   * 获取用户信息
   */
  const getUserInfo = async () => {
    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 500))
      
      if (!token.value) {
        throw new Error('未登录')
      }
      
      // 返回缓存的用户信息
      return userInfo.value
    } catch (error) {
      logout()
      throw error
    }
  }

  /**
   * 刷新 token
   */
  const refreshToken = async () => {
    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newToken = 'refreshed-token-' + Date.now()
      token.value = newToken
      localStorage.setItem('token', newToken)
      
      return newToken
    } catch (error) {
      logout()
      throw error
    }
  }

  return {
    // 状态
    token,
    userInfo,
    permissions,
    isLoggedIn,
    
    // 方法
    login,
    logout,
    hasPermission,
    getUserInfo,
    refreshToken
  }
})