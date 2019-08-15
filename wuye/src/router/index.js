import Vue from 'vue'
import Router from 'vue-router'

import bill from '@/components/bill'
import footer from '@/components/footer' //底部导航

import index from '@/pages/index' //物业首页

import pay from '@/pages/pay/pay' //查询缴费
import parkFees from '@/pages/pay/parkFees'  //停车缴费
import payEnquiry from '@/pages/pay/payEnquiry' //缴费查询

import myHouse from '@/pages/house/myHouse'   //我的房屋
import addHouse from '@/pages/house/addHouse' //添加房屋
import bindHouse from '@/pages/house/bindHouse'  //绑定房屋

import butler from '@/pages/butler/index'   //我的管家
import threadDetail from '@/pages/butler/threadDetail'    //消息回复

import AddThread from '@/pages/repairs/index'   //发布
import news from '@/pages/news/index'        //新闻资讯
import Section from '@/pages/news/section'  //公告
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index,
      meta:{
        title:'社区物业'
      },
    },
    {
      path:'/section',
      name:'section',
      component:Section,
      meta:{
        title:'物业版块'
      },
    },
    {
      path:'/pay',
      name:'pay',
      component:pay,
      meta:{
        title:''
      }
    },  
    {
      path:'/parkFees',
      name:'parkFees',
      component:parkFees,
      meta:{
        title:'停车缴费'
      }
    },
    {
      path:'/payEnquiry',
      name:'payEnquiry',
      component:payEnquiry,
      meta:{
        title:''
      }
    },
    {
      path:'/myHouse',
      name: 'myHouse',
      component:myHouse,
      meta:{
        title: '我是业主'
      }
    },
    {
      path: '/addHouse',
      name: 'addHouse',
      component: addHouse,
      meta:{
        title:'我是业主'
      }
    },
    {
      path: '/bindHouse/:number',
      name: 'bindHouse',
      component: bindHouse,
      meta:{
        title: '我是业主'
      }
    },
    {
      path: '/butler',
      name: 'butler',
      component: butler,
      meta:{
        title: '管家服务'
      }
    },
    {
      path:'/threadDetail',
      name:'threadDetail',
      component:threadDetail,
      meta:{
        title: ''
      }
    },
    {
      path:'/addThread',
      name:'addThread',
      component:AddThread,
      meta:{
        title: ''
      }
    },
    {
      path:'/message',
      name:'message',
      component:news
    },

  ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
 
    //动态改变title
    changeTitle(to.meta.title)
    next();
});

//动态改变title
function changeTitle(title) {
    title = title ? title : '东湖e家园';
    window.document.title = title;
};

export default router
