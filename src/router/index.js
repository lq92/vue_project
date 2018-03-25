import Vue from 'vue'
import Router from 'vue-router'
import goods from '~/goods/goods'
import ratings from '~/ratings/ratings'
import seller from '~/seller/seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: goods
    },
    {
    	path: '/goods',
    	component: goods
    },
    {
    	path: '/ratings',
    	component: ratings
    },
    {
    	path: '/seller',
    	component: seller
    }
  ]
})
