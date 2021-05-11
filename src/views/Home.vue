<template>
  <div v-if="loading">Cargando...</div>
  <div v-else>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <v-hover v-slot="{ hover }">
              <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="400"
                max-height="500"
              >
                <v-img :aspect-ratio="16 / 7" :src="itemsApi[i].image">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%"
                    >
                      {{ itemsApi[i].price }} €
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-6" style="position: relative">
                  <v-btn
                    absolute
                    color="orange"
                    class="white--text"
                    fab
                    large
                    right
                    top
                    @click="
                      viewDetails(
                        itemsApi[i].price,
                        itemsApi[i].category,
                        itemsApi[i].title,
                        itemsApi[i].image
                      )"
                  >
                    <v-icon>mdi-cart</v-icon>
                  </v-btn>
                  <div class="font-weight-light grey--text title mb-2">
                    {{ itemsApi[i].category }}
                  </div>
                  <h3 class="display-1 font-weight-light orange--text mb-2">
                    {{ itemsApi[i].title }}
                  </h3>
                  <div class="font-weight-light black--text title mb-2">
                    Puede comprar el producto directamente en el botón superior.
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      itemsApi: [],
      loading: true,
      model: 0,
      colors: ["secondary", "blue-grey", "blue-grey darken-2", "brown darken-1"],
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((response) => {
        this.itemsApi = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    viewDetails(x, y, v, z) {
      this.$router.push({
        name: "viewDetails",
        params: {
          primaryDetail: x,
          secondDetail: y,
          thirdDetail: v,
          img: z,
        },
      });
    },
  },
};
</script>
