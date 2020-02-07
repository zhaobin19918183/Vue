import request from  '../../../request'
// 一览页信息查询
function getPageByCondition(data) {
  return request({
    url: '/financeImprestInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 详情信息查询
function getDetailInfoById(data) {
  return request({
    url: '/financeImprestInfo/query/getDetailInfoById',
    method: 'get',
    params: data
  })
}
// 详情信息查询
function getImprestVesselList(data) {
  return request({
    url: '/financeBusiness/query/getImprestVesselList',
    method: 'get',
    params: data
  })
}
// 保存备用金基本信息
function saveImprestBasic(data) {
  return request({
    url: '/financeImprestInfo/api/saveImprestBasic',
    method: 'post',
    data,
  })
}
// 保存备用金详细信息
function saveImprestDetail(data) {
  return request({
    url: '/financeImprestInfo/api/saveImprestDetail',
    method: 'post',
    data,
  })
}
export default {
  getPageByCondition,
  getDetailInfoById,
  getImprestVesselList,
  saveImprestBasic,
  saveImprestDetail
}
