<template>
  <div id="app">
    <!-- 定義導航欄 -->
    <nav>
      <!-- 使用 router-link 連結到首頁 -->
      <router-link to="/">首頁</router-link> |
      <!-- 使用 router-link 連結到博客列表 -->
      <router-link to="/blog">博客列表</router-link> |
      <!-- 使用 router-link 連結到關於我頁面 -->
      <router-link to="/about">關於我</router-link> <!-- 新增導航連結 -->
    </nav>
    <!-- 使用 router-view 顯示匹配路由的對應組件 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 設定導航欄的樣式 */
nav {
  padding: 1em;
  background: #333;
}
/* 設定導航欄連結的樣式 */
nav a {
  color: white;
  margin-right: 1em;
  text-decoration: none;
}
/* 設定導航欄連結在hover時的樣式 */
nav a:hover {
  text-decoration: underline;
}
</style>
