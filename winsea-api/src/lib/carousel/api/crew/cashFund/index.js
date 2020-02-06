import request from '../../../utils/request'

// 备用金 分页查询
export function getQueryPage(data) {
  return request({
    url: '/standbyFundInfo/query/getQueryPage',
    method: 'get',
    params: data
  })
}
// 备用金 新增
export function create(data) {
  return request({
    url: '/standbyFundInfo/api/create',
    method: 'post',
    data
  })
}

// 备用金 修改
export function changeInfo(data) {
  return request({
    url: '/standbyFundInfo/api/changeInfo',
    method: 'post',
    data
  })
}

// 备用金 删除
export function remove(data) {
  return request({
    url: '/standbyFundInfo/api/remove',
    method: 'post',
    data
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

// 获取船舶id
export function vesselLastMothBalance(data) {
  return request({
    url: '/standbyFundInfo//query/vesselLastMothBalance',
    method: 'get',
    params: data
  })
}
