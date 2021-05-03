<template>
      <v-main>
        <Header />
        <Footer />
        <router-view />
      </v-main>
</template>

<script>
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
