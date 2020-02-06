import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import router from '@/router';
import lang from '@/lang';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 50000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code) {
      if (res.code !== '200') {
        return Promise.reject(res);
      } else {
        return res;
      }
    } else {
      return res;
    }
  },
  error => {
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

    return Promise.reject(error);
  }
);

export default service;
