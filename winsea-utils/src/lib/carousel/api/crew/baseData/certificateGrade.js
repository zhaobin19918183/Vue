import request from '../../../request'

// 证书等级 分页查询
function  getQueryPage(data) {
  return request({
    url: '/certificateGradeParameter/query/getQueryPage',
    method: 'get',
    params: data
  })
}

// 证书等级 是否使用新增
function  changeInfo(data) {
  return request({
    url: '/certificateGradeParameter/api/changeInfo',
    method: 'post',
    data
  })
}

// 证书等级 显示列修改
function  changeShowContent(data) {
  return request({
    url: '/certificateGradeParameter/api/changeShowContent',
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

// 证书等级 拖拽排序
function  changeList(data) {
  return request({
    url: '/certificateGradeParameter/api/changeList',
    method: 'post',
    data
  })
}

// 证书等级 列表查询
function  getQueryList(data) {
  return request({
    url: '/certificateGradeParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}
export default{
  getQueryPage,
  changeInfo,
  changeShowContent,
  getInfo,
  changeList,
  getQueryList

}
