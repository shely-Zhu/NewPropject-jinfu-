
// import axiosHttp from '@common/js/ajax/axiosHttp.js'
// 此埋点文件只适用于嵌入app内的页面
var mdPathList = require('./path/hrPathList.js')
var mdClickList = require('./path/hrClickList.js')
var splitUrl = require('../../utils/splitUrl.js')


//调用埋点
function mdFun(type, mParamObj, mdInfo){
	var mdObj = {
		pf: 2,  //pf参数，表示当前项目，必传
		type: type,  //pc/app/wap，必传
		//页面路径对应id配置，用于页面进入离开的埋点请求，必传
		mdPathList : mdPathList ,
		//点击事件对应id配置，必传
		mdClickList: mdClickList,
		otherParams: mParamObj,
	}
	if(window._htmd){

		console.log('给埋点传参:' + mdObj);

		window._htmd(mdObj);
	}

}

if ( window.appIsIOS ) {

	//ios手机
	//mdCallBack 是H5注册在window上的埋点回调函数，原生在接受到请求后会调用此callBack将数据以json的形式返回回来。
	if (!window.mdCallBack){

		//防止重复注册回调函数 影响埋点
		window.mdCallBack = function(mdValue){
			//mdValue 原生的数据 json格式
			var pcParam = JSON.parse(mdValue);

			mdFun('app',pcParam,'');
		};
	}
}

else{

	console.log('非ios手机');

	//如果session里没有，从url上取
	var pcParam = {
		cn: '',  //理顾工号
	}

	// url上有cn的时候设置
	var cn = splitUrl()['cn'];
	!!cn && (pcParam.cn = cn);

	//调用埋点底层方法
	mdFun('app',pcParam,'');

}








