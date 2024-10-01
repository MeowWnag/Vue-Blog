<template>
    <!-- 顯示部落格文章列表的模板 -->
    <div>
      <!-- 顯示部落格文章列表的標題 -->
      <h1>部落格文章列表</h1>
      <!-- 使用 v-for 迴圈顯示文章列表 -->
      <ul>
        <li v-for="post in posts" :key="post.id">
          <!-- 使用 router-link 連結到文章詳細頁面 -->
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // 定義 BlogView 組件
  export default {
    name: 'BlogView',
    // 定義資料
    data() {
      return {
        // 定義文章列表
        posts: [
          { id: 1, title: '第一篇：Vue 初學入門' },
          { id: 2, title: '第二篇：使用 Vuex 管理狀態' }
        ]
      }
    }
  }
  </script>