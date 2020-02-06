import request from '../../../request'

// 上岗前培训 查询详细信息
function  getTrainingInfoById(params) {
  return request({
    url: '/singlePreJobTrainingInfo/query/getTrainingInfoById',
    method: 'get',
    params: params
  })
}

// 上岗前培训 单人
function  cancelledTraining(data) { // 培训取消
  return request({
    url: '/singlePreJobTrainingInfo/api/cancelledTraining',
    method: 'post',
    data
  })
}

// 上岗前培训 单人
function  confirmPersonQualified(data) { // 考核合格
  return request({
    url: '/singlePreJobTrainingInfo/api/confirmPersonQualified',
    method: 'post',
    data
  })
}
// 上岗前培训 单人
function  confirmFailed(data) { // 考核不合格
  return request({
    url: '/singlePreJobTrainingInfo/api/confirmFailed',
    method: 'post',
    data
  })
}
// 上岗前培训 单人
function  qualified(data) { // 培训合格
  return request({
    url: '/singlePreJobTrainingInfo/api/qualified',
    method: 'post',
    data
  })
}
// 上岗前培训 单人
function  trainingFailed(data) { // 培训不合格
  return request({
    url: '/singlePreJobTrainingInfo/api/trainingFailed',
    method: 'post',
    data
  })
}
// 查询培训信息列表
function  getListPreByCondition(params) {
  return request({
    url: '/crewTrainingInfo/query/getListByCondition',
    method: 'get',
    params: params
  })
}
// 获取船舶id
function  selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}
// 上岗前培训（单人安排）
function  arrange(data) {
  return request({
    url: '/singlePreJobTrainingInfo/api/arrange',
    method: 'post',
    data
  })
}


// // 输出培训详情信息
function  exportTrain(params) {
  return request({
    url: '/crewTrainingInfo/query/saveWord',
    method: 'get',
    params: params
  })
}

// 保存培训信息(编辑)
function  saveEdit(data) {
  return request({
    url: '/crewTrainingInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 查询培训详情信息
function  getInfoById(params) {
  return request({
    url: '/crewTrainingInfo/query/getInfoById',
    method: 'get',
    params: params
  })
}

// 提交培训信息
function  submit(data) {
  return request({
    url: '/crewTrainingInfo/api/submit',
    method: 'post',
    data
  })
}

// 删除培训详情信息
function  deleteDetail(data) {
  return request({
    url: '/crewTrainingInfo/api/deleteDetail',
    method: 'post',
    params: { id: data }
  })
}

// 保存培训信息（新增/编辑）
function  save(data) {
  return request({
    url: '/crewTrainingInfo/api/save',
    method: 'post',
    data
  })
}
// 上岗前培训一览页（单人安排）
function  getPageByCondition(params) {
  return request({
    url: '/singlePreJobTrainingInfo/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 根据各种状态获取船员列表
function  getListBySeafarerCrew(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrew',
    method: 'get',
    params: params
  })
}

// 上岗前培训 分页版
function  getListBySeafarerCrewForPage(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrewForPage',
    method: 'get',
    params: params
  })
}

// 根据各种状态获取船员列表
function  getOperateHistorys(params) {
  return request({
    url: '/crewTrainingInfo/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}

// 根据各种状态获取船员列表
function  newGetOperateHistorys(params) {
  return request({
    url: '/crewFileOperationHis/query/getOperateHistory',
    method: 'get',
    params: params
  })
}

// 船上部门
function  parameterTenant(params) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: params
  })
}

// 是否有审核流（新）
function  checkExsitedWorkflow(params) {
  return request({
    url: '/crewTrainingInfo/query/checkExsitedWorkflow',
    method: 'get',
    params: params
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
// 审核通过不通过接口
function  dicApprove(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data
  })
}

// 培训合格（无审核流)
function  saveQualified(data) {
  return request({
    url: '/crewTrainingInfo/api/saveQualified',
    method: 'post',
    data
  })
}
// 培训不合格（无审核流)
function  saveUnqualified(data) {
  return request({
    url: '/crewTrainingInfo/api/saveUnqualified',
    method: 'post',
    data
  })
}

// 培训取消
function  cancelTraining(data) {
  return request({
    url: '/crewTrainingInfo/api/cancelTraining',
    method: 'post',
    data
  })
}
// 外派公司
function  getQueryList(params) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params: params
  })
}

// 地址
function  getTrainingTempInfo(params) {
  return request({
    url: '/trainingTemplateInfo/query/getTrainingTempInfo',
    method: 'get',
    params: params
  })
}

export default{
  getTrainingInfoById,
  cancelledTraining,
  confirmPersonQualified,
  confirmFailed,
  qualified,
  trainingFailed,
  getListPreByCondition,
  selectShipId,
  arrange,
  exportTrain,
  saveEdit,
  getInfoById,
  submit,
  deleteDetail,
  save,
  getPageByCondition,
  getListBySeafarerCrew,
  getListBySeafarerCrewForPage,
  getOperateHistorys,
  newGetOperateHistorys,
  parameterTenant,
  checkExsitedWorkflow,
  selectApplyDuty,
  dicApprove,
  saveQualified,
  saveUnqualified,
  cancelTraining,
  getQueryList,
  getTrainingTempInfo
  
}