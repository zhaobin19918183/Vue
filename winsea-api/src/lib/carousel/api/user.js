import request from '../request';

 function login(data) {
  return request({
    url: '/auth/api/loginEnhanced',
    method: 'post',
    data
  });
}

 function fastLogin(data) {
  return request({
    url: '/auth/api/loginQuickly',
    method: 'post',
    data
  });
}

 function getInfo(token) {
  return request({
    url: '/SysUser/Info',
    method: 'get',
    params: { token }
  });
}

 function logout() {
  return request({
    url: '/auth/api/logout',
    method: 'post'
  });
}

 function getRoule() {
  return request({
    url: '/roleMenu/query/getListByUserId',
    method: 'get'
  });
}
export default{
  login,
  fastLogin,
  getInfo,
  logout,
  getRoule
}
// module.exports = user

// // Allow use of default import syntax in TypeScript
// module.exports.default = user