// 基础数据
import request from '../../utils/request'

// 批量新增设备分类信息
export function saveAdd(data) {
  return request({
    url: '/maintainDeviceType/api/saveAdd',
    method: 'post',
    data
  })
}

// 修改设备分类信息
export function saveEdit(data) {
  return request({
    url: '/maintainDeviceType/api/saveEdit',
    method: 'post',
    data
  })
}

// 删除设备分类信息
export function deleteById(data) {
  return request({
    url: '/maintainDeviceType/api/deleteById',
    method: 'post',
    data
  })
}

// 设备分类信息拖拽排序
export function changeOrder(data) {
  return request({
    url: '/maintainDeviceType/api/changeOrder',
    method: 'post',
    data
  })
}

// 查询设备分类信息一览列表
export function getPageByCondition(data) {
  return request({
    url: '/maintainDeviceType/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 根据设备分类查询设备信息
export function getDeviceInfoList(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceInfoList',
    method: 'get',
    params: data
  })
}

// 查询该分类下设备工作信息条数
export function getDeviceWorkCountByDeviceTypeId(data) {
  return request({
    url: '/maintainDeviceWorkInfo/query/getDeviceWorkCountByDeviceTypeId',
    method: 'get',
    params: data
  })
}
