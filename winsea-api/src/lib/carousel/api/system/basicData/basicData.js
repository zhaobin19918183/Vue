import request from '../../../utils/request'

// 新增或修改
export function createOrEdit(data) {
  return request({
    url: '/txParameterCompany/api/saveParameterCompany',
    method: 'post',
    data
  })
}

// 用工形式 删除
export function remove(data) {
  return request({
    url: '/txParameterCompany/api/deleteParameterCompanyById',
    method: 'post',
    data
  })
}

// 共通一览查询
export function getQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompany',
    method: 'get',
    params: data
  })
}

// 缺陷类别一览查询
export function getDefectCategoryQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}
// 语言一览查询
export function getCompanyLanguageQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyLanguage',
    method: 'get',
    params: data
  })
}
// 批准单位一览查询
export function getApprovedUnitQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyApprovedUnit',
    method: 'get',
    params: data
  })
}
// 通函类别一览查询
export function getCircularCategoryQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyCircularCategory',
    method: 'get',
    params: data
  })
}

// 拖拽排序
export function changeList(data) {
  return request({
    url: '/txParameterCompany/api/changeOrder',
    method: 'post',
    data
  })
}

