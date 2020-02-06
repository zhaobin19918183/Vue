import request from '../../../../request'

// 查询体系培训一览信息
function  getListByCondition(params) {
  return request({
    url: '/systemTrainingInfoController/query/getPageByCondition',
    method: 'get',
    params
  })
}

// 查询体系培训处理人id name
function  getTrainingPersonInfo(params) {
  return request({
    url: '/systemTrainingInfoController/query/getTrainingPersonInfo',
    method: 'get',
    params
  })
}

// 职务下拉
function  getDynamicDutyList(params) {
  return request({
    url: '/systemTrainingInfoController/query/getDynamicDutyList',
    method: 'get',
    params: params
  })
}

// 查询体系培训详细信息
function  getTrainingInfoById(params) {
  return request({
    url: '/systemTrainingInfoController/query/getTrainingInfoById',
    method: 'get',
    params
  })
}

// 体系培训保存方法
function  save(data) {
  return request({
    url: '/systemTrainingInfoController/api/save',
    method: 'post',
    data
  })
}


// 体系培训提交方法
function  submit(data) {
  return request({
    url: '/systemTrainingInfoController/api/submit',
    method: 'post',
    data
  })
}
// 废弃
function  saveDiscard(data) {
  return request({
    url: '/systemTrainingInfoController/api/saveDiscard',
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