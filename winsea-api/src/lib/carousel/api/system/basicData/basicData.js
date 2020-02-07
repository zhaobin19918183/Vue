import request from '../../../request'

// 新增或修改
function createOrEdit(data) {
  return request({
    url: '/txParameterCompany/api/saveParameterCompany',
    method: 'post',
    data
  })
}

// 用工形式 删除
function remove(data) {
  return request({
    url: '/txParameterCompany/api/deleteParameterCompanyById',
    method: 'post',
    data
  })
}

// 共通一览查询
function getQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompany',
    method: 'get',
    params: data
  })
}

// 缺陷类别一览查询
function getDefectCategoryQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}
// 语言一览查询
function getCompanyLanguageQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyLanguage',
    method: 'get',
    params: data
  })
}
// 批准单位一览查询
function getApprovedUnitQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyApprovedUnit',
    method: 'get',
    params: data
  })
}
// 通函类别一览查询
function getCircularCategoryQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyCircularCategory',
    method: 'get',
    params: data
  })
}

// 拖拽排序
function changeList(data) {
  return request({
    url: '/txParameterCompany/api/changeOrder',
    method: 'post',
    data
  })
}

export default {
  createOrEdit,
  remove,
  getQueryPage,
  getDefectCategoryQueryPage,
  getCompanyLanguageQueryPage,
  getApprovedUnitQueryPage,
  getCircularCategoryQueryPage,
  changeList
}