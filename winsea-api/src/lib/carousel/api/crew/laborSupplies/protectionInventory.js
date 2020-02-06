import request from '../../../utils/request'


// 劳保库存一览方法
export function getPageByCondition(params) {
  return request({
    url: '/laborStockInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 查询劳保用品库存对应明细集合
export function getStockInfoDetail(params) {
  return request({
    url: '/laborStockInfo/query/getStockInfoDetail',
    method: 'get',
    params
  })
}
// 劳保库存-盘点
export function updateCheckStockInfo(data) {
  return request({
    url: '/laborStockInfo/api/updateCheckStockInfo',
    method: 'post',
    data
  })
}
// 劳保用品一览方法
export function getLaborList(params) {
  return request({
    url: '/laborInfo/query/getLaborList',
    method: 'get',
    params
  })
}


