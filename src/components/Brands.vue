<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in brands" :key="idx">
        <v-card @click="showDetails(item.entity_id)" shaped hover>
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-text>
            <div class="subheading">
              Registrations: {{ item.state_registrations.length }}
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Brands",
  methods: {
    showDetails(brandId) {
      this.$router.push({ path: `/brands/${brandId}` });
    }
  },
  computed: {
    brands() {
      return this.$store.state.brands;
    }
  }
};
</script>

<style scoped></style>
