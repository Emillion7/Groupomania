<template>
  <v-main>
    <h1 class="subheading grey--text pl-3">All Posts</h1>
    <div class="single-post">
      <h2>{{ post.title }}</h2>
      <article>{{ post.description }}</article>
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
    
  },
  created() {
    this.$http.get('http://localhost:5000/api/v1/posts').then(function(data){
      console.log(data);
      this.posts = data.body.slice(0,10);
    })
  }
}
</script>