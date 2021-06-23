<template>
  <v-main>
    <h1 class="subheading grey--text pl-3">Add Post:</h1>

    <v-container>
      <v-form enctype="multipart/form-data">
        <v-card class="pa-1" flat>
          <v-layout wrap>
            <v-flex sm8 md6 lg4>
              <v-textarea
                label="Title"
                v-model="post.title"
                background-color="purple lighten-5"
                auto-grow
                outlined
                rows="1"
                row-height="15"
                >project</v-textarea
              >
              <v-textarea
                label="Description"
                v-model="post.description"
                background-color="purple lighten-5"
                auto-grow
                outlined
                rows="4"
                row-height="35"
              ></v-textarea>
              <v-btn
                class="mb-5"
                type="submit"
                color="primary"
                v-on:click.prevent="createPost"
                @click="submitted = !submitted"
              >Create Post
              </v-btn>
              <div v-if="submitted">
                <h3 class="green--text">Post created successfully!</h3>
                <p class="grey--text">Do you want to add an image to your post?</p>
                <v-file-input
                  label="Add image"
                  background-color="purple lighten-5"
                  outlined
                  prepend-icon="mdi-camera"
                  @change="onSelect"
                  type="file"
                  id="file"
                  ref="file"
                  accept=".jpg, .png, .gif"
                ></v-file-input>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-form>

      <v-card flat class="mt-3">
        <v-layout wrap>
          <v-flex sm8 md6 lg4>
            <div id="preview">
              <h3 class="grey--text pl-1">Preview Post</h3>
              <p class="text-button grey--text pl-1">Post title: {{ post.title }}</p>
              <p class="grey--text pl-1">
                Post description: {{ post.description }}
              </p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "AddPost",

  data() {
    return {
      post: {
        title: "",
        description: "",
        file: "",
        imageURL: "",
        postId: ""
      },
      submitted: false,
    };
  },
  methods: {
    createPost: function () {
      const config = {
        headers: { Authorization: `Bearer ` + localStorage.getItem("token") },
      };
      return axios
        .post(
          "http://localhost:5000/api/v1/posts",
          {
            title: this.post.title,
            description: this.post.description,
            authorId: this.$store.state.user.userId,
          },
          config
        )
        .then(row => {
          this.post.postId = row.data.data.id
        });
    },    
    onSelect(ref) {
      const formData = new FormData();
      formData.append("image", ref);
      let postId = this.post.postId;
      try {
        axios.post(
          `http://localhost:5000/api/v1/posts/${postId}/image`,
          formData,
          {
            Headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ).then(() => {
            alert('Image added successfully!')
          });
      } catch (err) {
        console.error(err.message);
      }
    },
    async onSubmit() {
      this.authorId = localStorage.username;
      const formData = new FormData();
      formData.append("file", this.post.file);

      try {
        await axios
          .post("http://localhost:5000/api/v1/posts/:postId/image", formData)
          .then((res) => {
            this.imageURL = res.data;
            this.postFile(this.imageURL);
          });
      } catch (err) {
        console.error(err.message);
      }
    },
  },
};
</script>

<style>
#preview {
  border: 1px grey solid;
  border-radius: 4px;
}
</style>