import request from '../utils/request'



//
export function getAnnualPurStatisticsInfo(params) {
  return request({
    url: '/purchaseStatisticsSummary/query/getAnnualPurStatisticsInfo',
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
