<template>
  <button @click="handleLogout()">Logout</button>
  <button @click='moveNewPost()'>New</button>
  <div>
    <AppPost :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { logout } from '@/api/auth'
import AppPost from '@/components/AppPost.vue'
import router from '@/router'

export default defineComponent({
  name: 'Post',
  components: {
    AppPost
  },
  setup () {
    const email = localStorage.getItem('uid')
    const posts = ['name', 'title', 'body']
    const moveNewPost = () => {
      router.push('/posts/new')
    }
    const handleLogout = () => {
      logout().then(() => {
        router.push('/home')
      })
    }

    return {
      email,
      posts,
      moveNewPost,
      handleLogout
    }
  }
})
</script>
