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
                <v-form>
                  <v-icon>mdi-account</v-icon><v-text-field  name="name" label="Name" type="text"></v-text-field>
                  <v-icon>mdi-email</v-icon><v-text-field id="email" name="email" label="Email Address" type="email"></v-text-field>
                  <v-icon>mdi-lock</v-icon><v-text-field id="password" name="password" label="Password" type="password"></v-text-field>
              <v-card-actions @submit.prevent="signup">
                <v-spacer></v-spacer>
                <v-btn dark color="indigo darken-3" to="/login">Login</v-btn>
                <v-btn type="submit" color="success">Sign Up</v-btn>
              </v-card-actions>
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
        name:'',
        email:'',
        password:''
      }
    },
    methods: {
      signup () {
        this.$store
          .dispatch('signup', {
            name: this.name,
            email: this.email,
            password: this.password
          })
        }
      }
  }
</script>