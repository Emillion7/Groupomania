<template>
  <v-main>
    <h1 class="subheading grey--text pl-3">Dashboard</h1>

    <v-container  class="my-5">
      
     <v-card width="250" class="pa-1">
       <v-layout wrap column>
         <v-flex xs12 sm4>
           <div class="body-1 grey--text">Username:</div>
           <div>{{ username }}</div>
         </v-flex>
         <v-flex xs12 sm4>
           <div class="body-1 grey--text">Email:</div>
           <div>{{ email }}</div>
         </v-flex>
       </v-layout>
     </v-card>

    </v-container>
  </v-main>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            username: '',
            email: ''
        }
    },
    methods: {
    }
}
</script>