import request from '../../../utils/request'

// 船员证书设定 分页查询
export function getQueyrPage(data) {
  return request({
    url: '/certificateParameter/query/getQueryPage',
    method: 'get',
    params: data
  })
}

// 船员证书设定 新增或者修改
export function createOrEdit(data) {
  return request({
    url: '/certificateParameter/api/createOrEdit',
    method: 'post',
    data
  })
}

// 船员证书设定 修改显示列
export function changeDataShowContent(data) {
  return request({
    url: '/certificateParameter/api/changeDataShowContent',
    method: 'post',
    data
  })
}
// 查询模块显示列
export function getInfo(data) {
  return request({
    url: '/parameterCompanyShowType/query/getInfo',
    method: 'get',
    params: data
  })
}

// 船员证书设定 拖拽排序
export function changeList(data) {
  return request({
    url: '/certificateParameter/api/changeList',
    method: 'post',
    data
  })
}

