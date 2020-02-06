import request from '../../../request'

// PSC检查编辑保存
function  saveShipPscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveShipPscInspectionInfo',
    method: 'post',
    data
  })
}

// Psc一览信息查询
function  getPscPageByCondition(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscPageByCondition',
    method: 'get',
    params: params
  })
}

// PSC检查状态查询
function  getPscStatusList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscStatusList',
    method: 'get',
    params: params
  })
}

// PSC检查提交岸基
function  submitShipPscInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitShipPscInspectionAudit',
    method: 'post',
    data
  })
}

// PSC检查详情页查询
function  getPscShipInspection(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscShipInspection',
    method: 'get',
    params: params
  })
}

// Psc检查关闭
function  closeShipPscInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/closeShipPscInspectionInfo',
    method: 'post',
    data
  })
}

// PSC检查明细删除
function  deletePscShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deletePscShipInspectionDefectList',
    method: 'post',
    data
  })
}

// PSC检查签名查询
function  getPscSignatureList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscSignatureList',
    method: 'get',
    params: params
  })
}

// PSC检查签名查询
function  getPscHisListBy(params) {
  return request({
    url: '/txShipInspectionInfo/query/getPscHisListBy',
    method: 'get',
    params: params
  })
}

// 缺陷类型查询
function  getParameterCompanyDefectCategory(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}

// 执行人
function  getDeptStaffListByCompId(data) {
  return request({
    url: '/staff/query/getDeptStaffListByCompId',
    method: 'get',
    params: data
  })
}

// 检查类型
function  getCheckType(data) {
  return request({
    url: '/txIncompatibleReportInfo/query/getCheckType',
    method: 'get',
    params: data
  })
}

// psc废弃
function  discardPscInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/discardPscInspection',
    method: 'post',
    data
  })
}