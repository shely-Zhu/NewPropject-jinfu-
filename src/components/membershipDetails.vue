<template>
<div>

    <!-- swiper  -->
    <div id="membershipDetailsBox" ref="mySwiper" :options="swiperOptions">
        <div class="membershipDetailsSilderBgBox">
            <div class="swiper-container show-swiper swiper-container-horizontal swiper-container-ios">
                <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(.5rem, 0px, 0px);">
                    <div class="swiper-slide swiper-slide-active" style="margin-right: 17px;" >
                        <div class="goods" style="transform: scale3d(1.4, 1.4, 1); transition-duration: 0ms;">
                            <img class="lazyload" src="/common/img/lazyImgList.png"  alt="">
                            <p>rightname</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="membershipDetailsSilderBox">
            <div class="membershipDetailsContentBox">
                <div class="membershipDetailsContentBox_next">
                    <h2>金融产品诊断</h2>
                    <p>金融产品诊断：金融市场、投资标的快速变化。金融产品诊断服务通过科学诊断，为客户下一步投资提供战略战术建议，以提升资产配置有效性。</p>
                    <span class="title">更多信息可通过恒天财富官方客服热线进行咨询</span>
                    <a href="javascript:void(0);" class="tel"></a>
                    <div class="linkBtnBox">
                            
                        <a href="javascript:void(0);" class="linkBtn goldBgButton">了解详情</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
        </swiper> -->
    </div>

</div>
</template>


<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    

  data() {
    return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
    }
  },
  components: {
      Swipe,SwipeItem
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
  mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    new Swiper(".show-swiper", {
                slidesPerView: "auto", //
                watchSlidesProgress: !0,
                slidesOffsetBefore: xPX,
                spaceBetween: marW,
                resistanceRatio: 1,
                initialSlide: n, //图片滑动到第几个未开始位置
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                loop: true, //是否循环
                on: {
                    progress: function(b) {
                        // for(i = 0; i < this.slides.length; i++){
                        //     slide = this.slides.eq(i);
                        //     slideProgress = this.slides[i].progress;
                        //     prevIndent = 4 == i ? .3228 : .0898;
                        //     scale = 1 > Math.abs(slideProgress + prevIndent) ? .4 * (1 - Math.abs(slideProgress + prevIndent)) + 1 : 1;
                        //     slide.find(".goods").transform("scale3d(" +scale + "," + scale + ",1)");                            
                        // }        
                        swiperSizeMap(this.slides, 'goods')
                    },
                    //滑动中
                    setTransition: function(b) {
                        for (var a = 0; a < this.slides.length; a++) {
                            this.slides.eq(a).find(".goods").transition(b);
                        }
                    },
                    //滑动结束赋值
                    slideChangeTransitionEnd: function() {
                        $(".lazyload").lazyload()
                        var index = this.activeIndex % num;
                        var text = $('.swiper-slide').eq(index).attr('data-text');
                        var link = $('.swiper-slide').eq(index).attr('data-link');
                        var name = $('.swiper-slide').eq(index).attr('data-name');
                        $('.membershipDetailsContentBox h2').text(name);
                        $('.membershipDetailsContentBox p').html(text);
                        $(".tel").attr("href", "tel:" + commonSetting.serverPhone).html(commonSetting.serverPhone)
                        if(link){
                            $('.linkBtnBox').show()
                            $('.linkBtnBox a').attr('onclick','setGoUrl( "'+link+'", "detailsUnderstandingDetails_01", this)')
                        }else{
                            $('.linkBtnBox').hide()
                        }
                       
                    },
                }
            });
    
  },
  methods: {
    
  }
};
</script>
<style lang="scss" spoced>
#membershipDetailsBox{
    width: 100%;
    min-height: 3.2rem;
    position: relative;
    .membershipDetailsSilderBgBox{
        position: absolute;
        width: 100%;
        height: 3.2rem;
        // background-image: linear-gradient(160deg, @33457e 30%,@06174d 70%);
        // background: url("/mine/static/img/xiangqing_head_bg@2x.png") no-repeat center center;
        background-size: 100% 100%;
        left: 0;
        top:0;
        border-radius:0 0 .3rem .3rem;
    }
    .membershipDetailsHeaderBox{
        height: .88rem;
        // font-family: PingFangSC-Semibold;
        font-size: .34rem;
        // color:@c005;
        text-align: center;
        position: relative;
        line-height: .88rem;

        a{
            position: absolute;
            width: .88rem;
            height: .88rem;
            left: 0;
            top: 0;
            font-size: 0.36rem;
            // color: @c005;
        }
    }

    .membershipDetailsBodyBox{
        position: relative;
        .membershipDetailsBodyTopBox{
            height: 1.92rem;
            // background-color: @31447d;
            border-radius: 0 0 .3rem .3rem;
        }
    }
    .membershipDetailsSilderBox{
        position: relative;
        padding-top: 2.5rem;
        overflow: hidden;
        
        .membershipDetailsContentBox {
            width: 90%;
            // background: url("/mine/static/img/quanyi_card_bg@2x.png");
            background-size: cover;
            background-repeat: no-repeat;
            box-shadow: 0 .02rem .26rem 0 rgba(221,221,221,0.50);
            border-radius: .2rem;
            min-height: 7.84rem;
            margin: .7rem auto .92rem;
            .membershipDetailsContentBox_next{
                padding: 1.75rem .875rem 1.65rem 0.875rem;
                img{
                    width: auto;
                    max-width: 100%;
                }
                h2{
                    // display: inline;
                    margin-bottom: 1.75rem;
                    font-size: 1.1rem;
                    // height: 4.85rem;
                    // line-height: 0.8rem;
                    background: linear-gradient(239deg, rgba(187,142,95,1) 0%, rgba(108,69,23,1) 100%);
                    -webkit-background-clip: text;
                    color: transparent;
                }
                p{
                    font-size: .28rem;
                    color: #272727;
                    text-align: justify;
                    line-height: 1.25rem;
                    margin-bottom: 2.25rem
                }
                span{
                    &.title{
                        font-size: .24rem;
                        color: #9B9B9B;
                        text-align: center;
                        display: block;
                        margin-bottom: .375rem;
                    }
                }
                &>a.tel{
                    // font-family: PingFangSC-Regular;
                    font-size: .24rem;
                    // color: @BE894D;
                    text-align: center;
                    display: block;
                }
                .linkBtnBox{
                    text-align: center;
                    margin-top: .86rem;
                    height: .8rem;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    a{
                        // position: absolute;
                        // left: 50%;
                        // top: 0;
                        width: 4.1rem;
                        height: 1.1rem;
                        // margin-left: -2.05rem;
                        // //background-image: linear-gradient(-135deg, @F1CDA8 0%, @B57E45 100%);
                        border-radius: .04rem;
                        font-size: .32rem;
                        // letter-spacing: 0;
                        text-align: center;
                        line-height: 1.1rem;
                        color: #fff;
                    }
                    .goldBgButton {
                        background: linear-gradient(90deg, #d4b788 0%, #bc965a 100%);
                        color: #fff;
                        text-align: center;
                    }
                }
            }
            
        }
    }
    
}
#taobao-best {
	position: relative;
}

.show-swiper {
	z-index: 3;

}
.swiper-container{
    overflow:initial;
}
.show-swiper .swiper-slide {
	width: 1.4rem;
    height: 1.4rem;
}
.show-swiper .swiper-slide.swiper-slide-active .goods{
    transform: scale(1.4);
    p{
        font-weight: bold;
    }
}
.show-swiper .swiper-slide .goods {
	width: 1.4rem;
	height: 1.4rem;
	line-height: 1.4rem;
	text-align: center;
    font-size: .24rem;
    // background: url("/mine/static/img/quanyi_icon_big@2x.png") no-repeat center center;
    background-size:100% 100%;
    border-radius: .2rem;
    position: relative;
    text-align: center;
    overflow: hidden;
    img{
        width: .52rem;
        height: .43rem;
        display: inline-block;
    }
    p{
        position: absolute;
        width: 1.4rem;
        height: 1.4rem;
        left: 0;
        top: 0;
        // font-family: PingFangSC-Regular;
        font-size: .24rem;
        color: #ddd;
        letter-spacing: 0;
        line-height: 2.1rem;
    }
}


</style>


