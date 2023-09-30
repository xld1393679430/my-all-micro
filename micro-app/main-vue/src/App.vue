<template>
  <div id="root" class="main-container">
        <div class="main-container-menu">
            
        </div>
    <div id="root-view" class="app-view-box" v- html="content"></div>
  </div>
</template>

<script>
// import { registerMicroApps, start } from "qiankun";

// registerMicroApps([
  // {
  //   name: "app-react", //微应用的名称
  //   entry: "//localhost:8082", //微应用的域名（启动路径）
  //   container: "#app-react", //用来承载微应用页面的容器id，该容器配置在主应用的页面中 如：<div id="vueContainer"></div>
  //   activeRule: "/app-react", //要激活的微应用的路由
  // },
  // {
  //   name: "app-vue2",
  //   entry: "//localhost:8083",
  //   container: "#app-vue2",
  //   activeRule: "/app-vue2",
  // },
// ]);

// start(); //启动qiankun

export default {
  name: "App",
  props: {
        loading: Boolean,
        content: String
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
