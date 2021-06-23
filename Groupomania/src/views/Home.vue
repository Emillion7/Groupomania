<template>
 <div class="home">
   <div v-if="!loggedIn">
   <h1 class="secondary--text">Welcome to Groupomania!</h1>
     <p>
       To use our app you'll need to
       <router-link to="/login">
         Login
       </router-link> or 
       <router-link to="/signup">
         Signup
       </router-link>
     </p>
   </div>
   <div v-else>
     <h1 class="primary--text">Welcome to Groupomania!</h1>
   </div>
 </div>
</template>

<script>
import { authComputed } from '../vuex/helpers'
export default {
    name: 'Home',
    computed: {
      ...authComputed
    }
  }
</script>

<style scoped>
.home {
  text-align: center;
  padding-top: 7em;
  font-size: 30px;
}
</style>