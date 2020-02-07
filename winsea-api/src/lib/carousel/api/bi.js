import request from '../request'

// 获取BI报表路径
function  reportUrl(data) {
  return request({
    url: '/bi/query/reportUrl',
    method: 'get',
    params: data
  })
}
export default{
  reportUrl
}

