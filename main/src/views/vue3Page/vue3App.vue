<template>
  <div>
    <h1>子应用</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3001/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/vue3-sub`
     -->
    <micro-app name='vue3-sub1' url='http://localhost:3001/' baseroute='/vue3-sub'></micro-app>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import microApp from '@micro-zoe/micro-app'

// 监听子应用发送的数据
onMounted(() => {
  microApp.addDataListener('vue3-sub-app', (data) => {
    console.log('收到子应用数据:', data)
  })
})
</script>
