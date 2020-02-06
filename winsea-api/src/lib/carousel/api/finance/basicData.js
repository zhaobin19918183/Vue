import request from '../../utils/request'

// 查询科目
export function getCostListByCondition(data) {
  return request({
    url: '/financeCostSubject/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查询收款单位信息列表
export function getCompanyListByCondition(data) {
  return request({
    url: '/financeCompanyReceive/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查詢收款个人信息列表
export function getPersonalListByCondition(data) {
  return request({
    url: '/financePersonalReceive/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查询个人收款信息详细
export function getPersonalReceiveById(data) {
  return request({
    url: '/financePersonalReceive/query/getPersonalReceiveById',
    method: 'get',
    params: data
  })
}

// 查詢收款单位详细信息
export function getCompanyReceiveById(data) {
  return request({
    url: '/financeCompanyReceive/query/getCompanyReceiveById',
    method: 'get',
    params: data
  })
}


// 获取公司及其子公司信息
export function compAndChildrenInfo(data) {
  return request({
    url: '/company/query/compAndChildrenInfo',
    method: 'get',
    params: data
  })
}

// 查询公司部门
export function getDeptListByCondition(data) {
  return request({
    url: '/financeBusiness/query/getDeptListByCondition',
    method: 'get',
    params: data
  })
}

// 查询公司船舶
export function getVesselListByCompId(data) {
  return request({
    url: '/financeBusiness/query/getVesselListByCompId',
    method: 'get',
    params: data
  })
}
