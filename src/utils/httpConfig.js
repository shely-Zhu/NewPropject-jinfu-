import $ from 'jquery'

//接口路径  默认配置一个api
var urlWebhttp ="/api";


var type = "POST";

var urlStrs = {
    // 任务管理首页-列表
    managementListUrl: urlWebhttp + '/task/v3.3.5/list',
    // 老带新，微信邀请好友
    oldRecommendNewUrl:'/web/account/oldRecommendNew',

}
export  default urlStrs

