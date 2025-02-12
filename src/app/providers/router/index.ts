import {createRouter, createWebHistory} from "vue-router";
import Home from "../../../pages/home/home.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/home.vue')
    },
    {
      path: '/game',
      component: () => import('@/pages/game/game.vue')
    }
  ]
})