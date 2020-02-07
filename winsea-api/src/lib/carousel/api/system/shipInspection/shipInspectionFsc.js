import request from '../../../request'

// PSC检查编辑保存
function saveShipFscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveShipFscInspectionInfo',
    method: 'post',
    data
  })
}

// Psc一览信息查询
function getFscPageByCondition(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscPageByCondition',
    method: 'get',
    params: params
  })
}

// PSC检查状态查询
function getFscStatusList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscStatusList',
    method: 'get',
    params: params
  })
}

// PSC检查提交岸基
function submitShipFscInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitShipFscInspectionAudit',
    method: 'post',
    data
  })
}

// PSC检查详情页查询
function getFscShipInspection(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscShipInspection',
    method: 'get',
    params: params
  })
}

// Psc检查关闭
function closeShipFscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/closeShipFscInspectionInfo',
    method: 'post',
    data
  })
}

// PSC检查明细删除
function deleteFscShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteFscShipInspectionDefectList',
    method: 'post',
    data
  })
}

// PSC检查签名查询
function getFscSignatureList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscSignatureList',
    method: 'get',
    params: params
  })
}

// PSC检查签名查询
function getFscHisListBy(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscHisListBy',
    method: 'get',
    params: params
  })
}

// 缺陷类型查询
function getParameterCompanyDefectCategory(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}

// 执行人
function getDeptStaffListByCompId(data) {
  return request({
    url: '/staff/query/getDeptStaffListByCompId',
    method: 'get',
    params: data
  })
}

// 检查类型
function getCheckType(data) {
  return request({
    url: '/txIncompatibleReportInfo/query/getCheckType',
    method: 'get',
    params: data
  })
}

// psc废弃
function discardFscInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/discardFscInspection',
    method: 'post',
    data
  })
}
export default {
  saveShipFscInspectionInfo,
  getFscPageByCondition,
  getFscStatusList,
  submitShipFscInspectionAudit,
  getFscShipInspection,
  closeShipFscInspectionInfo,
  deleteFscShipInspectionDefectList,
  getFscSignatureList,
  getFscHisListBy,
  getParameterCompanyDefectCategory,
  getDeptStaffListByCompId,
  getCheckType,
  discardFscInspection
}