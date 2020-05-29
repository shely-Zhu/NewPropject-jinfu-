import $ from 'jquery'

//接口路径  默认配置一个api
var urlWebhttp ="/web";
var urlApphttp = "/app"


var type = "POST";

var urlStrs = {
    // 登录
    loginUrl: urlApphttp + '/account/frontend/loginCheckNew',
    // 任务管理首页-列表
    managementListUrl: urlWebhttp + '/task/v3.3.5/list',
    // 老带新，微信邀请好友
    oldRecommendNewUrl: urlWebhttp + '/account/oldRecommendNew',

    /************************       发现 start     *******************/
    // 查询单条文章(APPCMS后台)
    getArticleUrl: urlWebhttp + '/content/frontend/getArticle',
    // 视频医生校验
    checkVideoDoctorUrl: urlWebhttp + '/account/checkVideoDoctor',
    /************************       发现 end     *******************/
}
export  default urlStrs

