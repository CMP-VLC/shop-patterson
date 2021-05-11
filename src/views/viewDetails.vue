<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col :key="1">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" width="250" :src="img"></v-img>

          <v-card-title>{{ titleDetail }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">
              {{ categoryDetail }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="400">
          <v-card-subtitle class="pb-0"> 1 artículo </v-card-subtitle>
          <v-divider class="mx-4"></v-divider>

          <v-card-text class="text--primary" v-if="dtoResult">
            <div>Precio en euros:</div>

            <div>{{ priceDetail }} €</div>
          </v-card-text>
          <v-card-text class="text--primary" v-else>
            <div>Precio en euros (con descuento):</div>

            <div>{{ priceDto }} €</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-text-field
            v-model="dtoCode"
            placeholder=" Inserta tu codigo de descuento"
          ></v-text-field>

          <v-card-actions>
            <v-btn color="orange" text disabled> Pagar </v-btn>

            <v-btn color="orange" text @click="dtoFunction()">
              Aplicar descuento
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "viewDetails",
  data() {
    return {
      dtoCode: "",
      priceDto: 0,
      dtoResult: true,
      priceDetail: this.$route.params.primaryDetail,
      categoryDetail: this.$route.params.secondDetail,
      titleDetail: this.$route.params.thirdDetail,
      img: this.$route.params.img,
    };
  },
  methods: {
    dtoFunction() {
      if (this.dtoCode === "DTO10") {
        this.priceDto = this.priceDetail - 10;
        this.dtoResult = false;
      } else if (this.dtoCode === "DTO50") {
        this.priceDto = this.priceDetail - 50;
        this.dtoResult = false;
      }
      this.dtoCode = "";
    },
  },
};
</script>