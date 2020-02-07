import request from '../../../request'

// 查询预汇总算一览列表
function  getPageByCondition(params) {
  return request({
    url: '/financeYearBudget/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 校验当前年度预算是否已生成
function  checkExsited(params) {
  return request({
    url: '/financeYearBudget/query/checkExsited',
    method: 'get',
    params: params
  })
}

// 校验当前年度是否有预算调整
function  checkAdjusted(params) {
  return request({
    url: '/financeYearBudget/query/checkAdjusted',
    method: 'get',
    params: params
  })
}

// 预算汇总生成
function  saveAdd(data) {
  return request({
    url: '/financeYearBudget/api/saveAdd',
    method: 'post',
    data
  })
}

// 查询预算汇总详情信息
function  getDetailInfoById(params) {
  return request({
    url: '/financeYearBudget/query/getDetailInfoById',
    method: 'get',
    params: params
  })
}

// 重新获取预算汇总详情
function  refreshBudgetDetails(data) {
  return request({
    url: '/financeYearBudget/api/refreshBudgetDetails',
    method: 'post',
    data
  })
}

// 预算汇总确认
function  saveConfirm(data) {
  return request({
    url: '/financeYearBudget/api/saveConfirm',
    method: 'post',
    data
  })
}

// 查询预算汇总科目调整历史信息
function  getAdjustHistoryPage(params) {
  return request({
    url: '/financeYearBudget/query/getAdjustHistoryPage',
    method: 'get',
    params: params
  })
}

// 是否存在未完成审核的部门预算单据
function  exsitNotCompleted(params) {
  return request({
    url: '/financeDeptBudget/query/exsitNotCompleted',
    method: 'get',
    params: params
  })
}

// 洲际-预算结算提交
function  saveSubmitZj(data) {
  return request({
    url: '/financeYearBudget/api/saveSubmit',
    method: 'post',
    data,
    headers: {'request-type': 'zj'},
  })
}

// 洲际-查询预算汇总详情信息
function  getDetailInfoByIdZj(params) {
  return request({
    url: '/financeYearBudget/query/getDetailInfoById',
    method: 'get',
    params: params,
    headers: {'request-type': 'zj'},
  })
}

// 洲际-查询预汇总算一览列表
function  getPageByConditionZj(params) {
  return request({
    url: '/financeYearBudget/query/getPageByCondition',
    method: 'get',
    params: params,
    headers: {'request-type': 'zj'},
  })
}

export default{
  getPageByCondition,
  checkExsited,
  checkAdjusted,
  saveAdd,
  getDetailInfoById,
  refreshBudgetDetails,
  saveConfirm,
  getAdjustHistoryPage,
  exsitNotCompleted,
  saveSubmitZj,
  getDetailInfoByIdZj,
  getPageByConditionZj

}

