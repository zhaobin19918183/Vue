// 工单报告
import request from '../../utils/request'

// 报告一览页信息查询
export function getReportPageByCondition(data) {
  return request({
    url: '/maintainWorkOrderReport/query/getReportPageByCondition',
    method: 'get',
    params: data
  })
}

// 查询报告详情信息
export function getDetailInfoById(data) {
  return request({
    url: '/maintainWorkOrderReport/query/getDetailInfoById',
    method: 'get',
    params: data
  })
}

// 新增临时报告
export function saveAddTempOrder(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveAddTempOrder',
    method: 'post',
    data
  })
}

// 执行\编辑\提交工单报告
export function saveExecutionOrder(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveExecutionOrder',
    method: 'post',
    data
  })
}

// 确认工单报告
export function saveConfirm(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveConfirm',
    method: 'post',
    data
  })
}

// 批量确认工单报告
export function saveBatchConfirm(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveBatchConfirm',
    method: 'post',
    data
  })
}

// 提交工单报告
export function saveSubmit(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveSubmit',
    method: 'post',
    data
  })
}

// 批量提交工单报告
export function saveBatchSubmit(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveBatchSubmit',
    method: 'post',
    data
  })
}

// 批复工单报告
export function saveReply(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveReply',
    method: 'post',
    data
  })
}

// 批量批复工单报告
export function saveBatchReply(data) {
  return request({
    url: '/maintainWorkOrderReport/api/saveBatchReply',
    method: 'post',
    data
  })
}

// 退回工单报告
export function workFlowReturn(data) {
  return request({
    url: '/maintainWorkOrderReport/api/workFlowReturn',
    method: 'post',
    data
  })
}

// 删除临时报告
export function deleteTempReport(data) {
  return request({
    url: '/maintainWorkOrderReport/api/deleteTempReport',
    method: 'post',
    data
  })
}


// 延期
export function delayPlanOrder(data) {
  return request({
    url: '/maintainWorkOrderReport/api/delayPlanOrder',
    method: 'post',
    data
  })
}

// 取消
export function cancelPlanOrder(data) {
  return request({
    url: '/maintainWorkOrderReport/api/cancelPlanOrder',
    method: 'post',
    data
  })
}

// 根据设备查询计时器信息
export function getDeviceTimerInfoByDeviceId(data) {
  return request({
    url: '/maintainDeviceTimerInfo/query/getDeviceTimerInfoByDeviceId',
    method: 'get',
    params: data
  })
}


// 出库备件列表
export function selectSparePartByIds(data) {
  return request({
    url: '/supplySparepartOutStoreInfo/api/selectSparePartByIds',
    method: 'get',
    params: data
  })
}

// 出库备件删除
export function deleteSparePartById(data) {
  return request({
    url: '/supplySparepartOutStoreInfo/api/deleteSparePartById',
    method: 'get',
    params: data
  })
}

// 出库物料列表
export function selectMaterielByIds(data) {
  return request({
    url: '/supplyMaterielOutStoreInfo/api/selectMaterielByIds',
    method: 'get',
    params: data
  })
}

// 出库物料删除
export function deleteMaterielById(data) {
  return request({
    url: '/supplyMaterielOutStoreInfo/api/deleteMaterielById',
    method: 'get',
    params: data
  })
}

// 备件提交
export function submitSpBillDl(data) {
  return request({
    url: '/supplySparepartOutStoreInfo/api/submitBillDl',
    method: 'post',
    data
  })
}

// 物料提交
export function submitMaBillDl(data) {
  return request({
    url: '/supplyMaterielOutStoreInfo/api/submitBillDl',
    method: 'post',
    data
  })
}

// 备件确认审批
export function verifySpBillDl(data) {
  return request({
    url: '/supplySparepartOutStoreInfo/api/verifyBillDl',
    method: 'post',
    data
  })
}

// 物料确认审批
export function verifyMaBillDl(data) {
  return request({
    url: '/supplyMaterielOutStoreInfo/api/verifyBillDl',
    method: 'post',
    data
  })
}

// 备件废弃
export function cancelSpBillDl(data) {
  return request({
    url: '/supplySparepartOutStoreInfo/api/cancelBillDl',
    method: 'post',
    data
  })
}

// 物料废弃
export function cancelMaBillDl(data) {
  return request({
    url: '/supplyMaterielOutStoreInfo/api/cancelBillDl',
    method: 'post',
    data
  })
}
