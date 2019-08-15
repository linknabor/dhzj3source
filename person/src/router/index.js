import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import index from '@/pages/index/index'//首页
import Bindphone from '@/pages/bindphone'//个人信息
import Register from '@/pages/register'//手机注册页
import Coupons from '@/pages/coupons'//我的优惠券
import Myrepair from '@/pages/myRepair/myrepair'//我的维修
import OrdersDetail from '@/pages/myRepair/ordersDetail'//维修详情
import cancelOrders from '@/pages/myRepair/cancelOrders'//取消维修
import OperatorOrders from '@/pages/myRepair/operatorOrders'//我的维修单
import OperatorOrdersDetail from '@/pages/myRepair/operatorOrdersDetail'//我的维修我要抢单
import OperatorRepairSuccess from '@/pages/myRepair/operatorRepairSuccess'//我要抢单 公共页面




Vue.use(Router)

let router= new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {path:'',component:index,meta:{title:'个人中心'}}
      ]
    },
    //首页
    // {
    //   path:'',
    //   name:'index',
    //   component:index,
    //   meta: {
    //     title:'个人中心'
    //   }
    // },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta: {
        title:'用户注册'
      }
    },
    {
      path:'/bindphone',
      name:'bindphone',
      component:Bindphone,
      meta: {
        title:'编辑个人信息'
      }
    },
    {
      path:'/coupons',
      name:'coupons',
      component:Coupons,
      meta:{
        title:'我的现金券'
      }
    }, 

    {
      path:'/operatorOrdersDetail',
      name:'operatorOrdersDetail',
      component:OperatorOrdersDetail,
    },
    {
      path:'/operatorRepairSuccess',
      name:'operatorRepairSuccess',
      component:OperatorRepairSuccess,
    },
    {
      path:'/operatorOrders',
      name:'operatorOrders',
      component:OperatorOrders,
      meta: {
        title:''
      }
    },
    {
      path:'/myrepair',
      name:'myrepair',
      component:Myrepair,
      meta: {
        title:''
      }
    },
    {
      path:'/ordersDetail',
      name:'ordersDetail',
      component:OrdersDetail,
      meta: {
        title:'维修详情'
      }
    },
    {
      path:'/cancelorders',
      name:'cancelorders',
      component:cancelOrders,
      meta: {
        title:'取消维修'
      }
    },

  ]
})

////路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
  //动态改变title
  // console.log(to.matched[0].name)
  // if(to.matched[0].name !== "index") {
  //    common.checkRegisterStatus()
  // }

  changeTitle(to.meta.title);
  next();
});

//动态改变title
function changeTitle(title) {
  title = title ? title : '东湖e家园';
  window.document.title = title;
};


export default router
