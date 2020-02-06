import request from '../../../request'

// 备用金 分页查询
function  getQueryPage(data) {
  return request({
    url: '/standbyFundInfo/query/getQueryPage',
    method: 'get',
    params: data
  })
}
// 备用金 新增
function  create(data) {
  return request({
    url: '/standbyFundInfo/api/create',
    method: 'post',
    data
  })
}

// 备用金 修改
function  changeInfo(data) {
  return request({
    url: '/standbyFundInfo/api/changeInfo',
    method: 'post',
    data
  })
}

// 备用金 删除
function  remove(data) {
  return request({
    url: '/standbyFundInfo/api/remove',
    method: 'post',
    data
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

// 获取船舶id
function  vesselLastMothBalance(data) {
  return request({
    url: '/standbyFundInfo//query/vesselLastMothBalance',
    method: 'get',
    params: data
  })
}

export default {
  getQueryPage,
  create,
  changeInfo,
  remove,
  selectShipId,
  vesselLastMothBalance

}