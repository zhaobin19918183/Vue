import request from '../../../utils/request'

// 学历统计
export function statisticsDegree(params) {
  return request({
    url: '/humanStatistics/query/getEducation',
    method: 'get',
    params
  })
}
// 司龄统计
export function statisticsSiLing(params) {
  return request({
    url: '/humanStatistics/query/getCompYear',
    method: 'get',
    params
  })
}
// 工龄统计
export function workYearStatistics(params) {
  return request({
    url: '/humanStatistics/query/getWorkYear',
    method: 'get',
    params
  })
}
// 籍贯统计
export function NativPplaceStatistics(params) {
  return request({
    url: '/humanStatistics/query/getPlaceOfOrigin',
    method: 'get',
    params
  })
}
// 证书职务统计
export function certificateDutyStatistics(params) {
  return request({
    url: '/humanStatistics/query/getCrtDuty',
    method: 'get',
    params
  })
}
// 下船一览页请求数据
export function downStatistics(params) {
  return request({
    url: '/disembarkationStatistics/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 获取当前公司全部船舶
export function selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
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
// 获取全部职务
export function selectApplyDuty(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}
// 获取下船原因数据
export function downShipReason(data) {
  return request({
    url: '/disembarkationStatistics/query/getDisembarkStatistics',
    method: 'get',
    params: data
  })
}
// 异动明细统计
export function getCrewTurnoverDetail(data) {
  return request({
    url: '/crewTurnover/query/getCrewTurnoverDetail',
    method: 'get',
    params: data
  })
}
// 异动职务统计
export function getCrewTurnoverDetailGroupDuty(data) {
  return request({
    url: '/crewTurnover/query/getCrewTurnoverDetailGroupDuty',
    method: 'get',
    params: data
  })
}

