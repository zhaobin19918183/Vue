import request from '../utils/request'

// 新增付款申请
export function addPaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/addPaymentApply',
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

// 删除付款申请
export function deletePaymentApply(data) {
  return request({
    url: '/financePaymentApply/api/deletePaymentApply',
    method: 'post',
    data
  })
}

// 获取当前登录用户信息
export function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data

  })
}

// 查询付款申请列表
export function getListByCondition(data) {
  return request({
    url: '/financePaymentApply/query/getListByCondition',
    method: 'get',
    params: data

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

// 获取公司下所有部门
export function getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: {
      compId: data
    }
  })
}

// 查询部门下职员
export function getStaffListByDeptId(data) {
  return request({
    url: '/staff/query/getStaffListByDeptId',
    method: 'get',
    params: data
  })
}

// 付款申请提交审核
export function submitWorkFlow(data) {
  return request({
    url: '/financePaymentApply/api/submitWorkFlow',
    method: 'post',
    data
  })
}

// 查询付款申请检索类别默认值
export function getDefaultSearchType(data) {
  return request({
    url: '/financePaymentApply/query/getDefaultSearchType',
    method: 'get',
    params: data
  })
}
// 获取任务审批历史
export function taskHistories(data) {
  return request({
    url: '/workflowHistory/query/taskHistories',
    method: 'get',
    params: data
  })
}
