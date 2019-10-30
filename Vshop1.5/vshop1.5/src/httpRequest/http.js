import axios from 'axios';

let loadingInstance; //创建Loading 的实例
axios.defaults.baseURL = process.env.BASE_URL; // 配置axios请求的地址process.env
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization


// request拦截
axios.interceptors.request.use(config => {
    // 可以设置 token 
    // browserCookie.set("token", request.headers.token)
       return config
   }, error => {
       return Promise.reject(error)
   })
   
   
// response拦截
axios.interceptors.response.use(response => {
    // 成功返回的回调
    // if(response.status == 200){
    //     Toast.success('Load success !!!', 1);
    // }
    return response
}, err => {
        // if(err.response.status == 403){
        //     Toast.fail('token过期，请重新登录！', 3);
        //     return
        // }

        if (err && err.response) {
            switch (err.response.status) {
                case 403: Toast.fail('token过期，请重新登录！！！', 3,() => {
                    window.location.replace('/Home');
                }); break;
                // case 400: err.message = '请求错误(400)'; break;
                // case 401: return history.push('/login'); break;
                // case 404: err.message = '请求出错(404)'; break;
                // case 500: err.message = '服务器错误(500)'; break;
                // case 501: err.message = '服务未实现(501)'; break;
                // case 502: err.message = '网络错误(502)'; break;
                // case 503: err.message = '服务不可用(503)'; break;
                // case 504: err.message = '网络超时(504)'; break;
                // case 505: err.message = 'HTTP版本不受支持(505)'; break;
            }
        } else {
            Toast.fail('连接服务器失败！', 2);
        }


        // Toast.fail(err.message, 3);
        return Promise.reject(err);
})