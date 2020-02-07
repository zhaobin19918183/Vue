import request from '../request'

// 新增付款申请
function addPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/addPaymentApply',
    method: 'post',
    data
  })
}

// 修改付款申请
function editPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/editPaymentApply',
    method: 'post',
    data
  })
}

// 删除付款申请
function deletePaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/deletePaymentApply',
    method: 'post',
    data
  })
}

// 获取当前登录用户信息
function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data

  })
}

// 查询付款申请列表
function getListByCondition(data) {
  return request({
    url: '/financePaymentApply/query/getListByCondition',
    method: 'get',
    params: data

  })
}

// 查询付款申请详情
function getPaymentApplyById(data) {
  return request({
    url: '/financePaymentApply/query/getPaymentApplyById',
    method: 'get',
    params: data

  })
}

// 获取公司下所有部门
function getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: {
      compId: data
    }
  })
}

// 查询部门下职员
function getStaffListByDeptId(data) {
  return request({
    url: '/staff/query/getStaffListByDeptId',
    method: 'get',
    params: data
  })
}

// 付款申请提交审核
function submitWorkFlow(data) {
  return request({
    url: '/financePaymentApply/api/submitWorkFlow',
    method: 'post',
    data
  })
}

// 查询付款申请检索类别默认值
function getDefaultSearchType(data) {
  return request({
    url: '/financePaymentApply/query/getDefaultSearchType',
    method: 'get',
    params: data
  })
}
// 获取任务审批历史
function taskHistories(data) {
  return request({
    url: '/workflowHistory/query/taskHistories',
    method: 'get',
    params: data
  })
}
export default {
  addPaymentApply,
  editPaymentApply,
  deletePaymentApply,
  getCurrentUserInfo,
  getListByCondition,
  getPaymentApplyById,
  getDeptListByCompId,
  getStaffListByDeptId,
  submitWorkFlow,
  getDefaultSearchType,
  taskHistories
}