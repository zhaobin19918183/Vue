import request from '../../../utils/request'

// 劳保领用一览查询
export function getPageByCondition(params) {
  return request({
    url: '/laborOutStockInfo/query/getPageByCondition',
    method: 'get',
    params
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

// 查询劳保用品对应明细集合
export function getLaborDetailInfo(params) {
  return request({
    url: '/laborInfo/query/getLaborDetailInfo',
    method: 'get',
    params
  })
}

// 劳保领用-查询库存明细
export function getStockInfo(params) {
  return request({
    url: '/laborOutStockInfo/query/getStockInfo',
    method: 'get',
    params
  })
}

// 劳保领用-保存
export function saveOutStockInfo(data) {
  return request({
    url: '/laborOutStockInfo/api/saveOutStockInfo',
    method: 'post',
    data
  })
}

// 劳保领用-保存
export function deleteOutStockInfo(data) {
  return request({
    url: '/laborOutStockInfo/api/deleteOutStockInfo',
    method: 'post',
    data
  })
}

// 查询全部船员 分页版
export function getListBySeafarerCrewForPage(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrewForPage',
    method: 'get',
    params: params
  })
}

// 外派公司
export function getQueryList(params) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params: params
  })
}

// 获取全部职务
export function selectApplyDuty(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

