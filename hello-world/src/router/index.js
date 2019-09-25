import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import HelloWorld from '@/components/helloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/course',
        name: 'course',
        component: Course
      },
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      },
  ]
})