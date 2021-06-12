<template>
  <v-main>
    <router-link class="pa-4" to="/addpost">Add a New Post</router-link>
    <div class="single-post" v-for="post in $store.getters.posts" :key="post.id">
      <v-card width="250" flat class="pa-1">
       <v-layout wrap column>
         <v-flex xs12 sm4>
           <h4 class="body-1 grey--text">{{ post.title }}</h4>
         </v-flex>
         <v-flex xs12 sm4>
           <article class="body-1 grey--text">{{ post.description }}</article>
         </v-flex>
         <v-flex xs12 sm4>
           <img v-if="post.imgname != '' " :src= "'' + post.imageURL">
         </v-flex>
       </v-layout>
     </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'ShowPosts',

  data() {
    return {

    }
  },
    methods: {
    getPosts: function() {
    this.$store
      .dispatch('handleGetPosts')
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>