import request from '../../../utils/request'

// 船员航区 编辑
export function changeInfo(data) {
  return request({
    url: '/crewMainNavigationArea/api/saveEdit',
    method: 'post',
    data
  })
}

// 船员航区 拖拽排序
export function changeList(data) {
  return request({
    url: '/crewMainNavigationArea/api/changeList',
    method: 'post',
    data
  })
}

// 船员航区 一览列表
export function getQueryList(data) {
  return request({
    url: '/crewMainNavigationArea/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 船员航区 显示列
export function getInfo(data) {
  return request({
    url: '/parameterCompanyShowType/query/getInfo',
    method: 'get',
    params: data
  })
}

// 船员航区 修改显示列
export function changeShowContent(data) {
  return request({
    url: '/crewMainNavigationArea/api/changeDataShowContent',
    method: 'post',
    data
  })
}
