import request from '../../../request'

// 一览列表
function  getPageByCondition(params) {
  return request({
    url: '/examinationInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 新增
function  saveAdd(data) {
  return request({
    url: '/examinationInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 编辑
function  saveEdit(data) {
  return request({
    url: '/examinationInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 删除
function  deleteExamination(data) {
  return request({
    url: '/examinationInfo/api/deleteExamination',
    method: 'post',
    data
  })
}
// 查询全部船员 分页版
function  getListBySeafarerCrewForPage(params) {
  console.log(params)
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrewForPage',
    method: 'get',
    params: params
  })
}

export default {
  getPageByCondition,
  saveAdd,
  saveEdit,
  deleteExamination,
  getListBySeafarerCrewForPage
}