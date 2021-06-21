<template>
  <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo darken-3">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="handleLogin">
                  <v-icon>mdi-account</v-icon>
                  <v-text-field v-model="username" id="username" name="username" label="Username" type="text"></v-text-field>
                  <v-icon>mdi-lock</v-icon>
                  <v-text-field v-model="password" id="password" name="password" label="Password" type="password"></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="success">Login</v-btn>
                  </v-card-actions>
                  <p v-if="error" class="red--text" role="alert">
                    {{ error }}
                  </p>
                  <p> Don't have an account? 
                  <router-link to="/signup"> Register! </router-link>
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
      password:'',
      error: null
    }
  },
  methods: {
    handleLogin() {
      this.$store
      .dispatch('handleLogin', {
        username: this.username,
        password: this.password
      })
      .then ( () => {
        this.$router.push({ name: 'Dashboard'})
      })
      .catch( () => {
        this.error = 'Invalid username or password!'
      })
    }
  }
}
</script>