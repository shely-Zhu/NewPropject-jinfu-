<!--
    邀请好友页面
    @Author：bashuang
    @Date：20200525
 -->
<template>
  <div class="manager-box">
    <!-- 卡片 -->
    <div class="card-box">
      <div class="card-wrap">
        <div class="head-img-wrap">
          <img class="head-img" v-if="false" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg" alt="">
          <span class="head-img nomorl" v-else>白</span>
        </div>
      </div>
    </div>
    <!-- 标签列表 -->
    <div class="switch-tab">

    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
     
    }
  },
  components: {},
  mounted() {
    
  },
  methods: {
   
  }
};
</script>

<style lang="scss" spoced>
.manager-box{
  width: 100%;
  height: 100%;
  background-color: #F3F5F7;
  .card-box{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .card-wrap{
    width:17.25rem;
    height: 9.775rem;
    margin:.75rem auto ;
    background: url('../assets/img/Me_card-bg.png') no-repeat center;
    background-size: 100% 100%;
    position: relative;
    .head-img-wrap{
      display: inline-block;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: .1rem;
      position: absolute;
      left:.8rem;
      top: 1.2rem;
      background: #FFFFFF;
      text-align: center;
      line-height: 3.625rem;
      font-size:2.15rem;
      font-weight:600;
    }
    .head-img{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .nomorl{
      color:rgba(0,0,0,1);
      opacity: 0.6;
    }
  }


}
</style>
