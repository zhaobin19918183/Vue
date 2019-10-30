import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/httpRequest/http'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueAMap from 'vue-amap';
import AMap from 'vue-amap';

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant);
// Vue.use(VueAMap);
Vue.use(AMap)
Vue.use(VueAxios, axios);     //结合vue-axios全局引入axios; (它是按照vue插件的方式去写的，所以可以用vue.use方法)

// axios改写为Vue的原型属性：
// Vue.prototype.axios = axios;

// 高德地图初始化
// VueAMap.initAMapApiLoader({
//     key: 'your amap key',
//     plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//     // 默认高德 sdk 版本为 1.4.4
//     v: '1.4.4'
// });
AMap.initAMapApiLoader({
    key: '问后端要',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    v: '1.4.4'
});


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
