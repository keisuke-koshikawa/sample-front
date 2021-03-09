<template>
  <div class="rounded overflow-hidden shadow-lg mt-8 pt-8 mr-8">
    <router-link :to="{ name: 'PostDetail', params: { id: post.id }}">
      <img :src="post.encoded_icatch">
    </router-link>
    <div class="font-bold text-xl mb-2">{{post.title}}</div>
    <p class="text-grey-darker text-base">
      {{ post.body }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
