import request from '../../../utils/request'

// 修理类别 新增或修改
export function createOrEdit(data) {
  return request({
    url: '/repairParameterCompany/api/saveRepairParameterCompany',
    method: 'post',
    data
  })
}

// 修理类别 删除
export function remove(data) {
  return request({
    url: '/repairParameterCompany/api/deleteRepairParameterCompanyById',
    method: 'post',
    data:data
  })
}

// 修理类别 分页查询
export function getQueryPage(data) {
  return request({
    url: '/repairType/query/getRepairParameterCompany',
    method: 'get',
    params: data
  })
}

// 修理类别 拖拽排序
export function changeList(data) {
  return request({
    url: '/repairParameterCompany/api/changeOrder',
    method: 'post',
    data
  })
}

