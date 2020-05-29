<!--
  视频医生
  @Author：yanruiting
  @Date：20200529
 -->
<template>
  <div>
    <div class="title">股份联调环境登录</div>
    <mt-field  label="手机号:" placeholder="输入手机号" v-model="userPhone"  @input="changeUserPhone"></mt-field>
    <mt-field  label="验证码:" placeholder="输入验证码" v-model="phoneCode"  @input="changePhoneCode"></mt-field>
    <mt-button type="default" size="large" @click="toLogin">登录</mt-button>
  </div>
</template>

<script>

import encryptedData from "@/mixins/encryption";

export default {
  name: 'login',
  data() {
    return {
      userPhone: '',
      phoneCode: ''
    }
  },
  mixins: [ encryptedData ],
  methods: {
    changeUserPhone(value) {
      this.userPhone = value;
    },
    changePhoneCode(value) {
      this.phoneCode = value;
    },
    toLogin() {
      var that = this;
      this.$axiosHttp.http({
        url: this.$httpConfig.loginUrl,
        params: {
          accountType: 1,
          mobile: String(that.userPhone), //账号
          password: this.encryptedData(that.phoneCode), //密码
          channelType: '3',
          deviceId:'9e2d8ca1eda6e5d695b6b719ed28b3dd',
        }
      },(res) => {
        console.log(res)
      });
    }
  }
};
</script>

<style lang="scss" spoced>

</style>
