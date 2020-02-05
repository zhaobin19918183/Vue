import request from './request'

// 找回密码
export function retrievePassword(data) {
  return request({
    url: '/auth/api/retrievePassword',
    method: 'post',
    data: data
  })
}
// 通过域名获取公司信息
export function getCompanyInfo(params) {
  return request({
    url: '/company/query/companyInfoByDomainName',
    method: 'get',
    params
  })
}
// 验证密码
export function checkPassword(data) {
  return request({
    url: '/auth/api/checkPassword',
    method: 'post',
    data: data
  })
}

// 发送验证码
export function sendVeriCode(data) {
  return request({
    url: '/veriCode/api/send',
    method: 'post',
    data: data
  })
}
//当前登录人信息
export function getLoginInfo(data){
  return request({
    url: '/auth/query/loginInfo',
    method: 'get',
    data
  })
}
//登出
export function loginOut(data){
  return request({
    url: '/auth/api/logout',
    method: 'post',
    data
  })
}

// 修改管理员密码
export function changePasswordByPwd(data) {
  return request({
    url: '/auth/api/changePassword',
    method: 'post',
    data
  });
}
