import request from '../../request'

// 查询汇率信息
function  getListByCondition(data) {
  return request({
    url: '/financeExchangeRate/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 保存汇率信息
function  saveRate(data) {
  return request({
    url: '/financeExchangeRate/api/saveRate',
    method: 'post',
    data
  })
}

// 根据币种和年月查询汇率
function  getExchangeRate(data) {
  return request({
    url: '/financeExchangeRate/query/getExchangeRate',
    method: 'get',
    params: data
  })
}
