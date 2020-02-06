import request from '@/utils/request'

// 保存管理科目
export function saveManage(data) {
  return request({
    url: '/financeCostSubject/api/saveManage',
    method: 'post',
    data
  })
}


// 删除科目
export function deleteManage(data) {
  return request({
    url: '/financeCostSubject/api/deleteManage',
    method: 'post',
    data
  })
}

// 查询科目
export function getListByCondition(data) {
  return request({
    url: '/financeCostSubject/query/getListByCondition',
    method: 'get',
    params: data
  })
}

