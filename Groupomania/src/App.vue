<template>
      <v-main>
        <Header />
        <Footer />
      </v-main>
</template>

<script>
const API_URL = process.env.API_URL;
console.log(API_URL);

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
