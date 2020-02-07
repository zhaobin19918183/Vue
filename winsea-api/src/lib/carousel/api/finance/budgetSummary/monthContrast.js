import request from '../../../request'

// 月度对比一览列表查询
function  getPageByCondition(params) {
  return request({
    url: '/financeMonthSettlement/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 月度对比重新获取详情
function  refreshMonthSettlement(data) {
  return request({
    url: '/financeMonthSettlement/api/refreshMonthSettlement',
    method: 'post',
    data
  })
}

// 月度对比生成校验
function  checkExsitOrEnabled(params) {
  return request({
    url: '/financeMonthSettlement/query/checkExsitOrEnabled',
    method: 'get',
    params: params
  })
}

// 月度对比确认保存
function  saveConfirm(data) {
  return request({
    url: '/financeMonthSettlement/api/saveConfirm',
    method: 'post',
    data
  })
}

// 月度对比详情查询
function  getDetailInfoById(params) {
  return request({
    url: '/financeMonthSettlement/query/getDetailInfoById',
    method: 'get',
    params: params
  })
}

// 月度对比生成
function  saveAdd(data) {
  return request({
    url: '/financeMonthSettlement/api/saveAdd',
    method: 'post',
    data
  })
}

// 查询公司预算预警值详情信息
function  getDetailInfoByCondition(params) {
  return request({
    url: '/financeBudgetCompanyWarning/query/getDetailInfoByCondition',
    method: 'get',
    params: params
  })
}

// 月度对比详情科目对应申请单查询
function  getBillViewPageByCondition(params) {
  return request({
    url: '/financeMonthSettlement/query/getBillViewPageByCondition',
    method: 'get',
    params: params
  })
}
export default{
  getPageByCondition,
  refreshMonthSettlement,
  checkExsitOrEnabled,
  saveConfirm,
  getDetailInfoById,
  saveAdd,
  getDetailInfoByCondition,
  getBillViewPageByCondition
}