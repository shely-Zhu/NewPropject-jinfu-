<!--
    理财-理财师详情页面
    @Author：bashuang
    @Date：20200526
 -->
<template>
  <div class="manager-box">
    <!-- 标题 -->
    <page-title id="pageTitle" title="管理人详情"></page-title>
    <div id="pageTitle"></div>
    <!-- 卡片 -->
    <div class="card-box">
      <div class="card-wrap">
        <!-- 头像 -->
        <div class="head-img-wrap">
          <img class="head-img" v-if="false" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg" alt="">
          <span class="head-img nomorl" v-else>白</span>
        </div>
        <!-- 右侧个人信息 -->
        <div class="right-name">白鹭资管</div>
        <div class="introduce">有近十年金融</div>
        <!-- 虚线间隔线 -->
        <img class="dashed-line" src="../../assets/img/dashed_line.png" alt="">
        <!-- 下---名片信息 -->
        <ul class="card-message">
          <li class="message message1">备案：111</li>
          <li class="message message2">成立日期：222</li>
          <li class="message message3">管理规模：333</li>
          <li class="message message4">核心策略：444</li>
        </ul>
      </div>
    </div>
    <!-- 标签列表tab -->
    <div class="switch-tab-wrap">
      <!-- 用于滚动，没有实际意义 -->
      <div ref="touchstone" id="touchstone"></div>
      <!-- 顶部标题 -->
      <div :class="[isSticky ? 'switch-tab-sticky stickyTab' : 'switch-tab-sticky']">
        <mt-tabbar v-model="active" :class="isFixed ? 'switch-tab fixed-Tab' : 'switch-tab'">
          <mt-tab-item id="manager-tab1" @click.native="changeActive('manager-tab1')">投资策略</mt-tab-item>
          <mt-tab-item id="manager-tab2" @click.native="changeActive('manager-tab2')">研究报告</mt-tab-item>
        </mt-tabbar>
      </div>
      <!-- 分类内容 mint-ui  loadmore -->
        <mt-tab-container v-model="active">
          <!-- 投资策略 -->
          <mt-tab-container-item id="manager-tab1" class="containt-left">
            内容
          </mt-tab-container-item>
          <!-- 研究报告 -->
          
          <mt-tab-container-item id="manager-tab2" class="containt-right">
              <mt-loadmore id='refresh' :top-method="loadTop" ref="loadmore1">
                  <div 
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="isloadMore"
                    infinite-scroll-immediate-check="true"
                    infinite-scroll-distance="20">
                      <div class="report-list" v-for="(item,index) in reportList" :key="index">
                        <div class="report-img"><img :src="item.img" alt=""></div>
                        <div class="report-tit">{{item.title}}</div>
                        <div class="report-time">{{item.time}}</div>
                      </div>
                  </div>   
              </mt-loadmore>
              <!--显示加载中状态-->
              <load-more v-if="loadMoreing"></load-more>
              <!-- <div class="loadingBox" v-if="loadMoreing">
                  <mt-spinner type="snake" color="#FF8637"></mt-spinner>
              </div> -->
          </mt-tab-container-item>
        </mt-tab-container>
    </div>
  </div>
</template>
<script>
import pageTitle from '../../components/common/pageTitle'
import loadMore from '../../components/common/loadMore'
export default {
  data() {
    return {
      active:'manager-tab1',
      reportList:[
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},
        {img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'},{img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3689483593,2509482904&fm=26&gp=0.jpg',title:'标题',time:'2020-09-09'}
      ],
      isFixed:false,//是否固定tab的类名
      isSticky:false, //是否粘性定位的class
      isloadMore:false, //是否可以上拉加载
      loadMoreing:true, //上拉加载显示的加载圈
      a:[]
    };
  },
  components: {pageTitle,loadMore},
  mounted() {
    // this.$refs.loadmore.onTopLoaded();
    //判断苹果和安卓
    if( window.appIsIOS ){
      this.isSticky = true;
    }
    window.addEventListener('scroll', this.handleScroll, true);
  },
  // 销毁滚动实例
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    // 点击标签
    changeActive(active){
      this.isFixed = false;
      this.isSticky = false;
    },
    // 下拉刷新
    loadTop() {
        console.log('下拉刷新')
    },
    // 上拉加载
    loadMore() {
      console.log("上拉加载")
        this.isloadMore = true
    },
    // 滚动监听事件
    handleScroll(){
      let height = document.getElementById('pageTitle').clientHeight;
      if (this.$refs.touchstone.getBoundingClientRect().top <= height ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      //判断苹果和安卓
      if( !window.appIsIOS ){
        //安卓手机，可以使用这种办法
        let height = document.getElementById('pageTitle').clientHeight;
        if (this.$refs.touchstone.getBoundingClientRect().top <= height ) {
            this.isFixed = true;
        } else {
            this.isFixed = false;
        }
      }
    },
  }
};
</script>

<style lang="scss" spoced>
.manager-box{
  width: 100%;
  height: 100%;
  background-color: #F3F5F7;
  overflow: auto;
  .pTitle{
    position: fixed;
    left:0;
    top:0;
    height: 2.2rem;
    z-index: 999;
    width: 100%;
  }
  .card-box{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .card-wrap{
    width:17.25rem;
    height: 9.775rem;
    margin:.75rem auto ;
    background: url('../../assets/img/Me_card-bg.png') no-repeat center;
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
      .head-img{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .nomorl{
        color:#ededed;
      }
    }
    /* 右边姓名和简介介绍 */
    .right-name{
      position: absolute;
      top:1.7rem;
      left:5.35rem;
      height: 1rem;
      font-size:.7rem;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:1rem;
      background:linear-gradient(161deg, rgba(251,226,189,1) 0%, rgba(226,181,128,1) 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
    .introduce{
      width: 10.9rem;
      height: 1.875rem;
      position: absolute;
      top:2.95rem;
      left:5.3rem;
      font-size:.6rem;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:.9rem;
      opacity: 0.68;
      overflow: hidden;
    }
    /* 虚线 */
    .dashed-line{
      position: absolute;
      top:5.75rem;
      left:.825rem;
      width: 15.75rem;
      height: .025rem;

    }
    /* 下部分名片信息 */
    .card-message{
      width: 100%;
      position: absolute;
      top:6.575rem;
      left:0;
      padding:0 .675rem 0 .825rem;
      display: flex;
      flex-wrap:wrap;
      .message{
        height:1.375rem;
        font-size:.6rem;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.825rem;
        opacity: 0.7;
        width: 8.5rem;
      }
      .message2,.message4{
        width: 7.15rem;
      }
    }
  }
  /* tab标签 */
  .switch-tab-wrap{
    width: 100%; 
    height: auto;
    position: relative;
    .switch-tab-sticky{
      width: 100%;
      height: 2rem;
      position: relative;
      .switch-tab{
      position: absolute;
      left:0;
      top:0;
      height: 2rem;
      font-size:.7rem;
      font-weight:600;
      z-index:11;
      background: #FFFFFF;
      .mint-tab-item-label{
        height: 1rem;
        line-height: 1rem;
      }
      /* 未点击标签 */
      .mint-tab-item{
        padding-top:.45rem;
        color: #9B9B9B;
        font-weight: 400;
      }
      /* 点击标签 */
      .mint-tab-item.is-selected{
        color: #272727;
        padding-top:.45rem;
        background: url('../../assets/img/erji.png') no-repeat center bottom 0.1px;
        background-size: 1.25rem .15rem
      }
    }
    .fixed-Tab{
      width: 100%;
      position: fixed;
      left:0;
      top:2.2rem;
      z-index:12;
    }
  }
    /* 粘性定位class */
    .stickyTab{
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 2;
    }
    /* 标签对应的内容 */
    /* ---左--- */
    .containt-left{
      background: #FFFFFF;
      padding:.95rem 1.475rem .925rem 1.5rem;
      color:#676767;
      font-weight:400;
      line-height:1.25rem;
      font-size: .7rem;
      word-break:break-all;
      word-wrap:break-word;
      overflow: auto;
    }
    /* ---右--- */
    .containt-right{
      padding:.425rem 1.55rem 0 .725rem;
      background: #FFFFFF;
      .report-list{
        padding-top:1.175rem;
        position: relative;
        .report-img{
          width: 5.75rem;
          height: 4.025rem;
          border-radius: .2rem;
          overflow: hidden;
          img{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .report-tit{
          position: absolute;
          left:6.5rem;
          top:1.075rem;
          height: 2.5rem;
          width: 9.9rem;
          color: #272727;
          font-size:.8rem;
          font-weight:600;
          color:rgba(39,39,39,1);
          line-height:1.25rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break:break-all;
          word-wrap:break-word
        }
        .report-time{
          height: .925rem;
          color: #9B9B9B;
          font-size:.65rem;
          font-weight:400;
          line-height:.925rem;
          position: absolute;
          left:6.5rem;
          top:4.275rem;
        }
      }
    }
  }
}
</style>
