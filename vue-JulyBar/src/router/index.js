import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import poems from '@/view/poems'
import page from '@/components/page'
import list from '@/components/list'
import comment from '@/components/comment'
import shangpin from '@/components/shangpin'
import pingjia from '@/components/pingjia'
import shangjia from '@/components/shangjia'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },{
      path: '/goods',
      name: 'poems',
      redirect:'/goods/page',
      component: poems,
      children:[{
          path:'page',
          name:'page',
          component:page
      },{
          path:'list',
          name:'list',
          component:list
      }]
    },{
      path: '/comment',
      name: 'comment',
      redirect:'/comment/shangpin',
      component: comment,
      children:[{
        path: 'shangpin',
        name: 'shangpin',
        component: shangpin
      },{
        path: 'pingjia',
        name: 'pingjia',
        component: pingjia
      },{
        path: 'shangjia',
        name: 'shangjia',
        component: shangjia
      }]
    },{
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    }
  ]
})
