<template>
  <v-app>
    <div>
      <v-toolbar
        dark
        prominent
        src='https://wallpaperaccess.com/full/560012.jpg'
      >

        <div>
          <v-btn icon v-if="loggedIn" @click="drawer = !drawer">
            <v-icon>mdi-reorder-horizontal</v-icon>
          </v-btn>
        </div>
      
        <v-btn icon v-if="!loggedIn" to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn> 
        
        <v-toolbar-title></v-toolbar-title>
        
        <img src="../assets/icon-left-font-monochrome-white.png" height="150" width="180" alt="logo" class="logo-1">
        
        <v-spacer></v-spacer>

      <div v-if="!loggedIn">  
        <v-btn icon to="/Signup">
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
  
        <v-btn icon to="/Login">
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>

      <div v-else class="logoutButton" @click="logout">
        <v-btn icon to="/Home">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
  
    </v-toolbar>

    <v-navigation-drawer 
      dark
      v-if="loggedIn"
      v-model="drawer"
      app
      src='https://wallpaperaccess.com/full/560012.jpg'
      :width="180">
        <v-list class="pt-10">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { authComputed }  from '../vuex/helpers'
export default {
    name: 'Header',

    data() {
      return {
        drawer: false,
        links: [
          { icon: 'mdi-home', text: 'Home', route: '/' },
          { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/Dashboard' },
          { icon: 'mdi-post', text: 'Feed', route: '/Feed' },
          { icon: 'mdi-pencil-plus', text: 'Add Post', route: '/AddPost' }
        ]
      }
    },
    
    computed: {
      ...authComputed
    },
    
    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style scoped>
 
.v-btn {
    margin-right: 20px;
    margin-top: 10px
}
</style>