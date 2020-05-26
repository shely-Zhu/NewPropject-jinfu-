<!--
    会员活动列表
    @Author：史芸瑞
    @Date：2020-5-26
 -->


<template>
  <div>
    <mt-tabbar>
        <mt-tab-item id="annualDataOne" htmdEvt='annualDataOne_btn'>事业部</mt-tab-item>
        <mt-tab-item id="annualDataTwo" htmdEvt='annualDataTwo_btn'>营业部</mt-tab-item>
        <mt-tab-item id="annualDataThree" htmdEvt='annualDataThree_btn'>团队</mt-tab-item>
    </mt-tabbar> 

    <mt-tab-container>
        <mt-tab-container-item id="annualDataOne">
            <div class='echartsCon'>1</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="annualDataTwo">
            <div class='echartsCon'>2</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="annualDataThree">
            <div class='echartsCon'>3</div>
        </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
 
<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      list: [{
        name: "item1"
      },{
        name: "item2"
      },{
        name: "item3"
      },{
        name: "item4"
      },{
        name: "item5"
      },{
        name: "item6"
      },{
        name: "item7"
      },]
    };
  }
};
</script>


 



 