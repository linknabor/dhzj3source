// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*自己添加的开始  引入mint-ui 和 axios*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'

import Qs from 'qs';
import axios from 'axios';
import VueAxios from 'vue-axios';

import './assets/css/base.css';
import './assets/js/rem.js';
import './assets/css/normalize.css';

import cookie from 'js-cookie';
import wx from 'weixin-js-sdk';


import receiveData from './api/receiveData';
Vue.prototype.receiveData = receiveData;

// import common from './api/common'
// import config from './api/config'

Vue.prototype.common = common;
Vue.prototype.config =config ;

Vue.use(MintUI)
//创建axios 实例

var axiosInstance = axios.create({
    transformRequest: [function (data) {
        //data = Qs.stringify(data);
        data = JSON.stringify(data);
        return data;
    }],
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type':'application/json;charset=utf-8',
        'Content-Type':"application/json",

        //'Accept': '*/*',
        'Accept': 'application/json',

    },
    // baseURL: 'https://www.e-shequ.com/dhzj3/wechat/hexie/wechat/',
    baseURL:Vue.prototype.config.URL,
    withCredentials:true,
    transformResponse: [function (data) {//数据转换
      return data;
    }],
});
//创建axios拦截器 给请求头加cookie

axiosInstance.interceptors.request.use(
    config => {
        if( !cookie.get('session')){//没有seesion 判断  暂时跳过直接在首页就存seesion
          
        }else{//在请求头加 session
          config.headers.Cookie =`${ cookie.get('Cookie') }`
        }

         return config
    },
    err => {
        return Promise.reject(err)
    }
)

Vue.use(VueAxios, axiosInstance);


//生产环境提示
Vue.config.productionTip = false;
// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
