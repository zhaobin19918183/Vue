// 基础数据
import request from '../../request'

// 污油水记录新增的 容量信息
function getOilywaterTankPage(data) {
  return request({
    url: '/oilWaterTank/query/last',
    method: 'get',
    params: data
  })
}

// 污油水记录新增和修改
function createOrUpdate(data) {
  return request({
    url: '/oilWater/api/createOrUpdate',
    method: 'post',
    data
  })
}

// 污油水记录新增的 容量信息
function getPageByCondition(data) {
  return request({
    url: '/oilWater/query/page',
    method: 'get',
    params: data
  })
}

// 污油水存量查询one
function getDetailInfoById(data) {
  return request({
    url: '/oilWater/query/one',
    method: 'get',
    params: data
  })
}

// 污油水存量记录删除
function removeInfo(data) {
  return request({
    url: '/oilWater/api/remove',
    method: 'post',
    data
  })
}
export default {
  getOilywaterTankPage,
  createOrUpdate,
  getPageByCondition,
  getDetailInfoById,
  removeInfo
}