import request from '../request'

// 分页查询船舶列表
function getVesselPage(params) {
  return request({
    url: '/systemVessel/query/getVesselPage',
    method: 'get',
    params: params
  })
}

// 查询船舶详情
function getVesselOne(params) {
  return request({
    url: '/systemVessel/query/getVesselOne',
    method: 'get',
    params: params
  })
}

// 修改船舶信息表
function changeInfo(data) {
  return request({
    url: '/systemVessel/api/changeInfo',
    method: 'post',
    data
  })
}
export default {
  getVesselPage,
  getVesselOne,
  changeInfo
}