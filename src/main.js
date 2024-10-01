// 從 Vue 中引入 createApp 函數
import { createApp } from 'vue'
// 引入 App.vue 作為應用程序的根組件
import App from './App.vue'
// 引入路由配置
import router from './router'

// 引入全局樣式表
import './assets/styles.css'

// 創建應用程序，使用路由，掛載到 #app 元素上
createApp(App).use(router).mount('#app')
