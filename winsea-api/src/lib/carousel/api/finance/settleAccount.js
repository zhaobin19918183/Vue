import request from '@/utils/request'

export default {
  // 查询公司名称基础数据
  getParameterListByCondition(params) {
    return request({
      url: '/financeParameter/query/getListByCondition',
      method: 'get',
      params: params
    })
  },
  // 新增或修改基础数据
  saveAdd(data) {
    return request({
      url: '/financeParameter/api/saveAdd',
      method: 'post',
      data: data
    })
  },
  // 删除基础数据
  deleteMsg(data) {
    return request({
      url: '/financeParameter/api/delete',
      method: 'post',
      data: data
    })
  },
  // 基础数据排序
  order(data) {
    return request({
      url: '/financeParameter/api/order',
      method: 'post',
      data: data
    })
  }
};
