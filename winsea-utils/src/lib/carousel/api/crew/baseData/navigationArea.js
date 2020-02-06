import request from '../../../request'

// 船员航区 编辑
function  changeInfo(data) {
  return request({
    url: '/crewMainNavigationArea/api/saveEdit',
    method: 'post',
    data
  })
}

// 船员航区 拖拽排序
function  changeList(data) {
  return request({
    url: '/crewMainNavigationArea/api/changeList',
    method: 'post',
    data
  })
}

// 船员航区 一览列表
function  getQueryList(data) {
  return request({
    url: '/crewMainNavigationArea/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 船员航区 显示列
function  getInfo(data) {
  return request({
    url: '/parameterCompanyShowType/query/getInfo',
    method: 'get',
    params: data
  })
}

// 船员航区 修改显示列
function  changeShowContent(data) {
  return request({
    url: '/crewMainNavigationArea/api/changeDataShowContent',
    method: 'post',
    data
  })
}
export default {
  changeInfo,
  changeList,
  getQueryList,
  getInfo,
  changeShowContent

}