import request from '../../../request'

// 缺陷数据统计
function  getStatisticsInfo(data) {
  return request({
    url: 'txDefectStatistics/query/getPageDefectStatisticsInfo',
    method: 'get',
    params: data
  })
}
// 缺陷数据统计图表
function  getStatisticsChart(data) {
  return request({
    url: '/txDefectStatistics/query/getDefectStatisticsChart',
    method: 'get',
    params: data
  })
}
// 查询公司常量基础数据
function  getParameterTenant(params) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: params
  });
}
// 获取公司下所有部门 岸端
function  getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: { compId: data }
  });
}
// 缺陷类型查询
function  getQueryPage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}
