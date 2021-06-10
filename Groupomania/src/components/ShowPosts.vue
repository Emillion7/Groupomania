<template>
  <v-main>
    <router-link class="pa-4" to="/addpost">Add a New Post</router-link>
    <div class="single-post">

      <v-card width="250" class="pa-1">
       <v-layout wrap column>
         <v-flex xs12 sm4>
           <h4 class="body-1 grey--text">{{ post.title }}</h4>
         </v-flex>
         <v-flex xs12 sm4>
           <article class="body-1 grey--text">{{ post.description }}</article>
         </v-flex>
         <v-flex xs12 sm4>
           <article class="body-1 grey--text">{{ post.imageURL }}</article>
         </v-flex>
       </v-layout>
     </v-card>

      <h2></h2>
      <article></article>
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'ShowPosts',

  data() {
    return {
      post: []
    }
  },
    methods: {
    getPosts: function() {
    this.$store
      .dispatch('handleGetPosts', {
        title: this.post.title,
        description: this.post.description,
        imageURL: this.post.imageURL
      })
    }
  }
}
</script>