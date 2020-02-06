import request from '../../../utils/request'

// 一览列表
export function getPageByCondition(params) {
  return request({
    url: '/crewLabourContractInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 获取枚举列表
export function getEnumsList(data) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params: data
  })
}
// 获取合同类型
export function getparameterTenant(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}
// 设置预警功能
export function saveEdit(data) {
  return request({
    url: '/crewAlertDisplayInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 设置预警初始化
export function getAlertDisplay(data) {
  return request({
    url: '/crewAlertDisplayInfo/query/getAlertDisplay',
    method: 'get',
    params: data
  })
}
// 查询合同名称
export function getContractName(data) {
  return request({
    url: '/crewLabourContractInfo/query/getContractName',
    method: 'get',
    params: data
  })
}
// 查询合同名称
export function getContractTemplate(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getContractName',
    method: 'get',
    params: data
  })
}
// 一览显示预警和超期任务数
export function getEarlyOrOverdueTasks(params) {
  return request({
    url: '/crewLabourContractInfo/query/getEarlyOrOverdueTasks',
    method: 'get',
    params
  })
}

// 删除合同
export function deleteContract(data) {
  return request({
    url: '/crewLabourContractInfo/api/deleteContract',
    method: 'post',
    data
  })
}

// 关闭预警
export function clodeEarlyWarning(data) {
  return request({
    url: '/crewLabourContractInfo/api/clodeEarlyWarning',
    method: 'post',
    data
  })
}

// 开启预警
export function openEarlyWarning(data) {
  return request({
    url: '/crewLabourContractInfo/api/openEarlyWarning',
    method: 'post',
    data
  })
}

// 解约
export function saveRescission(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveRescission',
    method: 'post',
    data
  })
}
// 解约
export function saveRenewContract(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveRenewContract',
    method: 'post',
    data
  })
}

