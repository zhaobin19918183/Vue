// 修船模块-航修验收单Api接口

import request from '../../../../utils/request'
// 验收单一览->验收单一览查询
export function getPageByCondition(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 验收单一览->验收单状态查询
export function getStatusList(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单详细页查询
export function getAcceptanceInfo(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getAcceptanceInfo',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单编辑保存
export function saveAcceptanceInfo(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/saveAcceptanceInfo',
    method: 'post',
    data: data
  })
}
// 验收单详细->工程类别一览查询
export function getRepairParameterCompany(data) {
  return request({
    url: '/repairParameterCompany/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单普通提交
export function submitAcceptanceReport(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/submitAcceptanceReport',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单提交岸基
export function submitAcceptanceReportAudit(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/submitAcceptanceReportAudit',
    method: 'post',
    data: data
  })
}
// 验收单详细->删除单条->删除明细
export function deleteAcceptanceItemList(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/deleteAcceptanceItemList',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单批复通过
export function checkPass(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单退回
export function returnAcceptanceInfo(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/returnAcceptanceInfo',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单确认
export function confirmAcceptanceReport(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/api/confirmAcceptanceReport',
    method: 'post',
    data: data
  })
}
// 验收单详细->验收单审核信息查询
export function getAcceptanceAuditInformations(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getAcceptanceAuditInformations',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单操作历史查询
export function getBillOperateHis(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 可编辑单位下拉选查询
export function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
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
// 验收单新增->通过公司ID获取船舶列表
export function getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  })
}
// 验收单详细->验收单关联单据查询
export function getAcceptanceRelevanceBill(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getAcceptanceRelevanceBill',
    method: 'get',
    params: data
  })
}
// 验收单一览->修船厂过滤查询
export function getShipyardList(data) {
  return request({
    url: '/repairVoyageAcceptanceInfo/query/getShipyardList',
    method: 'get',
    params: data
  })
}

