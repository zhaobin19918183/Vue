// 工单历史
import request from '../../request'

// 一览页信息查询
function  getPageByCondition(data) {
  return request({
    url: '/maintainWorkOrderHistory/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 历史详情信息查询
function  getDetailInfoById(data) {
  return request({
    url: '/maintainWorkOrderHistory/query/getDetailInfoById',
    method: 'get',
    params: data
  })
}


// 根据ID查询操作历史
function  getOperateHistories(data) {
  return request({
    url: '/maintainWorkOrderOperateHis/query/getDelayOrCancelHistories',
    method: 'get',
    params: data
  })
}
