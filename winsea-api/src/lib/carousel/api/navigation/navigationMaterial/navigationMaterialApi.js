// 航海资料管理-航海资料管理Api接口

import request from '../../../utils/request'
// 航海资料分类->列表查询
export function getNavigationTypes(data) {
  return request({
    url: '/navigationType/query/getNavigationTypes',
    method: 'get',
    params: data
  })
}
// 航海资料分类->新增
export function saveAdd(data) {
  return request({
    url: '/navigationType/api/saveAdd',
    method: 'post',
    data: data
  })
}
// 航海资料分类->编辑
export function saveEdit(data) {
  return request({
    url: '/navigationType/api/saveEdit',
    method: 'post',
    data: data
  })
}
// 航海资料分类->删除
export function remove(data) {
  return request({
    url: '/navigationType/api/remove',
    method: 'post',
    data: data
  })
}
// 航海资料分类->排序
export function changeOrder(data) {
  return request({
    url: '/navigationType/api/changeOrder',
    method: 'post',
    data
  })
}
// 航海资料一览->分页查询航海资料信息
export function getPageByNavigationInfo(data) {
  return request({
    url: '/navigationInfo/query/getPageByNavigationInfo',
    method: 'get',
    params: data
  })
}
// 航海资料一览->新增航海资料
export function saveAddInfo(data) {
  return request({
    url: '/navigationInfo/api/saveAdd',
    method: 'post',
    data: data
  })
}
// 航海资料一览->修改航海资料
export function saveEditInfo(data) {
  return request({
    url: '/navigationInfo/api/saveEdit',
    method: 'post',
    data: data
  })
}
// 航海资料一览->删除航海资料
export function removeInfo(data) {
  return request({
    url: '/navigationInfo/api/remove',
    method: 'post',
    data: data
  })
}
// 航海资料一览->获取航海资料详情
export function getNavigationInfoById(data) {
  return request({
    url: '/navigationInfo/query/getNavigationInfoById',
    method: 'get',
    params: data
  })
}
// 航海资料新增->可编辑单位下拉选查询
export function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 下拉添加
export function add(data) {
  return request({
    url: '/customDropDown/api/saveAdd',
    method: 'post',
    data
  })
}

// 下拉编辑
export function edit(data) {
  return request({
    url: '/customDropDown/api/saveEdit',
    method: 'post',
    data
  })
}

// 下拉删除
export function saveDelete(data) {
  return request({
    url: '/customDropDown/api/saveDelete',
    method: 'post',
    data
  })
}
