import request from '@/utils/request'

// 查询年度对比一览列表
export function getPageByCondition(params) {
  return request({
    url: '/financeYearSettlement/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 检查当前年度所有月份的月度对比是否都已生成
export function checkAllCreated(params) {
  return request({
    url: '/financeMonthSettlement/query/checkAllCreated',
    method: 'get',
    params: params
  })
}

// 查询年度对比详情信息
export function getDetailInfoById(params) {
  return request({
    url: '/financeYearSettlement/query/getDetailInfoById',
    method: 'get',
    params: params
  })
}

// 年度对比生成
export function saveAdd(data) {
  return request({
    url: '/financeYearSettlement/api/saveAdd',
    method: 'post',
    data
  })
}

// 检验年度对比是否已生成
export function checkCreated(params) {
  return request({
    url: '/financeYearSettlement/query/checkCreated',
    method: 'get',
    params: params
  })
}

// 重新获取年度对比详情
export function refreshDetailInfos(data) {
  return request({
    url: '/financeYearSettlement/api/refreshDetailInfos',
    method: 'post',
    data
  })
}

// 年度对比确认
export function saveConfirm(data) {
  return request({
    url: '/financeYearSettlement/api/saveConfirm',
    method: 'post',
    data
  })
}
