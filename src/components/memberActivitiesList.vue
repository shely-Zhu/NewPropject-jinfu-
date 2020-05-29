<!--
    会员活动列表
    @Author：史芸瑞
    @Date：2020-5-26
 -->

<template>
  <div id="member_activities_list">
    <page-title title="会员活动" :headerSetting="headerSetting" @headerClickCallBack="headerClickCallBack">
      <mt-search
        slot="page_center"
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    </page-title>

    <div class="nav">
      <div @click="active = 'tab-container1'" :class="{'selected': active == 'tab-container1'}">
        即将上线
      </div>
      <div @click="active = 'tab-container2'" :class="{'selected': active == 'tab-container2'}">
        进行中
      </div>
      <div @click="active = 'tab-container3'" :class="{'selected': active == 'tab-container3'}">
        已结束
      </div>
    </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          
          <list-load-more @loadMore="loadMore" @refresh="refresh">
            <div v-show="!listLoading" v-for="(item) in listInfo2.data.activityVoPageInfo.list" :key="item.id" class="card">
              <div class="activityListBox">
                  <i v-if="item.prizeFlag">{{item.prize}}</i>
                  <img class="lazyload" :src="item.actImgUrl">
                  <span v-if="item.isPlayback" class="replayBtn">观看回放</span>
              </div>
              <div class="activityListBottomBox">
                  <h5>{{item.actName}}</h5>
                  <p v-if="item.isLive"><i>直播时间</i>{{item.actPlayTimeMark}}</p>
                  <p v-if="item.actStartDate"><i>活动时间</i>{{item.actStartDate}}至{{item.actEndDate}}</p>
              </div>
            </div>
          </list-load-more>

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">

        	<list-load-more @loadMore="loadMore" @refresh="refresh">
            <div v-show="!listLoading" v-for="(item) in listInfo2.data.activityVoPageInfo.list" :key="item.id" class="card">
              <div class="activityListBox">
                  <i v-if="item.prizeFlag">{{item.prize}}</i>
                  <img class="lazyload" :src="item.actImgUrl">
                  <span v-if="item.isPlayback" class="replayBtn">观看回放</span>
              </div>
              <div class="activityListBottomBox">
                  <h5>{{item.actName}}</h5>
                  <p v-if="item.isLive"><i>直播时间</i>{{item.actPlayTimeMark}}</p>
                  <p v-if="item.actStartDate"><i>活动时间</i>{{item.actStartDate}}至{{item.actEndDate}}</p>
              </div>
            </div>
          </list-load-more>

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
        	
          <list-load-more @loadMore="loadMore" @refresh="refresh">
            <div v-show="!listLoading" v-for="(item) in listInfo2.data.activityVoPageInfo.list" :key="item.id" class="card">
              <div class="activityListBox">
                  <i v-if="item.prizeFlag">{{item.prize}}</i>
                  <img class="lazyload" :src="item.actImgUrl">
                  <span v-if="item.isPlayback" class="replayBtn">观看回放</span>
              </div>
              <div class="activityListBottomBox">
                  <h5>{{item.actName}}</h5>
                  <p v-if="item.isLive"><i>直播时间</i>{{item.actPlayTimeMark}}</p>
                  <p v-if="item.actStartDate"><i>活动时间</i>{{item.actStartDate}}至{{item.actEndDate}}</p>
              </div>
            </div>
          </list-load-more>

        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    
  </div>
</template>
 
<script>

import pageTitle from './common/pageTitle'
import listLoadMore from './common/listLoadMore'
import "../assets/css/memberActivitiesList.scss"

export default {
  components: {pageTitle, listLoadMore},
  data() {
    return {
      active: 'tab-container1',
      //头部的设置参数
      headerSetting: {
        needProcessSelf: "right"
      },
      listInfo1: [],//列表数据
      listInfo2: [],//列表数据
      listInfo3: [],//列表数据
      listLoading: false,//列表是否加载中
    };
  },
  created(){
    const list = '{"status":0,"message":"处理成功！","data":{"startPage":"1","pageSize":"10","pages":"1","activityVoPageInfo":{"list":[{"id":"1","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":0,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"2","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"3","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"4","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"5","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"6","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"7","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"8","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"},{"id":"9","actType":"1","actId":"11","actName":"活动名称666666","actStartDate":"2019-10-10","actEndDate":"2019-10-11","actProvince":"海南","actProvinceNO":"100","actCity":"三亚","actCityNO":"3","actImgUrl":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2817328916,2275304795&fm=26&gp=0.jpg","prizeFlag":true,"prize":"参与赠送30元电话卡30元电话卡","actForm":1,"actPlayStartTim":"2019-10-11 19:00:00","actPlayEndTime":"2019-10-11 19:00:00","isPlayback":1,"actPlayTimeMark":"2月18日 15:00到16:00"}]}}}'
    this.listInfo1 = JSON.parse(list);
    this.listInfo2 = JSON.parse(list);
  },
  methods:{
    headerClickCallBack(type){
      alert("自定义的" + type)
    },
    //上拉加载更多
    loadMore(pageNp, resolve, reject) {
      setTimeout(()=>{

        resolve("status")
      }, 1500)
    },
    //下拉刷新
    refresh(resolve, reject){
      setTimeout(()=>{

        resolve()
      }, 1500)
    }
  },
  watch: {
    active(val, oldVal){
      //监听页面的切换 val为切换至的mt-tab-container-item的id
      console.log(val + "-----" + oldVal)
    }
  }
};
</script>
