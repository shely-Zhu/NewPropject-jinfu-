// document.write("<script language=javascript src='./static/core/moment.js'><\/script>");
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';

let getType = function( obj ){

  if( Object.prototype.toString.call(obj) === '[object Number]' ){
    //数字
    return 'Number';
  }
  else if (Object.prototype.toString.call(obj) === '[object String]') {
    //字符串
    return 'String';
  }
  else if( Object.prototype.toString.call(obj) === '[object Array]' ){
    //数组
    return 'Array'
  }
  else if( Object.prototype.toString.call(obj) === "[object Function]") {
    //函数
    return 'Function';
  }
  else if( Object.prototype.toString.call(obj) === "[object Boolean]" ){
    //Boolean
    return 'Boolean';
  }
  else if( Object.prototype.toString.call(obj) === "[object Null]" ){
    //Null
    return 'Null';
  }
  else if( Object.prototype.toString.call(obj) === "[object Object]" ){
    //Object
    return 'Object';
  }
  else if( Object.prototype.toString.call(obj) === "[object Undefined]" ){
    //Undefined
    return 'Undefined';
  }
}


let clone = function( obj ){
  var dataCopy = getType(obj)  == 'Array' ? [] : {};
  for (var item in obj) {
    dataCopy[item] = typeof obj[item] === 'object' ? clone(obj[item]) : obj[item];
  }
  return dataCopy;  
};

//两个对象合并，data_2复制到data_1上，目前只能合并层级为2的
let objCombine = function( obj_1, obj_2){
  var d_1 = clone( obj_1 ),
    d_2 = clone( obj_2 );

  for(var key in d_2){
    //循环d_2，如果d_1没有这一条，直接复制过去，或d_1有这条，但d_2[key]不是对象
    if( !d_1.hasOwnProperty(key) || getType(d_2[key]) != 'Object' ){
      d_1[key] = d_2[key]
  　}
    else {
      //循环d_2[key]
      for(var k in d_2[key]){
        //直接复制过去
        d_1[key][k] = d_2[key][k]
      }
      
    }
  }
  return d_1;
};


let utils = {
  //提示弹窗
  alertI: function (title, text,callback) {
      var callback=callback?callback:function(){};
      MessageBox.alert(text,'').then(action => callback());;
  },
  //confirm msgBox
  confirmContext:function(text,callback){
    var callback=callback?callback:function(){};
    MessageBox.confirm(text,'').then(action=>callback());
  },
  //校验弹框
  toastI:function(title){
    Toast(title);
  },
  //文件类型转换
  // fileParseType:function(fileName){
  //   if(fileName != null && fileName != ""){
  //     var pos = fileName.replace(/.+\./, "");
  //     return pos;
  //   }else{
  //       return "";
  //   }
  // },
  //格式化时间
  // momentFmtYmdhs:function(str){
  //   if (str != null && str != '') {
  //      return moment(str).format("YYYY-MM-DD HH:mm:ss");
  //   }
  //   return "&nbsp;"; 
  // },
  // momentFmtYmdh:function(str) {
  //   if (str != null && str != '') {
  //       return moment(str).format("YYYY-MM-DD HH:mm");
  //   }
  //   return "&nbsp;";
  // },
  parseType:function (type) {
    try {
        type = parseInt(type);
        if (isNaN(type)) {
            return '';
        } else {
            return type;
        }
    } catch (e) {
        return '';
    }
  },
   //保障期限类型转换
  //  guaranteeDateType:function(unit){
  //   switch (this.parseType(unit)) {
  //     case 0:
  //         return "小时";
  //     case 1:
  //         return "日";
  //     case 2:
  //         return "月";
  //     case 3:
  //         return "年";
  //     default :
  //         return "";
  //   }
  // },
  //  //项目期限类型转换
  //  projectDateType:function(unit){
  //   switch (this.parseType(unit)) {
  //     case 0:
  //         return "日";
  //     case 1:
  //         return "月";
  //     case 2:
  //         return "年";
  //     default :
  //         return "";
  //   }
  // },
  //亿|万转换
  moneyChange(val){
    if(val == null || val == undefined || val == ''){
      return 0 + '元'
    }else if(val == 0){
      return 0 + '元'
    }else{
      if(val/100000000 >= 1){
        return val/100000000 + '亿'
      }else{
        return val/10000 + '万'
      }
    }
  },
  //替换null
  replaceNull:function(str) {
    if (str == null) {
        return "";
    } else {
        return str;
    }
  },
  parseType:function(type) {
    try {
        type = parseInt(type);
        if (isNaN(type)) {
            return '';
        } else {
            return type;
        }
    } catch (e) {
        return '';
    }
  },

  //  统一客户身份类型
  // identityTypeOfCustomer:function(type,obj) {
  //   switch (obj.$commonJS.parseType(type)) {
  //       case 0 : return "身份证";
  //       case 1 : return "本国护照";
  //       case 2 : return "军官证";
  //       case 3 : return "解放军士兵证";
  //       case 4 : return "回乡证";
  //       case 5 : return "户口簿";
  //       case 6 : return "外国护照";
  //       case 7 : return "其他";
  //       case 8 : return "解放军文职干部证";
  //       case 9 : return "警官证";
  //       case 10 : return "港澳居民来往内地通行证";
  //       case 11 : return "居住证";
  //       case 12 : return "社保卡";
  //       case 13 : return "台胞证";
  //       case 14 : return "台湾居民来往大陆通行证";
  //       default : return "";
  //   }
  // },
  // parseCurrency:function(currency){
  //   switch (currency) {
  //       case null : return "元";
  //       case 0 : return "元";
  //       case 1 : return "港币";
  //       case 2 : return "美元";
  //       default : return "";
  //   }
  // },
  // parseIntentionStatus1:function(status){
  //   switch (status) {
  //     case null : return "";
  //     case 0 : return "投保";
  //     case 1 : return "拒保";
  //     case 2 : return "照会";
  //     case 3 : return "撤单";
  //     case 4 : return "延期承保";
  //     case 5 : return "承保";
  //     case 6 : return "打款";
  //     case 7 : return "待支付";
  //     case 8 : return "支付失败";
  //     case 9 : return "已失效";
  //     default : return "";
  // }
  // },
  // parseIntentionStatus:function(status){
  //   switch (status) {
  //     case null : return "";
  //     case 0 : return "已投保";
  //     case 1 : return "待支付";
  //     case 2 : return "支付失败";
  //     case 3 : return "已失效";
  //     case 4 : return "拒保";
  //     case 5 : return "待出单";
  //     case 6 : return "已出单";
  //     case 7 : return "出单失败";
  //     default : return "";
  // }
  // },
  //异常信息格式化
  errorMessage:function(response){
    switch (response.status) {
        case 400:
          return '请求错误';
          break
  
        case 401:
          return '未授权，请登录';
          break
  
        case 403:
          return '拒绝访问';
          break
  
        case 404:
          return `请求地址出错: ${response.config.url}`;
          break
  
        case 408:
          return '请求超时';
          break
  
        case 500:
          return '服务器内部错误';
          break
  
        case 501:
          return '服务未实现';
          break
  
        case 502:
          return '网关错误';
          break
  
        case 503:
          return '服务不可用';
          break
  
        case 504:
          return '网关超时';
          break
  
        case 505:
          return 'HTTP版本不受支持';
          break
  
        default:
      }
  },
  //判断是否有企金
  // indexOfFun(val,val2){
  //     var val2 = val2 + '';
  //     var val = val + '';
  //     return val.indexOf(val2)
  // },
  
  getType: getType,

  //深拷贝一个对象（对象中可以带数组）
  objCombine : objCombine,

  //判断数据是否为空
  dataIsEmpty: function( data ){

    var dataType = getType(data);

    if( dataType == 'Array' && data.length == 0){
      return true
    }
    else if( dataType == 'Null' || dataType == 'Undefined' ){
      return true;
    }
    else if( dataType == 'Object'){
      for (var i in data) {
          return false; //如果不为空，则会执行到这一步，返回false
      }
      return true; //否则返回true
    }

    return false;
  },

  //判断接口出参的数据是否全为0
  isAllZero: function( data ){
    //  data示例：
    //  
    //  若接口出参为：{
    //      name: skgn,
    //      age: 12,
    //      idList: [{
    //          idCard: 324234234,
    //          idName: 'idCard_1'
    //      },{
    //          idCard: 324234234,
    //          idName: 'idCard_2'
    //      }]
    //  }
    //  
    //  需要判断 name, idList中的每一条的idName是否为空
    //  
    //  data需要传：['skgn', 'idCard_1', 'idCard_2']
    //  
    //  代码里会循环data，判断每一项是否为0
    //  如果都是0，则返回true，否则返回false
    let isZero = true;

    data.forEach((item, index, arr) => {
        if( item !== 0 && !!item){
          //有不为0的
          isZero = false;
        }
    });

    return isZero;  
  },

  //判断接口出参的数据是否为空（除去0的情况）
  isAllEmpty: function( data ){
    //  data示例：
    //  
    //  若接口出参为：{
    //      name: skgn,
    //      age: 12,
    //      idList: [{
    //          idCard: 324234234,
    //          idName: 'idCard_1'
    //      },{
    //          idCard: 324234234,
    //          idName: 'idCard_2'
    //      }]
    //  }
    //  
    //  需要判断 name, idList中的每一条的idName是否为空
    //  
    //  data需要传：['skgn', 'idCard_1', 'idCard_2']
    //  
    //  代码里会循环data，判断每一项是否为空字符串
    //  如果都是空字符串，则返回true，否则返回false
    
    let isEmpty = true;

    data.forEach((item, index, arr) => {
        if( item !== 0 || !!item ){
          //0算有值
          isEmpty = false;
        }
    });

    return isEmpty;
    
  }
}
export default utils