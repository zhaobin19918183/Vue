import request from '../../../request'


// 劳保库存一览方法
function  getPageByCondition(params) {
  return request({
    url: '/laborStockInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 查询劳保用品库存对应明细集合
function  getStockInfoDetail(params) {
  return request({
    url: '/laborStockInfo/query/getStockInfoDetail',
    method: 'get',
    params
  })
}
// 劳保库存-盘点
function  updateCheckStockInfo(data) {
  return request({
    url: '/laborStockInfo/api/updateCheckStockInfo',
    method: 'post',
    data
  })
}
// 劳保用品一览方法
function  getLaborList(params) {
  return request({
    url: '/laborInfo/query/getLaborList',
    method: 'get',
    params
  })
}

export default {
  getPageByCondition,
  getStockInfoDetail,
  updateCheckStockInfo,
  getLaborList
  
}
