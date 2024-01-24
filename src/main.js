import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from "./router";
// import VueI18n from 'vue-i18n';
import i18n from './i18n';
const app = createApp(App)
app
  .use(router)
//   .use(VueI18n)
  .use(i18n)
app.mount("#app");