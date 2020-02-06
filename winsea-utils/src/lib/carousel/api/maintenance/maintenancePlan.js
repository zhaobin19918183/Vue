// 工单计划
import request from '../../request'

// 新增/编辑保存
function  savePlanOrder(data) {
  return request({
    url: '/maintainWorkOrderPlan/api/savePlanOrder',
    method: 'post',
    data
  })
}

// 一览页信息查询
function  getPlanPageByCondition(data) {
  return request({
    url: '/maintainWorkOrderPlan/query/getPlanPageByCondition',
    method: 'get',
    params: data
  })
}

// 详情信息查询
function  getDetailInfoById(data) {
  return request({
    url: '/maintainWorkOrderPlan/query/getDetailInfoById',
    method: 'get',
    params: data
  })
}

// 延期
function  delayPlanOrder(data) {
  return request({
    url: '/maintainWorkOrderPlan/api/delayPlanOrder',
    method: 'post',
    data
  })
}

// 取消
function  cancelPlanOrder(data) {
  return request({
    url: '/maintainWorkOrderPlan/api/cancelPlanOrder',
    method: 'post',
    data
  })
}

// 删除
function  deletePlanOrder(data) {
  return request({
    url: '/maintainWorkOrderPlan/api/deletePlanOrder',
    method: 'post',
    data
  })
}
