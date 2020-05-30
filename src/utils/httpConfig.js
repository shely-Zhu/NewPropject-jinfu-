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
    // 查询用户基本信息
    UserBaseInfoUrl: urlWebhttp + '/account/queryUserBaseInfo',
    // 获取理财师列表
    custBroUrl: urlWebhttp + '/account/custBroRelQuery',
    // 获取微信分享内容
    shareContentUrl: urlWebhttp + '/content/frontend/findContentByCategory',

    // -------理财---------
    // 管理人详情
    managerDetailUrl: urlWebhttp + '/ms/manager/detail',
    managerArticleUrl: urlWebhttp + '/ms/manager/article',
    
    /************************       发现 start     *******************/
    // 查询单条文章(APPCMS后台)
    getArticleUrl: urlWebhttp + '/content/frontend/getArticle',
    // 视频医生校验
    checkVideoDoctorUrl: urlWebhttp + '/account/checkVideoDoctor',
    /************************       发现 end     *******************/
}
export  default urlStrs

