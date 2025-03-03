import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/components/Home.vue';
import About from '../src/components/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;