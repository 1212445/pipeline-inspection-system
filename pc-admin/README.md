# PC 管理后台

工业管道安全巡检系统的 PC 端管理后台，基于 Vue 3 + Element Plus + Tailwind CSS 构建。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **UI 组件库**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router
- **样式**: Tailwind CSS + PostCSS
- **图表**: Chart.js
- **图标**: Font Awesome

## 项目结构

```
pc-admin/
├── src/
│   ├── assets/          # 静态资源
│   │   └── base.css     # Tailwind CSS 基础样式
│   ├── layouts/         # 布局组件
│   │   └── AdminLayout.vue  # 主布局
│   ├── pages/           # 页面组件
│   │   ├── Login.vue           # 登录页
│   │   ├── Dashboard.vue       # 仪表盘
│   │   ├── InspectionManagement.vue    # 巡检管理
│   │   ├── InspectionManagementNew.vue # 巡检管理（新）
│   │   ├── LineManagement.vue          # 线路管理
│   │   ├── DefectManagement.vue        # 缺陷管理
│   │   └── Statistics.vue              # 统计报表
│   ├── router/          # 路由配置
│   │   └── index.js     # 路由定义
│   ├── App.vue          # 根组件
│   └── main.js          # 入口文件
├── package.json         # 依赖配置
├── vite.config.js       # Vite 配置
├── tailwind.config.js   # Tailwind 配置
├── postcss.config.js    # PostCSS 配置
└── index.html           # HTML 模板
```

## 功能特性

### 已实现功能
- ✅ **登录页面**: 轮播背景、粒子效果、毛玻璃登录表单
- ✅ **主布局**: 顶部导航栏、渐变侧边栏、响应式设计
- ✅ **仪表盘**: 统计卡片、Chart.js 图表、实时状态
- ✅ **巡检管理**: 任务列表、筛选工具栏、分页
- ✅ **线路管理**: 统计卡片、搜索筛选、表格展示
- ✅ **缺陷管理**: 等级筛选、状态管理、操作按钮
- ✅ **统计报表**: 图表占位区域
- ✅ **路由系统**: 嵌套路由、面包屑导航

### 待开发功能
- 🔄 **数据接口**: API 集成、数据获取
- 🔄 **状态管理**: Pinia stores、数据持久化
- 🔄 **表单验证**: 登录验证、数据校验
- 🔄 **权限控制**: 角色权限、路由守卫
- 🔄 **实时通信**: WebSocket、消息推送

## 开发指南

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖
```bash
cd pc-admin
npm install
```

### 开发运行
```bash
npm run dev
```

### 构建生产
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 当前进度

### 2025-01-17
- ✅ 项目初始化：Vue 3 + Vite + Element Plus + Tailwind CSS
- ✅ 路由配置：登录页、仪表盘、各管理页面
- ✅ 布局组件：AdminLayout 主布局
- ✅ 页面组件：Login、Dashboard、InspectionManagement、LineManagement、DefectManagement、Statistics、InspectionManagementNew
- ✅ 样式系统：Tailwind CSS 配置、响应式设计
- ✅ 图表集成：Chart.js 在仪表盘中的应用

### 变更日志
- **v0.1.0** (2025-01-17)
  - 初始版本发布
  - 完成基础页面布局和样式
  - 实现登录页面和主布局
  - 完成所有管理页面的静态展示

## 设计规范

### 颜色主题
- 主色调：蓝色 (#3B82F6)
- 辅助色：紫色 (#8B5CF6)
- 成功色：绿色 (#10B981)
- 警告色：黄色 (#F59E0B)
- 错误色：红色 (#EF4444)

### 组件规范
- 使用 Element Plus 组件库
- 遵循 Tailwind CSS 工具类命名
- 响应式设计：移动端优先
- 无障碍访问：语义化 HTML

## 部署说明

### 构建配置
- 输出目录：`dist/`
- 静态资源：自动处理路径
- 代码分割：按路由分割

### 环境变量
```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_TITLE=工业管道安全巡检系统
```

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。