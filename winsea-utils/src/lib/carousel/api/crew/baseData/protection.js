import request from '../../../request'

// 劳保用品一览方法
function  getQueryList(data) {
  return request({
    url: '/laborInfo/query/getLaborList',
    method: 'get',
    params: data
  })
}

// 查询劳保用品对应明细集合
function  getQueryDetailList(data) {
  return request({
    url: '/laborInfo/query/getLaborDetailInfo',
    method: 'get',
    params: data
  })
}

// 保存劳保信息
function  saveInfo(data) {
  return request({
    url: '/laborInfo/api/saveLaborInfo',
    method: 'post',
    data
  })
}

// 保存劳保明细信息
function  saveDetailInfo(data) {
  return request({
    url: '/laborInfo/api/saveLaborDetail',
    method: 'post',
    data
  })
}

// 删除劳保信息
function  deleteInfo(data) {
  return request({
    url: '/laborInfo/api/deleteLaborInfo',
    method: 'post',
    data
  })
}

// 删除劳保明细信息
function  deleteDetailInfo(data) {
  return request({
    url: '/laborInfo/api/deleteLaborDetail',
    method: 'post',
    data
  })
}

export default{
  getQueryList,
  getQueryDetailList,
  saveInfo,
  saveDetailInfo,
  deleteInfo,
  deleteDetailInfo
}

