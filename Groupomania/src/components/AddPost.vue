<template>
  <v-main>

    <v-container v-if="!submitted">  

     <v-card class="pa-1" flat>
       <v-layout wrap>
         <v-flex sm8 md6 lg4>
           <div class="body-1 grey--text">Add Post:</div>
           <v-textarea
            label="Title"
            v-model="post.title"
            background-color="purple lighten-5"
            auto-grow
            outlined
            rows="1"
            row-height="15"
          >project</v-textarea>
           <v-textarea
            label="Description"
            v-model="post.description"
            background-color="purple lighten-5"
            auto-grow
            outlined
            rows="4"
            row-height="35"
          ></v-textarea>
          <v-file-input
            label="Add image"
            background-color="purple lighten-5"
            outlined
            prepend-icon="mdi-camera"
            ></v-file-input>
          <v-btn type="submit" color="primary" v-on:click.prevent="createPost">Create Post</v-btn>
         </v-flex>
       </v-layout>
     </v-card>

     <div v-if="submitted">
       <h3>Thanks for adding your post!</h3>
     </div>

      <v-card flat class="mt-3"> 
        <v-layout wrap>
          <v-flex sm8 md6 lg4 >
            <div id="preview">
              <h3 class="grey--text pl-1">Preview Post</h3>
              <p class="grey--text pl-1">Post title:{{ post.title }}</p>
              <p class="grey--text pl-1">Post description: {{ post.description }}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>

  </v-main>
</template>

<script>
export default {
  name: 'AddPost',

  data() {
    return {
      post: {
        title:"",
        description:"",
        image:"",
        authorId:"6079c4c8-ac71-42dc-84e4-9ec545e349ad"
      },
      submitted: false,
    }
  },
  methods: {
    createPost: function() {
    this.$store
      .dispatch('handleUploadPost', {
        title: this.post.title,
        description: this.post.description,
        authorId: this.post.authorId
      })
    }
  }
}

</script>

<style>
#preview {
  border: 1px grey solid;
  border-radius: 4px;
}
</style>