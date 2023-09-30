import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'


// 默认的生成vue实例
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

// 通过single-spa-vue启动项目

// appOptions名称是固定的 和singleSpaVue参数保持一致
const appOptions = {
  el: "#vue", // 挂在到父应用中节点
  router,
  render: h => h(App)
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})

// 如果是父应用
if(window.singleSpaNavigate) {
  // publickPath
  __webpack_public_path__ = 'http://localhost:10000'
} else {
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}

// 协议接入 父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// 父应用加载子应用，将子应用打包成一个lib去给父应用调用