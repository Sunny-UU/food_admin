import axios from 'axios'
// import aes from '../utils/aesTool'
// import ElementUI, { Message } from "element-ui";
import store from "../store";
import router from "../router";

// 全局配置:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['token'] = '';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

let config = {
    baseURL: '/api'
    // timeout: 10000 // Timeout 超时 10秒
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        // 请求前 转换为json数据
        debugger;
        if (!(config.data instanceof FormData)) {
            config.data = JSON.stringify(config.data);
            // config.data = aes.decrypt(JSON.stringify(config.data));
        }
        //判断token是否存在
        if (store.getters.node) {
            config.headers.token = store.getters.node;  //将token设置成请求头
        }
        return config;
    },
    function(error) {
        console.log(error);
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    function(response) {
        debugger;
        // if(response.config.url !== "/demand/readexcels"){
        //     let token = response.headers.token ? response.headers.token : '0-';  //token: "1-bac4419d-81a1-4c54-866b-a6e830529531"
        //     let flag = token.substring(0,2);
        //     if(flag === '0-'){
        //         // Message.error("token校验失败,请重新登录！");
        //         store.dispatch("resetToken")
        //         router.replace("/")
        //         return Promise.reject("token校验失败,请重新登录！")
        //     }else{
        //         let tokenNumber = token.substring(2);
        //         store.dispatch("setNode",tokenNumber);
        //     }
        // }
        // if (!(response.config.data instanceof FormData)) {
        //     // response.data = aes.encrypt(response.data);
        // }
        return response;
    },
    function(error) {
        console.log(error);
        return Promise.reject(error);
    }
);

export default _axios;
