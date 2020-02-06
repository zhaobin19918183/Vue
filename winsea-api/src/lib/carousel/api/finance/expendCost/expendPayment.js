import request from '@/utils/request'

// 新增付款申请
export function addPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/addPaymentApply',
    method: 'post',
    data
  })
}

// 提交付款申请
export function submitPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/submitPaymentApply',
    method: 'post',
    data
  })
}

// 查询付款申请详情
export function getPaymentApplyById(data) {
  return request({
    url: '/financePaymentApply/query/getPaymentApplyById',
    method: 'get',
    params: data

  })
}

// 删除付款申请
export function deletePaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/deletePaymentApply',
    method: 'post',
    data
  })
}

// 修改付款申请
export function editPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/editPaymentApply',
    method: 'post',
    data
  })
}

// 查询付款申请操作历史信息
export function getPaymentApplyOperateHistorys(data) {
  return request({
    url: '/financePaymentApply/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 付款申请付款
export function paymentApplyMoney(data) {
  return request({
    url: '/financePaymentApply/api/payMoney',
    method: 'post',
    data
  })
}

// 付款申请上传水单、签收单
export function uploadWaterBill(data) {
  return request({
    url: '/financePaymentApply/api/uploadWaterBill',
    method: 'post',
    data
  })
}

// 根据关联采购单号查询已申请金额
export function getPayedMoneyByPhurchaseNos(data) {
  return request({
    url: '/financePaymentApply/query/getPayedMoneyByPhurchaseNos',
    method: 'get',
    params: data
  })
}

// 付款申请单获得关联的付款单据号
export function getRelationBillNos(data) {
  return request({
    url: '/financePaymentApply/query/getRelationBillNos',
    method: 'get',
    params: data
  })
}

// 获取待付款结算单列表
export function selectPayBillList(data) {
  return request({
    url: '/purSpBillInfo/query/selectPayBillList',
    method: 'get',
    params: data
  })
}

// 付款申请单生成同步单据状态
export function createPayApplChangeState(data) {
  return request({
    url: '/purSpBillInfo/api/createPayApplChangeState',
    method: 'post',
    data
  })
}

// 付款完成同步单据状态
export function completeApplPayBill(data) {
  return request({
    url: '/purSpBillInfo/api/completeApplPayBill',
    method: 'post',
    data
  })
}

// 发票号去重
export function checkInvoiceRepeat(data) {
  return request({
    url: '/financePaymentApply/query/checkInvoiceRepeat',
    method: 'get',
    params: data
  })
}

// 付款工作通知
export function sendPayMessage(data) {
  return request({
    url: '/financePaymentApply/api/sendPayMessage',
    method: 'post',
    data
  })
}

// 推送出纳付款（付款申请）
export function sendPayToPay(data) {
  return request({
    url: '/financePaymentApply/api/sendToPay',
    method: 'post',
    data
  })
}
