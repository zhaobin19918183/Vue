import request from '../../utils/request'

// 我发布的详情查询
export function getInfoById(params) {
  return request({
    url: '/txCircularManagementInfo/query/getInfoById',
    method: 'get',
    params: params
  })
}

// 我发布的列表查询
export function queryCircularManagementInfoList(params) {
  return request({
    url: '/txCircularManagementInfo/query/queryCircularManagementInfoList',
    method: 'get',
    params: params
  })
}

// 我发布的新增保存
export function saveAdd(data) {
  return request({
    url: '/txCircularManagementInfo/api/saveCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的编辑保存
export function saveEditAdd(data) {
  return request({
    url: '/txCircularManagementInfo/api/updateCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的删除
export function moveCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementInfo/api/moveCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的发送
export function sendCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementInfo/api/sendCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的接收明细列表
export function queryCircularManagementReceiveListById(params) {
  return request({
    url: '/txCircularManagementInfo/query/queryCircularManagementReceiveListById',
    method: 'get',
    params: params
  })
}

// 我发布的退回
export function backCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementInfo/api/backCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我收到的列表查询
export function queryCircularManagementReceiveList(params) {
  return request({
    url: '/txCircularManagementReceive/query/queryCircularManagementReceiveList',
    method: 'get',
    params: params
  })
}

// 我收到的接收
export function receiveCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementReceive/api/receiveCircularManagementInfo',
    method: 'post',
    data
  })
}

// 类型
export function getParameterCompanyCircularCategory(params) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyCircularCategory',
    method: 'get',
    params: params
  })
}

// 类型
export function getInfoHisById(params) {
  return request({
    url: '/txCircularManagementInfo/query/getInfoHisById',
    method: 'get',
    params: params
  })
}
