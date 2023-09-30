import {
    registerMicroApps,
    runAfterFirstMounted,
    setDefaultMountApp,
    start
} from "qiankun";
import Vue from 'vue'
import router from './router'
import App from "./App.vue";

let app

function render({ appContent, loading }) {
    if (!app) {
        app = new Vue({
            el: "#container",
            router,
            data() {
                return {
                    content: appContent,
                    loading
                };
            },
            render(h) {
                return h(App, {
                    props: {
                    content: this.content,
                    loading: this.loading
                    }
                });
            }
        });
    } else {
        app.content = appContent;
        app.loading = loading;
    }
}

// function genActiveRule(routerPrefix) {
//     return location => location.pathname.startsWith(routerPrefix);
// }

render({loading: true});

// 注册子应用
registerMicroApps([
    {
        name: "app-react", //微应用的名称
        entry: "//localhost:8082", //微应用的域名（启动路径）
        container: "#app-react", //用来承载微应用页面的容器id，该容器配置在主应用的页面中 如：<div id="vueContainer"></div>
        activeRule: "/app-react", //要激活的微应用的路由
      },
      {
        name: "app-vue2",
        entry: "//localhost:8083",
        container: "#app-vue2",
        activeRule: "/app-vue2",
      },
])
 
 // 设置默认子应用
setDefaultMountApp("/app-vue2");
// 第一个子应用加载完毕回调
runAfterFirstMounted();
// 启动微服务
start();

// 注意, 主应用的el绑定dom为#container，因此你也需要修改一下index.hrml模板中的id