<!--
  视频医生
  @Author：yanruiting
  @Date：20200528
 -->
<template>
  <page-title title="视频医生" :headerSetting="headerSetting" @headerClickCallBack="headerClickCallBack">
    <span slot="header_right">查看病历</span>
  </page-title>
</template>

<script>
import pageTitle from '../../components/common/pageTitle'
export default {
  name: 'videoDoctor',
  components: { pageTitle },
  data() {
    return {
      headerSetting: {
        needProcessSelf: "right",
        needBorder: false
      }
    }
  },
  mounted() {

  },
  methods: {
    headerClickCallBack(type){

    }
  }
};
</script>

<style lang="scss" spoced>

</style>
