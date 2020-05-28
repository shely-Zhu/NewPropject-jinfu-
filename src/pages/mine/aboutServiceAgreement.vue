<!--
    我的-设置-关于-服务协议
    @Author：巴双
    @Date：20200527
 -->
<template>
  <div class="about-box">
    服务协议
  </div>
</template>
<script>

export default {
  data() {
    return {
      
    }
  },
  components: {},
  mounted() {
   
  },
  created(){
    console.log(this.$route.query.backUrl)
  },
  methods: {
   
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
