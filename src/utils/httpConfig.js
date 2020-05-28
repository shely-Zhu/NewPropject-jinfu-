import $ from 'jquery'

//接口路径  默认配置一个api
var urlWebhttp ="/web";


var type = "POST";

var urlStrs = {
    // 任务管理首页-列表
    managementListUrl: urlWebhttp + '/task/v3.3.5/list',
    // 查询单条文章(APPCMS后台)
    getArticleUrl: urlWebhttp + '/content/frontend/getArticle',
    // 老带新，微信邀请好友
    oldRecommendNewUrl: urlWebhttp + '/account/oldRecommendNew',
}
export  default urlStrs

