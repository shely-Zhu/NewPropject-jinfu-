<!--
    邀请好友页面
    @Author：bashuang
    @Date：20200525
 -->
<template>
  <div class="friend-box">
    <!-- 返回按钮 -->
    <img class="close-friend" @click="closePage()" src="../../assets/img/icon_fanhui.png" alt="">
    <!-- 卡片 -->
    <div class="bg-card">
      <!-- 姓名 -->
      <div class="you-name" v-if="beseInfo">{{beseInfo.name}}</div>
      <!-- 邀请好友，分享精彩 -->
      <div class="share-intro">邀请好友，分享精彩</div>
      <!-- 二维码 -->
      <div class="share-code">
        <div id="qrcode" ref="qrCodeUrl" v-if="isShowCode"></div>
      </div>
      <div class="bottom-label" v-if="managerList && managerList.length>0">
        <span class="money-name">您的理财师：{{managerName.codeName}}{{managerName.empNo}}</span>
        <span class="choose-btn" v-if="isChoose" @click="switchManager()" >点击切换理财师
          <img class="more-img" src="../../assets/img/icon_more.png" alt="">
        </span>
      </div>
      <div style="height: 1.35rem;" v-else></div>
    </div>
    <!-- 分享按钮 -->
    <div class="share-button">
      <div class="pyq-btn" @click="goToShare('wechatMoments')">
        <img src="../../assets/img/icon_pyq.png" alt="">
        <span>分享到朋友圈</span>
      </div>
      <div class="line"></div>
      <div class="wechat-btn" @click="goToShare('friends')">
        <img src="../../assets/img/icon_wechat.png" alt="">
        <span>分享给好友</span>
      </div>
    </div>
    <!-- 理财师选择列表，点击切换理财师时显示 -->
    <ul class="manager-wrap" v-if="isShowList">
      <li class="manager-list" v-for="(item,index) in managerList" :key="index" @click="chooseManager(item)" >
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
import { Indicator, MessageBox ,Toast } from "mint-ui";
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      beseInfo:null,//用户基础信息，从getBeseInfo获取
      isShowCode:true, //是否显示二维码框
      isShowList: false, //是否显示可选择的理财师列表
      isChoose:false, //是否可点击选择理财师
      managerList: [
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师1", number: "H909097" },
        { name: "理财师2", number: "H909097" }
      ],
      managerName: {}, //蓝色底标签显示的理财师姓名和工号
      aesEncrypt:null, //分享加密串
      activeUrl:"https://wx.chtwm.com/api/brand/index.html?activityId=pWhA5xJTKF4Zfst%2B9ycHqQ%3D%3D&channel=3",//营销活动接口地址
      shareUrl:"",//分享链接
      isAndroid:false, //是否是安卓
      isiOS:false, //是否是ios
      wxShareContent:{}, //分享微信的内容
    };
  },
  components: {},
  created(){
    this.getCustBro()
    this.getBeseInfo()
    this.getshareContent()
  },
  mounted() {
    // 判断是安卓还是ios
		let u = navigator.userAgent;
    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  },
  methods: {
    // 获取用户基本信息
    getBeseInfo() {
      let that = this;
      Indicator.open();
      that.$axiosHttp.http({
          url: that.$httpConfig.UserBaseInfoUrl,
          params: {},
          method: "POST"
        }, res => { //接口成功0000
          that.beseInfo = res.data.data //用户信息赋值
          console.log('that.beseInfo',that.beseInfo.name)
          that.getOldNewData() //有用户信息之后调用老带新接口
        }, res => {
          // 接口错误4000
          Indicator.close();
          let message = res.data.message ? res.data.message : "系统开小差啦，请联系系统管理员";
          MessageBox("提示", message);
        }, res => {
          // 接口返回1000
          Indicator.close();
        }
      );
    },
    // 获取老带新接口数据
    getOldNewData() {
      let that = this;
      that.$axiosHttp.http({
          url: that.$httpConfig.oldRecommendNewUrl,
          params: that.managerName.empNo || '', //理财师工号
          method: "POST"
        }, res => { //接口成功0000
          let data = res.data.data
          if (data.recommendable == 1) {
          //未实名认证，提示去认证
            that.isShowCode = false 
            Toast({
              message: '完成实名认证后才可以推荐好友哦',
              className: 'toast',
            });
          } else {
            // 已实名认证
            that.isShowCode = true
            that.aesEncrypt = data.aesEncrypt;
            //拼分享出去的链接+客户编号+选择的理财师编号
            that.shareUrl = that.activeUrl + "&shareCustomerNo=" + that.beseInfo.customerNo + "&shareEmpCode=" + that.managerName.empNo;
            // 生成二维码
            that.createQRcode();
          }
        }, res => {
          // 接口错误4000
          Indicator.close();
          let message = res.data.message ? res.data.message : "系统开小差啦，请联系系统管理员";
          MessageBox("提示", message);
        }, res => {
          // 接口返回1000
          Indicator.close();
        }
      );
    },
    // 获取理财师列表
    getCustBro() {
      let that = this;
      that.$axiosHttp.http({
          url: that.$httpConfig.custBroUrl,
          data: {
            fundType: "0"
          },
          method: "POST"
        }, res => { //接口成功0000
          let data = res.data
          let existMain = data.data.existMain
          that.managerList = data.data.advisor
          if (existMain == 0 && that.managerList.length > 1) {
            that.isChoose = true;
          }else if(that.managerList.length = 1){
            that.managerName = that.managerList[0]
            that.isChoose = false
          }
        }, res => {
          // 接口错误4000
          Indicator.close();
          let message = data.message ? data.message : "系统开小差啦，请联系系统管理员";
          MessageBox("提示", message);
          // 未获取到理财师，把分享按钮至为不可点击，问UI要图
        }, res => {
          // 接口返回1000
          Indicator.close();
        }
      );
    },
    // 获取微信分享内容接口
    getshareContent() {
      let that = this;
      that.$axiosHttp.http({
          url: that.$httpConfig.shareContentUrl,
          params: {
            category: "appShareOldAndNew", //类型（标志位）
            groupType: '', //组类型
            curPage: "1", //当前页
            pageSize: "1" //每页记录数
          },
          method: "POST"
        }, res => { //接口成功0000
          that.wxShareContent = res.data.data.pageList[0]
          console.log(res.data.data.pageList[0])
        }, res => {
          // 接口错误4000
          Indicator.close();
          let message = res.data.message ? res.data.message : "系统开小差啦，请联系系统管理员";
          MessageBox("提示", message);
        }, res => {
          // 接口返回1000
          Indicator.close();
        }
      );
    },
    // 分享（type=1点击分享朋友圈   ，type=2点击分享给好友）
    goToShare(type){
      let that=this
      let isAndroid = that.isAndroid
      let obj={
        'type': type,     // auto 原生自己分享框  wechatMoments 朋友圈   friends 朋友
        'businessType': 'ldx',   //life,业务类型
        'title': that.wxShareContent.title?that.wxShareContent.title:"",    //标题
        'des':'邀请好友，分享精彩',   //简介
        'link': that.shareUrl?that.shareUrl:'',   //链接
        'img':that.wxShareContent.imageUrlApp?that.wxShareContent.imageUrlApp:"",   // 图标
			}
      if(type=='wechatMoments'){ //分享至朋友圈
      console.log("朋友圈",obj)
				if(that.isAndroid){ //如果安卓手机用原有方法，如果是苹果则使用wk
					window.jsObj.wxShareSend(JSON.stringify(obj))
				}else{
					window.webkit.messageHandlers.goToSharePyq.postMessage(obj)
				}
      }else{
        console.log("好友",obj)
        if(that.isAndroid){ //如果安卓手机用原有方法，如果是苹果则使用wk
					window.jsObj.wxShareSend(JSON.stringify(obj))
				}else{
					window.webkit.messageHandlers.goToShareFriend.postMessage(obj)
				}
      }
    },
    // 点击关闭页面
    closePage() {
      console.log("CLOSEPAGE");
    },
    // 点击切换理财师，弹出理财师弹框
    switchManager() {
      this.isShowList = true;
      console.log('点击切换理财师',this.isShowList)
    },
    // 点击选择理财师
    chooseManager(item) {
      this.managerName = item; //点击的理财师显示在蓝色标签上
      this.isShowList = false;
    },
    //点击取消，关闭理财师选择列表
    cancel() {
      this.isShowList = false;
    },
    // 生成二维码
    createQRcode() {
      let that=this
      if(!that.shareUrl) return
      console.log(that.shareUrl,'shareUrl')
      let qrcode = new QRCode(that.$refs.qrCodeUrl, {
        text: that.shareUrl, // 需要转换为二维码的内容
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      Indicator.close();
    },
  }
};
</script>

<style lang="scss" spoced>
.friend-box {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background: url("../../assets/img/friend_bg.png") no-repeat center;
  background-size: 100% 100%;
  padding-top: 4.6rem;

  /* 关闭页面按钮 */
  .close-friend {
    position: fixed;
    left: 0;
    top: 0;
    width: 2.2rem;
    height: 2.2rem;
  }
  /* 卡片 */
  .bg-card {
    display: block;
    width: 15.5rem;
    /* height: 19.1rem; */
    background: url("../../assets/img/friend_card.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto 0.75rem;
    padding-top: 1rem;
    .you-name {
      height: 1.55rem;
      text-align: center;
      width: 100%;
      font-size: 1.1rem;
      line-height: 1.55rem;
      font-weight: 600;
      color: rgba(39, 39, 39, 1);
      background: linear-gradient(
        239deg,
        rgba(187, 142, 95, 1) 0%,
        rgba(108, 69, 23, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .share-intro {
      width: 100%;
      font-size: 0.7rem;
      line-height: 1rem;
      text-align: center;
      font-weight: 400;
      color: rgba(108, 69, 23, 1);
      margin-bottom: 0.75rem;
    }
    .share-code {
      width: 10.75rem;
      height: 10.75rem;
      /* background: #ffffff; */
      margin: 0 auto 1.35rem;
      position: relative;
      /* padding-top:.25rem; */
      box-sizing: border-box;
      #qrcode {
        display: inline-block;
        width: 100%;
        height: 100%;
        img {
          width: 10.75rem;
          height: 10.75rem;
          background-color: #fff; //设置白色背景色
          padding: 0.45rem; // 利用padding的特性，挤出白边
          box-sizing: border-box;
        }
      }
    }
    .bottom-label {
      width: 100%;
      height: 2.45rem;
      background: url("../../assets/img/bottom-label.png") no-repeat center;
      background-size: 14.65rem 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0.4rem 0 0.35rem;
      font-size: 0.75rem;
      line-height: 0.75rem;
      .money-name {
        color: #fff9f2;
        display: inline-block;
        height: 0.75rem;
        line-height: 0.75rem;
      }
      .choose-btn {
        margin-top: 0.25rem;
        display: flex;
        height: 0.66rem;
        color: #fff9f2;
        font-size: 0.6rem;
        /* line-height: .7rem; */
        align-items: center;
      }
      .more-img {
        display: inline-block;
        width: 0.66rem;
        height: 0.66rem;
      }
    }
  }

  /* 分享按钮 */
  .share-button {
    width: 15.5rem;
    height: 4.5rem;
    background: url("../../assets/img/fenxiang_bg.png") no-repeat center;
    background-size: 100% 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .line {
      width: 0.025rem;
      height: 1.35rem;
      background: #f5edd8;
      margin-top: 1.15rem;
    }
    img {
      display: block;
      width: 1.75rem;
      height: 1.75rem;
      margin: 0.9rem auto 0.25rem;
    }
    .pyq-btn {
      width: 7.75rem;
      height: 100%;
      > span {
        font-weight: 400;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 1);
        line-height: 1rem;
        text-shadow: 0px 1px 1px rgba(128, 81, 30, 1);
      }
    }
    .wechat-btn {
      flex: 1;
      > span {
        font-weight: 400;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 1);
        line-height: 1rem;
        text-shadow: 0px 1px 1px rgba(128, 81, 30, 1);
      }
    }
  }

  /* 理财师选择列表 */
  .manager-wrap {
    width: 100%;
    height: 19.6rem;
    background: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: auto;
    z-index: 10;
    /* 理财师列表 */
    .manager-list {
      padding-left: 0.75rem;
      width: 100%;
      height: 2.45rem;
      line-height: 2.45rem;
      .border-top {
        height: 1px;
        background: #e7e9ed;
      }
      .manager {
        height: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(39, 39, 39, 1);
        line-height: 1rem;
        margin-right: 0.25rem;
      }
      .job-number {
        display: inline-block;
        padding: 0 0.25rem;
        font-size: 0.55rem;
        line-height: 0.75rem;
        color: #6c4517;
        background: linear-gradient(
          220deg,
          rgba(245, 236, 213, 1) 0%,
          rgba(240, 223, 186, 1) 100%
        );
      }
    }
    /* 取消按钮 */
    .cancel {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      background: #f6f6f6;
      height: 2.45rem;
      z-index: 0.275rem;
      color: #272727;
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 2.425rem;
      text-align: center;
    }
  }
  /* 黑色遮罩 */
  .mask {
    width: 100%;
    height: 33.35rem;
    background: rgba(0, 0, 0, 1);
    opacity: 0.6;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
  }
}
/* 弹出框 */
.toast{
  font-size: .7rem;
  display: inline-block;
  word-break: keep-all
}
</style>
