<!--
    邀请好友页面
    @Author：bashuang
    @Date：20200525
 -->
<template>
  <div class="page-box">
    <!-- 返回按钮 -->
    <img class="close-friend" @click="closePage()" src="../assets/img/icon_fanhui.png" alt="">
    <!-- 卡片 -->
    <div class="bg-card">
      <!-- 姓名 -->
      <div class="you-name">意思</div>
      <!-- 邀请好友，分享精彩 -->
      <div class="share-intro">邀请好友，分享精彩</div>
      <!-- 二维码 -->
      <div class="share-code">
        <img class="code-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="bottom-label" v-if="managerList && managerList.length>0">
        <span class="money-name">您的理财师：{{managerName.name}}{{managerName.number}}</span>
        <span class='choose-btn' @click="switchManager()" v-if="managerList && managerList.length > 1">点击切换理财师<img class="more-img" src="../assets/img/icon_more.png" alt=""></span>
      </div>
      <div style="height: 1.35rem;" v-else></div>
    </div>
    <!-- 分享按钮 -->
    <div class="share-button">
      <div class="pyq-btn"><img src="../assets/img/icon_pyq.png" alt=""><span>分享到朋友圈</span></div>
      <div class="line"></div>
      <div class="wechat-btn"><img src="../assets/img/icon_wechat.png" alt=""><span>分享给好友</span></div>
    </div>
    <!-- 理财师选择列表，点击切换理财师时显示 -->
    <ul class="manager-wrap" v-if="isShowList">
      <li class="manager-list" v-for="(item,index) in managerList" :key="index" @click="chooseManager(item)">
        <div class="border-top" v-if="index!=0"></div>
        <span class="manager">{{item.name}}</span>
        <span class="job-number">{{item.number}}</span>
      </li>
      <li class="manager-list"></li>
      <li class="cancel" @click="cancel()">取消</li>
    </ul>
    <div class="mask" v-if="isShowList" @click="cancel()"></div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isShowList:false, //是否显示可选择的理财师列表
      managerList:[
        { name:'理财师1', number:'H909097' },
         { name:'理财师1', number:'H909097' },
          { name:'理财师1', number:'H909097' },
           { name:'理财师1', number:'H909097' },
            { name:'理财师1', number:'H909097' },
             { name:'理财师1', number:'H909097' },
              { name:'理财师1', number:'H909097' },
               { name:'理财师1', number:'H909097' },
                { name:'理财师1', number:'H909097' },
                 { name:'理财师1', number:'H909097' },
                  { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师1', number:'H909097' },
                   { name:'理财师2', number:'H909097' },
      ],
      managerName:{ name:'理财师2', number:'H909097' }, //蓝色底标签显示的理财师姓名和工号
    }
  },
  components: {},
  mounted() {
    
  },
  methods: {
    // 点击关闭页面
    closePage(){
      console.log("CLOSEPAGE")
    },
    // 点击切换理财师，弹出理财师弹框
    switchManager(){
      this.isShowList = true
    },
    // 点击选择理财师
    chooseManager(item){
      this.managerName = item //点击的理财师显示在蓝色标签上
      this.isShowList = false
    },
    //点击取消，关闭理财师选择列表
    cancel(){
      this.isShowList = false
    }
  }
};
</script>

<style lang="scss" spoced>
.page-box{
  width: 100%;
  height: 100%;
  position: fixed;
  left:0;
  top:0;
  z-index:1;
  background: url('../assets/img/friend_bg.png') no-repeat center;
  background-size: 100% 100%;
  padding-top:4.6rem;
  /* 关闭页面按钮 */
  .close-friend{
    position: fixed;
    left:0;
    top:0;
    width: 2.2rem;
    height: 2.2rem;
  }
  /* 卡片 */
  .bg-card{
    display: block;
    width: 15.5rem;
    /* height: 19.1rem; */
    background: url('../assets/img/friend_card.png') no-repeat center;
    background-size: 100% 100%;
    margin:0 auto .75rem;
    padding-top:1rem;
    .you-name{
      height: 1.55rem;
      text-align: center;
      width: 100%;
      font-size: 1.1rem;
      line-height: 1.55rem;
      font-weight: 600;
      color:rgba(39,39,39,1);
      background:linear-gradient(239deg, rgba(187,142,95,1) 0%, rgba(108,69,23,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
    .share-intro{
      width: 100%;
      font-size: .7rem;
      line-height: 1rem;
      text-align: center;
      font-weight:400;
      color:rgba(108,69,23,1);
      margin-bottom: .75rem;
    }
    .share-code{
      width: 10.75rem;
      height: 10.75rem;
      background: #ffffff;
      margin:0 auto 1.35rem;
      position: relative;
      padding-top:.25rem;
      box-sizing: border-box;
      .code-img{
        display: block;
        width: 10.25rem;
        height: 10.25rem;
        margin:0 auto;
      }
    }
    .bottom-label{
      width: 100%;
      height: 2.45rem;
      background: url('../assets/img/bottom-label.png') no-repeat center;
      background-size: 14.65rem 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      box-sizing: border-box;
      padding:.4rem 0 .4rem;
      font-size: .75rem;
      line-height: .75rem;
      .money-name{
        color:#FFF9F2;
        display: inline-block;
        height: .75rem;
        line-height: .75rem;
      }
      .choose-btn{
        margin-top:.25rem;
        display: inline-block;
        height: .66rem;;
        color: #FFF9F2;
        font-size: .6rem;
        line-height: .7rem;
      }
      .more-img{
        display: inline-block;
        width: .66rem;
        height: .66rem;
        margin-top:-0.1rem;
      }
    }
  }

  /* 分享按钮 */
  .share-button{
    width: 15.5rem;
    height: 4.5rem;
    background: url('../assets/img/fenxiang_bg.png') no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .line{
      width: .025rem;
      height: 1.35rem;
      background: #F5EDD8;
      margin-top:1.15rem;
    }
    img{
      display: block;
      width: 1.75rem;
      height: 1.75rem;
      margin:.9rem auto .25rem;
    }
    .pyq-btn{
      width: 7.7rem;
      height: 100%;
      >span{
        font-weight:400;
        font-size: .7rem;
        color:rgba(255,255,255,1);
        line-height:1rem;
        text-shadow:0px 1px 1px rgba(128,81,30,1);
      }
    }
    .wechat-btn{
      flex:1;
      >span{
        font-weight:400;
        font-size: .7rem;
        color:rgba(255,255,255,1);
        line-height:1rem;
        text-shadow:0px 1px 1px rgba(128,81,30,1);
      }
    }
  }

  /* 理财师选择列表 */    
  .manager-wrap{
    width: 100%;
    height: 19.6rem;
    background: #FFFFFF;
    position: fixed;
    left:0;
    bottom:0;
    overflow:auto;
    z-index:10;
    /* 理财师列表 */
    .manager-list{
      padding-left:.75rem;
      width: 100%;
      height: 2.45rem;
      line-height: 2.45rem;
      .border-top{
        height: 1px;
        background: #E7E9ED;
      }
      .manager{
        height:1rem;
        font-size:.8rem;
        font-weight:600;
        color:rgba(39,39,39,1);
        line-height:1rem;
        margin-right: .25rem;
      }
      .job-number{
        display: inline-block;
        padding:0 .25rem;
        font-size: .55rem;
        line-height: .75rem;
        color: #6C4517;
        background:linear-gradient(220deg,rgba(245,236,213,1) 0%,rgba(240,223,186,1) 100%)
      }
    }
    /* 取消按钮 */
    .cancel{
      width: 100%;
      position: fixed;
      left:0;
      bottom:0;
      background: #F6F6F6;
      height: 2.45rem;
      z-index:.275rem;
      color: #272727;
      font-size: .8rem;
      font-weight:400;
      line-height: 2.425rem;
      text-align: center
    }
    
  }
  /* 黑色遮罩 */
    .mask{
      width: 100%;
      height: 33.35rem;
      background:rgba(0,0,0,1);
      opacity:0.6;
      position: fixed;
      left:0;
      top:0;
      z-index:2
    }


}
</style>
