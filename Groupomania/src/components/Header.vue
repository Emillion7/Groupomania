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
      
        <v-btn icon to="/">
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

      <v-navigation-drawer v-model="drawer" app class="secondary">
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-action>
              <v-icon class="white--text pl-4 pr-2 py-3">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { authComputed } from '../vuex/helpers'
export default {
    name: 'Header',

    data() {
      return {
        drawer: false,
        links: [
          { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard' },
          { icon: 'mdi-post', text: 'My Posts', route: '/posts' },
          { icon: 'mdi-account-details', text: 'Team', route: '/team' }
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