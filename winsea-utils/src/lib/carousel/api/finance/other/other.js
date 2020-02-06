import request from '@/utils/request'

// 查询公司预算预警值详情信息
function  getDetailInfoByCondition(params) {
  return request({
    url: '/financeBudgetCompanyWarning/query/getDetailInfoByCondition',
    method: 'get',
    params: params
  })
}
