<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./style/index.scss";
// import { getCode } from "@/api/order";
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: "SourceHanSansCN-Medium", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
