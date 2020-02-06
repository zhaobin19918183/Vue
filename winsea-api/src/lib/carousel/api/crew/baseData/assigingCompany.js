import request from '../../../utils/request'

// 外派公司 新增或修改
export function createOrEdit(data) {
  return request({
    url: '/outsourcingCompanyInfo/api/createOrEdit',
    method: 'post',
    data
  })
}

// 外派公司 删除
export function remove(data) {
  return request({
    url: '/outsourcingCompanyInfo/api/remove',
    method: 'post',
    data
  })
}

// 外派公司 分页查询
export function getQueryPage(data) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryPage',
    method: 'get',
    params: data
  })
}

// 外派公司 查询公司下联系人
export function outsourcingCompanyLikeMan(data) {
  return request({
    url: '/outsourcingCompanyInfo/query/outsourcingCompanyLikeMan',
    method: 'get',
    params: data
  })
}

