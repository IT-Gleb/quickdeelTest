import {
  createRouter,
  //createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { BASE_URL, TASKS_URL } from "../../lib";
//import MainLayout from "../Layouts/MainLayout.vue";
//import TaskLayout from "../Layouts/TaskLayout.vue";

const Main = () => import("../Layouts/MainLayout.vue");
const Tasks = () => import("../Layouts/TaskLayout.vue");

const AppRoutes = [
  { path: BASE_URL, component: Main },
  { path: TASKS_URL, component: Tasks },
];

const MainRouter = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),

  routes: AppRoutes,
});

export default MainRouter;
