import request from '../../../request'

// 船员职务 修改别名及是否使用
function  changeInfo(data) {
  return request({
    url: '/dutyBasic/api/changeInfo',
    method: 'post',
    data
  })
}
// 船员职务 表格拖拽排序
function  changeList(data) {
  return request({
    url: '/dutyBasic/api/changeList',
    method: 'post',
    data
  })
}

// 船员职务 分页查询
function  getQueryPage(data) {
  return request({
    url: '/dutyBasic/query/getQueryPage',
    method: 'get',
    params: data
  })
}

// 船员职务 显示列
function  changeShowContent(data) {
  return request({
    url: '/dutyParameter/api/changeShowContent',
    method: 'post',
    data
  })
}

// 查询模块显示列
function  getInfo(data) {
  return request({
    url: '/parameterCompanyShowType/query/getInfo',
    method: 'get',
    params: data
  })
}

export default {
  changeInfo,
  changeList,
  getQueryPage,
  changeShowContent,
  getInfo
}