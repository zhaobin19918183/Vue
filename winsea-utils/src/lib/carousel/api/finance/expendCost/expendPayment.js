import request from '@/utils/request'

// 新增付款申请
function  addPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/addPaymentApply',
    method: 'post',
    data
  })
}

// 提交付款申请
function  submitPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/submitPaymentApply',
    method: 'post',
    data
  })
}

// 查询付款申请详情
function  getPaymentApplyById(data) {
  return request({
    url: '/financePaymentApply/query/getPaymentApplyById',
    method: 'get',
    params: data

  })
}

// 删除付款申请
function  deletePaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/deletePaymentApply',
    method: 'post',
    data
  })
}

// 修改付款申请
function  editPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/editPaymentApply',
    method: 'post',
    data
  })
}

// 查询付款申请操作历史信息
function  getPaymentApplyOperateHistorys(data) {
  return request({
    url: '/financePaymentApply/query/getOperateHistorys',
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

// 付款申请上传水单、签收单
function  uploadWaterBill(data) {
  return request({
    url: '/financePaymentApply/api/uploadWaterBill',
    method: 'post',
    data
  })
}

// 根据关联采购单号查询已申请金额
function  getPayedMoneyByPhurchaseNos(data) {
  return request({
    url: '/financePaymentApply/query/getPayedMoneyByPhurchaseNos',
    method: 'get',
    params: data
  })
}

// 付款申请单获得关联的付款单据号
function  getRelationBillNos(data) {
  return request({
    url: '/financePaymentApply/query/getRelationBillNos',
    method: 'get',
    params: data
  })
}

// 获取待付款结算单列表
function  selectPayBillList(data) {
  return request({
    url: '/purSpBillInfo/query/selectPayBillList',
    method: 'get',
    params: data
  })
}

// 付款申请单生成同步单据状态
function  createPayApplChangeState(data) {
  return request({
    url: '/purSpBillInfo/api/createPayApplChangeState',
    method: 'post',
    data
  })
}

// 付款完成同步单据状态
function  completeApplPayBill(data) {
  return request({
    url: '/purSpBillInfo/api/completeApplPayBill',
    method: 'post',
    data
  })
}

// 发票号去重
function  checkInvoiceRepeat(data) {
  return request({
    url: '/financePaymentApply/query/checkInvoiceRepeat',
    method: 'get',
    params: data
  })
}

// 付款工作通知
function  sendPayMessage(data) {
  return request({
    url: '/financePaymentApply/api/sendPayMessage',
    method: 'post',
    data
  })
}

// 推送出纳付款（付款申请）
function  sendPayToPay(data) {
  return request({
    url: '/financePaymentApply/api/sendToPay',
    method: 'post',
    data
  })
}
