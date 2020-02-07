import request from '../../../request'

// 工程类别 新增或修改
function createOrEdit(data) {
  return request({
    url: '/repairParameterCompany/api/saveRepairParameterCompany',
    method: 'post',
    data
  })
}

// 工程类别 删除
function remove(data) {
  return request({
    url: '/repairParameterCompany/api/deleteRepairParameterCompanyById',
    method: 'post',
    data: data
  })
}

// 工程类别 分页查询
function getQueryPage(data) {
  return request({
    url: '/repairParameterCompany/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}

// 工程类别 拖拽排序
function changeList(data) {
  return request({
    url: '/repairParameterCompany/api/changeOrder',
    method: 'post',
    data
  })
}
export default {
  createOrEdit,
  remove,
  getQueryPage,
  changeList,
}

