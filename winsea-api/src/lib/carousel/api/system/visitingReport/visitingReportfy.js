import request from '../../../utils/request'


// 一览查询
export function getPageBy(params) {
  return request({
    url: '/visitVesselInformation/query/getPageByCondition',
    method: 'get',
    params: params
  })
}
// 通过公司ID获取部门列表
export function deptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
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
// 获取访船目的信息
export function getItems(params) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params
  })
}
// 获取船舶类型
export function getListByCrewParmaeter(params) {
  return request({
    url: '/crewParameter/query/getListByCrewParmaeter',
    method: 'get',
    params
  })
}
// 项目   检查要点
export function queryTemplateConfigurationList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryThirdTemplateConfigurationList',
    method: 'get',
    params: data
  })
}
// 查询在船 船长 轮机长
export function getIsmSeafarer(data) {
  return request({
    url: '/crewSeafarerInfo/query/getIsmSeafarer',
    method: 'get',
    params: data
  })
}
// 查询船舶详情
export function getVesselInfo(data) {
  return request({
    url: '/systemVessel/query/getVesselOne',
    method: 'get',
    params: data
  })
}
// 防船报告查询上一次报告信息
export function lastSelectReport(data) {
  return request({
    url: '/visitVesselInformation/query/lastSelectReport',
    method: 'get',
    params: data
  })
}
// 防船报告-新增保存
export function saveInfo(data) {
  return request({
    url: '/visitVesselInformation/api/addSave',
    method: 'post',
    data
  })
}
// 防船报告-提交
export function submit(data) {
  return request({
    url: '/visitVesselInformation/api/submit',
    method: 'post',
    data
  })
}
// 防船报告查看历史
export function getSelfHisListBy(data) {
  return request({
    url: '/visitVesselInformation/query/getSelfHisListBy',
    method: 'get',
    params: data
  })
}
// 防船报告详情
export function getSelfDetailInfo(data) {
  return request({
    url: '/visitVesselInformation/query/selectById',
    method: 'get',
    params: data
  })
}
// 防船报告详情
export function discard(data) {
  return request({
    url: '/visitVesselInformation/api/discard',
    method: 'post',
    data
  })
}