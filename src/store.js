import Vue from "vue";
import Vuex from "vuex";
import BrandApi from "@/api/Brand.js";
// import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brands: [],
    currentBrand: {}
  },
  mutations: {
    setBrands(state, payload) {
      state.brands = payload;
    },
    setBrand(state, payload) {
      state.currentBrand = payload;
    }
  },
  actions: {
    async getBrands({ commit }) {
      try {
        let response = await BrandApi.getBrands();
        commit("setBrands", response);
      } catch (error) {
        commit("setBrands", []);
      }
    },
    getBrand({ state, commit }, entityId) {
      var found = {};
      for (let i = 0; i < state.brands.length; i++) {
        if (state.brands[i].entity_id == entityId) {
          found = state.brands[i];
          break;
        }
      }
      console.log(state.brands);
      commit("setBrand", found);
    }
  }
});
