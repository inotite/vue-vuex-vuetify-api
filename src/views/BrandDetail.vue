<template>
  <v-container>
    <v-layout wrap row>
      <v-flex xs12 sm6 md6 lg4 offset-lg-4 offset-md-3 offset-sm-3>
        <v-card class="mx-auto" elevation="10">
          <v-card-title>
            {{ brand.name }}
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="(reg, i) in brand.state_registrations" :key="i">
                {{ reg.state }}, {{ reg.registrationNumber }}
              </li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="goBack()">
              Go Back
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "BrandDetail",
  computed: {
    brand() {
      return this.$store.state.currentBrand;
    }
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/brands" });
    }
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getBrand", this.$route.params.id);
  }
};
</script>
