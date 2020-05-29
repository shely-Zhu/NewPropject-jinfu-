
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import './assets/css/common/iconfont/iconfont.js'

import promise from 'es6-promise';

// 全局过滤器
import * as filters from './mixins/filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

promise.polyfill();

import 'babel-polyfill'

import qs from 'qs';
Vue.use(qs)

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(vueSwiper)

import commonJS from './utils/common.js'
Vue.prototype.$commonJS = commonJS

import { MessageBox } from 'mint-ui';

import { Indicator } from 'mint-ui';

import axiosHttp from './utils/ajax/axiosHttp.js'
Vue.prototype.$axiosHttp = axiosHttp

//引入底部tab
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem)

//tab内容区域
import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

//引入下拉刷新和上拉加载
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import '../static/fonts/font-awesome/css/font-awesome.min.css'
import './assets/css/common/base.scss';
import './assets/css/common/layout.scss';
import httpConfig from './utils/httpConfig.js';

// 引入连接截取
import splitUrl from './utils/splitUrl.js';

// 引入埋点文件
import hrMd from './mixins/md/hrMd';

// 引入base64
let Base64 = require('js-base64').Base64;
Vue.prototype.$httpConfig = httpConfig;
Vue.prototype.$splitUrl = splitUrl;

//添加一个全局变量，判断当前是否为ios手机
window.appIsIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App , hrMd }
})
