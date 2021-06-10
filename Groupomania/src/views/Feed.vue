<template>
      <v-main>
        <h1 class="subheading grey--text pl-3">Feed</h1>
        
        <ShowPosts />
      </v-main>
</template>

<script>
import ShowPosts from '../components/ShowPosts.vue'

export default {
components: {
    ShowPosts
  }
}
</script>