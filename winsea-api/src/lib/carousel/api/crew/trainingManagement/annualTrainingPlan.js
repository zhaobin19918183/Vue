import request from '../../../utils/request'

// 查询年度培训计划信息列表
export function getListByCondition(params) {
  return request({
    url: '/crewYearTrainingPlanInfo/query/getListByCondition',
    method: 'get',
    params: params
  })
}

// 新增年度培训计划
export function saveAdd(data) {
  return request({
    url: '/crewYearTrainingPlanInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 查询培训详情信息
export function getInfoById(params) {
  return request({
    url: '/crewYearTrainingPlanInfo/query/getInfoById',
    method: 'get',
    params: params
  })
}

// 保存培训信息(编辑)
export function saveEdit(data) {
  return request({
    url: '/crewYearTrainingPlanInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 取得操作历史
export function getOperateHistorys(params) {
  return request({
    url: '/crewYearTrainingPlanInfo/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}

// 提交培训信息
export function submit(data) {
  return request({
    url: '/crewYearTrainingPlanInfo/api/submit',
    method: 'post',
    data
  })
}

// 废弃
export function saveDiscard(data) {
  return request({
    url: '/crewYearTrainingPlanInfo/api/saveDiscard',
    method: 'post',
    data
  })
}

// 取得已经完成计划的年度
export function getUsedYearList(params) {
  return request({
    url: '/crewYearTrainingPlanInfo/query/getUsedYearList',
    method: 'get',
    params: params
  })
}
