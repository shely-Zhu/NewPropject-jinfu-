<!--
    会员活动列表
    @Author：史芸瑞
    @Date：2020-5-26
 -->


<template>
  <div>
    <div class="nav">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">
        tab 1
        <!-- 选中样式 -->
        <img src="../assets/img/txt_icon.png" v-show="this.active == 'tab-container1'">
      </mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">
        tab 2
        <!-- 选中样式 -->
        <img src="../assets/img/txt_icon.png" v-show="this.active == 'tab-container2'">
      </mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">
        tab 3
        <!-- 选中样式 -->
        <img src="../assets/img/txt_icon.png" v-show="this.active == 'tab-container3'">
      </mt-button>
    </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<!-- cell组件 -->
          <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
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
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  },
  watch: {
    active(val, oldVal){
      //监听页面的切换 val为切换至的mt-tab-container-item的id
      console.log(val + "-----" + oldVal)
    }
  }
};
</script>
 
