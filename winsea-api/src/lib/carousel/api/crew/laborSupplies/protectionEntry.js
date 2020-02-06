import request from '../../../utils/request'


// 劳保用品一览方法
export function getLaborList(params) {
  return request({
    url: '/laborInfo/query/getLaborList',
    method: 'get',
    params
  })
}
// 查询劳保用品对应明细集合
export function getLaborDetailInfo(params) {
  return request({
    url: '/laborInfo/query/getLaborDetailInfo',
    method: 'get',
    params
  })
}
// 劳保入库一览查询
export function getPageByCondition(params) {
  return request({
    url: '/laborInStockInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 劳保入库-保存
export function saveInStockInfo(data) {
  return request({
    url: '/laborInStockInfo/api/saveInStockInfo',
    method: 'post',
    data
  })
}
// 劳保入库-保存
export function deleteInStockInfo(data) {
  return request({
    url: '/laborInStockInfo/api/deleteInStockInfo',
    method: 'post',
    data
  })
}
// 查询公司模板
export function positionInfo(params) {
  return request({
    url: '/importSeafarer/query/positionInfo',
    method: 'get',
    params
  })
}
// 导入模版单个
export function importOne(data) {
  return request({
    url: 'laborInStockInfo/api/importOne',
    method: 'post',
    data
  })
}


