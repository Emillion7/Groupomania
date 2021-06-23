<template>
  <v-main>
    <router-link class="pa-4" to="/addpost">Add a New Post</router-link>
    <div class="single-post" v-for="post in $store.getters.posts" :key="post.id">
      <v-card width="510" class="pa-1 ma-4">
       <v-layout wrap column>
         
         <v-flex xs12 sm4>
           <h4 class="text-button text-center grey--text">{{ post.title }}</h4>
         </v-flex>
         
         <v-flex xs12 sm4>
           <article class="body-1 grey--text mb-2 ml-3">{{ post.description }}</article>
         </v-flex>
         
         <v-flex xs12 sm4>
           <img width="500" class="m-1" v-if="post.imgname != '' " :src= "'http://localhost:5000' + post.imageURL">
         </v-flex>

         <h4 class="grey--text"><i>Added by:</i> {{ post.username }}</h4>
          
          <v-col class="text-right">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="pink"
              @click="deletePost(post.id)"
            >
              <v-icon dark>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>

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
      post: {},
      username: this.username
    }
  },
    methods: {
    getPosts: function() {
    this.$store
      .dispatch('handleGetPosts')
    },

    deletePost(postId) {
      
      this.$axios
        .delete("http://localhost:5000/api/v1/posts/" + postId,
        {
            Headers: {
              Authorization: 'Bearer '+localStorage.getItem("token")
          },
        }).then(()=>{
            this.$store.getters.posts.splice(postId,1)
        })
      }
    },
  mounted() {
    this.getPosts()
  }
}
</script>