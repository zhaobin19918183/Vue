import request from '../../request'

// 我发布的详情查询
function  getInfoById(params) {
  return request({
    url: '/txCircularManagementInfo/query/getInfoById',
    method: 'get',
    params: params
  })
}

// 我发布的列表查询
function  queryCircularManagementInfoList(params) {
  return request({
    url: '/txCircularManagementInfo/query/queryCircularManagementInfoList',
    method: 'get',
    params: params
  })
}

// 我发布的新增保存
function  saveAdd(data) {
  return request({
    url: '/txCircularManagementInfo/api/saveCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的编辑保存
function  saveEditAdd(data) {
  return request({
    url: '/txCircularManagementInfo/api/updateCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的删除
function  moveCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementInfo/api/moveCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的发送
function  sendCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementInfo/api/sendCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我发布的接收明细列表
function  queryCircularManagementReceiveListById(params) {
  return request({
    url: '/txCircularManagementInfo/query/queryCircularManagementReceiveListById',
    method: 'get',
    params: params
  })
}

// 我发布的退回
function  backCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementInfo/api/backCircularManagementInfo',
    method: 'post',
    data
  })
}

// 我收到的列表查询
function  queryCircularManagementReceiveList(params) {
  return request({
    url: '/txCircularManagementReceive/query/queryCircularManagementReceiveList',
    method: 'get',
    params: params
  })
}

// 我收到的接收
function  receiveCircularManagementInfo(data) {
  return request({
    url: '/txCircularManagementReceive/api/receiveCircularManagementInfo',
    method: 'post',
    data
  })
}

// 类型
function  getParameterCompanyCircularCategory(params) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyCircularCategory',
    method: 'get',
    params: params
  })
}

// 类型
function  getInfoHisById(params) {
  return request({
    url: '/txCircularManagementInfo/query/getInfoHisById',
    method: 'get',
    params: params
  })
}
