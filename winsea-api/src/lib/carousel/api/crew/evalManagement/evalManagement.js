import request from '../../../utils/request'

// 查询考评一览
export function getEvaluatePageByCondition(params) {
  return request({
    url: '/crewEvaluateInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 获取船舶id
export function selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}
// 查询被考评人是不是船长   决定表单
export function getCaptainForm(params) {
  return request({
    url: '/crewEvaluateInfo/query/getFiller',
    method: 'get',
    params
  })
}
// 在船职务
export function getOnShipDutyList(params) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params
  })
}
// 附件保存
export function saveAppendixUrl(data) {
  return request({
    url: '/crewEvaluateInfo/api/changeAppendix',
    method: 'post',
    data
  })
}
// 上传附件
export function uploadFiles(data) {
  return request({
    url: 'uploadFiles',
    method: 'post',
    data
  })
}
// 获取操作历史(年度考核)
export function getOperateHistorysYear(params) {
  return request({
    url: '/crewEvaluateInfo/query/getOperateHistorysYear',
    method: 'get',
    params
  })
}
