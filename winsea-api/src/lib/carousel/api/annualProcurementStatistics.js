import request from '../request'



//
function  getAnnualPurStatisticsInfo(params) {
  return request({
    url: '/purchaseStatisticsSummary/query/getAnnualPurStatisticsInfo',
    method: 'get',
    params
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
export default{
  getAnnualPurStatisticsInfo,
  selectShipId
}