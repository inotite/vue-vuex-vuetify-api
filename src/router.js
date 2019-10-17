import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import BrandDetail from "./views/BrandDetail.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/brands"
    },
    {
      path: "/brands",
      name: "home",
      component: Home
    },
    {
      path: "/brands/:id",
      name: "brands",
      component: BrandDetail
    }
  ]
});
