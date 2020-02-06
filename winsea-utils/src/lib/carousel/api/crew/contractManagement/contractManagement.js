import request from '../../../request'

// 一览列表
function  getPageByCondition(params) {
  return request({
    url: '/crewLabourContractInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 获取枚举列表
function  getEnumsList(data) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params: data
  })
}
// 获取合同类型
function  getparameterTenant(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}
// 设置预警功能
function  saveEdit(data) {
  return request({
    url: '/crewAlertDisplayInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 设置预警初始化
function  getAlertDisplay(data) {
  return request({
    url: '/crewAlertDisplayInfo/query/getAlertDisplay',
    method: 'get',
    params: data
  })
}
// 查询合同名称
function  getContractName(data) {
  return request({
    url: '/crewLabourContractInfo/query/getContractName',
    method: 'get',
    params: data
  })
}
// 查询合同名称
function  getContractTemplate(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getContractName',
    method: 'get',
    params: data
  })
}
// 一览显示预警和超期任务数
function  getEarlyOrOverdueTasks(params) {
  return request({
    url: '/crewLabourContractInfo/query/getEarlyOrOverdueTasks',
    method: 'get',
    params
  })
}

// 删除合同
function  deleteContract(data) {
  return request({
    url: '/crewLabourContractInfo/api/deleteContract',
    method: 'post',
    data
  })
}

// 关闭预警
function  clodeEarlyWarning(data) {
  return request({
    url: '/crewLabourContractInfo/api/clodeEarlyWarning',
    method: 'post',
    data
  })
}

// 开启预警
function  openEarlyWarning(data) {
  return request({
    url: '/crewLabourContractInfo/api/openEarlyWarning',
    method: 'post',
    data
  })
}

// 解约
function  saveRescission(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveRescission',
    method: 'post',
    data
  })
}
// 解约
function  saveRenewContract(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveRenewContract',
    method: 'post',
    data
  })
}

export default {
  getPageByCondition,
  getEnumsList,
  getparameterTenant,
  saveEdit,
  getAlertDisplay,
  getContractName,
  getContractTemplate,
  getEarlyOrOverdueTasks,
  deleteContract,
  clodeEarlyWarning,
  openEarlyWarning,
  saveRescission,
  saveRenewContract

}