import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, 
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,       // 将我们定义好的路由router应用到全局
//   components: {App},
//   template: '<App/>'
// })
