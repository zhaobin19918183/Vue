import request from '../../../utils/request'


export default {
  // 洲际-预算结算提交
  saveSubmitZj(data){
    return request({
      url: '/financeYearBudget/api/saveSubmit',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },
  // 洲际-查询预算汇总详情信息
  getDetailInfoByIdZj(params) {
    return request({
      url: '/financeYearBudget/query/getDetailInfoById',
      method: 'get',
      params: params,
      headers: {'request-type': 'zj'},
    })
  },
  // 洲际-查询预汇总算一览列表
  getPageByConditionZj(params) {
    return request({
      url: '/financeYearBudget/query/getPageByCondition',
      method: 'get',
      params: params,
      headers: {'request-type': 'zj'},
    })
  },
  // 开启年中预算
  openMidYearBudgetZj(data) {
    return request({
      url: '/financeYearBudget/api/openMidYearBudget',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },
  // 生成年中预算
  createMidYearBudgetZj(data) {
    return request({
      url: '/financeYearBudget/api/createMidYearBudget',
      method: 'post',
      data,
      headers: {'request-type': 'zj'},
    })
  },
  // 查询操作历史信息
  getOperateHistorysZj(params) {
    return request({
      url: '/financeYearBudget/query/getOperateHistorys',
      method: 'get',
      params: params,
      headers: {'request-type': 'zj'},
    })
  },
}
