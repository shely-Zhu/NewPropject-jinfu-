/**
 * 点击时，按钮的htmdEvt属性和evtList对应表
 *
 * 任务管理项目使用
 *
 * 每个evtid都以 task_management_ 开始，表示是属于任务管理的
 */

var mdClickList = {

    "back_btn" : {type:'click', evtid: 'task_management_back_btn',  topic:'点击任务管理-返回', info: '' }, 
    "get_task" : {type:'click', evtid: 'task_management_get_task',  topic:'点击任务首页-我发出的任务', info: '' },
    "send_task" : { type: 'click', evtid: 'task_management_send_task', topic: '点击任务首页-我收到的任务', info: '' },
    "enter_detail": { type: 'click', evtid: 'task_management_enter_detail', topic: '点击任务首页-进入任务详情', info: '' },
    "completed_list": { type: 'click', evtid: 'task_management_completed_list', topic: '点击完成情况-已完成', info: '' },
    "uncompleted_list": { type: 'click', evtid: 'task_management_uncompleted_list', topic: '点击完成情况-未完成', info: '' },
    "bread_btn": { type: 'click', evtid: 'task_management_bread_btn', topic: '点击完成情况-面包屑', info: '' },
    "department_btn": { type: 'click', evtid: 'task_management_department_btn', topic: '点击完成情况-进入部门', info: '' },
    "to_send_scope": { type: 'click', evtid: 'task_management_to_send_scope', topic: '点击任务详情-进发送范围页面', info: '' },
    "to_task_detail": { type: 'click', evtid: 'task_management_to_task_detail', topic: '点击任务详情-进会销详情', info: '' },
    "finish_btn": { type: 'click', evtid: 'task_management_finish_btn', topic: '点击任务详情-应知应会-已完成', info: '' },
    "unfinish_btn": { type: 'click', evtid: 'task_management_unfinish_btn', topic: '点击任务详情-应知应会-未完成', info: '' },
    "look_finish": { type: 'click', evtid: 'task_management_look_finish', topic: '点击任务详情-应知应会-查看全部-进完成情况', info: '' },
    "follow_btn": { type: 'click', evtid: 'task_management_follow_btn', topic: '点击任务详情-会销跟进-已跟进', info: '' },
    "not_follow_btn": { type: 'click', evtid: 'task_management_not_follow_btn', topic: '点击任务详情-会销跟进-未跟进', info: '' },
    "search_more": { type: 'click', evtid: 'task_management_search_more', topic: '点击任务详情-查看全部执行人', info: '' },
    "to_forward": { type: 'click', evtid: 'task_management_to_forward', topic: '点击任务详情-立即转发', info: '' },
    "contact_customer": { type: 'click', evtid: 'task_management_contact_customer', topic: '点击任务详情-联系客户', info: '' },
}

module.exports = mdClickList;