import request from '../../../utils/request'

// 获取预警信息集合
export function getWarnList(data) {
  return request({
    url: '/txFileOperationInfo/query/getFileOperationInfoWarnByPage',
    method: 'get',
    params: data
  });
}
// 获取公司下所有部门 岸端
export function getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: { compId: data }
  });
}
