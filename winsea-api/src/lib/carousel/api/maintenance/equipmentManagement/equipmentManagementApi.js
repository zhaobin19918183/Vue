// 维保模块-设备管理Api接口

import request from '../../../request'
// 设备管理一览->船舶设备树-z9z
function  deviceTree(data) {
  return request({
    url: '/maintainDeviceType/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 设备管理一览->点击树的设备分类查询子设备信息
function  getDeviceInfoList(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceInfoList',
    method: 'get',
    params: data
  })
}
// 设备管理一览->点击树的设备分类查询设备信息,模糊查询,过滤查询
function  selectSupplyDeviceInfoPage(data) {
  return request({
    url: '/maintainDeviceWorkInfo/query/getWorkInfoPageByCondition',
    method: 'get',
    params: data
  })
}
// 设备管理一览->排序->保存设备信息序号
function  saveDeviceInfoorder(data) {
  return request({
    url: '/maintainDeviceInfo/api/order',
    method: 'post',
    data
  })
}
// 设备管理一览->删除单条->删除设备信息
function  deleteWorkInfo(data) {
  return request({
    url: '/maintainDeviceWorkInfo/api/deleteWorkInfo',
    method: 'post',
    data: data
  })
}
// 设备管理新增->新增保存设备信息
function  save(data) {
  return request({
    url: '/maintainDeviceInfo/api/saveAddDeviceInfo',
    method: 'post',
    data: data
  })
}
// 设备管理新增详细->参考其他工作信息->参考工作信息查询
function  getReferOtherWrokinfo(data) {
  return request({
    url: '/maintainDeviceWorkInfo/query/getSameLevelDeviceWorkList',
    method: 'get',
    params: data
  })
}
// 设备管理新增详细->删除按钮->删除设备信息和设备工作信息集合
function  deleteWorkInfoList(data) {
  return request({
    url: '/maintainDeviceWorkInfo/api/deleteWorkInfoList',
    method: 'post',
    data: data
  })
}
// 设备管理详细->查询设备工作信息详细
function  getDeviceWorkList(data) {
  return request({
    url: '/maintainDeviceWorkInfo/query/getDeviceWorkList',
    method: 'get',
    params: data
  })
}
// 设备管理详细->详细页面设备信息和工作信息编辑
function  updateWorkInfoList(data) {
  return request({
    url: '/maintainDeviceWorkInfo/api/updateWorkInfoList',
    method: 'post',
    data: data
  })
}
// 设备管理新增->根据父设备ID查询计时器信息
function  getDeviceTimerInfoByDeviceId(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceTimerInfoByDeviceId',
    method: 'get',
    params: data
  })
}
// 设备管理新增->根据设备分类ID查询设备分类信息
function  getDeviceTypeById(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceTypeById',
    method: 'get',
    params: data
  })
}
// 设备管理新增->通过公司ID获取船舶列表
function  getVesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  })
}
// 设备管理->查询该设备下工作信息条数
function  getDeviceWorkListCount(data) {
  return request({
    url: '/maintainDeviceWorkInfo/query/getDeviceWorkListCount',
    method: 'get',
    params: data
  })
}
// 设备管理新增->根据ID查询计时器信息
function  getInfoById(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/getInfoById',
    method: 'get',
    params: data
  })
}
// 设备管理新增->生成设备编码
function  getDeviceCode(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceCode',
    method: 'get',
    params: data
  })
}
// 设备管理一览新增详细->根据公司ID获取船上所有职务(设备主管)
function  getRoleDutyByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getVessleRoleByCompId',
    method: 'get',
    params: data
  })
}
export default{
  deviceTree,
  getDeviceInfoList,
  selectSupplyDeviceInfoPage,
  saveDeviceInfoorder,
  deleteWorkInfo,
  save,
  getReferOtherWrokinfo,
  deleteWorkInfoList,
  getDeviceWorkList,
  updateWorkInfoList,
  getDeviceTimerInfoByDeviceId,
  getDeviceTypeById,
  getVesselListByCompId,
  getDeviceWorkListCount,
  getInfoById,
  getDeviceCode,
  getRoleDutyByCompId
}