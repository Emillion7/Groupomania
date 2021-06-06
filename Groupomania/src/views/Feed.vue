<template>
  <v-main>
    <h1 class="subheading grey--text pl-3">Feed</h1>

    <v-container class="my-5">
      
     <v-card class="pa-1" flat>
       <v-layout wrap>
         <v-flex sm8 md6 lg4>
           <div class="body-1 grey--text">Add Post:</div>
           <v-textarea
            label="Title"
            background-color="purple lighten-5"
            auto-grow
            outlined
            rows="1"
            row-height="15"
          >project</v-textarea>
           <v-textarea
            outlined
            background-color="purple lighten-5"
            auto-grow
            label="Description"
            rows="4"
            row-height="35"
          ></v-textarea>
          <v-file-input
            label="Add image"
            outlined
            background-color="purple lighten-5"
            prepend-icon="mdi-camera"
            type="file" 
            id="file" 
            ref="file" 
            accept=".jpg, .png, .gif" 
            v-on:change="handleFileUpload()">
          </v-file-input>
          <v-btn type="submit" color="primary">Create Post</v-btn>
         </v-flex>
       </v-layout>
     </v-card>

    </v-container>
  </v-main>
</template>

<script>


</script>