<!--
  视频医生
  @Author：yanruiting
  @Date：20200528
 -->
<template>
  <div>
    <!-- 头部 -->
    <page-title title="视频医生" :headerSetting="headerSetting" @headerClickCallBack="headerClickCallBack">
      <span slot="header_right">查看病历</span>
    </page-title>
    <!-- banner -->
    <div class="doctorTop">
      <div class="bannerWrapper">
        <div class="bannerCon" v-html="bannerImg"></div>
        <img src="../../assets/img/wave@2x.png" alt="">
      </div>
      <div class="callDoctor"></div>
    </div>
    <!-- 是否开通和缓服务提示 -->
    <div class="noDredgeDesc hide">
      <div class="descBlue toCustomer"></div> 
    </div>
    <!-- 提示线 -->
    <div class="transverseLineCon">
      <div class="transverseLine"></div>
    </div>
    <!-- 医生服务内容 -->
    <div class="doctorBottom"></div>
  </div>
</template>

<script>
import pageTitle from '@/components/common/pageTitle';
import banner from '@/assets/img/banner@2x.png';

export default {
  name: 'videoDoctor',
  data() {
    return {
      bannerImg: '<img src="'+ banner +'" alt="">',
      headerSetting: {
        needProcessSelf: "right",
        needBorder: false
      }
    }
  },
  components: { pageTitle },
  mounted() {
    this.getBanner();
  },
  methods: {
    // 获取banner图地址
    getBanner() {
      this.$axiosHttp.http({
        url: this.$httpConfig.getArticleUrl,
        params: {
          articleBelong: 4,
          applyType: 1,
        }
      } ,
      (res) => { //接口成功
        that.bannerImg = res.content;
      });
    },
    headerClickCallBack(type){

    }
  }
};
</script>

<style lang="scss" spoced>
.doctorTop {
  position: relative;
  .bannerWrapper {
    position: relative;
    .bannerCon {
      &>img {
        width: 100%;
      }
    }
    &>img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
  &>.callDoctor {
    width: 7.15rem;
    height: 2.5rem;
    margin: auto;
    background: url("../../assets/img/ljhjys@2x.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.noDredgeDesc {
  font-size: .65rem;
  line-height: 1rem;
  text-align: center;
  .descBlue {
    color: #0E246C;
    white-space: pre;
  }
}
.transverseLineCon {
  padding: 1rem .75rem 0;
  .transverseLine {
    border-top: 1px solid #E7E9ED;
  }
}
.doctorBottom {
  padding:0 0.75rem;
  &>img {
    width: 100%;
  }
}
</style>
