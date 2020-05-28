import $ from 'jquery'

//接口路径  默认配置一个api
var urlWebhttp ="/web";


var type = "POST";

var urlStrs = {
    // 任务管理首页-列表
    managementListUrl: urlWebhttp + '/task/v3.3.5/list',
<<<<<<< HEAD
    //完成情况-全部完成情况列表
    finishAllListUrl: urlWebhttp + '/task/v3.3.5/allList',
    // 发送范围
    sendingRangeUrl: urlWebhttp + '/task/v3.3.5/sendingRange',

    // 查看带跟进已跟进成员列表
    activityListUrl: urlWebhttp + '/task/v3.3.5/activityList',
    // 理顾宝任务详情页-已完成未完成列表
    detailListUrl: urlWebhttp + '/task/v3.3.5/detailList',
    // 查询客户详情信息（仅任务详情页面获取联系方式时查询）
    customerDetailUrl: urlWebhttp + '/customer/v3.3.5/customerDetail',
    // 更新转发任务完成状态
    finishForwardTaskUrl: urlWebhttp + '/task/v3.3.5/finishForwardTask',
    // 查询单条文章(APPCMS后台)
    getArticleUrl: urlWebhttp + '/content/frontend/getArticle',
    // 老带新，微信邀请好友
    oldRecommendNewUrl:'/web/account/oldRecommendNew',
}
export  default urlStrs

