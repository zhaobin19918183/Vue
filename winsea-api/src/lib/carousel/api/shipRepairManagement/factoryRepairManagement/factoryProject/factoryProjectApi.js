// 修船模块-厂修工程单Api接口

import request from '../../../../utils/request'
// 工程单一览->工程单一览查询
export function getPage(data) {
  return request({
    url: '/repairYardProjectInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 工程单一览->工程单状态查询
export function getStatusList(data) {
  return request({
    url: '/repairYardProjectInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 工程单填写->申请单查询
export function getApplyInfo(data) {
  return request({
    url: '/repairYardProjectInfo/query/getApplyInfo',
    method: 'get',
    params: data
  })
}
// 工程单->详情查询
export function getProjectInfo(data) {
  return request({
    url: '/repairYardProjectInfo/query/getProjectInfo',
    method: 'get',
    params: data
  })
}
// 工程单->第一次保存
export function create(data) {
  return request({
    url: '/repairYardProjectInfo/api/create',
    method: 'post',
    data: data
  });
}
// 工程单->修改后保存
export function changeInfo(data) {
  return request({
    url: '/repairYardProjectInfo/api/changeInfo',
    method: 'post',
    data: data
  })
}
// 工程单->废弃
export function discard(data) {
  return request({
    url: '/repairYardProjectInfo/api/discard',
    method: 'post',
    data: data
  })
}
// 修船厂查询
export function getListByCondition(data) {
  return request({
    url: '/servicerMerchantInfo/query/getPageByCondition',
    method: 'get',
    params: data
  });
}
// 工程单详情->删除修船厂
export function deleteShipyardItem(data) {
  return request({
    url: '/repairYardProjectInfo/api/deleteShipyardItem',
    method: 'post',
    data
  });
}
// 工程单->明细删除
export function removeDetails(data) {
  return request({
    url: '/repairYardProjectInfo/api/removeDetails',
    method: 'post',
    data: data
  })
}
// 工程单->操作历史
export function getBillOperateHis(data) {
  return request({
    url: '/repairYardProjectInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}

// 工程单->提交/
export function submitProjectInfo(data) {
  return request({
    url: '/repairYardProjectInfo/api/submitProjectInfo',
    method: 'post',
    data: data
  })
}
// 工程单->单位下拉选
export function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 工程单->关联单据
export function getRelevanceBill(data) {
  return request({
    url: 'repairYardProjectInfo/query/getProjectRelevanceBill',
    method: 'get',
    params: data
  })
}

// 工程单->发送
export function sendMail(data) {
  return request({
    url: '/repairYardProjectInfo/api/sendMail',
    method: 'post',
    data: data
  })
}
// 工程单->导出附件
export function doExportFill(data) {
  return request({
    url: '/repairYardProjectInfo/query/doExportFill',
    method: 'get',
    params: data
  })
}
// 工程单->获取公司信息
export function getCompanyInfoById(data) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: data
  });
}
// 工程工程单详情->根据员工ID取得发件箱信息集合
export function getAllSendMailInfoList(data) {
  return request({
    url: '/commonSendMailInfo/query/getAllSendMailInfoListByStaffId',
    method: 'get',
    params: data
  });
}
// 工程工程单详情->取得发件箱类型信息
export function getMailHostTypeList(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeList',
    method: 'get',
    params: data
  });
}
// 工程工程单详情->取得发件箱类型信息
export function getMailHostTypeListByTypeId(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeListByTypeId',
    method: 'get',
    params: data
  });
}
// 工程工程单详情->删除发件箱信息
export function deleteSendMailInfo(data) {
  return request({
    url: '/commonSendMailInfo/api/deleteSendMailInfo',
    method: 'post',
    data
  });
}
// 工程工程单详情->保存或者修改邮箱信息
export function saveOrUpdateSendMailInfos(data) {
  return request({
    url: '/commonSendMailInfo/api/saveOrUpdateSendMailInfos',
    method: 'post',
    data
  });
}