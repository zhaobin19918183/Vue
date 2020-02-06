import request from '../../request'

// 所属船舶
function  getUserVesselListByStatus(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}

// 查询调配基本信息列表
function  getPageByCondition(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询交接班详细
function  getChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/query/getChangeShiftsInfo',
    method: 'get',
    params: data
  })
}

// 查询交接班基本信息列表
function  getChangeShiftsPageByCondition(data) {
  return request({
    url: '/crewChangeShiftsInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 保存
function  save(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/save',
    method: 'post',
    data
  })
}

//上下船日期精确到小时
function  findTenantTYpe(data) {
  return request({
    url: '/tenantPluginAttribute/query/findTenantTYpe',
    method: 'get',
    params: data
  })
}

// 保存交接班详细信息
function  saveChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/saveChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 提交交接班详细信息
function  submitChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/submitChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 废弃
function  discardChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/discardChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 废弃
function  affirmChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/affirmChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 生成交接班记录
function  saveAdd(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/api/receive',
    method: 'post',
    data
  })
}

// 提交
function  submit(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/submit',
    method: 'post',
    data: data
  })
}

// 获取当前登录用户信息
function  getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data

  })
}

// 查询调配详细信息
function  getBatchShiftsInfoById(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getBatchShiftsInfoById',
    method: 'get',
    params: data
  })
}

// 添加下船船员弹出框信息
function  getInVesselSeafarerList(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getInVesselSeafarerList',
    method: 'get',
    params: data
  })
}

// 添加上船船员弹出框信息
function  getUpSeafarerInfoForShifts(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getUpSeafarerInfoForShifts',
    method: 'get',
    params: data
  })
}

// 添加上船船员弹出框信息
function  getOnVesselSeafarerList(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getOnVesselSeafarerList',
    method: 'get',
    params: data
  })
}

// 外派公司列表
function  getQueryList(data) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 职务列表
function  crewDutygetQueryList(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 下船原因
function  getListByCrewParmaeter(data) {
  return request({
    url: '/crewParameter/query/getListByCrewParmaeter',
    method: 'get',
    params: data
  })
}

// 晋升前check
function  checkSeafarerStatus(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/checkSeafarerStatus',
    method: 'get',
    params: data
  })
}

// 审核 退回
function  handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}

// 废弃
function  saveDiscard(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/saveDiscard',
    method: 'post',
    data: data
  })
}

// 查询公司名称
function  selectCopName(data) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: data
  })
}

// 查询调配操作历史信息
function  getOperateHistorys(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 查询交接班操作历史信息
function  getOperateHistorysJJB(data) {
  return request({
    url: '/crewChangeShiftsInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 获取船员状态
function  getStatus(data) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params: data
  })
}

// -------------------------船舶午报--------------------------------
// 一览查询接口
function  getList(data) {
  return request({
    url: '/dynamicReportInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

//动态报统计
function  getStatisticsInfo(data) {
  return request({
    url: '/dynamicReportStatisticsInfo/query/getStatisticsInfo',
    method: 'get',
    params: data
  })
}

//查看明细
function  getReportInfoById(data) {
  return request({
    url: '/dynamicReportInfo/query/getReportInfoById',
    method: 'get',
    params: data
  })
}

//查询系统常量
function  parameterTenant(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}

//获取数据字典分类子项
function  queryItems(data) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params: data
  })
}

// 保存
function  saveDynamicReport(data) {
  return request({
    url: '/dynamicReportInfo/query/save',
    method: 'post',
    data: data
  })
}

// 提交
function  submitDynamicReport(data) {
  return request({
    url: '/dynamicReportInfo/query/saveSubmit',
    method: 'post',
    data: data
  })
}

// 确认
function  saveConfirm(data) {
  return request({
    url: '/dynamicReportInfo/query/saveConfirm',
    method: 'post',
    data: data
  })
}

// 退回
function  saveReturn(data) {
  return request({
    url: '/dynamicReportInfo/query/saveReturn',
    method: 'post',
    data: data
  })
}

// 查询动态报历史
function  getDynamicHistorys(data) {
  return request({
    url: '/dynamicReportInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 通过派遣公司判断是哪个公司
function  getCompany(params) {
  return request({
    url: '/pluginService/query/attributeService',
    method: 'get',
    params
  })
}

// 通过派遣公司判断是哪个公司
function  findTenantDredgeService(params) {
  return request({
    url: '/pluginService/query/findTenantDredgeService',
    method: 'get',
    params
  })
}
// 通过派遣公司判断是哪个公司
function  getOwnedItemDetail(params) {
  return request({
    url: '/ownedStandardInfo/query/getOwnedItemDetail',
    method: 'get',
    params
  })
}

// 查询工资科目
function  getCompanyItemDetail(params) {
  return request({
    url: '/crewSalaryCompanyStandardInfo/query/getCompanyItemDetail',
    method: 'get',
    params
  })
}

export default{
  getUserVesselListByStatus,
  getPageByCondition,
  getChangeShiftsInfo,
  getChangeShiftsPageByCondition,
  save,
  findTenantTYpe,
  saveChangeShiftsInfo,
  submitChangeShiftsInfo,
  discardChangeShiftsInfo,
  affirmChangeShiftsInfo,
  saveAdd,
  submit,
  getCurrentUserInfo,
  getBatchShiftsInfoById,
  getInVesselSeafarerList,
  getUpSeafarerInfoForShifts,
  getOnVesselSeafarerList,
  getQueryList,
  crewDutygetQueryList,
  getListByCrewParmaeter,
  checkSeafarerStatus,
  handle,
  saveDiscard,
  selectCopName,
  getOperateHistorys,
  getOperateHistorysJJB,
  getStatus,
  getList,
  getStatisticsInfo,
  getReportInfoById,
  parameterTenant,
  queryItems,
  saveDynamicReport,
  submitDynamicReport,
  saveConfirm,
  saveReturn,
  getDynamicHistorys,
  getCompany,
  findTenantDredgeService,
  getOwnedItemDetail,
  getCompanyItemDetail
}