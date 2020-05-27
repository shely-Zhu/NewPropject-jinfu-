<!--
    我的-设置-关于首页
    @Author：巴双
    @Date：20200527
 -->
<template>
  <div class="about-box">
    <div class="logo-wrap">
      <img class="logo" src="../../assets/img/mine_icon_logo_about.png" alt="">
      <div class="edition-now">当前版本 1.0</div>
    </div>
    <ul class="about-list-wrap">
      <li class="about-list" v-for="(item,index) in aboutList" :key="index" @click="toDetail(item.path)">
        <span>{{item.name}}</span>
        <div class="more-img-wrap"><img class="more-img" src="../../assets/img/mine_about_more.png" alt=""></div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      aboutList:[
        {name:'检查版本',path:null},
        {name:'隐私政策',path:'/aboutSecret'},
        {name:'服务协议',path:'/aboutServiceAgreement'}]
    }
  },
  components: {},
  mounted() {
   
  },
  methods: {
    //点击跳转关于**的详情页
    toDetail(path){
      let params = {backUrl:'/aboutHome'}
      this.$router.push({path:path,query:params})
      console.log(path)
    }
  }
};
</script>

<style lang="scss" spoced>
.about-box{
  width: 100%;
  height: 100%;
  background-color: #F7FAFD;
  overflow: auto;
  .logo-wrap{
    width: 100%;
    position: relative;
    height: 7.75rem;
    background: #FFFFFF;
    .logo{
      display: block;
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      left:50%;
      transform: translateX(-50%);
      top:2rem;
    }
    .edition-now{
      position: absolute;
      width: 100%;
      text-align: center;
      height:1rem;
      font-size:.7rem;
      font-weight:400;
      color:rgba(155,155,155,1);
      line-height:1rem;
      color: #9B9B9B;
      top:4.75rem;
    }
  }
  
  /* 关于的三个选项列表 */
  .about-list-wrap{
    width: 100%;
    height: auto;
    padding-left:.75rem;
    background: #FFFFFF;
    .about-list{
      border-top:.025rem solid #E7E9ED;
      display: flex;
      justify-content: space-between;
      height: 2.5rem;
      align-items: center;
      span{
        color: #272727;
        font-size:.8rem;
        font-weight:400;
        line-height:1.125rem;
      }
      .more-img-wrap{
        height: 2.45rem;
        width: 2.25rem;
        line-height: 2.45rem;
        text-align: center;
        .more-img{
          display: inline-block;
          width: .75rem;
          height: .75rem;
        }
      }
    }
  }


}
</style>
