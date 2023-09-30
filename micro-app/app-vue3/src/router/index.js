import { createRouter,createWebHistory } from "vue-router";
import Home from '../pages/Home';
import List from '../pages/List'

const router = createRouter({
  history: createWebHistory('/qiankun-app-vue'),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'List',
      component: List
    }
  ],
})

export default router