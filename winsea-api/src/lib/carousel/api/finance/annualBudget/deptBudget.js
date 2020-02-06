import request from '../../../utils/request'

// 部门预算新增保存
export function saveAdd(data) {
  return request({
    url: '/financeDeptBudget/api/saveAdd',
    method: 'post',
    data
  })
}

// 部门预算编辑保存
export function saveEdit(data) {
  return request({
    url: '/financeDeptBudget/api/saveEdit',
    method: 'post',
    data
  })
}

// 部门预算提交审核
export function saveSubmit(data) {
  return request({
    url: '/financeDeptBudget/api/saveSubmit',
    method: 'post',
    data
  })
}

// 部门预算废弃
export function saveDiscard(data) {
  return request({
    url: '/financeDeptBudget/api/saveDiscard',
    method: 'post',
    data
  })
}

// 部门预算调整保存
export function saveAdjust(data) {
  return request({
    url: '/financeDeptBudget/api/saveAdjust',
    method: 'post',
    data
  })
}

// 查询部门预算一览列表
export function getPageByCondition(params) {
  return request({
    url: '/financeDeptBudget/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 查询部门预算详情信息
export function getDetailInfoById(params) {
  return request({
    url: '/financeDeptBudget/query/getDetailInfoById',
    method: 'get',
    params: params
  })
}

// 获得新增初始化页面详情信息
export function getInitDetailInfo(params) {
  return request({
    url: '/financeDeptBudget/query/getInitDetailInfo',
    method: 'get',
    params: params
  })
}

// 查询部门预算操作历史信息
export function getOperateHistorys(params) {
  return request({
    url: '/financeDeptBudget/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}


// 部门预算提交审核
export function sendAdjustHistory(data) {
  return request({
    url: '/financeDeptBudget/api/sendAdjustHistory',
    method: 'post',
    data
  })
}
