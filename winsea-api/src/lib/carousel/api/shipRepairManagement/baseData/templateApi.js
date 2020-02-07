import request from '../../../request'

// 模板 一览查询
function getPageByCondition(data) {
  return request({
    url: '/repairShipyardTemplateInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 模板 厂修参考模板select查询
function getReferenceTemplate(data) {
  return request({
    url: '/repairShipyardTemplateInfo/query/getReferenceTemplate',
    method: 'get',
    params: data
  })
}
// 厂修模板新增类别
function getProjectTypes(data) {
  return request({
    url: '/repairShipyardTemplateInfo/query/getProjectTypes',
    method: 'get',
    params: data
  })
}
// 厂修模板新增编辑
function saveOrUpdateTemplateInfo(data) {
  return request({
    url: '/repairShipyardTemplateInfo/api/saveOrUpdateTemplateInfo',
    method: 'post',
    data: data
  })
}
// 厂修模板明细删除
function deleteTemplate(data) {
  return request({
    url: '/repairShipyardTemplateInfo/api/deleteTemplate',
    method: 'post',
    data: data
  })
}
// 厂修模板一览删除
function deleteTemplateInfo(data) {
  return request({
    url: '/repairShipyardTemplateInfo/api/deleteTemplateInfo',
    method: 'post',
    data: data
  })
}
// 厂修模板详细查询
function getTemplateInfo(data) {
  return request({
    url: '/repairShipyardTemplateInfo/query/getTemplateInfo',
    method: 'get',
    params: data
  })
}
export default {
  getPageByCondition,
  getReferenceTemplate,
  getProjectTypes,
  saveOrUpdateTemplateInfo,
  deleteTemplate,
  deleteTemplateInfo,
  getTemplateInfo,
}