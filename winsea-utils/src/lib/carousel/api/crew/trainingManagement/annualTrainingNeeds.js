import request from '../../../request'

// 查询年度培训需求信息列表
function  getListByCondition(params) {
  return request({
    url: '/crewYearTrainingDemandInfo/query/getListByCondition',
    method: 'get',
    params: params
  })
}

// 新增年度培训需求
function  saveAdd(data) {
  return request({
    url: '/crewYearTrainingDemandInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 查询培训详情信息
function  getInfoById(params) {
  return request({
    url: '/crewYearTrainingDemandInfo/query/getInfoById',
    method: 'get',
    params: params
  })
}

// 保存培训信息(编辑)
function  saveEdit(data) {
  return request({
    url: '/crewYearTrainingDemandInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 取得操作历史
function  getOperateHistorys(params) {
  return request({
    url: '/crewYearTrainingDemandInfo/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}

// 提交培训信息
function  submit(data) {
  return request({
    url: '/crewYearTrainingDemandInfo/api/submit',
    method: 'post',
    data
  })
}

// 废弃
function  saveDiscard(data) {
  return request({
    url: '/crewYearTrainingDemandInfo/api/saveDiscard',
    method: 'post',
    data
  })
}

// 取得已经完成需求的年度
function  getUsedYearList(params) {
  return request({
    url: '/crewYearTrainingDemandInfo/query/getUsedYearList',
    method: 'get',
    params: params
  })
}