<!--
    会员权益详情页
    @Author：zhubingshuai
    @Date：2020-5-26
 -->
<template>
<div class="membership-detail" id="membershipDetailsBox">
    <!-- title -->
    <page-title title="权益详情" :headerSetting="headerSetting" >
    </page-title>
    <!-- 头部背景 -->
    <div class="membership-detail-header"></div>
    <div class="membership-detail-body membershipDetailsSilderBox">
        <!-- swiper 图标 -->
        <div class="membershipDetailsHeaderBox">
            <swiper 
            :options="swiperOption"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            @slide-change-transition-start="onSlideNextTransitionStart"
            @slideChangeTransitionStart="onSlideNextTransitionStart"
            @slideChangeTransitionEnd="onSlideNextTransitionStart"
            @transitionStart="onSlideNextTransitionStart"
            @resize="onSwiperSlideChangeTransitionStart"
            ref="mySwiper" v-if="items.length">  
                <!-- 渲染后台返回内容 -->  
                <swiper-slide v-for="(item, index) in items" :key="index">
                    <div class="goods">
                            <img class="lazyload" :src="item.iconUnlock"  alt="">
                            <p>{{item.rightName}}</p>
                    </div>  
                </swiper-slide>  
            </swiper>
        </div>
        <!-- 具体内容页面 -->
        <div class="membershipDetailsContentBox">
             <div class="membershipDetailsContentBox_next">
                <h2 ref="rightname">{{contentBoxRightName}}</h2>
                <p ref="content">{{contentBoxContent}}</p>
                <div class="more-tel">
                    <span class="title">更多信息可通过恒天财富官方客服热线进行咨询</span>
                    <a href="javascript:void(0);" class="tel">400-8980-618</a>
                </div>   
            </div>
        </div>
         <!-- 具体内容页面 end-->
    </div>
</div>
</template>
<script>
import pageTitle from '../../components/common/pageTitle'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
        items:[
            {
                "id": "1",
                "enjoy": "0",
                "rightName": "金融产品诊断",
                "iconUnlock": "../assets/img/membership/quanyi_icon_big@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。1",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "SPA护理",
                "iconUnlock": "../assets/img/membership/quanyi_icon_big@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。2",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "私人牙医",
                "iconUnlock": "/mine/static/img/home_icon_xejx@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。3",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "高尔夫畅打",
                "iconUnlock": "/mine/static/img/home_icon_gmzh@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。4",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "运动至上",
                "iconUnlock": "/mine/static/img/mine_icon_wdhd@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。5",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "生日积分",
                "iconUnlock": "/mine/static/img/mine_icon_bzzx@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。6",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "折扣换礼",
                "iconUnlock": "/mine/static/img/mine_icon_dzd@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。7",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "感恩礼遇",
                "iconUnlock": "/mine/static/img/home_icon_rxsm@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。8",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "生日礼遇",
                "iconUnlock": "/mine/static/img/mine_icon_zcpz@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。9",
                "linkUrl": "www.baidu.com"
            }, {
                "id": "1",
                "enjoy": "0",
                "rightName": "荣耀年会",
                "iconUnlock": "/mine/static/img/mine_icon_wdyq@2x.png",
                "iconLocked": "1",
                "content": "集休闲、疗养、观光于一身的健康之旅,精选国内外空气清新,风景优美,各具特色的疗养圣地,配以调理方案,使客户身心放松,消除疲劳、增强体质。恒天财富恒乐汇帮您一键式预约国内外精选酒店及机票,让您在另一座城市,找到家的温馨。10",
                "linkUrl": "www.baidu.com"
            }],
        // active: 'tab-container1',
        contentBoxRightName:'', //内容title
        contentBoxContent:'',//内容详情
        //头部的设置参数
        headerSetting: {
            needProcessSelf: "right"
        },
        activeIndex:0, // 选中swiper下标
        mySwiperM:'', //swipername
        // swiper配置项
         swiperOption: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            watchActiveIndex: false,
            // watchSlidesProgress: !0,
            direction: 'horizontal',
            slidesPerView :'auto',
            resistanceRatio:1,
            initialSlide: 0, //图片滑动到第几个未开始位置
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            loop: true, //是否循环
            slideActiveClass:'swiper-active',
            on: {
                // slideChangeTransitionStart: function() {
                //     console.log(this.realIndex)
                //     // that.imgIndex = this.realIndex + 1;  //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
                // },
                // slideNextTransitionStart: function(){
                // }

            }
        }
    }
  },
  components: {
      pageTitle,
      swiper,
      swiperSlide
  },
  computed: {
      mySwiper() {
        return this.$refs.mySwiper.swiper;  
      }
  },
  mounted() {
    //   console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiperM = this.mySwiper
      this.contentBoxRightName = this.items[0].rightName
      this.contentBoxContent = this.items[0].content
  },
  methods: {
    // 滑动时事件
    onSlideNextTransitionStart(){
         this.items.forEach((item,index)=>{
              this.activeIndex = index;
            if(this.mySwiperM.realIndex == index){
                this.contentBoxRightName = item.rightName
                this.contentBoxContent = item.content

            }
        })
    },
    onSwiperSlideChangeTransitionStart(){

    }
  }
};
</script>
<style lang="scss" spoced>
.membership-detail{
    width: 100%;
    height: 100%;
    background-color: #F3F5F7;
    overflow: auto;
    .pTitle{
        color: #fff
    }
    .membership-detail-header{
       width: 100%;
        height: 8rem;
        background: url("../../assets/img/membership/xiangqing_head_bg@2x.png") no-repeat center center;
        background-size: 100% 100%;
        margin-top: -2.2rem;
    }
    .membership-detail-body{
        margin-top: -2.7rem;
        padding: 1rem 1rem 2.3rem 1rem;
        overflow: hidden;
        z-index: 9
    }
    .membershipDetailsSilderBox{
        .membershipDetailsHeaderBox{
            height: 5.2rem;
        }
        // swiper
        .swiper-container{
            overflow: initial;
            margin-left: .5rem
        }
        // swiper中单个slider
        .swiper-slide {
            width: 3.5rem;
            height: 3.5rem;
        }
        // swiper中图标
        .goods {
            width: 3.5rem;
            height: 3.5rem;
            text-align: center;
            background: url("../../assets/img/membership/quanyi_icon_big@2x.png") no-repeat center center;
            // background-size:100% 100%;
            border-radius: .4rem;
            position: relative;
            text-align: center;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            img{
                width: 1.875rem;
                height: 1.875rem;
            }
            p{
                font-weight: bold;
                font-size: .55rem;
                color: #6C4517;
                margin-top: .125rem
            }
        }
        // 内容详情
         .membershipDetailsContentBox {
            width: 100%;
            background-image: url("../../assets/img/membership/quanyi_card_bg@2x.png");
            background-size: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            box-shadow: 0 .05rem .65rem 0 rgba(221,221,221,0.50);
            border-radius: .5rem;
            min-height: 19.6rem;
            position: relative;
            .membershipDetailsContentBox_next{
                padding: 0 .875rem;
                img{
                    width: auto;
                    max-width: 100%;
                }
                h2{
                    font-size: 1.1rem;
                    height: 4.85rem;
                    line-height: 4.85rem;
                    background: linear-gradient(239deg, rgba(187,142,95,1) 0%, rgba(108,69,23,1) 100%);
                    -webkit-background-clip: text;
                    color: transparent;
                    display: inline;
                }
                p{
                    color: #272727;
                    font-size: .7rem;
                    text-align: justify;
                    line-height: 1.25rem;
                }
                .more-tel{
                    position:absolute;
                    left: 1.65rem;
                    bottom: 3.65rem;
                    font-size: .6rem;
                    .title{
                        color: #9B9B9B;
                        text-align: center;
                        display: block;
                        margin-bottom: .375rem;
                    }
                    .tel{
                        color: #BE894D;
                        text-align: center;
                        display: block;
                    }
                } 
            } 
        }
    }
    // 滚动选中样式
    .swiper-active{
        transform: scale(1.3);
        transition-duration: 300ms;
        margin-right: 1rem;
        p{
           transform: scale(1); 
        }
    } 
}

</style>


