import request from '../../../../request'

// 查询考核培训一览信息
function  getListByCondition(params) {
  return request({
    url: '/assessTrainingInfoController/query/getPageByCondition',
    method: 'get',
    params: params
  })
}

// 查询考核培训处理人id name
function  getTrainingPersonInfo(params) {
  return request({
    url: '/assessTrainingInfoController/query/getTrainingPersonInfo',
    method: 'get',
    params
  })
}

// 职务下拉
function  getDynamicDutyList(params) {
  return request({
    url: '/assessTrainingInfoController/query/getDynamicDutyList',
    method: 'get',
    params: params
  })
}

// 查询考核培训详细信息
function  getTrainingInfoById(params) {
  return request({
    url: '/assessTrainingInfoController/query/getTrainingInfoById',
    method: 'get',
    params
  })
}

// 考核培训保存方法
function  save(data) {
  return request({
    url: '/assessTrainingInfoController/api/save',
    method: 'post',
    data
  })
}

// 考核培训提交方法
function  submit(data) {
  return request({
    url: '/assessTrainingInfoController/api/submit',
    method: 'post',
    data
  })
}
// 废弃
function  saveDiscard(data) {
  return request({
    url: '/assessTrainingInfoController/api/saveDiscard',
    method: 'post',
    data
  })
}

// 查询操作历史信息
function  getOperateHistorys(params) {
  return request({
    url: '/crewFileOperationHis/query/getOperateHistory',
    method: 'get',
    params: params
  })
}
// 查询船员接口
function  selectCrew(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrew',
    method: 'get',
    params: params
  })
}
// 审核通过不通过接口
function  dicApprove(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data
  })
}
export default{
  getListByCondition,
  getTrainingPersonInfo,
  getDynamicDutyList,
  getTrainingInfoById,
  save,
  submit,
  saveDiscard,
  getOperateHistorys,
  selectCrew,
  dicApprove
}