import request from '../request'


// 查询附件
function getFileList(data) {
  return request({
    url: '/appendix/query/getFileList',
    method: 'get',
    params: data
  })
}

// 保存附件
function saveFiles(data) {
  return request({
    url: '/appendix/api/saveFiles',
    method: 'post',
    data
  })
}

// 关联附件
function relateFiles(data) {
  return request({
    url: '/appendix/api/relateFiles',
    method: 'post',
    data
  })
}

// 删除附件
function deleteFiles(data) {
  return request({
    url: '/appendix/api/deleteFiles',
    method: 'post',
    data
  })
}

// 上传附件
function uploadFiles(data) {
  return request({
    url: '/appendix/api/uploadFiles',
    method: 'post',
    data
  })
}

// 下载附件
function downLoadFiles(data) {
  return request({
    url: '/certificate/api/downloadOssFile',
    method: 'post',
    responseType: 'blob',
    withCredentials: true,
    data
  })
}

// 查询附件地址
function searchPlace(data) {
  return request({
    url: '/certificate/api/searchPlace',
    method: 'get',
    params: data
  })
}

// 获取系统web路径
function getRootUrl(data) {
  return request({
    url: '/system/query/getRootUrl',
    method: 'get',
    params: data
  })
}



// 获取OSS临时上传凭证
function interimCredentials(data) {
  return request({
    url: '/file/query/interimCredentials',
    method: 'get',
    params: data
  })
}

// 获取OSS访问配置
function accessConfig(data) {
  return request({
    url: '/file/query/accessConfig',
    method: 'get',
    params: data
  })
}
// 获得oss的token,id.Secret
function getOssInterimCredentials() {
  return request({
    url: '/file/query/interimCredentials',
    method: 'get'
  })
}

// 获得oss 的bucket 和 endpoint
function GotOssAccessConfig() {
  return request({
    url: '/file/query/accessConfig',
    method: 'get'
  })
}

// 船端上传附件
//   192.168.1.22:8090/shipAppendix/api/uploadFiles 
// // 公司ID,分为"公司""通用"两种,如果是公司上传,ID不为空,否则为空 companyId 
// // 详细ID,可为空 detailId 
// // 业务对象名,不可为空 businessObjectName 
// // 文件分类名,不可为空 fileCategoryName 
// // 取得当前登录人ID,不可为空 staffId
// // 文件 fileName
function uploadShipFiles(file, data) {
  const params = new FormData();
  params.append('fileName', file);
  params.append('companyId', data.companyId);
  params.append('modelId', data.modelId);
  // params.append('detailId', data.detailId ? data.detailId : '');
  // params.append('businessObjectName', data.businessObjectName);
  // params.append('fileCategoryName', data.fileCategoryName);
  // params.append('staffId', data.staffId);

  return request.post('/appendix/api/uploadFiles', params, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export default {
  getFileList,
  saveFiles,
  relateFiles,
  deleteFiles,
  uploadFiles,
  downLoadFiles,
  searchPlace,
  getRootUrl,
  interimCredentials,
  accessConfig,
  getOssInterimCredentials,
  GotOssAccessConfig,
  uploadShipFiles
}
