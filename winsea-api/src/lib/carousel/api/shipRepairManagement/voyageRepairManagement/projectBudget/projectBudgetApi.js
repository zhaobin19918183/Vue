// 修船模块-航修工程预算单Api接口

import request from '../../../../utils/request'
// 工程预算单一览->工程预算单一览查询
export function getPageByCondition(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 工程预算单一览->工程预算单状态下拉选
export function getStatusList(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 工程预算单详情->工程预算单详情查询
export function getBudgetInfo(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getBudgetInfo',
    method: 'get',
    params: data
  })
}
// 工程预算单详情->工程预算单操作历史
export function getBillOperateHis(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 工程预算单详情->工程预算单保存和更新
export function saveVoyageBudgetInfo(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/api/saveVoyageBudgetInfo',
    method: 'post',
    data
  })
}
// 工程预算单详情->工程预算单提交
export function submitVoyageBudgetInfo(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/api/submitVoyageBudgetInfo',
    method: 'post',
    data
  })
}
// 工程预算单详情->工程预算单审核通过
export function checkPass(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 工程预算单详情->根据员工ID取得发件箱信息集合
export function getAllSendMailInfoList(data) {
  return request({
    url: '/commonSendMailInfo/query/getAllSendMailInfoListByStaffId',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->取得发件箱类型信息
export function getMailHostTypeList(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeList',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->取得发件箱类型信息
export function getMailHostTypeListByTypeId(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeListByTypeId',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->删除发件箱信息
export function deleteSendMailInfo(data) {
  return request({
    url: '/commonSendMailInfo/api/deleteSendMailInfo',
    method: 'post',
    data
  });
}
// 工程预算单详情->保存或者修改邮箱信息
export function saveOrUpdateSendMailInfos(data) {
  return request({
    url: '/commonSendMailInfo/api/saveOrUpdateSendMailInfos',
    method: 'post',
    data
  });
}
// 获取公司信息
export function getCompanyInfoById(data) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->关联单据
export function getBudgetRelevanceBill(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getBudgetRelevanceBill',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->审核流程
export function getProjectAuditInformations(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getBudgetAuditInformations',
    method: 'get',
    params: data
  });
}
// 发邮件
export function sendMail(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/api/sendMail',
    method: 'post',
    data
  });
}
// 附件导出
export function doExportFill(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/doExportFill',
    method: 'get',
    params: data
  });
}
// 修船厂查询
export function getListByCondition(data) {
  return request({
    url: '/servicerMerchantInfo/query/getPageByCondition',
    method: 'get',
    params: data
  });
}
// 筛选条件的修船厂查询
export function getShipyardList(data) {
  return request({
    url: '/repairVoyageRepairBudgetInfo/query/getShipyardList',
    method: 'get',
    params: data
  });
}