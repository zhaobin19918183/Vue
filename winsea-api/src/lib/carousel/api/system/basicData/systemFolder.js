import request from '../../../request'

// 查询当前租户信息
function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data
  })
}
// 查询租户下分公司信息
function getTenantCompanyInfo(data) {
  return request({
    url: '/company/query/findTenantCompany',
    method: 'get',
    params: data
  })
}
// 查询文件夹一览信息
function getSystemFolderList(data) {
  return request({
    url: '/txFileTypeInfo/query/getFileTypeInfoTree',
    method: 'get',
    params: data
  })
}
// 删除信息
function deleteFileTypeInfoById(data) {
  return request({
    url: '/txFileTypeInfo/api/deleteFileTypeInfoById',
    method: 'post',
    data
  })
}
// 保存文件夹信息
function saveFileTypeInfo(data) {
  return request({
    url: '/txFileTypeInfo/api/saveFileTypeInfo',
    method: 'post',
    data
  })
}
// 保存文件夹排序信息
function changeOrder(data) {
  return request({
    url: '/txFileTypeInfo/api/changeOrder',
    method: 'post',
    data
  })
}
export default {
  getCurrentUserInfo,
  getTenantCompanyInfo,
  getSystemFolderList,
  deleteFileTypeInfoById,
  saveFileTypeInfo,
  changeOrder
}