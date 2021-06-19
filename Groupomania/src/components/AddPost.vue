<template>
  <v-main>
    <h1 class="subheading grey--text pl-3">Add Post:</h1>

    <v-container v-if="!submitted">
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
              <v-btn
                type="submit"
                color="primary"
                v-on:click.prevent="createPost"
                >Create Post</v-btn
              >
            </v-flex>
          </v-layout>
        </v-card>
      </v-form>
      <div v-if="submitted">
        <h3>Thanks for adding your post!</h3>
      </div>

      <v-card flat class="mt-3">
        <v-layout wrap>
          <v-flex sm8 md6 lg4>
            <div id="preview">
              <h3 class="grey--text pl-1">Preview Post</h3>
              <p class="grey--text pl-1">Post title:{{ post.title }}</p>
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
        postId: "",
        authorId: "af1339ae-f5e0-426f-a59c-36e121d367e5",
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
            authorId: this.post.authorId,
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
          formData
        ),
          {
            Headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }.then((res) => {
            console.log(res);
            // this.imageURL = res.data;
            // this.postFile(this.imageURL);
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