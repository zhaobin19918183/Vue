import request from '../../../request'

// 学历统计
function  statisticsDegree(params) {
  return request({
    url: '/humanStatistics/query/getEducation',
    method: 'get',
    params
  })
}
// 司龄统计
function  statisticsSiLing(params) {
  return request({
    url: '/humanStatistics/query/getCompYear',
    method: 'get',
    params
  })
}
// 工龄统计
function  workYearStatistics(params) {
  return request({
    url: '/humanStatistics/query/getWorkYear',
    method: 'get',
    params
  })
}
// 籍贯统计
function  NativPplaceStatistics(params) {
  return request({
    url: '/humanStatistics/query/getPlaceOfOrigin',
    method: 'get',
    params
  })
}
// 证书职务统计
function  certificateDutyStatistics(params) {
  return request({
    url: '/humanStatistics/query/getCrtDuty',
    method: 'get',
    params
  })
}
// 下船一览页请求数据
function  downStatistics(params) {
  return request({
    url: '/disembarkationStatistics/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 获取当前公司全部船舶
function  selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
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
// 获取全部职务
function  selectApplyDuty(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}
// 获取下船原因数据
function  downShipReason(data) {
  return request({
    url: '/disembarkationStatistics/query/getDisembarkStatistics',
    method: 'get',
    params: data
  })
}
// 异动明细统计
function  getCrewTurnoverDetail(data) {
  return request({
    url: '/crewTurnover/query/getCrewTurnoverDetail',
    method: 'get',
    params: data
  })
}
// 异动职务统计
function  getCrewTurnoverDetailGroupDuty(data) {
  return request({
    url: '/crewTurnover/query/getCrewTurnoverDetailGroupDuty',
    method: 'get',
    params: data
  })
}

export default{
  statisticsDegree,
  statisticsSiLing,
  workYearStatistics,
  NativPplaceStatistics,
  certificateDutyStatistics,
  downStatistics,
  selectShipId,
  getListByCrewParmaeter,
  selectApplyDuty,
  downShipReason,
  getCrewTurnoverDetail,
  getCrewTurnoverDetailGroupDuty
}