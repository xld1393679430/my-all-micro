import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:30000',
    container: '#vue',
    activeRule: '/vue',
    props: {
      message: 'hello world'
    }
  },
  {
    name: 'reactApp',
    entry: '//localhost:40000',
    container: '#react',
    activeRule: '/react'
  }
]

registerMicroApps(apps)
start()

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
