<template>
    <!-- 關於我頁面的主要內容區域 -->
    <div>
      <!-- 關於我頁面的標題 -->
      <h1>關於我</h1>
      <!-- 自我介紹 -->
      <p>你好，我是 王奕晨。這是我的個人部落格系統，用來分享技術文章和生活記錄。</p>
      <!-- 頭像 -->
      <img src="" alt="頭像" style="float: right;">
      <!-- 我的簡介標題 -->
      <h2>我的簡介</h2>
      <!-- 我的簡介內容 -->
      <p>我是高師大軟工系大四的學生，目前正在學習前端相關的技術，包含Vue.js、React、Next.js、TailwindCSS、Node.js、Express、MongoDB、MySQL、Git、Docker、Kubernetes、CI/CD、DevOps、AWS、Azure、Google Cloud等。</p>
      
      <!-- 聯繫方式標題 -->
      <h2>聯繫方式</h2>
      <!-- 聯繫方式列表 -->
      <ul>
        <li>Email: charles52067@gmail.com</li>
        <li>GitHub: <a href="https://github.com/MeowWnag" target="_blank">我的GitHub</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  // 定義AboutView組件
  export default {
    name: 'AboutView'
  }
  </script>
  
  <style scoped>
  /* 標題顏色設定 */
  h1, h2 {
    color: #333;
  }
  /* 段落行高設定 */
  p {
    line-height: 1.6;
  }
  /* 連結顏色和下划線設定 */
  a {
    color: #42b983;
    text-decoration: none;
  }
  /* 連結hover時的下划線設定 */
  a:hover {
    text-decoration: underline;
  }
  </style>