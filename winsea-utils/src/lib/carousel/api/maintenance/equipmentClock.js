// 基础数据
import request from '../../request'

// 查询计时器信息一览列表
function  getPageByCondition(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询在船职务
function  getOnShipDutyList(data) {
  return request({
    url: '/commonDeptRole/query/getVessleRoleByCompId',
    method: 'get',
    params: data
  })
}

// 设置预警周期
function  setWarn(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/setMaintainDeviceTimerInfoWarn',
    method: 'POST',
    data: data
  })
}

// 获取设备分类
function  getEquipmentSortList(data) {
  return request({
    url: '/maintainDeviceType/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

// 根据设备分类取得设备信息
function  getEquipmentList(data) {
  return request({
    url: '/maintainDeviceInfo/query/getDeviceInfoList',
    method: 'get',
    params: data
  })
}

// 新增后保存计时器信息
function  saveNew(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/saveMaintainDeviceTimerInfo',
    method: 'post',
    data: data
  })
}

// 编辑后保存计时器信息
function  saveEdit(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/updateMaintainDeviceTimerInfo',
    method: 'post',
    data: data
  })
}

// 编辑后保存计时器信息
function  delateClock(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/moveMaintainDeviceTimerInfo',
    method: 'post',
    params: data
  })
}

// 计时器历史信息查询
function  seleteHistroyList(data) {
  return request({
    url: '/maintainDeviceTimerUpdateHis/query/getReportPageByCondition',
    method: 'get',
    params: data
  })
}

// 更新计时器页面查询设备信息
function  getEquipmentInfoById(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/queryDeviceTimerInfoById',
    method: 'get',
    params: data
  })
}

// 更新计时器页面清零
function  cleanTimerInfoZero(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/cleanMaintainDeviceTimerInfoZero',
    method: 'post',
    data: data
  })
}

// 更新计时器页面全部清零
function  cleanTimerInfoZeroAll(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/cleanMaintainDeviceTimerInfoZeroAll',
    method: 'post',
    data: data
  })
}

// 更新计时器页面全部清零
function  saveTimerInfo(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/updateMaintainDeviceTimerInfoList',
    method: 'post',
    data: data
  })
}
// 关联计时器页面查询设备信息
function  queryMaintainDevice(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/queryMaintainDevice',
    method: 'get',
    params: data
  })
}

// 关联计时器保存
function  saveMaintainDevice(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/saveMaintainDevice',
    method: 'post',
    data: data
  })
}

// 关联计时器取消
function  moveMaintainDevice(data) {
  return request({
    url: '/maintainDeviceTimerInfo/api/moveMaintainDevice',
    method: 'post',
    data: data
  })
}
