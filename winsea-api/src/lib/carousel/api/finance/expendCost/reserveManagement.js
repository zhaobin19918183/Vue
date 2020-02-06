import request from '@/utils/request'

export default {
  // 一览页信息查询
  getPageByCondition(data) {
    return request({
      url: '/financeImprestInfo/query/getPageByCondition',
      method: 'get',
      params: data
    })
  },
  // 详情信息查询
  getDetailInfoById(data) {
    return request({
      url: '/financeImprestInfo/query/getDetailInfoById',
      method: 'get',
      params: data
    })
  },
  // 详情信息查询
  getImprestVesselList(data) {
    return request({
      url: '/financeBusiness/query/getImprestVesselList',
      method: 'get',
      params: data
    })
  },
  // 保存备用金基本信息
  saveImprestBasic(data) {
    return request({
      url: '/financeImprestInfo/api/saveImprestBasic',
      method: 'post',
      data,
    })
  },
  // 保存备用金详细信息
  saveImprestDetail(data) {
    return request({
      url: '/financeImprestInfo/api/saveImprestDetail',
      method: 'post',
      data,
    })
  }
}
