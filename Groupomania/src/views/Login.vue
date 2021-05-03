<template>
  <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="indigo darken-3">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-icon>mdi-email</v-icon><v-text-field id="email" name="email" label="Email Address" type="email"></v-text-field>
                  <v-icon>mdi-lock</v-icon><v-text-field id="password" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="indigo darken-3" to="/signup">signup</v-btn>
                <v-btn color="success">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-main>
</template>