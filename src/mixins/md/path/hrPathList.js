/**
 * 路由和evtList对应表
 *
 * 任务管理项目使用
 *
 * 每条evtid都以 task_management_ 开始，表示是属于任务管理的
 */
var mdPathList = {

	"/" : { evtid: 'task_management_index', topic: '任务管理-首页', info: ''} ,
	"/ManagementDetail" : { evtid: 'task_management_managementDetail', topic: '任务管理-任务详情', info: ''} ,
	"/SendScope": { evtid: 'task_management_sendScope', topic: '任务管理-发送范围', info: '' },
	"/FinishedCondition": { evtid: 'task_management_finishedCondition', topic: '任务管理-完成情况', info: '' }
}

module.exports = mdPathList;