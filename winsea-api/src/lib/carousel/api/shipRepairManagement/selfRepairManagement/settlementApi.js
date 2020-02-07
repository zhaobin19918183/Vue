// 修船模块-自修结算单Api接口

import request from '../../../request'
// 自修结算单一览->自修结算单一览查询
function getPageByCondition(data) {
  return request({
    url: '/repairSelfSettlementInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 自修结算单一览->自修结算单状态查询
function getStatusList(data) {
  return request({
    url: '/repairSelfSettlementInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}
// 制定自修结算单->新增保存
function createSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/createSettlementInfo',
    method: 'post',
    data: data
  })
}
// 制定自修结算单->编辑保存
function updateSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/updateSettlementInfo',
    method: 'post',
    data: data
  })
}
// 制定自修结算单->详细页查询
function getSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/query/getSettlementInfo',
    method: 'get',
    params: data
  })
}
// 制定申请单->删除单条->删除明细
function deleteSettlementDetail(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/deleteSettlementDetail',
    method: 'post',
    data: data
  })
}
// 制定自修结算单->废弃
function discardSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/discardSettlementInfo',
    method: 'post',
    data: data
  })
}
// 制定自修结算单->普通提交
function submitSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/submitSettlementInfo',
    method: 'post',
    data: data
  })
}
// 自修结算单详细->工作流审核通过,退回
function checkPass(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 自修结算单详细->普通退回
function returnSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/returnSettlementInfo',
    method: 'post',
    data: data
  })
}
// 自修结算单详细->确认
function confirmSettlementInfo(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/confirmSettlementInfo',
    method: 'post',
    data: data
  })
}
// 自修结算单详细->提交岸基
function submitSettlementInfoAudit(data) {
  return request({
    url: '/repairSelfSettlementInfo/api/submitSettlementInfoAudit',
    method: 'post',
    data: data
  })
}
// 自修结算单详细->审核信息查询
function getAuditInformations(data) {
  return request({
    url: '/repairSelfSettlementInfo/query/getAuditInformations',
    method: 'get',
    params: data
  })
}
// 自修结算单详细->操作历史查询
function getBillOperateHis(data) {
  return request({
    url: '/repairSelfSettlementInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 通过公司ID获取船舶列表
function getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  })
}
// 获取公司下所有部门 船端
function getVesselDeptByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getVesselDeptByCompId',
    method: 'get',
    params: { compId: data }
  });
}
// 制定自修结算单->工程类别一览查询
function getRepairParameterCompany(data) {
  return request({
    url: '/repairParameterCompany/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}
// 可编辑单位下拉选查询
function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 下拉添加
function add(data) {
  return request({
    url: '/customDropDown/api/saveAdd',
    method: 'post',
    data
  })
}
// 下拉编辑
function edit(data) {
  return request({
    url: '/customDropDown/api/saveEdit',
    method: 'post',
    data
  })
}
// 下拉删除
function saveDelete(data) {
  return request({
    url: '/customDropDown/api/saveDelete',
    method: 'post',
    data
  })
}
export default {
  getPageByCondition,
  getStatusList,
  createSettlementInfo,
  updateSettlementInfo,
  getSettlementInfo,
  deleteSettlementDetail,
  discardSettlementInfo,
  submitSettlementInfo,
  checkPass,
  returnSettlementInfo,
  confirmSettlementInfo,
  submitSettlementInfoAudit,
  getAuditInformations,
  getBillOperateHis,
  getVesselListByCompId,
  getVesselDeptByCompId,
  getRepairParameterCompany,
  customDropDown,
  add,
  edit,
  saveDelete
}