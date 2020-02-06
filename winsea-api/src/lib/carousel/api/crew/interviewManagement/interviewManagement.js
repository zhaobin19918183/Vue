import request from '../../../utils/request'

// 查询面试信息列表
export function selectInterviewItems(params) {
  return request({
    url: '/crewInterviewInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 获取船员状态枚举
export function selectCrewStatus(params) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params
  })
}
// 获取船舶id
export function selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}
// 安排面试 --- 查询船员  备注中有船员各种状态
export function selectCrewFromStatus(data) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrew',
    method: 'get',
    params: data
  })
}
// 安排面试 --- 面试保存
export function interviewSave(data) {
  return request({
    url: '/crewInterviewInfo/api/save',
    method: 'post',
    data
  })
}
// 安排面试 --- 船员类型
export function selectCrewType(params) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params
  })
}

// 安排面试 --- 外派公司 二级菜单
export function foreignCompany(params) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params
  })
}

// 外派公司
export function selectForeignCompany(params) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params
  })
}
// 安排面试 --- 应聘职务
export function selectApplyDuty(params) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params
  })
}

// // 根据各种状态获取船员列表
// export function selectCrewList(params) {
//   return request({
//     url: '/crewSeafarerInfo/query/getListBySeafarerCrew',
//     method: 'get',
//     params
//   })
// }
// 动态路由传参，获取当前面试详情信息
export function selectInterviewDetailsList(params) {
  return request({
    url: '/crewInterviewInfo/query/getInfoById',
    method: 'get',
    params
  })
}
// 保存当前面试详情信息
export function saveInterviewDetailsList(data) {
  return request({
    url: '/crewInterviewInfo/api/saveDetail',
    method: 'post',
    data
  })
}
// 审核通过不通过接口
export function dicApprove(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data
  })
}

// 取消面试接口
export function cancelApi(data) {
  return request({
    url: '/crewInterviewInfo/api/cancelInterview',
    method: 'post',
    data
  })
}

// 外派公司接口
export function getForeignCompany(params) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params
  })
}

// 上传附件
export function uploadFiles(data) {
  return request({
    url: 'uploadFiles',
    method: 'post',
    data
  })
}
// 面试详情页船员数据
export function getCrewData(params) {
  return request({
    url: '/crewSeafarerInfo/query/getSeafarerBySeafarerId',
    method: 'get',
    params
  })
}
// 面试详情页审核历史
export function getOperateHistorys(params) {
  return request({
    url: '/crewFileOperationHis/query/getOperateHistory',
    method: 'get',
    params
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
