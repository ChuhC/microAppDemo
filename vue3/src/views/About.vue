<template>
    <div>
        这是子应用的About页面
        <!-- <img :src="sharedLogo" alt="Logo" /> -->
         <span>来自主应用的数据{{ userInfo.userName }}</span>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const userInfo = ref({})
// 方式1：监听数据变化
window.microApp?.addDataListener((data) => {
    console.log(data);
    
  userInfo.value = data
})
// const sharedLogo = ref(window.sharedAssets?.images.logo)
// console.log(window.sharedAssets);

</script>