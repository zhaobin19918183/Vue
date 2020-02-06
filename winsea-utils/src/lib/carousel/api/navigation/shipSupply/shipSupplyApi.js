// 航海资料管理-供船Api接口

import request from '../../../request'
// 供船->一览查询
function  getPageByCondition(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getPageBy',
    method: 'get',
    params: data
  })
}
// 供船->查看详情
function  getOneById(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getOneById',
    method: 'get',
    params: data
  })
}
// 供船->部分入库
function  partialWarehouse(data) {
  return request({
    url: '/navigationShipSupplyInfo/api/partialWarehouse',
    method: 'post',
    data: data
  })
}
// 供船->全部入库
function  allInStorage(data) {
  return request({
    url: '/navigationShipSupplyInfo/api/allInStorage',
    method: 'post',
    data: data
  })
}

// 供船->操作历史
function  getOperateHis(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getOperateHis',
    method: 'get',
    params: data
  })
}

// 供船->强制关闭
function  forcedClosure(data) {
  return request({
    url: '/navigationShipSupplyInfo/api/forcedClosure',
    method: 'post',
    data: data
  })
}

// 供船->船上是否安装客户端
function  findVesselClientFlag(data) {
  return request({
    url: '/vessel/query/findVesselClientFlag',
    method: 'get',
    params: data
  })
}

// 供船->操作历史中的详情查询
function  getPutWarehouses(data) {
  return request({
    url: '/navigationShipSupplyInfo/query/getPutWarehouses',
    method: 'get',
    params: data
  })
}