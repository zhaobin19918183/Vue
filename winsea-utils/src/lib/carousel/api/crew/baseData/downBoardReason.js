  import request from '../../../request'

  // 查询下船原因分类信息
  function  getDisembarkReasonParameter(data) {
    return request({
      url: '/disembarkReason/query/getDisembarkReasonParameter',
      method: 'get',
      data
    })
  }
  // 下船原因基础数据新增编辑
  function  updateDisembarkReasonParameter(data) {
    return request({
      url: '/disembarkReason/api/updateDisembarkReasonParameter',
      method: 'post',
      data
    })
  }
  // 下船原因基础数据批量保存-排序用
  function  updateDisembarkReasonParameterList(data) {
    return request({
      url: '/disembarkReason/api/updateDisembarkReasonParameterList',
      method: 'post',
      data
    })
  }
  // 查询工资基础科目
  function  getStandardStatusParameter(data) {
    return request({
      url: '/salaryStandardStatus/query/getStandardStatusParameter',
      method: 'get',
      data
    })
  }
  // 工资基础科目新增编辑
  function  updateStandardStatusParameter(data) {
    return request({
      url: '/salaryStandardStatus/api/updateStandardStatusParameter',
      method: 'post',
      data
    })
  }
  // 工资基础科目批量保存-排序用
  function  updateStandardStatusParameterList(data) {
    return request({
      url: '/salaryStandardStatus/api/updateStandardStatusParameterList',
      method: 'post',
      data
    })
  }
  // 下船原因删除
  function  deleteDisembarkReasonParameter(data) {
    return request({
      url: '/disembarkReason/api/deleteDisembarkReasonParameter',
      method: 'post',
      data
    })
  }
  // 工资删除
  function  deleteStandardStatusParameter(data) {
    return request({
      url: '/salaryStandardStatus/api/deleteStandardStatusParameter',
      method: 'post',
      data
    })
  }
  export default {
    getDisembarkReasonParameter,
    updateDisembarkReasonParameter,
    updateDisembarkReasonParameterList,
    getStandardStatusParameter,
    updateStandardStatusParameter,
    updateStandardStatusParameterList,
    deleteDisembarkReasonParameter,
    deleteStandardStatusParameter
  }