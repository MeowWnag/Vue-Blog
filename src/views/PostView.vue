<template>
    <div>
      <!-- 顯示文章標題 -->
      <h1>{{ post.title }}</h1>
      <!-- 使用 v-html 指令顯示 Markdown 轉換後的內容 -->
      <div v-html="markdownContent"></div>
    </div>
  </template>
  
  <script>
  // 引入 markdown-it 庫，用于將 Markdown 轉換為 HTML
  import markdownIt from 'markdown-it'
  
  export default {
    name: 'PostView',
    data() {
      return {
        post: {
          // 根據路由參數獲取文章 ID
          id: this.$route.params.id,
          title: '',
          content: ''
        },
        // 創建 markdownIt 實例
        md: new markdownIt()
      }
    },
    computed: {
      markdownContent() {
        // 使用 markdownIt 將文章內容轉換為 HTML
        return this.md.render(this.post.content)
      }
    },
    mounted() {
      // 定義靜態文章數據
      const articles = {
        1: {
          title: 'Vue 初學入門',
          content: '# Vue 初學入門\n\n這篇文章介紹如何使用 Vue 搭建前端應用。'
        },
        2: {
          title: '使用 Vuex 管理狀態',
          content: '# 使用 Vuex 管理狀態\n\n這篇文章介紹如何在 Vue 中使用 Vuex 進行全局狀態管理。'
        }
      }
      // 根據路由參數獲取文章數據，如果未找到則顯示默認文章
      this.post = articles[this.$route.params.id] || {
        title: '未找到該文章',
        content: '很抱歉，我們未能找到對應的文章內容。'
      }
    }
  }
  </script>