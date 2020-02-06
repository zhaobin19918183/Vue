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

// 获取计时器更新历史一览信息
function  getReportPageByCondition(data) {
  return request({
    url: '/maintainDeviceTimerUpdateHis/query/getReportPageByCondition',
    method: 'get',
    params: data
  })
}
