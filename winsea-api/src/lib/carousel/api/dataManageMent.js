// 航海资料管理-航海资料管理Api接口

import request from '../utils/request'
// 资料管理->列表查询
export function findFileUnderFolder(data) {
  return request({
    url: '/dataManagerFile/query/findFileUnderFolder',
    method: 'get',
    params: data
  })
}
// 文档类型->列表查询
export function findFileType(data) {
  return request({
    url: '/dataManagerFile/query/findFileType',
    method: 'get',
    params: data
  })
}
// 资料管理->新增
export function addFile(data) {
  return request({
    url: '/dataManagerFile/api/saveFile',
    method: 'post',
    data: data
  })
}
// 资料管理->移动
export function moveFile(data) {
  return request({
    url: '/dataManagerFile/api/update',
    method: 'post',
    data: data
  })
}
// 资料管理->批量删除
export function removeAll(data) {
  return request({
    url: '/dataManagerFile/api/removeAll',
    method: 'post',
    data: data
  })
}

// 资料管理->批量下载
export function batchDownFile(data) {
  return request({
    url: '/appendix/download/batchAttachment',
    method: 'get',
    params: data
  })
}

// 资料管理文件夹->数据
export function findTreeList(data) {
  return request({
    url: '/dataManagerFolder/query/findTreeList',
    method: 'get',
    params: data
  })
}
// 资料管理文件夹->新增
export function addInfo(data) {
  return request({
    url: '/dataManagerFolder/api/saveInfo',
    method: 'post',
    data: data
  })
}
// 资料管理文件夹->修改
export function changeInfo(data) {
  return request({
    url: '/dataManagerFolder/api/changeInfo',
    method: 'post',
    data: data
  })
}
// 资料管理文件夹->删除
export function removeInfo(data) {
  return request({
    url: '/dataManagerFolder/api/remove',
    method: 'post',
    data: data
  })
}
// 资料管理->重命名
export function fileRename(data) {
  return request({
    url: '/dataManagerFile/api/fileRename',
    method: 'post',
    data: data
  })
}
// 查询附件
export function getFileList(params) {
  return request({
    url: '/appendix/query/getFileList',
    method: 'get',
    params
  })
}



