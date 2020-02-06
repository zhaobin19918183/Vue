import request from '../../../utils/request'

// 公司检查一览表
export function getCompPageByCondition(data) {
  return request({
    url: '/txShipInspectionInfo/query/getCompPageByCondition',
    method: 'get',
    params: data
  })
}

// 公司检查详情
export function getCompInspection(data) {
  return request({
    url: '/txShipInspectionInfo/query/getCompInspection',
    method: 'get',
    params: data
  })
}

// 公司检查编辑保存
export function saveCompanyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/saveCompanyInspectionInfo',
    method: 'post',
    data
  })
}

// 公司检查发送船端
export function sendCompanyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/sendCompanyInspectionInfo',
    method: 'post',
    data
  })
}

// 公司检查提交岸基
export function submitCompInspectionAudit(data) {
  return request({
    url: '/txShipInspectionInfo/api/submitCompInspectionAudit',
    method: 'post',
    data
  })
}

// 行动代码列表
export function getParameterCompany(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompany',
    method: 'get',
    params: data
  })
}

// 通过公司ID获取部门列表
export function findVesselRole(data) {
  return request({
    url: '/role/query/findVesselRole',
    method: 'get',
    params: data
  })
}

// 根据职务查询职员
export function findRole(data) {
  return request({
    url: '/staff/query/findRole',
    method: 'get',
    params: data
  })
}

// 公司检查历史
export function getCompHisListBy(data) {
  return request({
    url: '/txShipInspectionInfo/query/getCompHisListBy',
    method: 'get',
    params: data
  })
}

// 状态列表查询
export function getCompStatusList(data) {
  return request({
    url: '/txShipInspectionInfo/query/getCompStatusList',
    method: 'get',
    params: data
  })
}

// 公司检查报告废弃
export function discardCompanyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/discardCompanyInspectionInfo',
    method: 'post',
    data
  })
}

// 公司检查报告缺陷项目删除
export function deleteSelfFyShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteSelfFyShipInspectionDefectList',
    method: 'post',
    data
  })
}

// 公司检查报告修改
export function updateCompanyInspectionInfo(data) {
  return request({
    url: '/txShipInspectionInfo/api/updateCompanyInspectionInfo',
    method: 'post',
    data
  })
}
