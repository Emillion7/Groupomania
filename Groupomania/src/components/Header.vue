<template>
  <v-app>
    <div>
      <v-toolbar
        dark
        prominent
        src='https://wallpaperaccess.com/full/560012.jpg'
      >
        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn> 
        
        <v-toolbar-title></v-toolbar-title>
        
        <img src="../assets/icon-left-font-monochrome-white.png" height="150" width="180" alt="logo" class="logo-1">
        
        <v-spacer></v-spacer>
  
        <v-btn icon to="/Signup">
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
  
        <v-btn icon to="/Login">
          <v-icon>mdi-login</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

      </v-toolbar>
      <v-main>
        
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>


export default {
    name: 'Header',

    components: {
        
    }
  }
</script>

<style scoped>
 
.v-btn {
    margin-right: 20px;
    margin-top: 10px
}

</style>