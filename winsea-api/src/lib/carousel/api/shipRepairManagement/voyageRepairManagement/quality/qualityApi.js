// 质量反馈 Api接口

import request from '../../../../request'
// 质量反馈一览查询
function getPageByCondition(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询质量反馈状态集合
function getStatusList(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getStatusList',
    method: 'get',
    params: data
  })
}

// 质量反馈详情查询
function getFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getFeedbackInfo',
    method: 'get',
    params: data
  })
}

// 质量反馈关联单据查询
function getRelevanceBill(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getRelevanceBill',
    method: 'get',
    params: data
  })
}

// 质量反馈编辑
function updateFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/updateFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈明细删除
function deleteFeedbackDetail(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/deleteFeedbackDetail',
    method: 'post',
    data
  })
}

// 质量反馈故障原因删除
function deleteFeedbackReason(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/deleteFeedbackReason',
    method: 'post',
    data
  })
}

// 质量反馈确认
function confirmInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/confirmFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈退回
function returnFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/returnFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈提交审核
function submitFeedbackInfo(data) {
  return request({
    url: '/repairQualityFeedbackInfo/api/submitFeedbackInfo',
    method: 'post',
    data
  })
}

// 质量反馈操作历史查询
function getBillOperateHis(data) {
  return request({
    url: '/repairQualityFeedbackInfo/query/getBillOperateHis',
    method: 'get',
    params: data
  })
}
export default {
  getPageByCondition,
  getStatusList,
  getFeedbackInfo,
  getRelevanceBill,
  updateFeedbackInfo,
  deleteFeedbackDetail,
  deleteFeedbackReason,
  confirmInfo,
  returnFeedbackInfo,
  submitFeedbackInfo,
  getBillOperateHis
}