import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/pages/hello'
import login from '@/pages/login'
import userProtocol from '@/pages/userProtocol'
import home from '@/pages/home'
import aboutme from '@/pages/aboutme'
import discount from '@/pages/discount'
import comment from '@/pages/comment'
import postComment from '@/pages/postComment'
import myOrder from '@/pages/myOrder'
import orderDetail from '@/pages/orderDetail'
import applyRefund from '@/pages/applyRefund'
import refundDetail from '@/pages/refundDetail'
import shopDetail from '@/pages/shopDetail'

import amap from '@/components/amap'

Vue.use(Router)

export default new Router({
    mode: 'history',    //  history , hash  

    // 点击后退按钮或切换导航时触发
    scrollBehavior(to,from,savePosition){
        // to: 要进入的路由对象 ；  from： 离开的路由对象；  savePosition: 记录滚动条的坐标
        if(savePosition){
            return savePosition
        }else{
            return {x: 0, y: 0}
        }
    },

    routes: [
        {
            path: '/hello',
            name: 'hello',
            component: hello
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/userProtocol',
            name: 'userProtocol',
            component: userProtocol
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/aboutme',
            name: 'aboutme',
            component: aboutme
        },
        {
            path: '/discount',
            name: 'discount',
            component: discount
        },
        {
            path: '/comment',
            name: 'comment',
            component: comment
        },
        {
            path: '/postComment',
            name: 'postComment',
            component: postComment
        },
        {
            path: '/myOrder',
            name: 'myOrder',
            component: myOrder
        },
        {
            path: '/orderDetail',
            name: 'orderDetail',
            component: orderDetail
        },
        {
            path: '/applyRefund',
            name: 'applyRefund',
            component: applyRefund
        },
        {
            path: '/refundDetail',
            name: 'refundDetail',
            component: refundDetail
        },
        {
            path: '/shopDetail/:id',
            name: 'shopDetail',
            component: shopDetail
        },
        {
            path: '/amap',
            name: 'amap',
            component: amap
        }
    ]
})
