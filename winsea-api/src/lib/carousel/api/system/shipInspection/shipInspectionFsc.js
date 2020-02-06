import request from '../../../utils/request'

// PSC检查编辑保存
export function saveShipFscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveShipFscInspectionInfo',
    method: 'post',
    data
  })
}

// Psc一览信息查询
export function getFscPageByCondition(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscPageByCondition',
    method: 'get',
    params: params
  })
}

// PSC检查状态查询
export function getFscStatusList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscStatusList',
    method: 'get',
    params: params
  })
}

// PSC检查提交岸基
export function submitShipFscInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitShipFscInspectionAudit',
    method: 'post',
    data
  })
}

// PSC检查详情页查询
export function getFscShipInspection(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscShipInspection',
    method: 'get',
    params: params
  })
}

// Psc检查关闭
export function closeShipFscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/closeShipFscInspectionInfo',
    method: 'post',
    data
  })
}

// PSC检查明细删除
export function deleteFscShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteFscShipInspectionDefectList',
    method: 'post',
    data
  })
}

// PSC检查签名查询
export function getFscSignatureList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscSignatureList',
    method: 'get',
    params: params
  })
}

// PSC检查签名查询
export function getFscHisListBy(params) {
  return request({
    url: '/txShipInspectionInfo/query/getFscHisListBy',
    method: 'get',
    params: params
  })
}

// 缺陷类型查询
export function getParameterCompanyDefectCategory(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}

// 执行人
export function getDeptStaffListByCompId(data) {
  return request({
    url: '/staff/query/getDeptStaffListByCompId',
    method: 'get',
    params: data
  })
}

// 检查类型
export function getCheckType(data) {
  return request({
    url: '/txIncompatibleReportInfo/query/getCheckType',
    method: 'get',
    params: data
  })
}

// psc废弃
export function discardFscInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/discardFscInspection',
    method: 'post',
    data
  })
}