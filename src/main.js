import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VCharts from "v-charts";
import qs from "qs";
import "babel-polyfill"
import scroll from 'vue-seamless-scroll'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(scroll)
// 进入Vue App之前，检查URL的查询字符串是否有accessToken和refreshToken，如果有则写入localStorage
var queryStr = location.search.slice(1);
var query = qs.parse(queryStr);

var accessToken = query.accessToken;
var dataType = query.dataType;
if (accessToken && dataType) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("dataType", dataType);
  // location.href = location.origin + "/home";
}

if (!accessToken && !localStorage.getItem("accessToken", accessToken)) {
  accessToken = localStorage.getItem("accessToken");
  var loginQuery = {
    redirectType: "screen",
    redirect: location.origin + location.pathname // 大屏自身URL
  };
  var loginQueryStr = qs.stringify(loginQuery);
  var loginOrigin = process.env.VUE_APP_local_yly; // 养老云URL
  location.href = `${loginOrigin}?${loginQueryStr}`;
}

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
