import request from '../../request'

// 查询动态报一览列表
function  getPageByCondition(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getPageDynamicReportInfo',
    method: 'get',
    params: params
  })
}
// 查询动态报状态集合
function  getReportStatus(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getDynamicReportInfoStatus',
    method: 'get',
    params: params
  })
}
// 查询动态报类型集合
function  getBasicDataSetting(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getGroupHwBillBasicDataSetting',
    method: 'get',
    params: params
  })
}
// 查询动态报项目信息
function  getGroupBillBasicDataSetting(data) {
  return request({
    url: '/hwDynamicReportInfo/query/getGroupBillBasicDataSettingProject',
    method: 'get',
    params: data
  })
}
// 查询动态报属性信息
function  getBillBasicDataSetting(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getBillBasicDataSetting',
    method: 'get',
    params: params
  })
}
// 保存动态报信息
function  saveDynamicReport(data) {
  return request({
    url: '/hwDynamicReportInfo/api/saveDynamicReportInfo',
    method: 'post',
    data
  })
}
// 根据ID查询动态报告基础信息
function  getReportInfoById(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getBasicDynamicReportInfoDetailsById',
    method: 'get',
    params: params
  })
}
// 根据ID查询动态报告详情
function  getReportDetailsInfoById(params) {
  return request({
    url: '/hwDynamicReportInfo/query/getDynamicReportInfoDetailsById',
    method: 'get',
    params: params
  })
}
// 获取数据字典分类子项
function  queryItems(data) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params: data
  })
}
// 查询动态报历史
function  getDynamicHistorys(data) {
  return request({
    url: '/dynamicReportInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}
// 退回动态报信息
function  discardDynamicReportInfo(data) {
  return request({
    url: '/hwDynamicReportInfo/api/discardDynamicReportInfo',
    method: 'post',
    data
  })
}
// 查询租户是否绑定该权限
function  findTenant(data) {
  return request({
    url: '/tenantResource/query/findTenant',
    method: 'get',
    params: data
  })
}
// 获取当前登录用户信息
function  getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data
  });
}
export default{
  getPageByCondition,
  getReportStatus,
  getBasicDataSetting,
  getGroupBillBasicDataSetting,
  getBillBasicDataSetting,
  saveDynamicReport,
  getReportInfoById,
  getReportDetailsInfoById,
  queryItems,
  getDynamicHistorys,
  discardDynamicReportInfo,
  findTenant,
  getCurrentUserInfo
}