<template>
  <p>{{ post }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppPost',
  props: {
    post: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
