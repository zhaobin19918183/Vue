// 修船模块-航修验收单Api接口

import request from '../../../../utils/request'
// 验收单一览->验收单一览查询
function  getPageByCondition(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 验收单一览->验收单状态查询
function  getStatusList(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单详细页查询
function  getAcceptanceInfo(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getAcceptanceInfo',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单编辑保存
function  saveAcceptanceInfo(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/saveAcceptanceInfo',
    method: 'post',
    data: data
  })
}
// 验收单详细->工程类别一览查询
function  getRepairParameterCompany(data) {
  return request({
    url: '/repairParameterCompany/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单普通提交
function  submitAcceptanceReport(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/submitAcceptanceReport',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单提交岸基
function  submitAcceptanceReportAudit(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/submitAcceptanceReportAudit',
    method: 'post',
    data: data
  })
}
// 验收单详细->删除单条->删除明细
function  deleteAcceptanceItemList(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/deleteAcceptanceItemList',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单批复通过
function  checkPass(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单退回
function  returnAcceptanceInfo(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/returnAcceptanceInfo',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单确认
function  confirmAcceptanceReport(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/confirmAcceptanceReport',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单审核信息查询
function  getAcceptanceAuditInformations(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getAcceptanceAuditInformations',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单操作历史查询
function  getBillOperateHis(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 可编辑单位下拉选查询
function  customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 下拉添加
function  add(data) {
  return request({
    url: '/customDropDown/api/saveAdd',
    method: 'post',
    data
  })
}
// 下拉编辑
function  edit(data) {
  return request({
    url: '/customDropDown/api/saveEdit',
    method: 'post',
    data
  })
}
// 下拉删除
function  saveDelete(data) {
  return request({
    url: '/customDropDown/api/saveDelete',
    method: 'post',
    data
  })
}
// 验收单新增->通过公司ID获取船舶列表
function  getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单关联单据查询
function  getAcceptanceRelevanceBill(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getAcceptanceRelevanceBill',
    method: 'get',
    params: data
  })
}
// 验收单一览->修船厂过滤查询
function  getShipyardList(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getShipyardList',
    method: 'get',
    params: data
  })
}

