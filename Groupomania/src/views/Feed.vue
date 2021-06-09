<template>
      <v-main>
        <h1 class="subheading grey--text pl-3">Feed</h1>
        <AddPost />
        <ShowPosts />
      </v-main>
</template>

<script>
import AddPost from '../components/AddPost.vue'
import ShowPosts from '../components/ShowPosts.vue'

export default {
components: {
    AddPost,
    ShowPosts
  }
}
</script>