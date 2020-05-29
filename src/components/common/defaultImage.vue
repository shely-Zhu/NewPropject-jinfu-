<!--
     理财-无数据默认图
    @Author：bashuang
    @Date：20200528
 -->
<template>
  <div class="no-data-wrap">
      <img src="../../assets/img/no_data_img.png" alt="" :style="imgTopStyle?imgTopStyle:''">
      <div>暂无内容</div>
  </div>
</template>
<script>

// import $ from 'jquery'
  export default {
    name: "defaultImage",
    props:{
        imgTopStyle: { //调整暂无数据图片的位置
            type: String,
            default: 'margin-top:3.7rem'
        },
    },
    created(){
    },
    mounted(){
      
    },
    methods:{
    }
  }
</script>
<style lang="scss">
  .no-data-wrap{
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    overflow:hidden;
    >img{
      display: block;
      width: 8.6rem;
      height: 5.2rem;
      margin:0 auto .425rem;
    }
    >div{
      /* display: block */
      color: #272727;
      height:1.2rem;
      font-size:.85rem;
      font-weight:500;
      line-height:1.2rem;
      text-align: center
    }
  }
</style>
