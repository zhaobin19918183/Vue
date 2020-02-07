import request from  '../../../request'

// 保存管理科目
function  saveManage(data) {
  return request({
    url: '/financeCostSubject/api/saveManage',
    method: 'post',
    data
  })
}


// 删除科目
function  deleteManage(data) {
  return request({
    url: '/financeCostSubject/api/deleteManage',
    method: 'post',
    data
  })
}

// 查询科目
function  getListByCondition(data) {
  return request({
    url: '/financeCostSubject/query/getListByCondition',
    method: 'get',
    params: data
  })
}
export default{
  saveManage,
  deleteManage,
  getListByCondition
}
