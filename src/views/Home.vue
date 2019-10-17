<template>
  <v-container>
    <v-layout text-center wrap>
      <brands></brands>
    </v-layout>
  </v-container>
</template>

<script>
import Brands from "@/components/Brands";

export default {
  name: "Home",
  components: {
    Brands
  },
  created() {
    this.$store.dispatch("getBrands");
  }
};
</script>
