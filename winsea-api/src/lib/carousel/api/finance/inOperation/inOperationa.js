import request from  '../../../request'

// 月资金预算新增保存
function  saveAdd(data) {
  return request({
    url: '/financeMonthBudget/api/saveAdd',
    method: 'post',
    data
  })
}

// 月资金预算编辑保存
function  saveEdit(data) {
  return request({
    url: '/financeMonthBudget/api/saveEdit',
    method: 'post',
    data
  })
}

// 预算提交审核
function  saveSubmit(data) {
  return request({
    url: '/financeMonthBudget/api/saveSubmit',
    method: 'post',
    data
  })
}

// 月资金预算废弃
function  saveDiscard(data) {
  return request({
    url: '/financeMonthBudget/api/saveDiscard',
    method: 'post',
    data
  })
}
// 查询部门预算一览列表
function  getPageByCondition(params) {
  return request({
    url: '/financeMonthBudget/query/getPageByCondition',
    method: 'get',
    params: params
  })
}
// 查询月资金预算详情信息
function  getDetailInfoById(params) {
  return request({
    url: '/financeMonthBudget/query/getDetailInfoById',
    method: 'get',
    params: params
  })
}
// 预算新增初始化页面详情信息获得
function  getInitDetailInfo(params) {
  return request({
    url: '/financeMonthBudget/query/getInitDetailInfo',
    method: 'get',
    params: params
  })
}

// 查询月资金预算操作历史信息
function  getOperateHistorys(params) {
  return request({
    url: '/financeMonthBudget/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}

// 资金汇总
function  monthFundCollect(params) {
  return request({
    url: '/financeMonthBudget/query/monthFundCollect',
    method: 'get',
    params: params
  })
}

export default{
  saveAdd,
  saveEdit,
  saveSubmit,
  saveDiscard,
  getPageByCondition,
  getDetailInfoById,
  getInitDetailInfo,
  getOperateHistorys,
  monthFundCollect

}
