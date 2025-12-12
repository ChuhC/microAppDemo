<template>
  <div class="home">
    <h1>Home</h1>
    <p>子应用的Home page</p>
    <div>主应用的数据{{ parentData.userName }}</div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
// 方式2：直接获取
const parentData = ref(window.microApp?.getData())
console.log(parentData);

</script>