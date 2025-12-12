<template>
    <div>
        <h1>用户管理</h1>
        <span>子应用的</span>
    </div>
</template>
<script setup>
import { ref } from 'vue'
// 子应用中发送数据
window.microApp?.dispatch({ 
  type: '子应用事件',
  data: { message: 'Hello from child' }
})
</script>