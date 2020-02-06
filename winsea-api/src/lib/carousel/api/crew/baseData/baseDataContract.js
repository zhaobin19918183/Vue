import request from '../../../utils/request'

// 合同模板 编辑
export function saveEdit(data) {
  return request({
    url: '/crewContractTemplateInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 合同模板 删除
export function remove(data) {
  return request({
    url: '/crewContractTemplateInfo/api/remove',
    method: 'post',
    data
  })
}

// 合同模板 新增
export function saveAdd(data) {
  return request({
    url: '/crewContractTemplateInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 合同模板 合同详情
export function getOneContract(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getOneContract',
    method: 'get',
    params: data
  })
}

// 合同模板 合同一览
export function getContractName(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getContractName',
    method: 'get',
    data
  })
}
