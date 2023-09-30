import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}

if (window.__POWERED_BY_QIANKUN__) {
  // 使用在qiankun中 配置webpack的publicPath

  console.log( window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__, ' window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__');
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  // 独立运行 不依赖于qiankun
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  console.log('child-vue: mount', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
}
