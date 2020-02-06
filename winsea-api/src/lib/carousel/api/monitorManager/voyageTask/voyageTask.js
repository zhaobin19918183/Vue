import request from '../../../utils/request'

// 查询航次任务一览信息
export function getPageVoyageMissionInfo(params) {
  return request({
    url: '/voyageMissionInfo/query/getPageVoyageMissionInfo',
    method: 'get',
    params: params
  })
}

// 通过公司ID获取部门列表
export function deptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  })
}

// 下拉添加
export function add(data) {
  return request({
    url: '/customDropDown/api/saveAdd',
    method: 'post',
    data
  })
}

// 下拉编辑
export function edit(data) {
  return request({
    url: '/customDropDown/api/saveEdit',
    method: 'post',
    data
  })
}

// 下拉删除
export function saveDelete(data) {
  return request({
    url: '/customDropDown/api/saveDelete',
    method: 'post',
    data
  })
}

// 下拉获取
export function getArr(params) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params
  })
}

// 查询航次任务信息
export function getVoyageMissionInfoResponse(params) {
  return request({
    url: '/voyageMissionInfo/query/getVoyageMissionInfoResponse',
    method: 'get',
    params: params
  })
}

// 查询航次任务信息
export function getstatusList(params) {
  return request({
    url: '/voyageMissionInfo/query/getstatusList',
    method: 'get',
    params: params
  })
}

// 保存航次任务信息
export function saveVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/saveVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 提交航次任务信息
export function submitVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/submitVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 商务经理审核航次任务信息
export function reviewedVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/reviewVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 退回航次任务
export function returnVoyageMissionCommon(data) {
  return request({
    url: '/voyageMissionInfo/api/returnVoyageMissionCommon',
    method: 'post',
    data
  })
}

// 部门主管完善航次任务
export function improveVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/improveVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 部门主管填写执行反馈航次任务
export function implementationVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/implementationVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 船管总经理审核航次任务
export function generalReviewVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/generalReviewVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 输出航次任务
export function exportVoyageMission(data) {
  return request({
    url: '/voyageMissionInfo/api/exportVoyageMission',
    method: 'post',
    data
  })
}

// 部门经理审核航次任务
export function departmentReviewVoyageMissionInfo(data) {
  return request({
    url: '/voyageMissionInfo/api/departmentReviewVoyageMissionInfo',
    method: 'post',
    data
  })
}

// 查询航次任务操作流程
export function getVoyageOrderFlowResponseList(data) {
  return request({
    url: '/voyageOrderFlow/query/getVoyageOrderFlowResponseList',
    method: 'post',
    data
  })
}




