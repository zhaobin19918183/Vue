import request from '../../../request'

// 不符合报告一览查询
function  getNonConformReportInfo(data) {
  return request({
    url: '/txIncompatibleReportInfo/query/getPageIncompatibleReportInfo',
    method: 'get',
    params: data
  })
}
// 获取状态信息集合
function  getReportStatus(data) {
  return request({
    url: '/txIncompatibleReportInfo/query/getIncompatibleReportStatus',
    method: 'get',
    params: data
  })
}
// 缺陷类型查询
function  getQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompany',
    method: 'get',
    params: data
  })
}
// 获取检查类型集合
function  getParameterTenant(params) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: params
  });
}

// 获取检查类型集合-新
function  getCheckType(params) {
  return request({
    url: '/incompatibleSituationInfo/query/getCheckType',
    method: 'get',
    params: params
  });
}

// 获取公司下所有部门 岸端
function  getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  });
}
// 获取公司下所有船舶信息
function  getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  });
}

// 查询不符合报告明细
function  getNonConformReportDetail(data) {
  return request({
    url: '/txIncompatibleReportInfo/api/getIncompatibleReportDetail',
    method: 'post',
    data
  });
}
// 取得操作历史
function  getOperateHistorys(params) {
  return request({
    url: '/crewYearTrainingPlanInfo/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}
// 保存或提交不符合报告明细
function  saveUpdateReport(data) {
  return request({
    url: '/txIncompatibleReportInfo/api/saveIncompatibleReportInfo',
    method: 'post',
    data
  })
}
// 保存不符合报告第一级审核信息
function  saveFirstLevel(data) {
  return request({
    url: '/txIncompatibleReportInfo/api/saveFirstLevelIncompatibleReportInfo',
    method: 'post',
    data
  })
}
// 保存不符合报告第二级审核信息
function  saveSecondLevel(data) {
  return request({
    url: '/txIncompatibleReportInfo/api/saveTwoLevelIncompatibleReportInfo',
    method: 'post',
    data
  })
}
// 关闭不符合报告
function  closeIncompatibleReport(data) {
  return request({
    url: '/txIncompatibleReportInfo/api/closeIncompatibleReport',
    method: 'post',
    data
  })
}
// 废弃不符合报告
function  discardIncompatibleReport(data) {
  return request({
    url: '/txIncompatibleReportInfo/api/discardIncompatibleReport',
    method: 'post',
    data
  })
}
// 获取操作历史
function  getHisList(params) {
  return request({
    url: '/txIncompatibleReportInfo/query/getHisListBy',
    method: 'get',
    params: params
  })
}

// 不符合情况报告一览
function  getIncompatibleSituationPageByCondition(params) {
  return request({
    url: '/incompatibleSituationInfo/query/getIncompatibleSituationPageByCondition',
    method: 'get',
    params: params
  })
}

// 不符合情况报告详情
function  getIncompatibleSituationInfo(params) {
  return request({
    url: '/incompatibleSituationInfo/query/getIncompatibleSituationInfo',
    method: 'get',
    params: params
  })
}

// 不符合情况报告状态集合
function  getIncompatibleSituationStatusList(params) {
  return request({
    url: '/incompatibleSituationInfo/query/getIncompatibleSituationStatusList',
    method: 'get',
    params: params
  })
}

// 不符合情况报告操作历史
function  getIncompatibleSituationHisListBy(params) {
  return request({
    url: 'incompatibleSituationInfo/query/getIncompatibleSituationHisListBy',
    method: 'get',
    params: params
  })
}

// 跳转不符合报告
function  getReportJumpPermission(params) {
  return request({
    url: 'incompatibleSituationInfo/query/getReportJumpPermission',
    method: 'get',
    params: params
  })
}

// 不符合情况报告跳转判断
function  getJumpPermission(params) {
  return request({
    url: 'incompatibleSituationInfo/query/getJumpPermission',
    method: 'get',
    params: params
  })
}

// 不符合情况报告编辑保存
function  saveIncompatibleSituationInfo(data) {
  return request({
    url: '/incompatibleSituationInfo/api/saveIncompatibleSituationInfo',
    method: 'post',
    data
  })
}

// 不符合情况报告编辑提交
function  submitIncompatibleSituationAudit(data) {
  return request({
    url: '/incompatibleSituationInfo/api/submitIncompatibleSituationAudit',
    method: 'post',
    data
  })
}

// 不符合情况报告回复信息
function  saveSelfFyIncompatibleReportInfo(data) {
  return request({
    url: '/incompatibleSituationInfo/api/saveSelfFyIncompatibleReportInfo',
    method: 'post',
    data
  })
}

// 不符合情况报告明细删除
function  deleteSituationDefectList(data) {
  return request({
    url: '/incompatibleSituationInfo/api/deleteSituationDefectList',
    method: 'post',
    data
  })
}
