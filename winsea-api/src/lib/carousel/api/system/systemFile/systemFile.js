import request from '../../../utils/request'

/* ----------文件管理-----------*/
// 分页查询模板文件列表
export function getFileTemplateInfoByPage(data) {
  return request({
    url: '/txFileTemplateInfo/query/getFileTemplateInfoByPage',
    method: 'get',
    params: data
  })
}

// 批量删除
export function deleteFileTemplateInfo(data) {
  return request({
    url: '/txFileTemplateInfo/api/deleteFileTemplateInfo',
    method: 'post',
    data
  })
}

// 批量上传
export function uploadFiles(data) {
  return request({
    url: '/txFileTemplateInfo/api/uploadFiles',
    method: 'post',
    data
  })
}

// 发送船长
export function sendShip(data) {
  return request({
    url: '/txFileTemplateInfo/api/sendShip',
    method: 'post',
    data
  })
}

// 设置
export function saveFileTemplateInfoSetting(data) {
  return request({
    url: '/txFileTemplateInfo/api/saveFileTemplateInfoSetting',
    method: 'post',
    data
  })
}

// 上传文件
export function uploadFile(data) {
  return request({
    url: '/txFileTemplateInfo/api/saveFileTemplateInfoUploadFiles',
    // url: '/txFileTemplateInfo/api/uploadFile',
    method: 'post',
    data
  })
}

// 根据公司ID获取船舶数据
export function getAppShips(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: data
  });
}

// 获取岸基的部门数据
export function getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params:  data
  })
}

// 获取船端发起人数据
export function getRoleDutyByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getRoleDutyByCompId',
    method: 'get',
    params: {
      compId: data
    }
  })
}

// 通过部门ID获取岸基发起人数据
export function deptRoleList(params) {
  return request({
    url: '/role/query/deptRoleList',
    method: 'get',
    params: params
  });
}

// 获取审核流职务列表
export function getCompRole(data) {
  return request({
    url: '/role/query/roleList',
    method: 'get',
    params: {
      compId: data
    }
  });
}

// 查询文件夹一览信息
export function getSystemFolderList(data) {
  return request({
    url: '/txFileTypeInfo/query/getFileTypeInfoTree',
    method: 'get',
    params: data
  })
}
/* ----------体系操作-----------*/
// 跟踪列表
export function getFileOperationInfoTrackByPage(data) {
  return request({
    url: '/txFileOperationInfo/query/getFileOperationInfoTrackByPage',
    method: 'get',
    params: data
  })
}

// 我的报表
export function getMyReportByPage(data) {
  return request({
    url: '/txFileOperationInfo/query/getMyReportByPage',
    method: 'get',
    params: data
  })
}

// 全部
export function getAllFileOperationInfoByPage(data) {
  return request({
    url: '/txFileOperationInfo/query/getAllFileOperationInfoByPage',
    method: 'get',
    params: data
  })
}

// 待处理
export function getFileOperationInfoWaitDealWithByPage(data) {
  return request({
    url: '/txFileOperationInfo/query/getFileOperationInfoWaitDealWithByPage',
    method: 'get',
    params: data
  })
}

// 获取船舶id
export function selectShipId(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}

// 填写报告-我的报表
export function fillReport(data) {
  return request({
    url: '/txFileOperationInfo/api/fillReport',
    method: 'post',
    data
  })
}

// 填写报告-待处理
export function waitFillReport(data) {
  return request({
    url: '/txFileOperationInfo/api/waitFillReport',
    method: 'post',
    data
  })
}

// 废弃
export function discard(data) {
  return request({
    url: '/txFileOperationInfo/api/discard',
    method: 'post',
    data
  })
}

// 存档
export function archive(data) {
  return request({
    url: 'txFileOperationInfo/api/archive',
    method: 'post',
    data
  })
}

// 提交审核- 文件管理
export function submitReview(data) {
  return request({
    url: '/txFileTemplateInfo/api/submitReview',
    method: 'post',
    data
  })
}

// 审核通过
export function reviewPass(data) {
  return request({
    url: '/txFileOperationInfo/api/reviewPass',
    method: 'post',
    data
  })
}

// 审核不通过
export function reviewNotPass(data) {
  return request({
    url: '/txFileOperationInfo/api/reviewNotPass',
    method: 'post',
    data
  })
}

// 接收
export function receive(data) {
  return request({
    url: '/txFileOperationInfo/api/receive',
    method: 'post',
    data
  })
}

// 发送
export function operationSendShip(data) {
  return request({
    url: '/txFileOperationInfo/api/sendShip',
    method: 'post',
    data
  })
}

// 获取保存文档id
export function getTempFileId(data) {
  return request({
    url: '/office/getTempFileId',
    method: 'get',
    params: data
  })
}

// 文件重命名
export function renameFileTemplateInfo(data) {
  return request({
    url: '/txFileTemplateInfo/api/renameFileTemplateInfo',
    method: 'post',
    data
  })
}

// 上传附件
export function uploadAttachFile(data) {
  return request({
    url: 'txFileOperationInfo/api/uploadFile',
    method: 'post',
    data
  })
}
// 提交审核- 待处理
export function toSubmitReview(data) {
  return request({
    url: 'txFileOperationInfo/api/submitReview',
    method: 'post',
    data
  })
}
// 状态列表
export function getFileOperationStatusList(data) {
  return request({
    url: '/txFileOperationInfo/query/getFileOperationStatusList',
    method: 'get',
    params: data
  })
}
// 批量下载
export function batchAttachment(data) {
  return request({
    url: '/appendix/download/batchAttachment',
    method: 'get',
    params: data
  })
}
