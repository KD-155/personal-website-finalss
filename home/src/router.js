import { createRouter, createWebHistory } from "../.vscode/node_modules/vue-router/dist/vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;