// 年度修理计划Api接口

import request from '../../../../request'
// 新增年度计划-保存
function  saveAdd(data) {
  return request({
    url: '/repairAnnualPlanInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 修理类别一览查询接口
function  getRepairParameterCompany(data) {
  return request({
    url: '/repairType/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}

// 获取详情
function  getOneById(data) {
  return request({
    url: '/repairAnnualPlanInfo/query/getOneById',
    method: 'get',
    params: data
  })
}
// 操作历史
function  getBillOperateHis(data) {
  return request({
    url: '/repairAnnualPlanInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
// 检查年份是否已有
function  checkYear(data) {
  return request({
    url: '/repairAnnualPlanInfo//query/checkYear',
    method: 'get',
    params: data
  })
}
// 提交
function  submit(data) {
  return request({
    url: '/repairAnnualPlanInfo/api/submit',
    method: 'post',
    data
  })
}
// 删除明细
function  removeDetail(data) {
  return request({
    url: '/repairAnnualPlanInfo/api/removeDetail',
    method: 'post',
    data
  })
}

// 废弃年度计划
function  discardPlan(data) {
  return request({
    url: '/repairAnnualPlanInfo/api/discard',
    method: 'post',
    data
  })
}
// 获取状态集合
function  getStatus(data) {
  return request({
    url: '/repairAnnualPlanInfo/query/getStatus',
    method: 'get',
    params: data
  })
}
// 获取分页数据
function  getPageBy(data) {
  return request({
    url: '/repairAnnualPlanInfo/query/getPageBy',
    method: 'get',
    params: data
  })
}

// 修改
function  saveEdit(data) {
  return request({
    url: '/repairAnnualPlanInfo/api/saveEdit',
    method: 'post',
    data
  })
}