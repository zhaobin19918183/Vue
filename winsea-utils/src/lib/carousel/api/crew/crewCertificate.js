import request from '../../request'

// 分页查询船员证书列表
function  getPageBySefarerCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/query/getPageBySefarerCertificate',
    method: 'get',
    params: data
  })
}
// 获取枚举列表
function  getEnumsList(data) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params: data
  })
}
// 外派公司 列表查询
function  getCompanyQueryList(compId) {
  return request({
    url: '/outsourcingCompanyInfo/query/getCompanyQueryList',
    method: 'get',
    params: compId
  })
}

// 船员证书设定 列表查询
function  getQueryList(compId) {
  return request({
    url: '/certificateParameter/query/getQueryList',
    method: 'get',
    params: compId
  })
}

// 开启证书预警
function  openAlertCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/alertCertificate',
    method: 'post',
    data
  })
}

// 关闭证书预警功能
function  closeAlertCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/closeAlertCertificate',
    method: 'post',
    data
  })
}

// 证书换证
function  replacementCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/replacementCertificate',
    method: 'post',
    data
  })
}

// 一览显示换证预警和换证超期任务数
function  getEarlyOrOverdueTasks(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/getEarlyOrOverdueTasks',
    method: 'get',
    params: data
  })
}

// 设置证书预警功能
function  saveEdit(data) {
  return request({
    url: '/crewAlertDisplayInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 设置证书预警初始化
function  getAlertDisplay(data) {
  return request({
    url: '/crewAlertDisplayInfo/query/getAlertDisplay',
    method: 'get',
    params: data
  })
}
// 更改证书备注
function  editUpdateRemark(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/updateRemark',
    method: 'post',
    data
  })
}
// 根据用户查询所在公司的船舶
function  getUserVesselList(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: { compId: data }
  })
}
export default{
  getPageBySefarerCertificate,
  getEnumsList,
  getCompanyQueryList,
  getQueryList,
  openAlertCertificate,
  closeAlertCertificate,
  replacementCertificate,
  getEarlyOrOverdueTasks,
  saveEdit,
  getAlertDisplay,
  editUpdateRemark,
  getUserVesselList

}