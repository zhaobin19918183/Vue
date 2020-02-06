// 基础数据
import request from '../../utils/request'

// 污油水记录新增的 容量信息
export function getOilywaterTankPage(data) {
  return request({
    url: '/oilWaterTank/query/last',
    method: 'get',
    params: data
  })
}

// 污油水记录新增和修改
export function createOrUpdate(data) {
  return request({
    url: '/oilWater/api/createOrUpdate',
    method: 'post',
    data
  })
}

// 污油水记录新增的 容量信息
export function getPageByCondition(data) {
  return request({
    url: '/oilWater/query/page',
    method: 'get',
    params: data
  })
}

// 污油水存量查询one
export function getDetailInfoById(data) {
  return request({
    url: '/oilWater/query/one',
    method: 'get',
    params: data
  })
}

// 污油水存量记录删除
export function removeInfo(data) {
  return request({
    url: '/oilWater/api/remove',
    method: 'post',
    data
  })
}
