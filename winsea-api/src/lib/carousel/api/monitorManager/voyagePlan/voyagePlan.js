// 工单报告
import request from '../../../request'

// 查询航次计划一览信息
function  getPageIncompatibleReportInfo(params) {
  return request({
    url: '/voyagePlanInfo/query/getPageIncompatibleReportInfo',
    method: 'get',
    params: params
  })
}

// 根据船舶，模板id查询附件
function  getSystemFileIdByVesselId(params) {
  return request({
    url: '/systemFilesInfo/query/getSystemFileIdByVesselId',
    method: 'get',
    params: params
  })
}

// 根据Id查询航次计划信息
function  getVoyagePlanInfoResponseList(params) {
  return request({
    url: '/voyagePlanInfo/query/getVoyagePlanInfoResponseList',
    method: 'get',
    params: params
  })
}

// 根据Id查询航次计划操作历史信息
function  getFileOperationHisResponseList(params) {
  return request({
    url: '/fileOperationHis/query/getFileOperationHisResponseList',
    method: 'get',
    params
  })
}

// 查询航次计划一览状态
function  getstatusList(params) {
  return request({
    url: '/voyagePlanInfo/query/getstatusList',
    method: 'get',
    params: params
  })
}

// 提交航次计划信息
function  submitVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/submitVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 保存航次计划信息
function  saveVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/saveVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 退回航次计划信息
function  returnVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/returnVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 废弃航次计划信息
function  discardVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/discardVoyagePlanCommon',
    method: 'post',
    data: data
  })
}

// 确认航次计划信息
function  commitVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/commitVoyagePlanCommon',
    method: 'post',
    data
  })
}

//  审核接口
function  handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}

// 提交岸基航次计划信息
function  SubmissionVoyagePlanCommon(data) {
  return request({
    url: '/voyagePlanInfo/api/SubmissionVoyagePlanCommon',
    method: 'post',
    data
  })
}

// 查询海务体系文件信息
function  getSystemFilesInfo(params) {
  return request({
    url: '/systemFilesInfo/query/getSystemFilesInfo',
    method: 'get',
    params: params
  })
}

// 批量保存海务相关体系文件信息
function  saveSystemFilesInfoList(data) {
  return request({
    url: '/systemFilesInfo/api/saveSystemFilesInfoList',
    method: 'post',
    data
  })
}

// 保存海务相关体系文件信息
function  saveSystemFilesInfo(data) {
  return request({
    url: '/systemFilesInfo/api/saveSystemFilesInfo',
    method: 'post',
    data
  })
}

// 删除海务相关体系文件信息
function  deleteSystemFilesInfo(data) {
  return request({
    url: '/systemFilesInfo/api/deleteSystemFilesInfo',
    method: 'post',
    data
  })
}

// 获取全部船舶
function  selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}
export default{
  getPageIncompatibleReportInfo,
  getSystemFileIdByVesselId,
  getVoyagePlanInfoResponseList,
  getFileOperationHisResponseList,
  getstatusList,
  submitVoyagePlanCommon,
  saveVoyagePlanCommon,
  returnVoyagePlanCommon,
  discardVoyagePlanCommon,
  commitVoyagePlanCommon,
  handle,
  SubmissionVoyagePlanCommon,
  getSystemFilesInfo,
  saveSystemFilesInfoList,
  saveSystemFilesInfo,
  deleteSystemFilesInfo,
  selectShipId
  
}