import request from '@/utils/request'

// 查询付款申请列表
function  getPaymentListByCondition(data) {
  return request({
    // url: '/financePaymentApply/query/getListByCondition',
    url: '/financePaymentApply/query/getPageByCondition',
    method: 'get',
    params: data

  })
}

// 付款申请批量付款页面信息查询
function  getPaymentBatchPayInfos(data) {
  return request({
    url: '/financePaymentApply/query/getBatchPayInfos',
    method: 'get',
    params: data

  })
}

// 付款申请付款
function  paymentApplyMoney(data) {
  return request({
    url: '/financePaymentApply/api/payMoney',
    method: 'post',
    data
  })
}

// 查询报销申请列表
function  getReimburseListByCondition(data) {
  return request({
    url: '/financeReimbursementApply/query/getListByCondition',
    method: 'get',
    params: data

  })
}

// 报销付款
function  reimburseApplyMoney(data) {
  return request({
    url: '/financeReimbursementApply/api/payMoney',
    method: 'post',
    data
  })
}

// 报销申请批量付款页面信息查询
function  getReimburseBatchPayInfos(data) {
  return request({
    url: '/financeReimbursementApply/query/getBatchPayInfos',
    method: 'get',
    params: data

  })
}

// 差旅费分页查询
function  getTravelListByCondition(data) {
  return request({
    url: '/financeTravelExpensesApply/query/getListByCondition',
    method: 'get',
    params: data

  })
}



// 编辑付款申请备注
function  editRemark(data) {
  return request({
    url: '/financePaymentApply/api/editRemark',
    method: 'post',
    data
  })
}
// 编辑报销申请备注
function  editReimburseRemark(data) {
  return request({
    url: '/financeReimbursementApply/api/editRemark',
    method: 'post',
    data
  })
}

// 编辑差旅费申请备注
function  editTravelRemark(data) {
  return request({
    url: '/financeTravelExpensesApply/api/editRemark',
    method: 'post',
    data
  })
}
