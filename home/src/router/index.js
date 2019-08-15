import Vue from 'vue'
import Router from 'vue-router'


import footer from '@/components/footer' //底部导航
import Build from '@/components/notOpen'    //暂未开放
import hotel from '@/components/hotel'   //酒店

import index from '@/pages/index' //物业首页
 

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index,
      meta:{
        title:'生活服务'
      },
    },  
    {
      path:'/build',
      name:'build',
      component:Build,
      meta:{
        title:'生活服务'
      }
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel,
      meta:{
        title:'生活服务'
      }
    }
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
