<!-- src/App.vue -->
<template>
  <div class="marketplace">
    <main class="marketplace-main">
      <div class="container">
        <!-- 卡片展示区域 -->
         <div>
          {{ userSubData }}
         </div>
        <div class="cards-grid">
          <div v-for="card in cardsList" :key="card.id" class="card-item">
            <div class="card-preview">
              <!-- 动态加载微应用卡片 -->
              <div class="micro-app-container">
                <micro-app
                  :name="card.appName"
                  :url="card.url"
                  :default-page="card.defaultPage"
                  :data='microAppData'
                  @datachange='handleDataChange'
                  iframe
                ></micro-app>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 卡片数据
const cardsList = ref([
  {
    id: 1,
    name: "用户统计卡片",
    appName: "about",
    url: "http://localhost:3001/",
    defaultPage: "/about",
  },
  {
      id: 2,
      name: '天气预报卡片',
      appName: 'home',
      url: 'http://localhost:3001',
      defaultPage: "/home",
  },
    {
      id: 3,
      name: '社交分享卡片',
      appName: 'user',
      url: 'http://localhost:3001',
      defaultPage: "/user",
    },
  //   {
  //     id: 4,
  //     name: '实时图表卡片',
  //     appName: 'card-chart',
  //     url: 'http://localhost:3004',
  //   },
  //   {
  //     id: 5,
  //     name: '任务管理卡片',
  //     appName: 'card-todo',
  //     url: 'http://localhost:3005',
  //   },
  //   {
  //     id: 6,
  //     name: '新闻资讯卡片',
  //     appName: 'card-news',
  //     url: 'http://localhost:3006',
  //   }
]);

// 微应用数据
const microAppData = ref({
  userId: '123456',
  userName: '张三',
  userAvatar: 'https://example.com/avatar.jpg',
  // 其他数据...
});
let userSubData = ref()
const handleDataChange = (data) => {
  userSubData.value = data.detail.data.data.message
  console.log('来自子应用的数据:', data)
};
// 主应用：提供资源 URL
// window.sharedAssets = {
//   images: {
//     logo: '/img/ScreenShot.png',
//     // avatar: '/shared/images/avatar.jpg',
//     // // 或者完整 URL
//     // banner: `${window.location.origin}/shared/images/banner.png`
//   }
// }
// console.log(window.sharedAssets);

</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 主内容区 */
.marketplace-main {
  padding: 2rem 0;
  min-height: 70vh;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.card-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);
}

.card-preview {
  padding: 1.5rem;
}

.micro-app-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  min-height: 200px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #eaeaea;
}

</style>