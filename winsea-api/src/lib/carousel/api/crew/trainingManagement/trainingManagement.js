import request from '../../../utils/request'

// 查询年度培训记录信息列表
export function getListByCondition(params) {
  return request({
    url: '/crewTrainingRecordInfo/query/getListByCondition',
    method: 'get',
    params: params
  })
}

// 培训 分页版
export function getListBySeafarerCrewForPage(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrewForPage',
    method: 'get',
    params: params
  })
}
// 获取全部职务
export function selectApplyDuty(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 新增年度培训记录
export function saveAdd(data) {
  return request({
    url: '/crewTrainingRecordInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 查询培训详情信息
export function getInfoById(params) {
  return request({
    url: '/crewTrainingRecordInfo/query/getInfoById',
    method: 'get',
    params: params
  })
}

// 保存培训信息(编辑)
export function saveEdit(data) {
  return request({
    url: '/crewTrainingRecordInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 取得操作历史
export function getOperateHistorys(params) {
  return request({
    url: '/crewTrainingRecordInfo/query/getOperateHistorys',
    method: 'get',
    params: params
  })
}

// 保存培训信息(编辑)
export function submit(data) {
  return request({
    url: '/crewTrainingRecordInfo/api/submit',
    method: 'post',
    data
  })
}

// 废弃
export function saveDiscard(data) {
  return request({
    url: '/crewTrainingRecordInfo/api/saveDiscard',
    method: 'post',
    data
  })
}

// 根据各种状态获取船员列表
export function getListBySeafarerCrew(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrew',
    method: 'get',
    params: params
  })
}

// 获取全部职务
export function getQueryList(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 下拉添加
export function add(data) {
  return request({
    url: '/customDropDown/api/saveAdd',
    method: 'post',
    data
  })
}

// 下拉编辑
export function edit(data) {
  return request({
    url: '/customDropDown/api/saveEdit',
    method: 'post',
    data
  })
}

// 下拉删除
export function saveDelete(data) {
  return request({
    url: '/customDropDown/api/saveDelete',
    method: 'post',
    data
  })
}

// 下拉一览
export function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
