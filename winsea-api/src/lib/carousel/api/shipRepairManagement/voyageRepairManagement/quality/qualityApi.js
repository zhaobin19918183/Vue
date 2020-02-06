// 质量反馈 Api接口

import request from '../../../../utils/request'
// 质量反馈一览查询
export function getPageByCondition(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询质量反馈状态集合
export function getStatusList(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}

// 质量反馈详情查询
export function getFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getFeedbackInfo',
    method: 'get',
    params: data
  })
}

// 质量反馈关联单据查询
export function getRelevanceBill(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getRelevanceBill',
    method: 'get',
    params: data
  })
}

// 质量反馈编辑
export function updateFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/updateFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈明细删除
export function deleteFeedbackDetail(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/deleteFeedbackDetail',
    method: 'post',
    data
  })
}

// 质量反馈故障原因删除
export function deleteFeedbackReason(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/deleteFeedbackReason',
    method: 'post',
    data
  })
}

// 质量反馈确认
export function confirmInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/confirmFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈退回
export function returnFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/returnFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈提交审核
export function submitFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/submitFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈操作历史查询
export function getBillOperateHis(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}