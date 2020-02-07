// 修船模块-厂修预算单Api接口

import request from '../../../../request'
// 预算单一览->预算单一览查询
function getPageByCondition(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 预算单一览->预算单状态查询
function getStatusList(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 预算单一览->预算单状态查询
function getShipyardList(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getShipyardList',
    method: 'get',
    params: data
  })
}
// 预算单->详情查询
function getBudgetInfo(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getBudgetInfo',
    method: 'get',
    params: data
  })
}
// 预算单->修船厂查询
function getListByCondition(data) {
  return request({
    url: '/servicerMerchantInfo/query/getPageByCondition',
    method: 'get',
    params: data
  });
}
// 预算单->保存
function updateBudgetInfo(data) {
  return request({
    url: '/repairYardBudgetInfo/api/updateBudgetInfo',
    method: 'post',
    data: data
  })
}
// 预算单->操作历史
function getBillOperateHis(data) {
  return request({
    url: '/repairYardBudgetInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 预算单->明细删除
function deleteBudgetItem(data) {
  return request({
    url: '/repairYardBudgetInfo/api/deleteBudgetItem',
    method: 'post',
    data: data
  })
}
// 预算单->提交/
function submitBudgetInfo(data) {
  return request({
    url: '/repairYardBudgetInfo/api/submitBudgetInfo',
    method: 'post',
    data: data
  })
}
// 预算单->关联单据
function getRelevanceBill(data) {
  return request({
    url: 'repairYardBudgetInfo/query/getBudgetRelevanceBill',
    method: 'get',
    params: data
  })
}
// 预算单->关联单据
function sendMail(data) {
  return request({
    url: '/repairYardBudgetInfo/api/sendMail',
    method: 'post',
    data: data
  })
}
// 预算单->导出附件
function doExportFill(data) {
  return request({
    url: '/repairYardBudgetInfo/query/doExportFill',
    method: 'get',
    params: data
  })
}
// 预算单->获取公司信息
function getCompanyInfoById(data) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->根据员工ID取得发件箱信息集合
function getAllSendMailInfoList(data) {
  return request({
    url: '/commonSendMailInfo/query/getAllSendMailInfoListByStaffId',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->取得发件箱类型信息
function getMailHostTypeList(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeList',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->取得发件箱类型信息
function getMailHostTypeListByTypeId(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeListByTypeId',
    method: 'get',
    params: data
  });
}
// 工程预算单详情->删除发件箱信息
function deleteSendMailInfo(data) {
  return request({
    url: '/commonSendMailInfo/api/deleteSendMailInfo',
    method: 'post',
    data
  });
}
// 工程预算单详情->保存或者修改邮箱信息
function saveOrUpdateSendMailInfos(data) {
  return request({
    url: '/commonSendMailInfo/api/saveOrUpdateSendMailInfos',
    method: 'post',
    data
  });
}
export default {
  getPageByCondition,
  getStatusList,
  getShipyardList,
  getBudgetInfo,
  getListByCondition,
  updateBudgetInfo,
  getBillOperateHis,
  deleteBudgetItem,
  submitBudgetInfo,
  getRelevanceBill,
  sendMail,
  doExportFill,
  getCompanyInfoById,
  getAllSendMailInfoList,
  getMailHostTypeList,
  getMailHostTypeListByTypeId,
  deleteSendMailInfo,
  saveOrUpdateSendMailInfos
}