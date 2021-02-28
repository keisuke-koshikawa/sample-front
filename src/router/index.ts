import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login.vue'
import Post from '@/views/Post.vue'
import NewPost from '@/views/NewPost.vue'
import { authorizeToken } from './guards'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresNotAuth: true }
  },
  {
    path: '/posts',
    name: 'Post',
    component: Post,
    meta: { requiresAuth: true }
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(authorizeToken)

export default router
