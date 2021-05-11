<template>
  <v-app>
    <v-app-bar color="primary" dark max-height="80px">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://patterson.agency/_nuxt/img/patterson-agency.c72478e.png" 
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title
          >Prueba Carlos Mundo - Patterson Agency</v-toolbar-title
        >
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="$router.push({ name: 'Home' })" target="_blank" text>
        <span class="mr-2">Tienda</span>
      </v-btn>

    </v-app-bar>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "Header",
};
</script>