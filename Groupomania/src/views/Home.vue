<template>
 <div class="home">
   <h1>Welcome to Groupomania!</h1>
   <div>
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
 </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding-top: 7em;
  font-size: 30px;
}
</style>