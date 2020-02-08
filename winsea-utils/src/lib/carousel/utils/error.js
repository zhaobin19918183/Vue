import {Message} from 'element-ui'
import store from '@/store';
import router from '@/router';
import lang from '@/lang';

export  function errorfunc(error){
    if (error.response) {
        if (error.response.status === 403 || error.response.status === 401) {
          store.dispatch('user/logout').then(() => {
            router.push(`/login?redirect=${router.currentRoute.fullPath}`);
          });
        } else {
          var msg = lang.t('network.' + (error.response && error.response.status));
          if (!msg || msg.indexOf('network.') >= 0) {
            msg = lang.t('network.timeout');
          }
          Message({
            message: msg,
            type: 'error',
            duration: 3 * 1000
          });
        }
      } else if (error.request) {
        Message({
          message: '服务器失去连接',
          type: 'error',
          duration: 3 * 1000
        });
      } else {
        Message({
          message: '请求出错',
          type: 'error',
          duration: 3 * 1000
        });
      }
    

}