// 航海资料管理-供船Api接口

import request from '../../../utils/request'
// 供船->一览查询
export function getPageByCondition(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getPageBy',
    method: 'get',
    params: data
  })
}
// 供船->查看详情
export function getOneById(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getOneById',
    method: 'get',
    params: data
  })
}
// 供船->部分入库
export function partialWarehouse(data) {
  return request({
    url: '/navigationShipSupplyInfo/api/partialWarehouse',
    method: 'post',
    data: data
  })
}
// 供船->全部入库
export function allInStorage(data) {
  return request({
    url: '/navigationShipSupplyInfo/api/allInStorage',
    method: 'post',
    data: data
  })
}

// 供船->操作历史
export function getOperateHis(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getOperateHis',
    method: 'get',
    params: data
  })
}

// 供船->强制关闭
export function forcedClosure(data) {
  return request({
    url: '/navigationShipSupplyInfo/api/forcedClosure',
    method: 'post',
    data: data
  })
}

// 供船->船上是否安装客户端
export function findVesselClientFlag(data) {
  return request({
    url: '/vessel/query/findVesselClientFlag',
    method: 'get',
    params: data
  })
}

// 供船->操作历史中的详情查询
export function getPutWarehouses(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getPutWarehouses',
    method: 'get',
    params: data
  })
}