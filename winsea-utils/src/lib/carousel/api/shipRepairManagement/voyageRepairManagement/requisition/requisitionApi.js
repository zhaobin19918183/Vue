// 修船模块-航修申请单Api接口

import request from '../../../../utils/request'
// 申请单一览->申请单一览查询
function  getPageByCondition(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 申请单一览->申请单状态查询
function  getApplyStatusList(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/query/getApplyStatusList',
    method: 'get',
    params: data
  })
}
// 制定申请单->申请单新增/编辑保存
function  saveApplicationInfo(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/saveVoyageRepairInfo',
    method: 'post',
    data: data
  })
}
// 制定申请单->工程类别一览查询
function  getRepairParameterCompany(data) {
  return request({
    url: '/repairParameterCompany/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}
// 制定申请单->申请单详细页查询
function  getRepairVoyageRepairApplyInfo(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/query/getRepairVoyageRepairApplyInfo',
    method: 'get',
    params: data
  })
}
// 制定申请单->删除单条->删除明细
function  deleteApplyItem(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/deleteApplyItem',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单废弃
function  discardVoyageApplInfo(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/discardVoyageApplInfo',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单普通提交
function  submitReport(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/submitReport',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单审核通过
function  checkPass(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单退回
function  returnReport(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/returnReport',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单确认
function  confirmReport(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/confirmReport',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单提交岸基
function  submitReportAudit(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/submitReportAudit',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单审核信息查询
function  getOperateHistorys(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/query/getAuditInformations',
    method: 'get',
    params: data
  })
}
// 申请单详细->申请单操作历史查询
function  getBillOperateHis(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 申请单详细->删除按钮->删除选中checkbox明细
function  deleteApplyItems(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/deleteApplyItems',
    method: 'post',
    data: data
  })
}
// 申请单详细->已退回,待操作/重新做成申请单
function  anewMakeApplyInfo(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/api/anewMakeApplyInfo',
    method: 'post',
    data: data
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
// 申请单新增->通过公司ID获取船舶列表
function  getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  })
}
// 申请单汇总->申请单汇总一览查询
function  getPageByConditionHZ(data) {
  return request({
    url: '/repairRepairApplSummary/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 获取公司下所有部门 船端
function  getVesselDeptByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getVesselDeptByCompId',
    method: 'get',
    params: { compId: data }
  });
}
// 申请单汇总->申请单汇总退回
function  returnApplyItems(data) {
  return request({
    url: '/repairRepairApplSummary/api/returnApplyItems',
    method: 'post',
    data: data
  })
}
// 申请单详细->申请单关联单据查询
function  getApplyRelevanceBill(data) {
  return request({
    url: '/repairVoyageRepairApplyInfo/query/getApplyRelevanceBill',
    method: 'get',
    params: data
  })
}
