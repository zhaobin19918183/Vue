import request from '../../../utils/request'

// 查询预汇总算一览列表
export function getPageByCondition(params) {
  return request({
    url: '/financeYearBudget/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 校验当前年度预算是否已生成
export function checkExsited(params) {
  return request({
    url: '/financeYearBudget/query/checkExsited',
    method: 'get',
    params: params
  })
}

// 校验当前年度是否有预算调整
export function checkAdjusted(params) {
  return request({
    url: '/financeYearBudget/query/checkAdjusted',
    method: 'get',
    params: params
  })
}

// 预算汇总生成
export function saveAdd(data) {
  return request({
    url: '/financeYearBudget/api/saveAdd',
    method: 'post',
    data
  })
}

// 查询预算汇总详情信息
export function getDetailInfoById(params) {
  return request({
    url: '/financeYearBudget/query/getDetailInfoById',
    method: 'get',
    params: params
  })
}

// 重新获取预算汇总详情
export function refreshBudgetDetails(data) {
  return request({
    url: '/financeYearBudget/api/refreshBudgetDetails',
    method: 'post',
    data
  })
}

// 预算汇总确认
export function saveConfirm(data) {
  return request({
    url: '/financeYearBudget/api/saveConfirm',
    method: 'post',
    data
  })
}

// 查询预算汇总科目调整历史信息
export function getAdjustHistoryPage(params) {
  return request({
    url: '/financeYearBudget/query/getAdjustHistoryPage',
    method: 'get',
    params: params
  })
}

// 是否存在未完成审核的部门预算单据
export function exsitNotCompleted(params) {
  return request({
    url: '/financeDeptBudget/query/exsitNotCompleted',
    method: 'get',
    params: params
  })
}

// 洲际-预算结算提交
export function saveSubmitZj(data) {
  return request({
    url: '/financeYearBudget/api/saveSubmit',
    method: 'post',
    data,
    headers: {'request-type': 'zj'},
  })
}

// 洲际-查询预算汇总详情信息
export function getDetailInfoByIdZj(params) {
  return request({
    url: '/financeYearBudget/query/getDetailInfoById',
    method: 'get',
    params: params,
    headers: {'request-type': 'zj'},
  })
}

// 洲际-查询预汇总算一览列表
export function getPageByConditionZj(params) {
  return request({
    url: '/financeYearBudget/query/getPageByCondition',
    method: 'get',
    params: params,
    headers: {'request-type': 'zj'},
  })
}
