import request from '../../utils/request'

// 所属船舶
export function getUserVesselListByStatus(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}

// 查询调配基本信息列表
export function getPageByCondition(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询交接班详细
export function getChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/query/getChangeShiftsInfo',
    method: 'get',
    params: data
  })
}

// 查询交接班基本信息列表
export function getChangeShiftsPageByCondition(data) {
  return request({
    url: '/crewChangeShiftsInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 保存
export function save(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/save',
    method: 'post',
    data
  })
}

//上下船日期精确到小时
export function findTenantTYpe(data) {
  return request({
    url: '/tenantPluginAttribute/query/findTenantTYpe',
    method: 'get',
    params: data
  })
}

// 保存交接班详细信息
export function saveChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/saveChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 提交交接班详细信息
export function submitChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/submitChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 废弃
export function discardChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/discardChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 废弃
export function affirmChangeShiftsInfo(data) {
  return request({
    url: '/crewChangeShiftsInfo/api/affirmChangeShiftsInfo',
    method: 'post',
    data
  })
}

// 生成交接班记录
export function saveAdd(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/api/receive',
    method: 'post',
    data
  })
}

// 提交
export function submit(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/submit',
    method: 'post',
    data: data
  })
}

// 获取当前登录用户信息
export function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data

  })
}

// 查询调配详细信息
export function getBatchShiftsInfoById(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getBatchShiftsInfoById',
    method: 'get',
    params: data
  })
}

// 添加下船船员弹出框信息
export function getInVesselSeafarerList(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getInVesselSeafarerList',
    method: 'get',
    params: data
  })
}

// 添加上船船员弹出框信息
export function getUpSeafarerInfoForShifts(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getUpSeafarerInfoForShifts',
    method: 'get',
    params: data
  })
}

// 添加上船船员弹出框信息
export function getOnVesselSeafarerList(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getOnVesselSeafarerList',
    method: 'get',
    params: data
  })
}

// 外派公司列表
export function getQueryList(data) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 职务列表
export function crewDutygetQueryList(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 下船原因
export function getListByCrewParmaeter(data) {
  return request({
    url: '/crewParameter/query/getListByCrewParmaeter',
    method: 'get',
    params: data
  })
}

// 晋升前check
export function checkSeafarerStatus(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/checkSeafarerStatus',
    method: 'get',
    params: data
  })
}

// 审核 退回
export function handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}

// 废弃
export function saveDiscard(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/saveDiscard',
    method: 'post',
    data: data
  })
}

// 查询公司名称
export function selectCopName(data) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: data
  })
}

// 查询调配操作历史信息
export function getOperateHistorys(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 查询交接班操作历史信息
export function getOperateHistorysJJB(data) {
  return request({
    url: '/crewChangeShiftsInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 获取船员状态
export function getStatus(data) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params: data
  })
}

// -------------------------船舶午报--------------------------------
// 一览查询接口
export function getList(data) {
  return request({
    url: '/dynamicReportInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

//动态报统计
export function getStatisticsInfo(data) {
  return request({
    url: '/dynamicReportStatisticsInfo/query/getStatisticsInfo',
    method: 'get',
    params: data
  })
}

//查看明细
export function getReportInfoById(data) {
  return request({
    url: '/dynamicReportInfo/query/getReportInfoById',
    method: 'get',
    params: data
  })
}

//查询系统常量
export function parameterTenant(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}

//获取数据字典分类子项
export function queryItems(data) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params: data
  })
}

// 保存
export function saveDynamicReport(data) {
  return request({
    url: '/dynamicReportInfo/query/save',
    method: 'post',
    data: data
  })
}

// 提交
export function submitDynamicReport(data) {
  return request({
    url: '/dynamicReportInfo/query/saveSubmit',
    method: 'post',
    data: data
  })
}

// 确认
export function saveConfirm(data) {
  return request({
    url: '/dynamicReportInfo/query/saveConfirm',
    method: 'post',
    data: data
  })
}

// 退回
export function saveReturn(data) {
  return request({
    url: '/dynamicReportInfo/query/saveReturn',
    method: 'post',
    data: data
  })
}

// 查询动态报历史
export function getDynamicHistorys(data) {
  return request({
    url: '/dynamicReportInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

// 通过派遣公司判断是哪个公司
export function getCompany(params) {
  return request({
    url: '/pluginService/query/attributeService',
    method: 'get',
    params
  })
}

// 通过派遣公司判断是哪个公司
export function findTenantDredgeService(params) {
  return request({
    url: '/pluginService/query/findTenantDredgeService',
    method: 'get',
    params
  })
}
// 通过派遣公司判断是哪个公司
export function getOwnedItemDetail(params) {
  return request({
    url: '/ownedStandardInfo/query/getOwnedItemDetail',
    method: 'get',
    params
  })
}

// 查询工资科目
export function getCompanyItemDetail(params) {
  return request({
    url: '/crewSalaryCompanyStandardInfo/query/getCompanyItemDetail',
    method: 'get',
    params
  })
}
