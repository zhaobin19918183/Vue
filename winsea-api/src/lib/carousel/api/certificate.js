import request from '../request'

// 证书一览列表
function getCrtListByCondition(companyId) {
  return request({
    url: '/certificate/query/getCrtListByCondition',
    method: 'get',
    params: companyId
  })
}
// 获取证书概况
function getCrtNumByCompId(companyId) {
  return request({
    url: '/certificate/query/getCrtNumByCompId',
    method: 'get',
    params: companyId
  })
}
// 获取证书详情
function getCrtByPk(id) {
  return request({
    url: '/certificate/query/getCrtByPk',
    method: 'get',
    params: id
  })
}
// 删除证书
function deleteCrt(data) {
  return request({
    url: '/certificate/api/deleteCrt',
    method: 'post',
    data
  })
}

// 查询基础数据
function getListByCondition(data) {
  return request({
    url: '/certificateParameter/query/getListByCondition',
    method: 'get',
    params: data
  })
}
// 查询币种
function parameterTenant(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}

// 查询换证历史
function getCrtChangeHistorys(data) {
  return request({
    url: '/certificate/query/getCrtChangeHistorys',
    method: 'get',
    params: data
  })
}

// 所属船舶
function getUserVesselListByStatus(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: data
  })
}

// 新增证书
function addCrt(data) {
  return request({
    url: '/certificate/api/addCrt',
    method: 'post',
    data
  })
}

// 换证
function changeCrt(data) {
  return request({
    url: '/certificate/api/changeCrt',
    method: 'post',
    data
  })
}

// 更新证书
function updateCrt(data) {
  return request({
    url: '/certificate/api/updateCrt',
    method: 'post',
    data
  })
}
// 保存证书检验信息
function saveCrtSurvey(data) {
  return request({
    url: '/certificateSurvey/api/saveCrtSurvey',
    method: 'post',
    data: data
  })
}
// 根据id查询检验信息
function getSurveyByPk(data) {
  return request({
    url: '/certificateSurvey/query/getSurveyByPk',
    method: 'get',
    params: data
  })
}
// 获取证书检验信息列表
function getCrtSurveyListByCondition(data) {
  return request({
    url: '/certificateSurvey/query/getCrtSurveyListByCondition',
    method: 'get',
    params: data
  })
}
// 删除证书检验信息
function deleteCrtSurvey(data) {
  return request({
    url: '/certificateSurvey/api/deleteCrtSurvey',
    method: 'post',
    data
  })
}
// 新增或修改基础数据
function save1(data) {
  return request({
    url: '/certificateParameter/api/save',
    method: 'post',
    data: data
  })
}
// 删除基础数据
function deleteMsg(data) {
  return request({
    url: '/certificateParameter/api/delete',
    method: 'post',
    data: data
  })
}
// 基础数据排序
function order(data) {
  return request({
    url: '/certificateParameter/api/order',
    method: 'post',
    data: data
  })
}
// 上传附件
function uploadFiles(data) {
  return request({
    url: '/appendix/api/uploadFiles',
    method: 'post',
    data: data
  })
}
// 责任部门基础数据
function deptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  })
}

// 导入文件
function importCertificate(data) {
  return request({
    url: '/certificate/api/importMultipartFile',
    method: 'post',
    data: data
  })
}
// certificate/api/importRepeatCertificate

// 导入文件
function importRepeatCertificate(data) {
  return request({
    url: '/certificate/api/importRepeatCertificate',
    method: 'post',
    data: data
  })
}

export default {
  getCrtListByCondition,
  getCrtNumByCompId,
  getCrtByPk,
  deleteCrt,
  getListByCondition,
  parameterTenant,
  getCrtChangeHistorys,
  getUserVesselListByStatus,
  addCrt,
  changeCrt,
  updateCrt,
  saveCrtSurvey,
  getSurveyByPk,
  getCrtSurveyListByCondition,
  deleteCrtSurvey,
  save1,
  deleteMsg,
  order,
  uploadFiles,
  deptListByCompId,
  importCertificate,
  importRepeatCertificate
}