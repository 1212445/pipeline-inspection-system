# 变更日志

本文档记录了项目的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

### 新增
- 移动端应用开发
- 后端 API 服务
- 数据库设计

### 变更
- 优化 PC 端性能
- 完善文档

### 修复
- 修复已知问题

## [0.1.0] - 2025-01-17

### 新增
- 🎉 项目初始化：工业管道安全巡检系统
- 📱 PC 管理后台：Vue 3 + Element Plus + Tailwind CSS
- 🔐 登录页面：轮播背景、粒子效果、毛玻璃登录表单
- 🏠 仪表盘：统计卡片、Chart.js 图表、实时状态展示
- 📋 巡检管理：任务列表、筛选工具栏、分页功能
- 🛣️ 线路管理：统计卡片、搜索筛选、表格展示
- ⚠️ 缺陷管理：等级筛选、状态管理、操作按钮
- 📊 统计报表：图表占位区域
- 🧭 路由系统：嵌套路由、面包屑导航
- 🎨 主布局：顶部导航栏、渐变侧边栏、响应式设计

### 技术栈
- Vue 3 (Composition API)
- Vite 构建工具
- Element Plus UI 组件库
- Pinia 状态管理
- Vue Router 路由
- Tailwind CSS 样式框架
- Chart.js 图表库
- Font Awesome 图标库

### 项目结构
```
pipeline-inspection-system/
├── README.md                    # 项目总览
├── .editorconfig               # 编辑器配置
├── .gitignore                  # Git 忽略文件
├── docs/                       # 项目文档
├── prototypes/                 # 原型设计
├── mobile-app/                 # 移动端应用
├── server/                     # 后端服务
└── pc-admin/                   # PC 管理后台
    ├── src/
    │   ├── layouts/AdminLayout.vue
    │   ├── pages/
    │   │   ├── Login.vue
    │   │   ├── Dashboard.vue
    │   │   ├── InspectionManagement.vue
    │   │   ├── InspectionManagementNew.vue
    │   │   ├── LineManagement.vue
    │   │   ├── DefectManagement.vue
    │   │   └── Statistics.vue
    │   ├── router/index.js
    │   ├── assets/base.css
    │   ├── App.vue
    │   └── main.js
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── index.html
```

### 功能特性
- ✅ 完整的页面布局和导航
- ✅ 响应式设计，支持多设备
- ✅ 现代化 UI 设计，毛玻璃效果
- ✅ 图表数据可视化
- ✅ 表格数据展示和操作
- ✅ 搜索和筛选功能
- ✅ 分页和状态管理

### 开发环境
- Node.js >= 16.0.0
- npm >= 8.0.0
- 支持热重载开发

### 部署
- GitHub 仓库：https://github.com/1212445/pipeline-inspection-system
- 支持版本回滚和历史查看
- 自动化部署准备

---

## 版本说明

### 版本号规则
- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

### 标签说明
- `新增` - 新功能
- `变更` - 对现有功能的变更
- `弃用` - 不再建议使用，未来版本会移除
- `移除` - 在此版本移除
- `修复` - 任何 bug 修复
- `安全` - 安全问题修复

### 链接
- [Unreleased]: https://github.com/1212445/pipeline-inspection-system/compare/v0.1.0...HEAD
- [0.1.0]: https://github.com/1212445/pipeline-inspection-system/releases/tag/v0.1.0