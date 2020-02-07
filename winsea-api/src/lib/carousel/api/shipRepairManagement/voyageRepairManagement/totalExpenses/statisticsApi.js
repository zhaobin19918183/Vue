// 修船模块-航修费用统计Api接口

import request from '../../../../request'
// 航修费用统计查询
function  getCalculateExpense(data) {
  return request({
    url: '/repairCalculateExpense/query/getCalculateExpense',
    method: 'get',
    params: data
  })
}
export default{
  getCalculateExpense
}