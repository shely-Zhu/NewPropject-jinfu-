import Vue from 'vue'
import Router from 'vue-router'

// 任务管理-任务详情
const Index = r => require.ensure([], () => r(require('@/components/index.vue')), 'chunkname1');

// 邀请好友
const inviteFriends = r => require.ensure([], () => r(require('@/pages/mine/inviteFriends.vue')), 'chunkname3');

// 理财-管理人详情
const managerDetail = r => require.ensure([], () => r(require('@/pages/manage/managerDetail.vue')), 'chunkname4');

// 会员活动列表
const memberActivitiesList = r => require.ensure([], () => r(require('@/pages/memberClub/memberActivitiesList.vue')), 'chunkname5');

// 会员权益
// const membershipInterests = r => require.ensure([], () => r(require('@/components/membershipInterests.vue')), 'chunkname6');
// 会员权益详情
const membershipDetails = r => require.ensure([], () => r(require('@/pages/mine/membershipDetails.vue')), 'chunkname6');

// 我的-设置-关于
// const aboutHome = r => require.ensure([], () => r(require('@/pages/mine/aboutHome.vue')), 'chunkname7');
// 我的-设置-关于-隐私政策
const aboutSecret = r => require.ensure([], () => r(require('@/pages/mine/aboutSecret.vue')), 'chunkname8');
// 我的-设置-关于-服务协议
const aboutServiceAgreement= r => require.ensure([], () => r(require('@/pages/mine/aboutServiceAgreement.vue')), 'chunkname9');
const login = r => require.ensure([], () => r(require('@/pages/login/login.vue')), 'chunkname10');

// 会员活动详情
const memberActivitiesDetail = r => require.ensure([], () => r(require('@/pages/memberClub/memberActivitiesDetail.vue')), 'chunkname11');

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
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录',
        keepAlive: true
      },
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
      path:'/memberActivitiesDetail',
      name: 'memberActivitiesDetail',
      component: memberActivitiesDetail,
      meta: {
        title: '会员活动详情',
        keepAlive: true
      }
    },
    {
      path:'/membershipDetails',
      name: 'membershipDetails',
      component: membershipDetails,
      meta: {
        title: '会员权益详情',
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
    },
    {
      path: '/videoDoctor',
      name: 'videoDoctor',
      component: () => import(/* webpackChunkName: "discovery" */ '@/pages/discovery/videoDoctor.vue'),
      meta: {
        title: '视频医生',
        keepAlive: true
      }
    }
  ]
})
