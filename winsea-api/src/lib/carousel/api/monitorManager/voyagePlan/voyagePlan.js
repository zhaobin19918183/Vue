// 工单报告
import request from '../../../utils/request'

// 查询航次计划一览信息
export function getPageIncompatibleReportInfo(params) {
  return request({
    url: '/voyagePlanInfo/query/getPageIncompatibleReportInfo',
    method: 'get',
    params: params
  })
}

// 根据船舶，模板id查询附件
export function getSystemFileIdByVesselId(params) {
  return request({
    url: '/systemFilesInfo/query/getSystemFileIdByVesselId',
    method: 'get',
    params: params
  })
}

// 根据Id查询航次计划信息
export function getVoyagePlanInfoResponseList(params) {
  return request({
    url: '/voyagePlanInfo/query/getVoyagePlanInfoResponseList',
    method: 'get',
    params: params
  })
}

// 根据Id查询航次计划操作历史信息
export function getFileOperationHisResponseList(params) {
  return request({
    url: '/fileOperationHis/query/getFileOperationHisResponseList',
    method: 'get',
    params
  })
}

// 查询航次计划一览状态
export function getstatusList(params) {
  return request({
    url: '/voyagePlanInfo/query/getstatusList',
    method: 'get',
    params: params
  })
}

// 提交航次计划信息
export function submitVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/submitVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 保存航次计划信息
export function saveVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/saveVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 退回航次计划信息
export function returnVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/returnVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 废弃航次计划信息
export function discardVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/discardVoyagePlanCommon',
    method: 'post',
    data: data
  })
}

// 确认航次计划信息
export function commitVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/commitVoyagePlanCommon',
    method: 'post',
    data
  })
}

//  审核接口
export function handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}

// 提交岸基航次计划信息
export function SubmissionVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/SubmissionVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 查询海务体系文件信息
export function getSystemFilesInfo(params) {
  return request({
    url: '/systemFilesInfo/query/getSystemFilesInfo',
    method: 'get',
    params: params
  })
}

// 批量保存海务相关体系文件信息
export function saveSystemFilesInfoList(data) {
  return request({
    url: '/systemFilesInfo/api/saveSystemFilesInfoList',
    method: 'post',
    data
  })
}

// 保存海务相关体系文件信息
export function saveSystemFilesInfo(data) {
  return request({
    url: '/systemFilesInfo/api/saveSystemFilesInfo',
    method: 'post',
    data
  })
}

// 删除海务相关体系文件信息
export function deleteSystemFilesInfo(data) {
  return request({
    url: '/systemFilesInfo/api/deleteSystemFilesInfo',
    method: 'post',
    data
  })
}

// 获取全部船舶
export function selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}
