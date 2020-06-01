<!--
    会员活动详情
    @Author：史芸瑞
    @Date：2020-5-26
 -->

<template>
  <div id="activityDetailsBox">
    <page-title title="活动详情"></page-title>
    <normal-dialog content="您已经报名参加本活动" :show="dialogShow" :buttons="dialogButtons" @dialogClick="dialogClick"></normal-dialog>

    <div class="bgBox">
      <img id="bgimg" class="lazyload" :src="imgUrl" />
      <span class="livePlayback" style="display:none" v-if="data.isPlayback">观看回放</span>
    </div>

    <div class="activityDetailsBox">
      <div class="activityDetailsTopBox">
        <h3 class="actName">{{data.actName}}</h3>
        <div class="activityDetailsDivBox" v-if="data.actCity">
          <p>
            <i class="locationIcon"></i>
            <span>活动举办城市:</span>
          </p>
          <p class="city">{{data.actProvince + data.actCity}}</p>
        </div>
        <div class="activityDetailsDivBox notOnline" v-if="!data.actForm">
          <p>
            <i class="activityTimeIcon"></i>
            <span>活动时间:</span>
          </p>
          <p class="startTimeOrendTime">{{data.actStartDateStr + '-' + data.actEndDateStr}}</p>
        </div>
        <div class="activityDetailsDivBox online" v-if="data.actForm">
          <p>
            <i class="activityTimeIcon"></i>
            <span>直播时间:</span>
          </p>
          <p class="startTimeOrendTime">{{data.actPlayTimeMark}}</p>
        </div>
      </div>
      <div class="activityIntroduceBox">
        <h4>活动介绍</h4>
        <div class="activityIntroduce">{{data.actIntroduce}}</div>
      </div>
    </div>

    <div class="activityBottomBtnBox blueBgButton" v-if="!actStatusText">
      <a href="javascript:void(0);">立即报名</a>
    </div>
    <div class="activityBottomBox" v-if="actStatusText">
      <a href="javascript:void(0);">{{actStatusText}}</a>
    </div>
    <div class="mask"></div>
    <!-- 已经报名弹框 -->
    <div>

    </div>

    <!-- 老带新实物奖品弹框 -->
    <div class="successBigCon" id="oldToNewPrizesw">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您报名成功</div>
        <!-- 奖品名称 -->
        <div class="prizeName">
          恭喜您获得
          <span>京东100元购物卡</span>
        </div>
        <!-- 邀请好友 -->
        <div class="shareTip clearfix">
          <span></span>
          <p>邀请新好友获得更多奖励</p>
          <span></span>
        </div>
        <!-- 邮寄提示 -->
        <div class="postTip">*请您保持手机畅通，我们工作人员将与您联系并给您邮寄奖品，谢谢您的参与*</div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle toShare">分享</div>
          </div>
        </div>

        <div class="shareBtn goldRedBgButton toShare hideBtn">分享给好友</div>
        <!-- 查看奖励 -->
        <a href="javascript:void(0);" class="seePrize rewards">查看奖励></a>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 老带新实物奖品弹框 -->
    <!-- 老带新有视频直播弹框 -->
    <div class="successMidCon" id="oldToNewOnline">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您已报名成功</div>
        <!-- 奖品名称 -->
        <div class="prizeName mt1">
          恭喜您获得
          <span>京东100元购物卡</span>
        </div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton linkInfo mr10">进入直播间</div>
            <div class="shareBtn goldRedBgButton toShareStyle toShare">分享</div>
          </div>
        </div>
        <!-- 查看奖励 -->
        <a href="javascript:void(0);" class="seePrize rewards hideBtn">查看奖励></a>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 老带新有视频直播弹框 -->
    <!-- 老带新电子奖品弹框 -->
    <div class="successMidCon" id="oldToNewPrizedz">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您报名成功</div>
        <!-- 奖品名称 -->
        <div class="prizeName">
          恭喜您获得
          <span>京东100元购物卡</span>
        </div>
        <!-- 邀请好友 -->
        <div class="shareTip clearfix">
          <span></span>
          <p>邀请新好友获得更多奖励</p>
          <span></span>
        </div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle toShare">分享</div>
          </div>
        </div>
        <div class="shareBtn goldRedBgButton toShare hideBtn">分享给好友</div>
        <!-- 查看奖励 -->
        <a href="javascript:void(0);" class="seePrize rewards">查看奖励></a>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 老带新电子奖品弹框 -->
    <!-- 老带新无奖品 -->
    <div class="successSmallCon" id="oldToNewNoPrize">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您报名成功</div>
        <!-- 成功提示内容 -->
        <div class="shareCon">邀请好友，将有机会获得奖励</div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle toShare">分享</div>
          </div>
        </div>
        <div class="shareBtn goldRedBgButton toShare hideBtn">分享给好友</div>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 老带新无奖品 -->
    <!-- 老带新不满足邀请条件 -->
    <div class="successMidCon" id="oldToNewTip">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">温馨提示</div>
        <!-- 提示信息 -->
        <div class="prizeName"></div>
        <!-- 邀请好友 -->
        <div class="shareTip clearfix">
          <span></span>
          <p>邀请新好友获得更多奖励</p>
          <span></span>
        </div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle toShare">分享</div>
          </div>
        </div>
        <div class="shareBtn goldRedBgButton toShare hideBtn">分享给好友</div>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 老带新不满足邀请条件 -->
    <!-- 非老带新实物奖品弹框 -->
    <div class="successMidCon" id="notOldToNewPrizesw">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您报名成功</div>
        <!-- 奖品名称 -->
        <div class="prizeName">
          恭喜您获得
          <span>京东100元购物卡</span>
        </div>
        <!-- 邮寄提示 -->
        <div class="postTip">*请您保持手机畅通，我们工作人员将与您联系并给您邮寄奖品，谢谢您的参与*</div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle rewards">查看奖励</div>
          </div>
        </div>
        <div class="shareBtn goldRedBgButton rewards hideBtn">查看奖励</div>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 非老带新实物奖品弹框 -->
    <!-- 非老带新电子奖品弹框 -->
    <div class="successSmallCon" id="notOldToNewPrizedz">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您报名成功</div>
        <!-- 成功提示内容 -->
        <div class="prizeName">
          恭喜您获得
          <span>京东100元购物卡</span>
        </div>
        <!-- 分享按钮 -->
        <div class="shareBtn goldRedBgButton rewards hideBtn">查看奖励</div>
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle rewards">查看奖励</div>
          </div>
        </div>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>
    <!-- 非老带新电子奖品弹框 -->
    <!-- 非老带新无奖品 -->
    <div class="successSmallCon" id="notOldToNewNoPrize">
      <div class="successBox">
        <!-- 标题 -->
        <div class="successTit">恭喜您报名成功</div>
        <!-- 成功提示内容 -->
        <div class="successContent">稍后您的理财师将会与您沟通具体活动事宜，请保持手机畅通</div>
        <!-- 分享按钮 -->
        <div class="hideBox">
          <div class="successBoxButton">
            <div class="shareBtn goldRedBgButton toLink">确定</div>
            <div class="shareBtn goldRedBgButton toShareStyle knowBtn">我知道了</div>
          </div>
        </div>
        <div class="shareBtn goldRedBgButton knowBtn hideBtn">我知道了</div>
      </div>
      <span class="iconfont closeBtn">&#xe637;</span>
    </div>

  </div>
</template>
 
<script>
import pageTitle from '@/components/common/pageTitle';
import normalDialog from "@/components/common/dialog";

import "@/assets/css/pages/memberClub/memberActivitiesDetail.scss";

export default {
  components: { pageTitle, normalDialog},
  data() {
    return {
      imgUrl: "../../assets/img/placeholderImg.png", //活动图片
      dialogButtons: ["确定"],
      actStatusText: "", //状态描述
      data: {},
      dialogShow: true,//已报名活动弹框是否显示
    };
  },
  mounted() {
    const json =
      '{"status":0,"message":"处理成功！","data":{"actType":"1","actId":"100000","actName":"女性婚姻财富保全与花艺沙龙","actTag":"1111","actProvince":"1111","actProvinceNO":"1111","actCity":"北京市","actCityNO":"1111","actStartDate":"123565434","actStartDateStr":"2019-05-03","actEndDate":"124565453432324","actEndDateStr":"2019-06-30","actIntroduce":"通过邀请客户参加高端红酒活动，从而为客户带来不一样的活动体验并对公司留下深刻印象，品尝全酒宴，满足客户体验，增加客户与理财师交流，对于客户增信、签单有很大的促进作用11","signUpFlag":true,"actStatus":1,"domainIP":"http://172.16.163.99:85/","htjfGeneralizeImgUrl":"","htjfGeneralizeImgUrlPrex":""}}';
    const data = JSON.parse(json).data;

    this.data = data;

    if (data.htjfGeneralizeImgUrl) {
      //展示活动图片
      this.imgUrl =
        data.domainIP +
        data.htjfGeneralizeImgUrlPrex +
        data.htjfGeneralizeImgUrl;
    }
    this.isPlayback = data.isPlayback;

    //活动状态描述处理
    if (data.actStatus == 0) {
      this.actStatusText = "敬请期待";
    } else if (data.actStatus == 1) {
      // 进行中的活动已报名
      if (data.signUpFlag) {
        this.actStatusText = "已报名";
      }
    } else if (data.actStatus == 2) {
      this.actStatusText = "已结束";
    } else if (data.actStatus == 3) {
      this.actStatusText = "已删除";
    }

    

    
  },
  methods: {
    dialogClick(name){//dialog中button的点击事件 param1：name为点击按钮的文字
      this.dialogShow = false;//将弹框隐藏
    }
  },
  watch: {}
};
</script>
