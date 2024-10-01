<template>
    <!-- 首頁的主要內容區域 -->
    <div>
      <!-- 首頁的標題 -->
      <h1>歡迎來到我的個人Blog</h1>
      <!-- 首頁的簡介 -->
      <p>這裡是我的個人Blog系統，用來分享技術文章和生活記錄。</p>
      <!-- 連結到部落格文章列表的路由 -->
      <router-link to="/blog">查看部落格文章列表</router-link>
    </div>
  </template>
  
  <script>
  // 定義HomeView組件
  export default {
    name: 'HomeView'
  }
  </script>