import Vue from 'vue'
import Router from 'vue-router'

// 任务管理-任务详情
const Index = r => require.ensure([], () => r(require('@/components/index.vue')), 'chunkname1');

//任务管理首页模块
const ManagementIndex = r => require.ensure([], () => r(require('@/components/managementIndex.vue')), 'chunkname3');

// 邀请好友
const inviteFriends = r => require.ensure([], () => r(require('@/pages/mine/inviteFriends.vue')), 'chunkname4');

// 理财-管理人详情
const managerDetail = r => require.ensure([], () => r(require('@/pages/manage/managerDetail.vue')), 'chunkname5');

// 会员活动列表
const memberActivitiesList = r => require.ensure([], () => r(require('@/components/memberActivitiesList.vue')), 'chunkname5');

// 我的-设置-关于
const aboutHome = r => require.ensure([], () => r(require('@/pages/mine/aboutHome.vue')), 'chunkname7');
// 我的-设置-关于-隐私政策
const aboutSecret = r => require.ensure([], () => r(require('@/pages/mine/aboutSecret.vue')), 'chunkname8');
// 我的-设置-关于-服务协议
const aboutServiceAgreement= r => require.ensure([], () => r(require('@/pages/mine/aboutServiceAgreement.vue')), 'chunkname9');

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
      path: '/inviteFriends',
      name: 'inviteFriends',
      component: inviteFriends,
      meta: {
        title: '邀请好友',
        keepAlive: true
      }
    },
    {
      path:'/managerDetail',
      name: 'managerDetail',
      component: managerDetail,
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
    },
    {
      path: '/aboutHome',
      name: 'aboutHome',
      component: aboutHome,
      meta: {
        title: '关于',
        keepAlive: true
      }
    },
    {
      path: '/aboutSecret',
      name: 'aboutSecret',
      component: aboutSecret,
      meta: {
        title: '隐私权政策协议',
        keepAlive: true
      }
    },
    {
      path: '/aboutServiceAgreement',
      name: 'aboutServiceAgreement',
      component: aboutServiceAgreement,
      meta: {
        title: '服务协议',
        keepAlive: true
      }
    }
  ]
})
