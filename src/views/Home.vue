<template>
  <div>
    <label for="email">
      Email
    </label>
    <input v-model="email" id="Email" type="text" placeholder="Email">
  </div>
  <div>
    <label for="password">
      Password
    </label>
    <input v-model="password" id="password" type="password" placeholder="******************">
  </div>
  <button @click="login">
    Sign In
  </button>
  <p v-if='loginUser'>{{ loginUser }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { login } from '@/api/auth'

export default defineComponent({
  name: 'Home',
  setup () {
    const formData = reactive({
      email: '',
      password: ''
    })

    const loginUser = ref('')

    return {
      loginUser,
      ...toRefs(formData),
      login: async () => {
        await login(formData.email, formData.password)
          .then((res) => {
            loginUser.value = res.data.email
          })
      }
    }
  }
})
</script>
