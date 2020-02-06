import request from '../../request'

// 查询科目
function  getCostListByCondition(data) {
  return request({
    url: '/financeCostSubject/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查询收款单位信息列表
function  getCompanyListByCondition(data) {
  return request({
    url: '/financeCompanyReceive/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查詢收款个人信息列表
function  getPersonalListByCondition(data) {
  return request({
    url: '/financePersonalReceive/query/getListByCondition',
    method: 'get',
    params: data
  })
}

// 查询个人收款信息详细
function  getPersonalReceiveById(data) {
  return request({
    url: '/financePersonalReceive/query/getPersonalReceiveById',
    method: 'get',
    params: data
  })
}

// 查詢收款单位详细信息
function  getCompanyReceiveById(data) {
  return request({
    url: '/financeCompanyReceive/query/getCompanyReceiveById',
    method: 'get',
    params: data
  })
}


// 获取公司及其子公司信息
function  compAndChildrenInfo(data) {
  return request({
    url: '/company/query/compAndChildrenInfo',
    method: 'get',
    params: data
  })
}

// 查询公司部门
function  getDeptListByCondition(data) {
  return request({
    url: '/financeBusiness/query/getDeptListByCondition',
    method: 'get',
    params: data
  })
}

// 查询公司船舶
function  getVesselListByCompId(data) {
  return request({
    url: '/financeBusiness/query/getVesselListByCompId',
    method: 'get',
    params: data
  })
}
