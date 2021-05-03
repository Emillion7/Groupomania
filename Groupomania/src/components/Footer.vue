<template>
  <v-app>
    <v-footer
      dark
      padless
      fixed
    >
      <v-card
        flat
        tile
        class="indigo darken-2 white--text text-center"
      >
        <v-card-text>
          <v-btn class="indigo darken-3 mx-4">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="indigo darken-3 mx-4">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn class="indigo darken-3 mx-4">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn class="indigo darken-3 mx-4">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
         Our company, a multinational retail corporation, is expanding by the day. We've grown by 100% over the last three years, and we now employ over 600 people. We love our employees, and our goal is to make them feel appreciated and cared for. This is why we created this social site, so everyone can feel they belong to Groupomania.
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Footer',
}

</script>

<style scoped>



</style>