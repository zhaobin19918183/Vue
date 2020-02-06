import request from '../../../request'

// 合同模板 编辑
function  saveEdit(data) {
  return request({
    url: '/crewContractTemplateInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 合同模板 删除
function  remove(data) {
  return request({
    url: '/crewContractTemplateInfo/api/remove',
    method: 'post',
    data
  })
}

// 合同模板 新增
function  saveAdd(data) {
  return request({
    url: '/crewContractTemplateInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 合同模板 合同详情
function  getOneContract(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getOneContract',
    method: 'get',
    params: data
  })
}

// 合同模板 合同一览
function  getContractName(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getContractName',
    method: 'get',
    data
  })
}
export default{
  saveEdit,
  remove,
  saveAdd,
  getOneContract,
  getContractName
  

}