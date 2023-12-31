import { createRouter, createWebHistory } from 'vue-router'

import PKIndexView from '../views/pk/PKIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'
import NotFound from '../views/error/NotFound'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  { 
    path: "/pk/",
    name: "pk_index",
    component: PKIndexView
  },
  { 
    path: "/record/",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotIndexView
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound
  },
  { //user input a path which not in router
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
