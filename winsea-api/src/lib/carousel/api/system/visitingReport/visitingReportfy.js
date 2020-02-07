import request from '../../../request'


// 一览查询
function getPageBy(params) {
  return request({
    url: '/visitVesselInformation/query/getPageByCondition',
    method: 'get',
    params: params
  })
}
// 通过公司ID获取部门列表
function deptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  })
}
// 获取当前登录用户信息
function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data
  });
}
// 获取访船目的信息
function getItems(params) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params
  })
}
// 获取船舶类型
function getListByCrewParmaeter(params) {
  return request({
    url: '/crewParameter/query/getListByCrewParmaeter',
    method: 'get',
    params
  })
}
// 项目   检查要点
function queryTemplateConfigurationList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryThirdTemplateConfigurationList',
    method: 'get',
    params: data
  })
}
// 查询在船 船长 轮机长
function getIsmSeafarer(data) {
  return request({
    url: '/crewSeafarerInfo/query/getIsmSeafarer',
    method: 'get',
    params: data
  })
}
// 查询船舶详情
function getVesselInfo(data) {
  return request({
    url: '/systemVessel/query/getVesselOne',
    method: 'get',
    params: data
  })
}
// 防船报告查询上一次报告信息
function lastSelectReport(data) {
  return request({
    url: '/visitVesselInformation/query/lastSelectReport',
    method: 'get',
    params: data
  })
}
// 防船报告-新增保存
function saveInfo(data) {
  return request({
    url: '/visitVesselInformation/api/addSave',
    method: 'post',
    data
  })
}
// 防船报告-提交
function submit(data) {
  return request({
    url: '/visitVesselInformation/api/submit',
    method: 'post',
    data
  })
}
// 防船报告查看历史
function getSelfHisListBy(data) {
  return request({
    url: '/visitVesselInformation/query/getSelfHisListBy',
    method: 'get',
    params: data
  })
}
// 防船报告详情
function getSelfDetailInfo(data) {
  return request({
    url: '/visitVesselInformation/query/selectById',
    method: 'get',
    params: data
  })
}
// 防船报告详情
function discard(data) {
  return request({
    url: '/visitVesselInformation/api/discard',
    method: 'post',
    data
  })
}
export default {
  getPageBy,
  deptListByCompId,
  getCurrentUserInfo,
  getItems,
  getListByCrewParmaeter,
  queryTemplateConfigurationList,
  getIsmSeafarer,
  getVesselInfo,
  lastSelectReport,
  saveInfo,
  submit,
  getSelfHisListBy,
  getSelfDetailInfo,
  discard
}