import Vue from "vue";
import VueRouter from "vue-router";
// import { getCode } from "@/api/order";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/index.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  // getCode({
  //   grant_type: "refresh_token",
  //   client_id: "fO4iq61pPVuhbPSKmAgNF3mt",
  //   client_secret: "RBDjX9yl4MouiDazfMJza9LZ",
  //   refresh_token: localStorage.getItem("refreshToken")
  // }).then(res => {
  //   if (res) {
  //     localStorage.removeItem("accessToken");
  //     localStorage.setItem("accessToken", res.access_token);
  //
  //   }
  // });
  next();
});

export default router;
