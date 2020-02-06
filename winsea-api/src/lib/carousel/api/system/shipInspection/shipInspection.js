import request from '../../../utils/request'

// 船舶自查关闭
export function closeShipSelfInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/closeShipSelfInspectionInfo',
    method: 'post',
    data
  })
}

// 船舶自查编辑保存
export function saveShipSelfInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveShipSelfInspectionInfo',
    method: 'post',
    data
  })
}

// 船舶自查提交岸基
export function submitShipSelfInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitShipSelfInspectionAudit',
    method: 'post',
    data
  })
}

// 船舶自检一览信息查询
export function getSelfPageByCondition(params) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfPageByCondition',
    method: 'get',
    params: params
  })
}

// 取得船舶自检中的状态集合
export function getSelfStatusList(params) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfStatusList',
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

// 船舶自查详情页查询
export function getSelfShipInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfShipInspection',
    method: 'get',
    params: data
  })
}

// 船舶自查明细删除
export function deleteSelfShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteSelfShipInspectionDefectList',
    method: 'post',
    data
  })
}

// 船舶自查签名查询
export function getSelfSignatureList(data) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfSignatureList',
    method: 'get',
    params: data
  })
}

// 船舶自查历史
export function getSelfHisListBy(data) {
  return request({
    url: '/txShipInspectionInfo//query/getSelfHisListBy',
    method: 'get',
    params: data
  })
}

// 船舶自查执行人
export function getDeptStaffListByCompId(data) {
  return request({
    url: '/staff/query/getDeptStaffListByCompId',
    method: 'get',
    params: data
  })
}

// 船舶自查废弃
export function discardSelfInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/discardSelfInspection',
    method: 'post',
    data
  })
}

// 船舶自查编辑保存
export function saveSelfFyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveSelfFyInspectionInfo',
    method: 'post',
    data
  })
}

// 船舶自查编辑修改
export function updateSelfFyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/updateSelfFyInspectionInfo',
    method: 'post',
    data
  })
}

// 船舶自查提交
export function submitSelfFyInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitSelfFyInspectionAudit',
    method: 'post',
    data
  })
}

// 船舶自查废弃
export function discardSelfFyInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/discardSelfFyInspection',
    method: 'post',
    data
  })
}

// 船舶自查-上次报告
export function getLatestSelfFyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/getLatestSelfFyInspectionInfo',
    method: 'get',
    params: data
  })
}

// 船舶自检一览信息查询
export function getSelfFyPageByCondition(params) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfFyPageByCondition',
    method: 'get',
    params: params
  })
}

// 船舶自检历史
export function getSelfFyHisListBy(data) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfFyHisListBy',
    method: 'get',
    params: data
  })
}

// 船舶自检详情
export function getSelfFyInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfFyInspection',
    method: 'get',
    params: data
  })
}

// 船舶状态集合
export function getSelfFyStatusList(data) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfFyStatusList',
    method: 'get',
    params: data
  })
}

// 获取跳转权限
export function getJumpPermission(data) {
  return request({
    url: '/txShipInspectionInfo/query/getJumpPermission',
    method: 'get',
    params: data
  })
}
// 船舶自检报告缺陷项目删除
export function deleteSelfFyShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteSelfFyShipInspectionDefectList',
    method: 'post',
    data
  })
}

// 船舶自检审核回复信息保存
export function saveSelfFyIncompatibleReportInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveSelfFyIncompatibleReportInfo',
    method: 'post',
    data
  })
}

// 是否退回
export function getSelfFyShipInspectionReturn(data) {
  return request({
    url: '/txShipInspectionInfo/query/getSelfFyShipInspectionReturn',
    method: 'get',
    params: data
  })
}

