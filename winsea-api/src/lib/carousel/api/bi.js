import request from '../utils/request'

// 获取BI报表路径
export function reportUrl(data) {
  return request({
    url: '/bi/query/reportUrl',
    method: 'get',
    params: data
  })
}

