import request from '../../utils/request'

// 查询动态报一览列表
export function getPageByCondition(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getPageDynamicReportInfo',
    method: 'get',
    params: params
  })
}
// 查询动态报状态集合
export function getReportStatus(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getDynamicReportInfoStatus',
    method: 'get',
    params: params
  })
}
// 查询动态报类型集合
export function getBasicDataSetting(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getGroupHwBillBasicDataSetting',
    method: 'get',
    params: params
  })
}
// 查询动态报项目信息
export function getGroupBillBasicDataSetting(data) {
  return request({
    url: '/hwDynamicReportInfo/query/getGroupBillBasicDataSettingProject',
    method: 'get',
    params: data
  })
}
// 查询动态报属性信息
export function getBillBasicDataSetting(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getBillBasicDataSetting',
    method: 'get',
    params: params
  })
}
// 保存动态报信息
export function saveDynamicReport(data) {
  return request({
    url: '/hwDynamicReportInfo/api/saveDynamicReportInfo',
    method: 'post',
    data
  })
}
// 根据ID查询动态报告基础信息
export function getReportInfoById(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getBasicDynamicReportInfoDetailsById',
    method: 'get',
    params: params
  })
}
// 根据ID查询动态报告详情
export function getReportDetailsInfoById(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getDynamicReportInfoDetailsById',
    method: 'get',
    params: params
  })
}
// 获取数据字典分类子项
export function queryItems(data) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params: data
  })
}
// 查询动态报历史
export function getDynamicHistorys(data) {
  return request({
    url: '/dynamicReportInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}
// 退回动态报信息
export function discardDynamicReportInfo(data) {
  return request({
    url: '/hwDynamicReportInfo/api/discardDynamicReportInfo',
    method: 'post',
    data
  })
}
// 查询租户是否绑定该权限
export function findTenant(data) {
  return request({
    url: '/tenantResource/query/findTenant',
    method: 'get',
    params: data
  })
}
// 获取当前登录用户信息
export function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data
  });
}
