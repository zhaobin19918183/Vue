// 修船模块-厂修预算单Api接口

import request from '../../../../utils/request'
// 预算单一览->预算单一览查询
export function getPageByCondition(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 预算单一览->预算单状态查询
export function getStatusList(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 预算单一览->预算单状态查询
export function getShipyardList(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getShipyardList',
    method: 'get',
    params: data
  })
}
// 预算单->详情查询
export function getBudgetInfo(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getBudgetInfo',
    method: 'get',
    params: data
  })
}
// 预算单->修船厂查询
export function getListByCondition(data) {
  return request({
    url: '/servicerMerchantInfo/query/getPageByCondition',
    method: 'get',
    params: data
  });
}
// 预算单->保存
export function updateBudgetInfo(data) {
  return request({
    url: '/repairYardBudgetInfo/api/updateBudgetInfo',
    method: 'post',
    data: data
  })
}
// 预算单->操作历史
export function getBillOperateHis(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 预算单->明细删除
export function deleteBudgetItem(data) {
  return request({
    url: '/repairYardBudgetInfo/api/deleteBudgetItem',
    method: 'post',
    data: data
  })
}
// 预算单->提交/
export function submitBudgetInfo(data) {
  return request({
    url: '/repairYardBudgetInfo/api/submitBudgetInfo',
    method: 'post',
    data: data
  })
}
// 预算单->关联单据
export function getRelevanceBill(data) {
  return request({
    url: 'repairYardBudgetInfo/query/getBudgetRelevanceBill',
    method: 'get',
    params: data
  })
}
// 预算单->关联单据
export function sendMail(data) {
  return request({
    url: '/repairYardBudgetInfo/api/sendMail',
    method: 'post',
    data: data
  })
}
// 预算单->导出附件
export function doExportFill(data) {
  return request({
    url: '/repairYardBudgetInfo/query/doExportFill',
    method: 'get',
    params: data
  })
}
// 预算单->获取公司信息
export function getCompanyInfoById(data) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: data
  });
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