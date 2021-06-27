<template>
  <v-main>
    <h1 class="subheading grey--text pl-3">Dashboard</h1>

    <v-container class="my-5">
      
     <v-card flat width="250" class="pa-1">
       <v-layout wrap column>
         <v-flex xs12 sm4 class="ma-3">
           <div class="body-1 grey--text">Username:</div>
           <div class="secondary--text">{{ $store.state.user.username }}</div>
         </v-flex>
         <v-flex xs12 sm4 class="ma-3">
           <div class="body-1 grey--text">Email:</div>
           <div class="secondary--text">{{ $store.state.user.email }}</div>
         </v-flex>
         <v-btn block dark class="submit mt-7" color="primary" @click="deleteAccount()">
          Delete Account?
          </v-btn>
          
       </v-layout>
     </v-card>

    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Dashboard',
    data() {
        return {
           user: {} 
        }
    },
    methods: {
      deleteAccount () {
            this.confirmation = confirm('Are you sure?')
            if (this.confirmation === true) {
            try {
                  axios.delete(
                    "http://localhost:5000/api/v1/users/" + JSON.parse(localStorage.getItem('user')).data.userId,
                    {
                    Headers: {
                     Authorization: 'Bearer '+localStorage.getItem("token") 
                    },
                  }
                ).then (() => {
                    alert('User deleted!')
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                    this.$router.push('/')
                    this.$router.go()
                })
            } catch (err) {
                console.error(err.message)
            }
            } else {
                this.msg = 'Account not deleted'
            }
        },
    }
}
</script>