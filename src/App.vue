<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from "vue";
import TitleBar from "./components/TitleBar.vue";
import { appWindow } from '@tauri-apps/api/window'

const greetToName = ref("aaaa");


onMounted(() => {
  document
    .getElementById('titlebar-minimize')
    .addEventListener('click', () => appWindow.minimize())
  document
    .getElementById('titlebar-maximize')
    .addEventListener('click', () => appWindow.toggleMaximize())
  document
    .getElementById('titlebar-close')
    .addEventListener('click', () => appWindow.close())
})
</script>

<template>
  <TitleBar />
  <div class="container">
    <h1>Welcome to Tauri!</h1>
    <router-link to="/greet">打個招呼吧</router-link>
    <router-link to="/yell">叫一下</router-link>
    <router-link :to="'/greet/' + greetToName">跟 {{ greetToName }} 打招呼</router-link>


    <input v-model="greetToName" placeholder="Enter a name..." />

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.titlebar {
  height: 30px;
  background: #329ea3;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.titlebar-button:hover {
  background: #5bbec3;
}


.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
