// 检查性临时报告
import request from '../../utils/request'

// 检查模版保存
export function saveTemplate(data) {
  return request({
    url: '/maintainCheckedTemplate/api/saveTemplate',
    method: 'post',
    data
  })
}

// 一览页信息查询
export function getPageByCondition(data) {
  return request({
    url: '/maintainCheckedTemplate/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 检查模版删除
export function deleteTemplate(data) {
  return request({
    url: '/maintainCheckedTemplate/api/deleteTemplate',
    method: 'post',
    data
  })
}

// 检查模版详情信息查询
export function getInfoById(data) {
  return request({
    url: '/maintainCheckedTemplate/query/getInfoById',
    method: 'get',
    params: data
  })
}

// 检查模版下拉框数据查询【检查报告用】
export function getTemplateDatas(data) {
  return request({
    url: '/maintainCheckedTemplate/query/getTemplateDatas',
    method: 'get',
    params: data
  })
}

// 查询检查模版详细信息【检查报告用】
export function getTemplateById(data) {
  return request({
    url: '/maintainCheckedReport/query/getTemplateById',
    method: 'get',
    params: data
  })
}

// 保存/提交检查性报告
export function saveOrSubmitReport(data) {
  return request({
    url: '/maintainCheckedReport/api/saveOrSubmitReport',
    method: 'post',
    data
  })
}

// 检查报告一览页信息查询
export function getInspectPageByCondition(data) {
  return request({
    url: '/maintainCheckedReport/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 检查报告详情信息查询
export function getInspectInfoById(data) {
  return request({
    url: '/maintainCheckedReport/query/getInfoById',
    method: 'get',
    params: data
  })
}

// 确认检查报告
export function confirmReport(data) {
  return request({
    url: '/maintainCheckedReport/api/confirmReport',
    method: 'post',
    data
  })
}

// 检查报告提交岸基
export function submitReportToLand(data) {
  return request({
    url: '/maintainCheckedReport/api/submitReportToLand',
    method: 'post',
    data
  })
}

// 批复检查报告
export function replyReport(data) {
  return request({
    url: '/maintainCheckedReport/api/replyReport',
    method: 'post',
    data
  })
}

// 退回检查报告
export function returnReport(data) {
  return request({
    url: '/maintainCheckedReport/api/returnReport',
    method: 'post',
    data
  })
}
