<template>
  <div class="rounded overflow-hidden shadow-lg mt-8 pt-8 mr-8">
    <a :href='url'>
      <img :src="post.encoded_icatch">
    </a>
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
  },

  setup (prop) {
    const url = `posts/${prop.post.id}`

    return {
      url
    }
  }
})
</script>

<style scoped>

</style>
