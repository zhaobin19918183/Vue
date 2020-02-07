import request from  '../../../request'
// 查询付款申请列表
function getPaymentListByCondition(data) {
  return request({
    // url: '/financePaymentApply/query/getListByCondition',
    url: '/financePaymentApply/query/getPageByCondition',
    method: 'get',
    params: data,
    headers: {'request-type': 'zj'},

  })
}
// 新增付款申请
function savePay(data) {
  return request({
    url: '/financePaymentApply/api/savePay',
    method: 'post',
    data,
    headers: {'request-type': 'zj'},
  })
}
// 提交付款申请
function submitPay(data) {
  return request({
    url: '/financePaymentApply/api/submitPay',
    method: 'post',
    data,
    headers: {'request-type': 'zj'},
  })
}
// 备用金回滚
function rollbackImprest(data) {
  return request({
    url: '/financePaymentApply/api/rollbackImprest',
    method: 'post',
    data,
    headers: {'request-type': 'zj'},
  })
}

function sendPayMessage(data) {
  return request({
    url: '/financePaymentApply/api/sendPayMessage',
    method: 'post',
    data,
    headers: {'request-type': 'zj'},
  })
}
export default {
  getPaymentListByCondition,
  savePay,
  submitPay,
  rollbackImprest,
  sendPayMessage
}
