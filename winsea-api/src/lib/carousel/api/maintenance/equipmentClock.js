// 基础数据
import request from '../../utils/request'

// 查询计时器信息一览列表
export function getPageByCondition(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询在船职务
export function getOnShipDutyList(data) {
  return request({
    url: '/commonDeptRole/query/getVessleRoleByCompId',
    method: 'get',
    params: data
  })
}

// 设置预警周期
export function setWarn(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/setMaintainDeviceTimerInfoWarn',
    method: 'POST',
    data: data
  })
}

// 获取设备分类
export function getEquipmentSortList(data) {
  return request({
    url: '/maintainDeviceType/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 根据设备分类取得设备信息
export function getEquipmentList(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceInfoList',
    method: 'get',
    params: data
  })
}

// 新增后保存计时器信息
export function saveNew(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/saveMaintainDeviceTimerInfo',
    method: 'post',
    data: data
  })
}

// 编辑后保存计时器信息
export function saveEdit(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/updateMaintainDeviceTimerInfo',
    method: 'post',
    data: data
  })
}

// 编辑后保存计时器信息
export function delateClock(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/moveMaintainDeviceTimerInfo',
    method: 'post',
    params: data
  })
}

// 计时器历史信息查询
export function seleteHistroyList(data) {
  return request({
    url: '/maintainDeviceTimerUpdateHis/query/getReportPageByCondition',
    method: 'get',
    params: data
  })
}

// 更新计时器页面查询设备信息
export function getEquipmentInfoById(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/queryDeviceTimerInfoById',
    method: 'get',
    params: data
  })
}

// 更新计时器页面清零
export function cleanTimerInfoZero(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/cleanMaintainDeviceTimerInfoZero',
    method: 'post',
    data: data
  })
}

// 更新计时器页面全部清零
export function cleanTimerInfoZeroAll(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/cleanMaintainDeviceTimerInfoZeroAll',
    method: 'post',
    data: data
  })
}

// 更新计时器页面全部清零
export function saveTimerInfo(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/updateMaintainDeviceTimerInfoList',
    method: 'post',
    data: data
  })
}
// 关联计时器页面查询设备信息
export function queryMaintainDevice(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/queryMaintainDevice',
    method: 'get',
    params: data
  })
}

// 关联计时器保存
export function saveMaintainDevice(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/saveMaintainDevice',
    method: 'post',
    data: data
  })
}

// 关联计时器取消
export function moveMaintainDevice(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/moveMaintainDevice',
    method: 'post',
    data: data
  })
}
