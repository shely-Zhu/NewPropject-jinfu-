import Vue from 'vue'
import Router from 'vue-router'

// 任务管理-任务详情
const Index = r => require.ensure([], () => r(require('@/components/index.vue')), 'chunkname1');

// 任务管理-任务详情
const MemberRightDetail = r => require.ensure([], () => r(require('@/components/memberRightsDetail.vue')), 'chunkname2');

//任务管理首页模块
const ManagementIndex = r => require.ensure([], () => r(require('@/components/managementIndex.vue')), 'chunkname3');

// 邀请好友
const InviteFriends = r => require.ensure([], () => r(require('@/components/InviteFriends.vue')), 'chunkname4');

// 理财-管理人详情
const ManagerDetail = r => require.ensure([], () => r(require('@/components/managerDetail.vue')), 'chunkname5');

// 会员活动列表
const memberActivitiesList = r => require.ensure([], () => r(require('@/components/memberActivitiesList.vue')), 'chunkname5');


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页',
        keepAlive: true
      },
    },
    {
      path: '/ManagementIndex',
      name: 'ManagementIndex',
      component: ManagementIndex,
      meta: {
        title: '会员权益',
        keepAlive: true
      }
    },
    {
      path: '/InviteFriends',
      name: 'InviteFriends',
      component: InviteFriends,
      meta: {
        title: '邀请好友',
        keepAlive: true
      }
    },
    {
      path:'/ManagerDetail',
      name: 'ManagerDetail',
      component: ManagerDetail,
      meta: {
        title: '管理人详情',
        keepAlive: true
      }
    },
    {
      path:'/memberActivitiesList',
      name: 'memberActivitiesList',
      component: memberActivitiesList,
      meta: {
        title: '会员活动列表',
        keepAlive: true
      }
    }
  ]
})
