import request from '../../../utils/request'

// 一览列表
export function getPageByCondition(params) {
  return request({
    url: '/examinationInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 新增
export function saveAdd(data) {
  return request({
    url: '/examinationInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 编辑
export function saveEdit(data) {
  return request({
    url: '/examinationInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 删除
export function deleteExamination(data) {
  return request({
    url: '/examinationInfo/api/deleteExamination',
    method: 'post',
    data
  })
}
// 查询全部船员 分页版
export function getListBySeafarerCrewForPage(params) {
  console.log(params)
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrewForPage',
    method: 'get',
    params: params
  })
}

