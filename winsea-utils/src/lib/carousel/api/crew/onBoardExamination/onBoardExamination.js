import request from '../../../request'
// 查询考评一览列表
function  selectAssessmentIndex(params) {
  return request({
    url: '/crewEvaluateInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 查询考评详情信息列表
function  selectAssessmentDetails(params) {
  return request({
    url: '/crewEvaluateInfo/query/getInfoById',
    method: 'get',
    params
  })
}
// 查询被考评人是不是船长   决定表单
function  getCaptainForm(params) {
  return request({
    url: '/crewEvaluateInfo/query/getFiller',
    method: 'get',
    params
  })
}
// （新增，编辑页）保存考评详情信息（新增编辑）在船的
function  saveSubmitAssessmentDetails(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveEvaluate',
    method: 'post',
    data
  })
}
// （新增，编辑页）保存考评详情信息（新增编辑）下船的
function  saveSubmitAssessmentDetailsDown(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveDisembarkationEvaluate',
    method: 'post',
    data
  })
}
// （新增，编辑页）提交考评详情信息（新增编辑）
function  submitAssessmentDetails(data) {
  return request({
    url: '/crewEvaluateInfo/api/submitEvaluate',
    method: 'post',
    data: data
  })
}
//  审核接口
function  reviewThrough(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 查询考核人职务id name //查询考核人职务和id
function  selectEvaluate(params) {
  return request({
    url: '/crewEvaluateInfo/query/getEvalDynamicDuty',
    method: 'get',
    params
  })
}
// // 审核页提交考评详情信息（新增编辑）
// function  SubmitAssessmentDetails(data) {
//   return request({
//     url: '/crewEvaluateInfo/api/saveEvaluate',
//     method: 'post',
//     data
//   })
// }

// 通过船员查询资历信息（上船时间、上船港口）
function  selectCrewSeniority(params) {
  return request({
    url: '/crewEvaluateInfo/query/getCrewSeniority',
    method: 'get',
    params
  })
}
// 通过船舶、职务查询船员
function  selectCrew(params) {
  return request({
    url: '/crewEvaluateInfo/query/getShipAndRoleSearchCrew',
    method: 'get',
    params
  })
}
// 废弃考评 --- 在船考核得废弃接口
function  abandoned(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveDiscard',
    method: 'post',
    data
  })
}
// 废弃考评 --- 下船评价得废弃接口
function  abandonedDown(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveDisembarkationDiscard',
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
// 获取全部职务
function  selectApplyDuty(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}
// 获取船员全部信息
function  getCrewData(params) {
  return request({
    url: '/crewSeafarerInfo/query/getSeafarerBySeafarerId',
    method: 'get',
    params
  })
}
// 获取操作历史
function  getOperateHistorys(params) {
  return request({
    url: '/crewFileOperationHis/query/getOperateHistory',
    method: 'get',
    params
  })
}
// 查询考评一览
function  getEvaluatePageByCondition(params) {
  return request({
    url: '/crewEvaluateInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// Disembarkation

// 在船职务
function  getOnShipDutyList(params) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params
  })
}
// 附件保存
function  saveAppendixUrl(data) {
  return request({
    url: '/crewEvaluateInfo/api/changeAppendix',
    method: 'post',
    data
  })
}
// 上传附件
function  uploadFiles(data) {
  return request({
    url: 'uploadFiles',
    method: 'post',
    data
  })
}
// 加入黑名单
function  AddBlacklist(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveAddBlacklist',
    method: 'post',
    data
  })
}
// 获取操作历史(年度考核)
function  getOperateHistorysYear(params) {
  return request({
    url: '/crewEvaluateInfo/query/getOperateHistorysYear',
    method: 'get',
    params
  })
}

// 获取任务审批历史
function  taskHistories(data) {
  return request({
    url: '/crewEvaluateInfo/query/taskHistories',
    method: 'get',
    params: data
  })
}
// 查询年度考评一览
function  getYearEvaluationPageByCondition(params) {
  return request({
    url: '/crewEvaluateInfo/query/getYearEvaluationPageByCondition',
    method: 'get',
    params
  })
}
// 废弃考评 --- 年度考评得废弃接口
function  saveYearEvaluationDiscard(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveYearEvaluationDiscard',
    method: 'post',
    data
  })
}
// （新增，编辑页）保存考评详情信息（新增编辑）年度考评
function  saveYearEvaluation(data) {
  return request({
    url: '/crewEvaluateInfo/api/saveYearEvaluation',
    method: 'post',
    data
  })
}
// 判断是否是船端
function  shipSideBol(params) {
  return request({
    url: '/system/query/isVesselTerminal',
    method: 'get',
    params
  })
}
// 下船评价确认
function  updateDisembarkComment(data) {
  return request({
    url: '/crewEvaluateInfo/api/updateDisembarkComment',
    method: 'post',
    data
  })
}
// 下船评价-待船长评价 退回
function  updateDisembarkCommentReturn(data) {
  return request({
    url: '/crewEvaluateInfo/api/updateDisembarkCommentReturn',
    method: 'post',
    data
  })
}
// 查询租户是否绑定该属性服务 判断是不是IS这个公司 如果是在船长这步会多一部流程。
function  attributeService(params) {
  return request({
    url: '/pluginService/query/attributeService',
    method: 'get',
    params
  })
}

export default {
  selectAssessmentIndex,
  selectAssessmentDetails,
  getCaptainForm,
  saveSubmitAssessmentDetails,
  saveSubmitAssessmentDetailsDown,
  submitAssessmentDetails,
  reviewThrough,
  selectEvaluate,
  selectCrewSeniority,
  selectCrew,
  abandoned,
  abandonedDown,
  selectShipId,
  selectApplyDuty,
  getCrewData,
  getOperateHistorys,
  getEvaluatePageByCondition,
  getOnShipDutyList,
  saveAppendixUrl,
  uploadFiles,
  AddBlacklist,
  getOperateHistorysYear,
  taskHistories,
  getYearEvaluationPageByCondition,
  saveYearEvaluationDiscard,
  saveYearEvaluation,
  shipSideBol,
  updateDisembarkComment,
  updateDisembarkCommentReturn,
  attributeService


}
