import request from '../../../request'

// 合同 一览查询
function getPageByCondition(data) {
  return request({
    url: '/repairContractTemplateInfo/query/selectPage',
    method: 'get',
    params: data
  })
}
// 合同 保存
function saveContract(data) {
  return request({
    url: '/repairContractTemplateInfo/api/saveContract',
    method: 'post',
    data: data
  })
}
// 合同 更新
function updateContract(data) {
  return request({
    url: '/repairContractTemplateInfo/api/updateContract',
    method: 'post',
    data: data
  })
}
// 合同 删除
function deleteContract(data) {
  return request({
    url: '/repairContractTemplateInfo/api/deleteContract',
    method: 'post',
    data: data
  })
}
// 合同 查询详情
function selectDetail(data) {
  return request({
    url: '/repairContractTemplateInfo/query/selectDetail',
    method: 'get',
    params: data
  })
}
export default {
  getPageByCondition,
  saveContract,
  updateContract,
  deleteContract,
  selectDetail,
}