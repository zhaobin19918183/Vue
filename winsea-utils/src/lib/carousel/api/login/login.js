import request from '../../request'

// 找回密码
function retrievePassword(data) {
  return request({
    url: '/auth/api/retrievePassword',
    method: 'post',
    data: data
  })
}
// 通过域名获取公司信息
function getCompanyInfo(params) {
  return request({
    url: '/company/query/companyInfoByDomainName',
    method: 'get',
    params
  })
}
// 验证密码
function checkPassword(data) {
  return request({
    url: '/auth/api/checkPassword',
    method: 'post',
    data: data
  })
}

// 发送验证码
function sendVeriCode(data) {
  return request({
    url: '/veriCode/api/send',
    method: 'post',
    data: data
  })
}
//当前登录人信息
function getLoginInfo(data) {
  return request({
    url: '/auth/query/loginInfo',
    method: 'get',
    data
  })
}
//登出
function loginOut(data) {
  return request({
    url: '/auth/api/logout',
    method: 'post',
    data
  })
}

// 修改管理员密码
function changePasswordByPwd(data) {
  return request({
    url: '/auth/api/changePassword',
    method: 'post',
    data
  });
}

export default{
  retrievePassword,
  getCompanyInfo,
  checkPassword,
  sendVeriCode,
  getLoginInfo,
  loginOut,
  changePasswordByPwd
}
// module.exports = login

// // Allow use of default import syntax in TypeScript
// module.exports.default = login