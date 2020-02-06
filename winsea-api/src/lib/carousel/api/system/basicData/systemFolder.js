import request from '../../../utils/request'

// 查询当前租户信息
export function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data
  })
}
// 查询租户下分公司信息
export function getTenantCompanyInfo(data) {
  return request({
    url: '/company/query/findTenantCompany',
    method: 'get',
    params: data
  })
}
// 查询文件夹一览信息
export function getSystemFolderList(data) {
  return request({
    url: '/txFileTypeInfo/query/getFileTypeInfoTree',
    method: 'get',
    params: data
  })
}
// 删除信息
export function deleteFileTypeInfoById(data) {
  return request({
    url: '/txFileTypeInfo/api/deleteFileTypeInfoById',
    method: 'post',
    data
  })
}
// 保存文件夹信息
export function saveFileTypeInfo(data) {
  return request({
    url: '/txFileTypeInfo/api/saveFileTypeInfo',
    method: 'post',
    data
  })
}
// 保存文件夹排序信息
export function changeOrder(data) {
  return request({
    url: '/txFileTypeInfo/api/changeOrder',
    method: 'post',
    data
  })
}