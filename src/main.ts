import { createApp } from "vue";
import "./assets/css/styles.css";
import MainApp from "./mainApp.vue";
import MainRouter from "./components/router/mainRouter";
import { createPinia } from "pinia";

const StorePinia = createPinia();

createApp(MainApp).use(MainRouter).use(StorePinia).mount("#app");
