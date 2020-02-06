import request from '@/utils/request'

export default {
  // 查询个人收款信息列表
  getListByCondition(data) {
    return request({
      url: '/financePersonalReceive/query/getListByCondition',
      method: 'get',
      params: data
    })
  },
  // 新增个人收款信息
  addPerson(data) {
    return request({
      url: '/financePersonalReceive/api/saveAdd',
      method: 'post',
      data
    })
  },
  // 删除个人收款信息
  removePerson(data) {
    return request({
      url: '/financePersonalReceive/api/deleteCompanyReceive',
      method: 'post',
      data: data
    })
  },
  // 查询个人收款信息详细
  serchPersonDetail(data) {
    return request({
      url: '/financePersonalReceive/query/getPersonalReceiveById',
      method: 'get',
      params: data
    })
  },
  // 基础数据维国籍
  getNationtyList(params) {
    return request({
      url: '/crewNationality/query/getList',
      method: 'get',
      params
    })
  }
};
