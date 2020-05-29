<!--
    我的-设置-关于-隐私政策
    @Author：巴双
    @Date：20200527
 -->
<template>
  <div class="about-box">
    隐私权政策协议
  </div>
</template>
<script>

export default {
  data() {
    return {
      
    }
  },
  components: {},
  created() {
    // this.getInitData()
  },
  created(){
    console.log(this.$route.query.backUrl)
  },
  methods: {
    // 获取接口数据
    getInitData(){
      Indicator.open()
      this.$axiosHttp.http({
        url: this.$httpConfig.Url,
        params: {
          empNo:''||''
        }
      } ,
      (res) => { //接口成功0000
        Indicator.close(); //调取成功后关闭加载圈
      },(res) => { // 接口错误4000
        Indicator.close();
        let message = res.data.message ? res.data.message : '系统开小差啦，请联系系统管理员';
        MessageBox('提示', message); 
      },(res) => { // 接口返回1000
        Indicator.close();
      });
    },
  }
};
</script>

<style lang="scss" spoced>
.about-box{
  width: 100%;
  height: 100%;
  background-color: #F7FAFD;
  overflow: auto;
  

}
</style>
