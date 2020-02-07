import request from  '../../../request'

// 新增报销申请
function  addReimbursementApply(data) {
  return request({
    url: '/financeReimbursementApply/api/addReimbursementApply',
    method: 'post',
    data
  })
}

// 提交报销申请
function  submitReimbursementApply(data) {
  return request({
    url: '/financeReimbursementApply/api/submitReimbursementApply',
    method: 'post',
    data
  })
}

// 删除报销申请
function  deleteReimbursementApply(data) {
  return request({
    url: '/financeReimbursementApply/api/deleteReimbursementApply',
    method: 'post',
    data
  })
}

// 查询报销申请详情
function  getReimbursementApplyById(data) {
  return request({
    url: '/financeReimbursementApply/query/getReimbursementApplyById',
    method: 'get',
    params: data

  })
}


// 查询报销申请操作历史信息
function  getReimbursementOperateHistorys(data) {
  return request({
    url: '/financeReimbursementApply/query/getOperateHistorys',
    method: 'get',
    params: data

  })
}

// 报销付款
function  payReimbursementMoney(data) {
  return request({
    url: '/financeReimbursementApply/api/payMoney',
    method: 'post',
    data
  })
}

// 报销申请上传水单
function  uploadWaterBill(data) {
  return request({
    url: '/financeReimbursementApply/api/uploadWaterBill',
    method: 'post',
    data
  })
}

// 推送出纳付款（报销申请）
function  sendReimburseToPay(data) {
  return request({
    url: '/financeReimbursementApply/api/sendToPay',
    method: 'post',
    data
  })
}
export default{
  addReimbursementApply,
  submitReimbursementApply,
  deleteReimbursementApply,
  getReimbursementApplyById,
  getReimbursementOperateHistorys,
  payReimbursementMoney,
  uploadWaterBill,
  sendReimburseToPay

}