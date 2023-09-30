import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

export async function bootstrap(props){
	console.log('微应用初始化时仅调用一次', props)
}

export async function mount(props){
	console.log("创建vue实例并渲染", props)
}

export async function unmount(props){
	console.log("卸载当前vue实例", props)
}

if(window.__POWERED_BY_QIANKUN__){
	window.__webpach_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
if(!window.__POWERED_BY_QIANKUN__){
	console.log("创建vue实例并渲染")
}

const app = createApp(App)
app.use(router)
app.mount('#app')
