import request from '../../../request'

// 新增差旅费付款申请
function  addTravelExpensesApply(data) {
  return request({
    url: '/financeTravelExpensesApply/api/addTravelExpensesApply',
    method: 'post',
    data
  })
}

// 修改差旅费付款申请
function  editTravelExpensesApply(data) {
  return request({
    url: '/financeTravelExpensesApply/api/editTravelExpensesApply',
    method: 'post',
    data
  })
}

// 删除差旅费付款申请
function  deleteTravelExpensesApply(data) {
  return request({
    url: '/financeTravelExpensesApply/api/deleteTravelExpensesApply',
    method: 'post',
    data
  })
}

// 查询差旅费申请列表
function  getTravelListByCondition(data) {
  return request({
    url: '/financeTravelExpensesApply/query/getListByCondition',
    method: 'get',
    params: data

  })
}

// 查询差旅费申请详情
function  getTravelExpensesApplyById(data) {
  return request({
    url: '/financeTravelExpensesApply/query/getTravelExpensesApplyById',
    method: 'get',
    params: data

  })
}

// 查询差旅费申请检索类别默认值
function  getDefaultTravelSearchType(data) {
  return request({
    url: '/financeTravelExpensesApply/query/getDefaultSearchType',
    method: 'get',
    params: data
  })
}

// 查询付款申请操作历史信息
function  getOperateHistorys(data) {
  return request({
    url: '/financeTravelExpensesApply/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 差旅费付款
function  payMoney(data) {
  return request({
    url: '/financeTravelExpensesApply/api/payMoney',
    method: 'post',
    data
  })
}

// 查询差旅费原币币种
function  getCurrencyRates(data) {
  return request({
    url: '/financeTravelExpensesApply/query/getCurrencyRates',
    method: 'get',
    params: data
  })
}

// 查询基础数据
function  getListByCondition(data) {
  return request({
    url: '/financeParameter/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查询科目
function  getListByConditionSub(data) {
  return request({
    url: '/financeCostSubject/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 收款人
function  petpayeeListByCondition(data) {
  return request({
    url: '/financePersonalReceive/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查詢收款个人详细信息
function  getPersonalReceiveById(data) {
  return request({
    url: '/financePersonalReceive/query/getPersonalReceiveById',
    method: 'get',
    params: data
  })
}

// 提交差旅费申请
function  submitTravelExpensesApply(data) {
  return request({
    url: '/financeTravelExpensesApply/api/submitTravelExpensesApply',
    method: 'post',
    data
  })
}

// 推送出纳付款（差旅费申请）
function  sendToPay(data) {
  return request({
    url: '/financeTravelExpensesApply/api/sendToPay',
    method: 'post',
    data
  })
}
export default{
  addTravelExpensesApply,
  editTravelExpensesApply,
  deleteTravelExpensesApply,
  getTravelListByCondition,
  getTravelExpensesApplyById,
  getDefaultTravelSearchType,
  getOperateHistorys,
  payMoney,
  getCurrencyRates,
  getListByCondition,
  getListByConditionSub,
  petpayeeListByCondition,
  getPersonalReceiveById,
  submitTravelExpensesApply,
  sendToPay
}
