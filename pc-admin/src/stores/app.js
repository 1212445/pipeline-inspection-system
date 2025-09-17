import { defineStore } from 'pinia'
import { ref } from 'vue'

/**
 * 应用全局状态管理
 * 管理侧边栏状态、主题、加载状态等
 */
export const useAppStore = defineStore('app', () => {
  // 状态
  const sidebarCollapsed = ref(false)
  const loading = ref(false)
  const theme = ref('light')
  const pageTitle = ref('工业管道安全巡检系统')

  /**
   * 切换侧边栏状态
   */
  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  /**
   * 设置侧边栏状态
   * @param {boolean} collapsed - 是否折叠
   */
  const setSidebarCollapsed = (collapsed) => {
    sidebarCollapsed.value = collapsed
  }

  /**
   * 设置加载状态
   * @param {boolean} state - 加载状态
   */
  const setLoading = (state) => {
    loading.value = state
  }

  /**
   * 设置主题
   * @param {string} newTheme - 主题名称
   */
  const setTheme = (newTheme) => {
    theme.value = newTheme
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  /**
   * 设置页面标题
   * @param {string} title - 页面标题
   */
  const setPageTitle = (title) => {
    pageTitle.value = title
    document.title = `${title} - ${pageTitle.value}`
  }

  return {
    // 状态
    sidebarCollapsed,
    loading,
    theme,
    pageTitle,
    
    // 方法
    toggleSidebar,
    setSidebarCollapsed,
    setLoading,
    setTheme,
    setPageTitle
  }
})