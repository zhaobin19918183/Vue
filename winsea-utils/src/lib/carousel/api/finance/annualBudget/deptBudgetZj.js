import request from '../../../request'


export default {
  // 洲际-部门预算按钮显示类别
  getDeptButtonType(params){
    return request({
      url: '/financeYearBudget/query/getDeptButtonType',
      method: 'get',
      params: params,
      headers: {'request-type': 'zj'},
    })
  },

  // 洲际预算调整工作通知
  sendAdjustHistory(data){
    return request({
      url: '/financeBusiness/api/sendAdjustHistory',
      method: 'post',
      data
    })
  },
}
