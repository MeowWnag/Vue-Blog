import { createRouter, createWebHistory } from 'vue-router' // 從 'vue-router' 中引入 createRouter 和 createWebHistory
import HomeView from '../views/HomeView.vue' // 引入 HomeView 組件
import BlogView from '../views/BlogView.vue' // 引入 BlogView 組件
import PostView from '../views/PostView.vue' // 引入 PostView 組件
import AboutView from '../views/AboutView.vue' // 引入 AboutView 組件

// 定義路由配置
const routes = [
  { path: '/', name: 'home', component: HomeView }, // 首頁路由
  { path: '/blog', name: 'blog', component: BlogView }, // 部落格列表路由
  { path: '/post/:id', name: 'post', component: PostView }, // 文章詳細頁面路由
  { path: '/about', name: 'about', component: AboutView } // 關於我頁面的路由
]

// 創建路由器
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // 使用 createWebHistory 創建路由歷史
  routes // 設定路由配置
})

export default router // 導出路由器
