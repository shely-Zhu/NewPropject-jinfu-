<!--
    页面title模板
    @Author：史芸瑞
    @Date：2020-5-26
    @desc：以插槽的形式对外开放，支持自定义局部样式与点击回调。
    自定义设置请在headerSetting中传值，目前支持两个属性
        1.needProcessSelf：如需自定义点击事件处理，设置为想要自定义处理的位置。同时在组件中接收 headerClickCallBack 并指向自己的处理函数。
        2.backType：返回模式。目前支持 返回上一个H5 返回App和返回指定连接
    @example：memberActivitiesList.vue
 -->
<template>
  <div id="dialog" class="dialog" v-show="show">
    <div class="dialog_mask">
      <div class="dialog_wrapper">
        <div class="dialog_title">{{title}}</div>
        <div class="dialog_content">{{content}}</div>
        <div class="dialog_bottom">
          <button v-for="(item) in buttons" :key="item" @click="processClick($event)">{{item}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialog",
  props: {
    title: {
      //标题
      type: String,
      default: "温馨提示"
    },
    content: {
      //内容
      type: String,
      default: ""
    },
    buttons: {
      //下方按钮从左到右文案
      type: Array,
      default: ()=>{
          return ["取消", "确定"]
      }
    },
    show: {
      //控制dialog显示或隐藏
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    // desc: 下方button的点击事件
    // param: 点击的按钮的文案，回传给父控件
    processClick(e) {
      this.$emit("dialogClick", e.currentTarget.innerText);
    }
  }
};
</script>

<style lang="scss">
.dialog_mask {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.8);

  .dialog_wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(90deg, #f5ecd5 0%, #f0dfba 100%);

    .dialog_title {
      font-size: 0.8rem;
      padding-top: 1rem;
      color: #272727;
      font-weight: bold;
      text-align: center;
      border-radius: 0.3rem 0.3rem 0 0;
    }
    .dialog_content {
      padding: 1rem;
      text-align: center;
      color: #272727;
      font-size: 0.65rem;
      font-weight: 400;
    }
    .dialog_bottom {
      display: flex;
      height: 2.5rem;
      width: 100%;
      background: #fdf3dd;
      border-radius: 0 0 0.3rem 0.3rem;

      button {
        flex: 1;
        height: 100%;
        text-align: center;
        font-size: 0.8rem;
        color: #272727;
      }
    }
  }
}
</style>
