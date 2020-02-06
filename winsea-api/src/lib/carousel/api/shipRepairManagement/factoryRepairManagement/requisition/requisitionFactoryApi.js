// 修船模块-厂修申请单Api接口

import request from '../../../../utils/request'
// 申请单一览->申请单一览查询
export function getPageByCondition(data) {
  return request({
    url: '/repairYardApplyInfo/query/getPageBy',
    method: 'get',
    params: data
  })
}
// 申请单一览->申请单状态查询
export function getApplyStatusList(data) {
  return request({
    url: '/repairYardApplyInfo/query/getStatus',
    method: 'get',
    params: data
  })
}
// 制定申请单->申请单新增保存
export function saveApplicationInfo(data) {
  return request({
    url: '/repairYardApplyInfo/api/saveAdd',
    method: 'post',
    data: data
  })
}
// 制定申请单->申请单编辑保存
export function saveEditApplicationInfo(data) {
  return request({
    url: '/repairYardApplyInfo/api/saveEdit',
    method: 'post',
    data: data
  })
}
// 制定申请单->申请单详细页查询
export function getRepairVoyageRepairApplyInfo(data) {
  return request({
    url: '/repairYardApplyInfo/query/getOneById',
    method: 'get',
    params: data
  })
}
// 厂修模板select查询
export function getTemplateList(data) {
  return request({
    url: '/repairShipyardTemplateInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 制定申请单->删除单条->删除明细
export function deleteApplyItem(data) {
  return request({
    url: '/repairYardApplyInfo/api/removeDetails',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单废弃
export function discardVoyageApplInfo(data) {
  return request({
    url: '/repairYardApplyInfo/api/discard',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单普通提交
export function submitReport(data) {
  return request({
    url: '/repairYardApplyInfo/api/apply',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单审核通过
export function checkPass(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单普通退回
export function returnReport(data) {
  return request({
    url: '/repairYardApplyInfo/api/back',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单确认
export function confirmReport(data) {
  return request({
    url: '/repairYardApplyInfo/api/confirm',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单提交岸基
export function submitReportAudit(data) {
  return request({
    url: '/repairYardApplyInfo/api/submit',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单操作历史查询
export function getBillOperateHis(data) {
  return request({
    url: '/repairYardApplyInfo/query/getBillOperateHis',
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
// 申请单新增->通过公司ID获取船舶列表
export function getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
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
// 申请单详细->申请单关联单据查询
export function getApplyRelevanceBill(data) {
  return request({
    url: '/repairYardApplyInfo/query/getApplyRelevanceBill',
    method: 'get',
    params: data
  })
}
