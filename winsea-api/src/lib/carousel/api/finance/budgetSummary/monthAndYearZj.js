import request from '../../../utils/request'


export default {
  // 查询一级科目的预警阈值
  getSubjectWarningThreshold(params) {
    return request({
      url: '/financeBusiness/query/getSubjectWarningThreshold',
      method: 'get',
      params: params,
    })
  },
}
