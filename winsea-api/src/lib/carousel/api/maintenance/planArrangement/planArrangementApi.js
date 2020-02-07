import request from '../../../request'

// 获取船舶id
function  selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}
// 根据公司ID获取船舶数据
function  getAppShips(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  });
}
// 获取下拉设备分类
function  getEquipmentTypeList(data) {
  return request({
    url: '/maintainDeviceType/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 获取设备主管下拉
function  getQueryList(params) {
  return request({
    url: '/commonDeptRole/query/getVessleRoleByCompId',
    method: 'get',
    params
  });
}
// 获取部门下拉
function  getDepartmentList(data) {
  return request({
    url: '/commonDeptRole/query/getVesselDeptByCompId',
    method: 'get',
    params: { compId: data }
  });
}
// 获取工作首排一览
function  getWorkArrangePageByCondition(params) {
  return request({
    url: '/maintainDeviceWorkInfo/query/getWorkArrangePageByCondition',
    method: 'get',
    params
  })
}
// 工作首排保存方法
function  saveWorkArrange(data) {
  return request({
    url: '/maintainDeviceWorkInfo/api/changeWorkInfo',
    method: 'post',
    data
  })
}
// 工作首排方法
function  workArrange(data) {
  return request({
    url: '/maintainDeviceWorkInfo/api/saveWorkArrangeInfo',
    method: 'post',
    data
  })
}
export default{
  selectShipId,
  getAppShips,
  getEquipmentTypeList,
  getQueryList,
  getDepartmentList,
  getWorkArrangePageByCondition,
  saveWorkArrange,
  workArrange
}
