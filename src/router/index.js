import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Item from '@/page/item'
import Score from '@/page/score'
import Home from '@/page/home'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/item',
        component: Item
      },
      {
        path: '/score',
        component: Score
      }
    ]
  }]
})
