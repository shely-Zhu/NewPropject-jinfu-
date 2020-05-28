<!--
    会员活动列表
    @Author：史芸瑞
    @Date：2020-5-26
 -->

<template>
  <div id="member_activities_list">
    <page-title title="会员活动" :headerSetting="headerSetting" @headerClickCallBack="headerClickCallBack">
      <mt-search
        slot="page_center"
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    </page-title>

    <div class="nav">
      <div @click="active = 'tab-container1'" :class="{'selected': active == 'tab-container1'}">
        即将上线
      </div>
      <div @click="active = 'tab-container2'" :class="{'selected': active == 'tab-container2'}">
        进行中
      </div>
      <div @click="active = 'tab-container3'" :class="{'selected': active == 'tab-container3'}">
        已结束
      </div>
    </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 10" title="tab-container 1">

          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    
  </div>
</template>
 
<script>

import pageTitle from './common/pageTitle'
import "../assets/css/memberActivitiesList.scss"

export default {
  name: 'page-tab-container',
  components: {pageTitle},
  data() {
    return {
      active: 'tab-container1',
      //头部的设置参数
      headerSetting: {
        needProcessSelf: "right"
      }
    };
  },
  methods:{
    headerClickCallBack(type){
      alert("自定义的" + type)
    }
  },
  watch: {
    active(val, oldVal){
      //监听页面的切换 val为切换至的mt-tab-container-item的id
      console.log(val + "-----" + oldVal)
    }
  }
};
</script>
 
