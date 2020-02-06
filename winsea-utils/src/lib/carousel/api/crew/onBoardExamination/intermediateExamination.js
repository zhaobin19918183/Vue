import request from '../../../request'

// 中间考核一览
function  getPageByCondition(params) {
  return request({
    url: '/middleEvaluateController/query/getPageByCondition',
    method: 'get',
    params
  })
}

// 查询中间考评详情信息
function  getInfoById(params) {
  return request({
    url: '/middleEvaluateController/query/getInfoById',
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
// 在船职务
function  getOnShipDutyList(params) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params
  })
}

// 保存考评详情信息（新增/编辑）
function  saveEvaluate(data) {
  return request({
    url: '/middleEvaluateController/api/saveEvaluate',
    method: 'post',
    data
  })
}

// 提交考评详情信息
function  submitEvaluate(data) {
  return request({
    url: '/middleEvaluateController/api/submitEvaluate',
    method: 'post',
    data
  })
}

// 废弃考评信息
function  saveDiscard(data) {
  return request({
    url: '/middleEvaluateController/api/saveDiscard',
    method: 'post',
    data
  })
}

// 查询考核人信息 模板信息
function  getEvalDynamicDuty(params) {
  return request({
    url: '/middleEvaluateController/query/getEvalDynamicDuty',
    method: 'get',
    params
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

// 操作历史
function  getOperateHistorys(params) {
  return request({
    url: '/crewFileOperationHis/query/getOperateHistory',
    method: 'get',
    params
  })
}

// 列表保存附件信息
function  changeAppendix(data) {
  return request({
    url: '/middleEvaluateController/api/changeAppendix',
    method: 'post',
    data
  })
}

// 通过船员查询资历信息（上船时间、上船港口）
function  selectCrewSeniority(params) {
  return request({
    url: '/crewEvaluateInfo/query/getCrewSeniority',
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

// 通过船舶、职务查询船员
function  selectCrew(params) {
  return request({
    url: '/crewEvaluateInfo/query/getShipAndRoleSearchCrew',
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
export default{
  getPageByCondition,
  getInfoById,
  saveAppendixUrl,
  uploadFiles,
  getOnShipDutyList,
  saveEvaluate,
  submitEvaluate,
  saveDiscard,
  getEvalDynamicDuty,
  getCrewData,
  getOperateHistorys,
  changeAppendix,
  selectCrewSeniority,
  getCaptainForm,
  selectCrew,
  updateDisembarkComment,
  updateDisembarkCommentReturn




}