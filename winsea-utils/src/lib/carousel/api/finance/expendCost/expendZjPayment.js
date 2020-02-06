import request from '@/utils/request'

export default {
  // 查询付款申请列表
  getPaymentListByCondition(data) {
    return request({
      // url: '/financePaymentApply/query/getListByCondition',
      url: '/financePaymentApply/query/getPageByCondition',
      method: 'get',
      params: data,
      headers: {'request-type': 'zj'},

    })
  },
  // 新增付款申请
  savePay(data) {
    return request({
      url: '/financePaymentApply/api/savePay',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },
  // 提交付款申请
  submitPay(data) {
    return request({
      url: '/financePaymentApply/api/submitPay',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },
  // 备用金回滚
  rollbackImprest(data) {
    return request({
      url: '/financePaymentApply/api/rollbackImprest',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },

  sendPayMessage(data) {
    return request({
      url: '/financePaymentApply/api/sendPayMessage',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },
}
