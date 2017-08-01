import Vue from 'vue'
import Router from 'vue-router'
import takeout from '../page/takeout/takeout'
import shop_list from '@/page/takeout/child/shop_list/shop_list'
import select_address from '@/page/takeout/child/select_address/select_address'
import new_address from '@/page/takeout/child/select_address/child/new_address/new_address'
import seach from '@/page/takeout/child/seach/seach'
import new_user from '@/page/takeout/child/new_user/new_user'
import quality from '@/page/takeout/child/quality/quality'
import shop from '@/page/takeout/child/shop/shop'
import cart from '@/page/takeout/child/shop/cart'
import find from '../page/find/find'
import integral from '../page/find/child/integral/integral'
import well from '../page/find/child/delicious/child/well/well'
import recommend from '../page/find//child/recommend/recommend'
import delicious from '../page/find/child/delicious/delicious'
import flow from '../page/find/child/flow/flow'
import activity from '../page/find/child/activity/activity'
import food_recommend from '../page/find/child/food_recommend/food_recommend'
import payment from '../page/find/child/activity/child/payment'
import red from '../page/find/child/red/red'
import notice from '../page/find/child/red/child/notice/notice'
import redpackage from '../page/find/child/red/child/package/package'
import classification from '../page/find/child/red/child/classification/classification'
import game from '../components/find/child/red/child/classification/game'
import overlord from '../components/find/child/activity/overlord'
import overlord_plus from '../components/find/child/activity/overlord_plus'
import redmy from '../page/find/child/red/child/my/my'
import special from '../page/find/child/special/special'
import select from '../page/find/child/select/select'
import welfare from '../page/find/child/select/child/welfare'
import time_limit from '../page/find/child/time_limit/time_limit'
import order from '@/page/order/order'
import breakfast from '@/page/order/child/breakfast'
import full_order from '@/page/order/child/full_order'
import my from '@/page/my/my'
import message from '@/page/my/child/message'
import security from '@/page/my/child/setting/security'
import login from '@/page/my/child/setting/login'
import register from '@/page/my/child/setting/register'
import setting from '@/page/my/child/setting/setting'
import modify_username from '@/page/my/child/setting/modify_username'
import setting_password from '@/page/my/child/setting/setting_password'

import commodity from '@/components/takeout/child/shop/commodity'
import evaluate from '@/components/takeout/child/shop/evaluate'

import food_shop_list from '@/components/find/child/food_recommend/shop_list'
import food_package from '@/components/find/child/food_recommend/package'
import find_special from '@/components/find/child/special/shop_list'
import sele_shop_list from '@/components/find/child/select/shop_list'
import food_order from '@/components/order/food_order'
import order_breakfast from '@/components/order/breakfast'
import test from '@/page/test'
Vue.use(Router)
export default new Router({
  routes: [
    {
            path: '',
            redirect: '/takeout'
    },
    {
      path: '/takeout',
      name: 'takeout',
      component: takeout
    },
    {
    	path:'/find',
    	name:'find',
    	component:find
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/my',
      component:my
    },
      {
        path:'/shop_list',
        component:shop_list
      },
      {
        path:'/select_address',
        component:select_address
      },
      {
        path:'/new_address',
        component:new_address
      },
      {
        path:'/seach',
        component:seach
      },
      {
        path:'/new_user',
        component:new_user
      },
      {
        path:'/quality',
        component:quality
      },
      {
        path:'/shop',
        component:shop,
        children:[
        {
          path:'',
          component:commodity
        },
        {
          path:'evaluate',
          component:evaluate
        }
        ]
      },
      {
        path:'/integral',
        component:integral
      },
      {
        path:'/delicious',
        component:delicious
      },
      {
        path:'/well',
        component:well
      },
      {
        path:'/recommend',
        component:recommend
      },
      {
        path:'/flow',
        component:flow
      },
      {
        path:'/red',
        component:red
      },
      {
        path:'/notice',
        component:notice
      },
      {
        path:'/package',
        component:redpackage
      },
      {
        path:'/classification',
        component:classification,
        children:[
      {
        path:'',
        component:game
      },
       {
        path:'game',
        component:game
      }
        ]
      },
      {
        path:'/redmy',
        component:redmy
      },
      {
        path:'/activity',
        component:activity,
        children:[
        {
          path:'',
          component:overlord
        },
        {
          path:'overlord_plus',
          component:overlord_plus
        }
        ]
      },
        {
          path:'/payment',
          component:payment
        },
        {
          path:'/food_recommend',
          component:food_recommend,
          children:[
          {
            path:'',
            component:food_shop_list
          },
          {
            path:'food_package',
            component:food_package
          }
          ]
        },
        {
          path:'/special',
          component:special,
          children:[
          {
            path:'',
            component:find_special
          }
          ]
        },
        {
          path:'/time_limit',
          component:time_limit
        },
        {
          path:'/select',
          component:select,
          children:[
          {
            path:'',
            component:sele_shop_list
          }
          ]
        },
        {
          path:'/welfare',
          component:welfare
        },
        {
          path:'/breakfast',
          component:breakfast
        },
        {
          path:'/full_order',
          component:full_order,
          children:[
          {
            path:'',
            component:food_order
          },
          {
            path:'breakfast',
            component:order_breakfast
          }
          ]
        },
        {
          path:'/message',
          component:message
        },
        {
          path:'/setting',
          component:setting
        },
        {
          path:'/security',
          component:security
        },
        {
          path:'/modify_username',
          component:modify_username
        },
        {
          path:'/setting_password',
          component:setting_password
        },
        {
          path:'/login',
          component:login
        },
        {
          path:'/register',
          component:register
        },
        {
          path:'/cart',
          component:cart
        },
        {
          path:'/test',
          component:test
        }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0,y:0}
  }
})
