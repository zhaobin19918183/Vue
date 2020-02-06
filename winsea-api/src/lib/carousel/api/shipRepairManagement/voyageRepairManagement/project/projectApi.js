// 修船模块-航修工程单Api接口

import request from '../../../../utils/request'
// 工程单一览->工程单一览查询
export function getPageByCondition(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 工程单一览->工程单状态下拉选
export function getProjectStatusList(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/getProjectStatusList',
    method: 'get',
    params: data
  })
}
// 工程单详情->工程单信息查询
export function getProjectInfo(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/getProjectInfo',
    method: 'get',
    params: data
  })
}
// 工程单详情->单位下拉选
export function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 获取公司下所有部门 船端
export function getVesselDeptByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getVesselDeptByCompId',
    method: 'get',
    params: { compId: data }
  });
}
// 工程单详情->编辑保存
export function saveVoyageProjectInfo(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/api/saveVoyageProjectInfo',
    method: 'post',
    data
  });
}
// 工程单详情->废弃
export function discardVoyageProjectInfo(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/api/discardVoyageProjectInfo',
    method: 'post',
    data
  });
}
// 工程单详情->判断审核流是否存在
export function isWorkFlow(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/isWorkFlow',
    method: 'get',
    params: data
  });
}
// 工程单详情->操作历史
export function getBillOperateHis(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  });
}
// 下拉添加
export function add(data) {
  return request({
    url: '/customDropDown/api/saveAdd',
    method: 'post',
    data
  })
}
// 下拉编辑
export function edit(data) {
  return request({
    url: '/customDropDown/api/saveEdit',
    method: 'post',
    data
  })
}
// 下拉删除
export function saveDelete(data) {
  return request({
    url: '/customDropDown/api/saveDelete',
    method: 'post',
    data
  })
}
// 工程单详情->删除操作
export function deleteProjectItem(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/api/deleteProjectItem',
    method: 'post',
    data
  });
}
// 工程单详情->查询申请单汇总
export function getRepairApplSummaryList(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/getRepairApplSummaryList',
    method: 'get',
    params: data
  });
}
// 工程单详情->删除修船厂
export function deleteShipyardItem(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/api/deleteShipyardItem',
    method: 'post',
    data
  });
}
// 工程单详情->根据员工ID取得发件箱信息集合
export function getAllSendMailInfoList(data) {
  return request({
    url: '/commonSendMailInfo/query/getAllSendMailInfoListByStaffId',
    method: 'get',
    params: data
  });
}
// 工程单详情->取得发件箱类型信息
export function getMailHostTypeList(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeList',
    method: 'get',
    params: data
  });
}
// 工程单详情->取得发件箱类型信息
export function getMailHostTypeListByTypeId(data) {
  return request({
    url: '/commonSendMailHostType/query/getMailHostTypeListByTypeId',
    method: 'get',
    params: data
  });
}
// 工程单详情->删除发件箱信息
export function deleteSendMailInfo(data) {
  return request({
    url: '/commonSendMailInfo/api/deleteSendMailInfo',
    method: 'post',
    data
  });
}
// 工程单详情->保存或者修改邮箱信息
export function saveOrUpdateSendMailInfos(data) {
  return request({
    url: '/commonSendMailInfo/api/saveOrUpdateSendMailInfos',
    method: 'post',
    data
  });
}
// 工程单详情->关联单据
export function getProjectRelevanceBill(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/getProjectRelevanceBill',
    method: 'get',
    params: data
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
// 发邮件
export function sendMail(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/api/sendMail',
    method: 'post',
    data
  });
}

// 附件导出
export function doExportFill(data) {
  return request({
    url: '/repairVoyageRepairProjectInfo/query/doExportFill',
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