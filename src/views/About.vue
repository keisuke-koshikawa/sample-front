<template>
  <div v-if="!$auth.loading.value">
    <button v-if="!$auth.isAuthenticated.value" @click="login">Log in</button>
    <button v-if="$auth.isAuthenticated.value" @click="logout">Log out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'About',
  setup () {
    const auth = inject<any>('$auth')

    return {
      login: () => {
        auth.loginWithRedirect()
      },
      logout: () => {
        auth.logout({
          returnTo: window.location.origin
        })
      }
    }
  }
})
</script>
