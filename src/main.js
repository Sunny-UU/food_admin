import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { router,reRoutes} from './router'
import VueRouter from 'vue-router'
import echarts from "echarts";
import './axios/axios.js'
import JsonExcel from 'vue-json-excel'

import '@/styles/index.scss' // global cssz

Vue.prototype.$echarts = echarts ;
Vue.use(VueRouter)
Vue.use(ElementUI);
//解析 将excel下载到本地
Vue.component('downloadExcel', JsonExcel)

Vue.config.productionTip = false;

router.beforeEach( ( to ,from ,next)=>{
    debugger
    console.log("ddd",router.matched);
    if(store.getters.login){
        next()
    }else {
        store.commit("SET_LOGIN",reRoutes)
        debugger
        router.addRoutes(reRoutes)
        console.log("mmmm",router);
        next({ ...to, replace: true });
    }
})

router.onReady(()=>{
    debugger
    sessionStorage.clear()
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
