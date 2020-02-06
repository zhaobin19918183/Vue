import request from '../../../utils/request'

// PSC检查编辑保存
export function saveShipPscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveShipPscInspectionInfo',
    method: 'post',
    data
  })
}

// Psc一览信息查询
export function getPscPageByCondition(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscPageByCondition',
    method: 'get',
    params: params
  })
}

// PSC检查状态查询
export function getPscStatusList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscStatusList',
    method: 'get',
    params: params
  })
}

// PSC检查提交岸基
export function submitShipPscInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitShipPscInspectionAudit',
    method: 'post',
    data
  })
}

// PSC检查详情页查询
export function getPscShipInspection(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscShipInspection',
    method: 'get',
    params: params
  })
}

// Psc检查关闭
export function closeShipPscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/closeShipPscInspectionInfo',
    method: 'post',
    data
  })
}

// PSC检查明细删除
export function deletePscShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deletePscShipInspectionDefectList',
    method: 'post',
    data
  })
}

// PSC检查签名查询
export function getPscSignatureList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscSignatureList',
    method: 'get',
    params: params
  })
}

// PSC检查签名查询
export function getPscHisListBy(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscHisListBy',
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
export function discardPscInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/discardPscInspection',
    method: 'post',
    data
  })
}