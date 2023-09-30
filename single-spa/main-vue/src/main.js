import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerApplication, start } from "single-spa";

Vue.config.productionTip = false;

async function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script)
  });
}

registerApplication(
  "myVueApp",
  async () => {
    console.log("加载child-vue应用");
    await loadScript("http://localhost:10000/js/chunk-vendors.js");
    await loadScript("http://localhost:10000/js/app.js");
    await loadScript("http://localhost:10000/js/about.js");
    console.log(window.singleVue)
    return window.singleVue;
  },
  // 用户切换到 /vue 的路径下，就会调用上面的applicationOrLoadingFn方法
  loaction => location.pathname.startsWith("/vue")
);

start()

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
