<template>
  <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo darken-3">
                <v-toolbar-title>Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="handleSubmit">
                  <v-icon>mdi-account</v-icon><v-text-field v-model="username" id="username" name="username" label="Username" type="text"></v-text-field>
                  <v-icon>mdi-email</v-icon><v-text-field v-model="email" id="email" name="email" label="Email Address" type="email"></v-text-field>
                  <v-icon>mdi-lock</v-icon><v-text-field v-model="password"  id="password" name="password" label="Password" type="password"></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="success">Sign Up</v-btn>
                  </v-card-actions>
                  <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </ul>
                  <p> Already have an account? 
                  <router-link to="/login"> Login! </router-link>
                  </p>
                </v-form> 
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-main>
</template>

<script>
  export default {
    data() {
      return {
        username:'',
        email:'',
        password:'',
        errors: null
      }
    },
    methods: {
      handleSubmit() {
        this.$store
          .dispatch('handleSubmit', {
            username: this.username,
            email: this.email,
            password: this.password
          })
          .then( () => {
            this.$router.push({ name: 'Login'})
          })
          .catch(err => {
            this.errors = err.response.data.errors
          })
        }
      }
  }
</script>