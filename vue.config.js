"use strict";
const path = require("path");
const pkg = require("./package.json");
require("babel-polyfill");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = pkg.name || "ucan-vue"; // page title
module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      },
      [process.env.VUE_APP_ORDER_BASE_API]: {
        target: process.env.VUE_APP_ORDER_API_DOMAIN,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_ORDER_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    externals: {
      AMap: "AMap", // 高德地图配置
      AMapUI: "AMapUI"
    }
  },
  css: {
    sourceMap: true
  },
  transpileDependencies: [
    'v-charts',
  ]
};
