<template>

  <div class="pageAll">

    <div class="pageContent">

      <keep-alive include="pageView">
        <router-view   v-if="$route.meta.keepAlive"  v-on:viewLoading="changeLoading" :title="title"></router-view>
      </keep-alive>

    </div>

    <!-- loading -->
    <mt-spinner class="globalLoading" v-if="showLoading==true" type="snake" color="#ff6d04"></mt-spinner>

  </div>
</template>

<script>

import "./assets/css/hrm/common.scss";

import "./assets/css/hrm/app.scss";

// 页面标题
import pageTitle from "./components/common/pageTitle"


export default {
  name: 'app',
  data: function (){
    return {
      showLoading:false, //loading
      title: '',
    }
  },

  components: {
      pageTitle: pageTitle,
  },

  watch: {
    '$route': function(to, from) {

      this.title = to.meta.title ? to.meta.title : '任务管理';

      //离开页面的埋点
      //路由的首字母转大写
      var fromPath = (from.name && from.path.length != 1) ? from.path.replace( from.path[1], from.path[1].toUpperCase()) : from.path;
      window._submitMd(2, fromPath );

      //进入页面的埋点
      //路由的首字母转大写
      var toPath = (to.name && to.path.length != 1) ? to.path.replace( to.path[1], to.path[1].toUpperCase()) : to.path;
      window._submitMd(1, toPath);
    }
  },
  methods:
  {
      //loading改变
      changeLoading:function(msg) {
        this.showLoading = msg;
      }
  }
};
</script>
