import request from '../../../request'

// 基础数据
function  getListByCondition(params) {
  return request({
    url: '/crewTrainingInfo/query/getListByCondition',
    method: 'get',
    params
  })
}
// 保存培训信息(编辑)
function  saveEdit(params) {
  return request({
    url: '/crewTrainingInfo/api/saveEdit',
    method: 'get',
    params
  })
}

//   查询培训详情信息
function  getInfoById(params) {
  return request({
    url: '/crewTrainingInfo/query/getInfoById',
    method: 'get',
    params
  })
}
//   保存培训信息（新增/编辑）
function  save(data) {
  return request({
    url: 'crewTrainingInfo/api/save',
    method: 'post',
    data
  })
}
// 提交培训信息
function  submit(data) {
  return request({
    url: '/crewTrainingInfo/api/submit',
    method: 'post',
    data
  })
}
// 删除培训详情信息
function  deleteDetail(data) {
  return request({
      url: '/crewTrainingInfo/api/deleteDetail',
      method: 'post',
      data
 })
}
// 输出培训详情信息
function  exportdata(params){
  return request({
    url: '/crewTrainingInfo/query/export',
    method: 'post',
    params
  })
}
// 输出培训详情信息
// function  export(params){
//   return request({
//     url: '/crewTrainingInfo/query/export',
//     method: 'post',
//     params
//   })
// }

export default {
  getListByCondition,
  saveEdit,
  getInfoById,
  save,
  submit,
  deleteDetail,
  exportdata
}
