import request from '../../../request'
 // 查询一级科目的预警阈值
 function getSubjectWarningThreshold(params) {
  return request({
    url: '/financeBusiness/query/getSubjectWarningThreshold',
    method: 'get',
    params: params,
  })
}

export default{
   getSubjectWarningThreshold
}
