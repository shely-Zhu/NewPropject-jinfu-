<!--
    任务管理首页
    @Author：bashuang
    @Date：20200413
 -->
<template>
  <div class="pageIndex">
    <page-title title="任务管理" ref="pageTitle" backUrl="close"></page-title>
    <div class="titleTab">
      <div :class="SelectTab==1 ? 'tab-switch':'tab-switch-no'" @click="SelectTab==2&&isClick ? changeTab(1) : ''"  htmdEvt='get_task'>
        <span class="switch-tit">收到的任务</span>
      </div>
      <div :class="SelectTab==2 ? 'tab-switch':'tab-switch-no'" @click="SelectTab==1&&isClick ? changeTab(2) : ''" htmdEvt='send_task'>
        <span class="switch-tit">发出的任务</span>
      </div>
    </div>
    <Scroll class="main-scroll"
          ref="scroll"
          onScroll
          @scroll="pageScroll"
          :onPullingDown="pullDown"
          :onPullingUp="pullUp"
          style="top:4.4rem !important;background: #F2F3F5">
      <!-- 任务管理列表 -->
      <ul class="manageList-wrap" v-for="(item,index) in manageListDate" :key="index" v-if="isHaveData">
        <li class="bottom-line" v-if="index!=0"></li>
        <li class="manageList-item" @click="isClick&&goManageDetail({taskId:item.taskId,SelectTab:SelectTab})" htmdEvt='enter_detail'>
          <!-- 头像、用户名、工号、任务状态 -->
          <div class="head-wrap">
            <img :src="item.portraitURL" alt="" v-if="item.portraitURL">
            <svg class="icon svg-icon user-head" aria-hidden="true" v-else>
                <use xlink:href="#icon-icon_touxiang"></use>
            </svg>
            <div class="user-name" v-if="SelectTab == 1 && item.taskType!=2">{{item.senderName}} {{item.senderNo}}</div>
            <div class="user-name" v-if="SelectTab == 2 || item.taskType==2">{{item.receiverName}} {{item.receiverNo}}</div>
            <span :class="item.status == 1 ? 'status1' : 'status0'">{{item.status == 1 ? '已完成' : SelectTab == 1 ? '待我执行' : '待完成'}}</span>
          </div>
          <!-- 任务类型、任务创建时间 -->
          <div class="type-time">
            <span>{{item.taskType == 1 ? '转发任务' : item.taskType == 2 ? '会销跟进' : '应知应会'}}</span>
            <span style="color:#C1C5CE;font-size:.5rem">{{item.startTimeOfFormat}}</span>
          </div>
          <!-- 统一样式的标题 -->
          <div class="manage-tittle" v-if="item.taskType != 2" :style="item.isRead ==1 ? 'opacity: 0.6': ''">{{item.taskName}}</div>
          <!-- 1 应知应会展示样式 -->
          <div class="manage-detail" v-if="item.taskType == 0"><p>{{item.taskContent}}</p></div>
          <!-- 2 转发任务展示样式 -->
          <div class="forward-detail" v-if="item.taskType == 1">
            <div class="forward-img-wrap" v-if="item.thumbnailAddress">
              <img class="forward-img" :src="item.thumbnailAddress" alt="">
            </div>
            <div class="default-img" v-else><i class="iconfont default-img-min">&#xe654;</i></div>
            <div class="forward-tit-wrap">
              <div class="forward-tit">{{item.forwardTitle}}</div>
              <div class="forward-content"><div>{{item.forwardIntroduction}}</div></div>
            </div>
          </div>
          <!-- 3 会销跟进展示 -->
          <div class="manage-tittle" v-if="item.taskType == 2" :style="item.isRead ==1 ? 'opacity: 0.6': ''">会销活动跟进任务</div>
          <div class="activity-detail"  v-if="item.taskType == 2">
            <div class="activity-tit">
              {{item.actName}}
            </div>
          </div>
        </li>
      </ul>
      <!-- 下拉加载最终无数据 -->
      <NoDataEnd v-if="isnoData"></NoDataEnd><!-- 接口返回无数据时 -->
    </Scroll>
    <UrlNoData v-if="!isHaveData" height="max"></UrlNoData>
  </div>
</template>
<script>
import Scroll from './common/Scroll'
import NoDataEnd from './common/NoDataEnd'
import UrlNoData from './common/UrlNoData'
import pageTitle from './common/pageTitle'
import { Indicator,MessageBox } from 'mint-ui';
import $ from 'jquery'
export default {
  data() {
    return {
      SelectTab: 1, //切换顶部标签，1收到任务，2发出任务
      manageListDate:[],//任务列表数据
      isnoData:false, //分页列表最后"已无更多数据"
      pageSize: 10, //每页数量
      pageNum: 1, //当前页码
      isHaveData:true, //有没有接口返回数据
      isClick:true, //设置点击事件是否可点击的时间
    }
  },
  components: {Scroll,NoDataEnd,UrlNoData,pageTitle},
  mounted() {
    $('.pageIndex').height(document.body.scrollHeight)
    this.SelectTab = this.$route.query.SelectTab || 1
    this.changeTab(this.SelectTab)
  },
  methods: {
     /** 调用列表接口
		 * @Author：bashuang  @Date：20200413
     * params: type 不同的加载方式，"one"加载第一页或下拉刷新页面，"more"加载更多即第二页及更多
		 */
    getManagement(type){
      this.isnoData = false //'1000' 无数据图片
      $('.pullup-wrapper').css({'padding':'16px 0', 'font-size':'0.6rem'})//better-scroll自带的接在无数据样式初始化
      this.$axiosHttp.http({
        url: this.$httpConfig.managementListUrl,
        params: {
          selectType:this.SelectTab,
          pageSize: this.pageSize,
          pageNum: this.pageNum,
        },
        method:'GET'
      } ,
      (res) => { //接口成功
          if(res.data.status == '0000'){
            this.isHaveData = true
            if(type == 'one'){
              this.pageNum = 2 //如果第一页加载成功，页码=2，下一次即加载第2页及更多
              this.manageListDate = res.data.data || []
            }else if(type == 'more'){ //如果是加载更多，页码逐渐+1，数据归并
              let newData = res.data.data
              this.manageListDate = [...this.manageListDate, ...newData];
              this.pageNum += 1;
            }
            if(res.data.data.length <=10){ //如果数据小于10的话
              this.isnoData = true
            }
            this.$nextTick(() => {
              this.$refs.scroll.refresh(true);
            });
          }
          Indicator.close(); //调取成功后关闭加载圈
      },(res) => { // 接口错误
          Indicator.close($(''));
          let message = res.data.message ? res.data.message : '系统开小差啦，请联系系统管理员';
          MessageBox('提示', message);
          this.isHaveData = false //无数据默认图
          this.$nextTick(() => { //重置scroll
            this.$refs.scroll.refresh(true);
          });
      },(res) => { // 接口返回1000
          $('.pullup-wrapper').css({'padding':'0', 'font-size':'0px'}) //better-scroll自带的接在无数据样式取消
          Indicator.close();
          if(this.pageNum == 1){
            this.isHaveData = false //无数据默认图
          } else {
            this.isnoData = true //'1000' 无数据文字
          }
          this.$nextTick(() => { //重置scroll
            this.$refs.scroll.refresh(res.data.data);
          });
      });
    },
    /*切换顶部tab，查看不同任务
      *@Author：bashuang  @Date：20200413
      *params: tab 点击不同的tab，1、点击了收到任务tab，2、点击了发出任务tab
    */
    changeTab(tab) {
      this.isClick = false;
      let timer;
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        this.isClick = true;
      }, 800)
      // $('.scroll-content').css('transform' , 'translateY(0px, 48px)')
      this.manageListDate = [] //初始化数据列表
      this.isHaveData = true //是否有数据
      this.SelectTab = tab; //切换css样式
      this.pullDown()
    },
    // 下拉刷新
    async pullDown() {
      Indicator.open(); //打开加载圈
      this.pageNum = 1
      this.getManagement('one')
    },
    // 上拉加载
    async pullUp() {
      this.getManagement('more')
    },
    pageScroll (pos) {

    },
    /*点击进入任务详情
      *@Author：bashuang  @Date：20200413
      *params: 接口获取的任务id
    */
    goManageDetail(params){
      this.isClick = false;
      let timer;
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        this.isClick = true;
      }, 500)
      if(params){
        this.$router.push({path:'/managementDetail',query:params});
      }
    },
    // 防抖
    debounce (fn, t) {
      const delay = t || 500
      let timer
      return function () {
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, delay)
      }
    },
    
  }
};
</script>

<style lang="scss" spoced>
$baseOrange: #ff8637; /* 基础橘色 */
$baseGray: #91959e; /* 基础灰色 */
$titGray1: #545861; /*深灰标题*/
$titGray2: #91959e; /*浅灰标题*/
.pageIndex {
  width: 100%;
  /* min-height: 500px; */
  overflow:auto;
  background: #ffffff;

}

/* 顶部tab */
.titleTab {
  width: 100%;
  height: 2.2rem;
  display: flex;
  border-bottom: 0.5px solid #e7e7e7;
  position: fixed;
  left: 0;
  top: 2.2rem;
  z-index: 100;
  background: #ffffff;
  .tab-switch-no {
    box-sizing: border-box;
    width: 50%;
    height: 2.2rem;
    font-size: 0.7rem;
    padding-top: 0.65rem;
    color: $baseGray;
    text-align: center;

  }
  .tab-switch {
    box-sizing: border-box;
    width: 50%;
    height: 2.2rem;
    color: $baseOrange;
    font-size: 0.75rem;
    padding-top: 0.6rem;
    position: relative;
    text-align: center;
    font-weight: 600;
    .switch-tit {
      margin-bottom: 0.25rem;
    }
  }
  .tab-switch:after {
    content: "";
    display: block;
    width: 0.9rem;
    height: 3px;
    background-color: $baseOrange;
    border-radius: 0.15rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.15rem;
  }
}
/* 任务列表 */

.manageList-wrap {
  background: #ffffff;
  padding-bottom: .75rem;
  width: 100%;
  box-sizing: border-box;
  .manageList-item{
    padding: .75rem 0.75rem 0;
  }
  .head-wrap {
    height: 1.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: .5rem;
    > img {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin-right: 8px;
    }
    .user-name {
      color: $titGray1;
      font-size: 0.7rem;
      font-weight: 600;
    }
    .status1 {
      color: $titGray2;
      font-size: 0.6rem;
      position: absolute;
      right: 0;
    }
    .status0 {
      color: $baseOrange;
      font-size: 0.6rem;
      position: absolute;
      right: 0;
    }
  }
  .type-time {
    width: 100%;
    height: 0.85rem;
    display: flex;
    justify-content: space-between;
    color: $titGray2;
    font-size: 0.6rem;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .manage-tittle {
    font-size: .75rem;
    height: 1.35rem;
    line-height: 1.35rem;
    color: #1d212b;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }
  .manage-tittle-gray{
    opacity: 0.6;
  }
  /* 应知应会 */
  .manage-detail {
    color: $titGray2;
    font-size: 0.65rem;
    max-height: 1.8rem;
    width: 100%;
    line-height: .9rem;
    margin-top: 0.2rem;
    text-align: left;
    display: flex;
    align-items: center;
    >p{
    max-height: 1.8rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break:break-all;
    word-wrap:break-word
    }
  }
  /* 转发任务 */
  .forward-detail {
    background-color: #f6f7fa;
    box-sizing: border-box;
    width: 100%;
    padding: 0.6rem;
    height: 4.2rem;
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
    border-radius: .1rem;
    .forward-img-wrap{
      width: 3rem;
      height: 3rem;
      border-radius: .1rem;
      overflow: hidden;
      .forward-img{
        display: block;
        width: 100%;
        height: 100%
      }
    }
    .default-img{
      width: 3rem;
      height: 3rem;
      background-color: #DDDEE0;
      box-sizing: border-box;
      padding:1.05rem;
      border-radius: .1rem;
      .default-img-min{
        font-size: .9rem;
        color:#ABABAB;

      }
    }
    .forward-tit-wrap {
      width: 12.55rem;
      .forward-tit {
        width: 12.55rem;
        height: 1rem;
        font-size: .7rem;
        line-height: 1rem;
        color: $titGray1;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        margin-bottom:.2rem;
        font-weight: 500;
      }
      .forward-content {
        display: flex;
        align-items: center;
        text-align: left;
        width: 12.55rem;
        height: 1.7rem;
        color: $titGray2;
        width: 100%;
        height: 1.7rem;
        font-size: 0.6rem;
        line-height: .85rem;
        text-align: left;
        >div{
          width: 100%;
          max-height: 1.7rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break:break-all;
        word-wrap:break-word
        }
      }
    }
  }
  /* 会销活动跟进 */
  .activity-detail{
    background-color: #F6F7FA;
    width: 100%;
    max-height: 3.35rem;
    box-sizing: border-box;
    padding:.6rem;
    font-size: .75rem;
    line-height: 1.05rem;
    color: $titGray1;
    display: flex;
    align-items: center;
    /* margin-bottom: .6rem; */
    margin-top: .5rem;
    border-radius: .1rem;
    .activity-tit{
      font-weight: 500;
      max-height: 2.15rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break:break-all;
      word-wrap:break-word;
      text-align: left;
      line-height: 1.05rem;
    }
  }
}
/* 列表之间的灰色间隔线 */
.bottom-line {
  width: 100%;
  height: 0.5rem;
  background: #f2f3f5;
}
.user-head{
  font-size: 1.2rem; /*和头像大小保持一致*/
  /* color: #ECEDF0; */
  margin-right:.4rem;
  /* background: #C1C5CE; */
}

</style>
