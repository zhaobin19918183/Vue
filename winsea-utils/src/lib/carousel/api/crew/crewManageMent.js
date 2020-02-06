import request from '../../request'

// 基础数据
function  getItems(params) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params
  })
}
// 公司常量表
function  getListByCrewParmaeter(params) {
  return request({
    url: '/crewParameter/query/getListByCrewParmaeter',
    method: 'get',
    params
  })
}
// 基础数据维护添加-船员职务
function  getQueryList(params) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params
  })
}
// 基础数据维护添加-船员证书等级
function  getQueryListClass(params) {
  return request({
    url: '/certificateGradeParameter/query/getQueryList',
    method: 'get',
    params
  })
}
// 基础数据维护添加-用工形式
function  getQueryListByWork(params) {
  return request({
    url: '/maintenanceEmploymentTypeInfo//query/getQueryList',
    method: 'get',
    params
  })
}
// 基础数据维护添加-外派公司
function  getQueryListCompany(params) {
  return request({
    url: '/outsourcingCompanyInfo/query/getQueryList',
    method: 'get',
    params
  })
}
// 基础数据维国籍
function  getNationtyList(params) {
  return request({
    url: '/crewNationality/query/getList',
    method: 'get',
    params
  })
}
// 查询证书列表
function  getCertificateQueryList(params) {
  return request({
    url: '/certificateParameter/query/getQueryList',
    method: 'get',
    params
  })
}
// 省市区
function  getShengCityList(params) {
  return request({
    url: '/commonCity/query/getList',
    method: 'get',
    params
  })
}

// 新增船员
function  getCrtListByCondition(data) {
  return request({
    url: '/crewSeafarerInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 修改（编辑）船员
function  getCrtListSaveEdit(data) {
  return request({
    url: '/crewSeafarerInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 获取船员列表
function  getPageBySeafarerList(params) {
  return request({
    url: '/crewSeafarerInfo/query/getPageBySeafarer',
    method: 'get',
    params
  })
}
// 删除船员
function  deleteSeafarerList(data) {
  return request({
    url: '/crewSeafarerInfo/api/deleteSeafarer',
    method: 'post',
    data
  })
}
// 获取船员备注新增
function  getListSeafarerRemarksBySeafarerId(params) {
  return request({
    url: '/crewSeafarerRemarkInfo/query/getListSeafarerRemarksBySeafarerId',
    method: 'get',
    params
  })
}
// 船员备注新增
function  remarkSaveAdd(data) {
  return request({
    url: '/crewSeafarerRemarkInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 船员备注编辑
function  remarkSaveEdit(data) {
  return request({
    url: '/crewSeafarerRemarkInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 船员备注删除
function  deleteSeafarerRemark(data) {
  return request({
    url: '/crewSeafarerRemarkInfo/api/deleteSeafarerRemark',
    method: 'post',
    data
  })
}
// 安排面试保存
function  saveInterview(data) {
  return request({
    url: '/crewInterviewInfo/api/save',
    method: 'post',
    data
  })
}
// 加入黑名单
function  saveAddBlickList(data) {
  return request({
    url: '/crewSeafarerBlacklistInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 移除黑名单
function  removeBlackList(data) {
  return request({
    url: '/crewSeafarerBlacklistInfo/api/removeBlackList',
    method: 'post',
    data
  })
}
// 获取船员详细
function  getSeafarerBySeafarerId(params) {
  return request({
    url: '/crewSeafarerInfo/query/getSeafarerBySeafarerId',
    method: 'get',
    params
  })
}
// 查询船员服务资历
function  getPageBySeafarerService(params) {
  return request({
    url: '/crewSeafarerServiceQualificationInfo/query/getPageBySeafarerService',
    method: 'get',
    params
  })
}
// 新增船员服务资历
function  saveAddServiceMsg(data) {
  return request({
    url: '/crewSeafarerServiceQualificationInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 判断新增资历是否符合添加要求
function  getSeafarerServiceIfAdd(params) {
  return request({
    url: '/crewSeafarerServiceQualificationInfo/query/getSeafarerServiceIfAdd',
    method: 'get',
    params
  })
}
// 修改船员服务资历
function  saveEditServiceMsg(data) {
  return request({
    url: '/crewSeafarerServiceQualificationInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 删除船员服务资历
function  deleteSeafarerService(data) {
  return request({
    url: '/crewSeafarerServiceQualificationInfo/api/deleteSeafarerService',
    method: 'post',
    data
  })
}
// 查询船员家庭信息
function  getPageBySeafarerFamily(params) {
  return request({
    url: '/crewSeafarerFamilyInfo/query/getPageBySeafarerFamily',
    method: 'get',
    params
  })
}
// 新增船员家庭信息
function  saveAddSeafarerFamily(data) {
  return request({
    url: '/crewSeafarerFamilyInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 修改船员家庭信息
function  saveEditSeafarerFamily(data) {
  return request({
    url: '/crewSeafarerFamilyInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 删除船员家庭信息
function  deleteSeafarerFamily(data) {
  return request({
    url: '/crewSeafarerFamilyInfo/api/deleteSeafarerFamily',
    method: 'post',
    data
  })
}
// 查询银行账号
function  getPageBySeafarerBank(params) {
  return request({
    url: '/crewSeafarerBankAccountInfo/query/getPageBySeafarerBank',
    method: 'get',
    params
  })
}
// 新增银行账号
function  saveAddBank(data) {
  return request({
    url: '/crewSeafarerBankAccountInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 编辑银行账号
function  saveEditBank(data) {
  return request({
    url: '/crewSeafarerBankAccountInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 删除银行账号
function  deleteSeafarerBank(data) {
  return request({
    url: '/crewSeafarerBankAccountInfo/api/deleteSeafarerBank',
    method: 'post',
    data
  })
}
// 详情证书列表查询
function  getPageByCertificate(params) {
  return request({
    url: '/crewSeafarerCertificateInfo/query/getPageBySefarerId',
    method: 'get',
    params
  })
}
// 详情证书列表新增
function  getPageByCertificatesaveAdd(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/saveAdd',
    method: 'post',
    data
  })
}
// 详情证书列表编辑
function  getPageByCertificateSaveEdit(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 详情证书列表删除
function  deleteSeafarerCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/deleteSeafarerCertificate',
    method: 'post',
    data
  })
}
// 开启预警
function  alertCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/alertCertificate',
    method: 'post',
    data
  })
}
// 关闭预警
function  closeAlertCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/closeAlertCertificate',
    method: 'post',
    data
  })
}
// 查询换证历史
function  getListHistoryBySefarerId(params) {
  return request({
    url: '/crewSeafarerCertificateInfo/query/getListHistoryBySefarerId',
    method: 'get',
    params
  })
}
// 换证
function  replacementCertificate(data) {
  return request({
    url: '/crewSeafarerCertificateInfo/api/replacementCertificate',
    method: 'post',
    data
  })
}
// 查询黑名单
function  getPageBlacklistsBySeafarerBlacklist(params) {
  return request({
    url: '/crewSeafarerBlacklistInfo/query/getPageBlacklistsBySeafarerBlacklist',
    method: 'get',
    params
  })
}
// 删除黑名单
function  deleteBlackList(data) {
  return request({
    url: '/crewSeafarerBlacklistInfo/api/deleteBlackList',
    method: 'post',
    data
  })
}
// 获取船舶列表
function  vesselListByCompId(params) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params
  })
}
// 获取面试信息
function  getPageByCondition(params) {
  return request({
    url: '/crewSeafarerInfo/query/getInterviewBySeafarerId',
    method: 'get',
    params
  })
}
// 确认取消面试
function  cancelInterview(data) {
  return request({
    url: '/crewInterviewInfo/api/cancelInterview',
    method: 'post',
    data
  })
}
// 查询面试信息列表
function  getPageByConditionInterview(params) {
  return request({
    url: '/crewInterviewInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 查询派遣合同信息列表
function  getPageContractBySeafarerContract(params) {
  return request({
    url: '/crewSeafarerContractInfo/query/getPageContractBySeafarerContract',
    method: 'get',
    params
  })
}
// 修改派遣合同
function  SeafarerContractSaveEdit(data) {
  return request({
    url: '/crewSeafarerContractInfo/api/saveEdit',
    method: 'post',
    data
  })
}
// 查询附件列表
function  getPageByAppendixInfo(params) {
  return request({
    url: '/crewSeafarerAppendixInfo/query/getPageByAppendixInfo',
    method: 'get',
    params
  })
}
// 船员附件删除
function  deleteSeafarerAppendix(data) {
  return request({
    url: '/crewSeafarerAppendixInfo/api/deleteSeafarerAppendix',
    method: 'post',
    data
  })
}
// 船员附件新增
function  addSeafarerAppendix(data) {
  return request({
    url: '/crewSeafarerAppendixInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 分页查询在船船员
function  getPageByOnSeafarer(params) {
  return request({
    url: '/crewOnBoardSeafarerInfo/query/getPageByOnSeafarer',
    method: 'get',
    params
  })
}
// 根据用户查询所在公司的船舶
function  getUserVesselList(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: {
      compId: data
    }
  })
}
// 根据各种状态获取船员列表
function  getListBySeafarerCrew(params) {
  return request({
    url: '/crewSeafarerInfo/query/getListBySeafarerCrew',
    method: 'get',
    params
  })
}
// 船员在船晋升
function  promotionOnSeafarer(data) {
  return request({
    url: '/crewOnBoardSeafarerInfo/api/promotion',
    method: 'post',
    data
  })
}
// 船员在船下船
function  disembark(data) {
  return request({
    url: '/crewOnBoardSeafarerInfo/api/disembark',
    method: 'post',
    data
  })
}
// 上岗前培训
function  getListByCondition(params) {
  return request({
    url: '/crewTrainingInfo/query/getPageByTrainingDetail',
    method: 'get',
    params
  })
}
// 培训记录信息
function  getPageBySeafarerId(params) {
  return request({
    url: '/crewTrainingRecordInfo/query/getPageBySeafarerId',
    method: 'get',
    params
  })
}
// 考评
function  getPageByConditionList(params) {
  return request({
    url: '/crewEvaluateInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}
// 导入模版单个
function  importOne(data) {
  return request({
    url: '/importSeafarer/api/importOne',
    method: 'post',
    data
  })
}
// 查询公司模板
function  positionInfo(params) {
  return request({
    url: '/importSeafarer/query/positionInfo',
    method: 'get',
    params
  })
}
// 查询附件
function  getFileList(params) {
  return request({
    url: '/appendix/query/getFileList',
    method: 'get',
    params
  })
}
// 获取航区
function  getNavigationArea(data) {
  return request({
    url: '/crewMainNavigationArea/query/getList',
    method: 'get',
    params: data
  })
}

// 查询系统常量
function  parameterTenant(params) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params
  })
}

// 劳动合同 一览页
function  getLaborContract(params) {
  return request({
    url: '/crewLabourContractInfo/query/getPageByCondition',
    method: 'get',
    params
  })
}

// 劳动合同 解约
function  saveRescission(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveRescission',
    method: 'post',
    data
  })
}

// 劳动合同 新增
function  addLaborContract(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 劳动合同 编辑
function  editLaborContract(data) {
  return request({
    url: '/crewLabourContractInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 劳动合同 详情
function  getLaborContractDetail(params) {
  return request({
    url: '/crewLabourContractInfo/query/getContractById',
    method: 'get',
    params
  })
}

// 查询合同名称
function  getContractTemplate(data) {
  return request({
    url: '/crewContractTemplateInfo/query/getContractName',
    method: 'get',
    params: data
  })
}

// 船员详情 基本信息国际化
function  getAllBasicInfo(data) {
  return request({
    url: '/crewParameter/query/getListByCodes',
    method: 'get',
    params: data
  })
}
// 船员详情 基本信息在字典里查找国际化
function  getAllBasicInfoInDic(data) {
  return request({
    url: '/dictionary/query/getItemsByCodes',
    method: 'get',
    params: data
  })
}
// 查询服务资历编辑的船舶
function  getSeniorityVessel(data) {
  return request({
    url: '/crewSeniorityVessel/query/getSeniorityVessel',
    method: 'get',
    params: data
  })
}
// 根据船舶id 查询船舶信息
function  getVesselInfo(data) {
  return request({
    url: '/crewSeniorityVessel/query/getVesselInfo',
    method: 'get',
    params: data
  })
}
// 添加船舶
function  saveSeniorityVessel(data) {
  return request({
    url: '/crewSeniorityVessel/api/saveSeniorityVessel',
    method: 'post',
    data
  })
}
// 编辑船舶
function  editSeniorityVessel(data) {
  return request({
    url: '/crewSeniorityVessel/api/editSeniorityVessel',
    method: 'post',
    data
  })
}
// 删除船舶
function  removeSeniorityVessel(data) {
  return request({
    url: '/crewSeniorityVessel/api/removeSeniorityVessel',
    method: 'post',
    data
  })
}
// 获取船员状态枚举
function  selectCrewStatus(params) {
  return request({
    url: '/enums/query/getEnumsList',
    method: 'get',
    params
  })
}

export default{
  getItems,
  getListByCrewParmaeter,
  getQueryList,
  getQueryListClass,
  getQueryListByWork,
  getQueryListCompany,
  getNationtyList,
  getCertificateQueryList,
  getShengCityList,
  getCrtListByCondition,
  getCrtListSaveEdit,
  getPageBySeafarerList,
  deleteSeafarerList,
  getListSeafarerRemarksBySeafarerId,
  remarkSaveAdd,
  remarkSaveEdit,
  deleteSeafarerRemark,
  saveInterview,
  saveAddBlickList,
  removeBlackList,
  getSeafarerBySeafarerId,
  getPageBySeafarerService,
  saveAddServiceMsg,
  getSeafarerServiceIfAdd,
  saveEditServiceMsg,
  deleteSeafarerService,
  getPageBySeafarerFamily,
  saveAddSeafarerFamily,
  saveEditSeafarerFamily,
  deleteSeafarerFamily,
  getPageBySeafarerBank,
  saveAddBank,
  saveEditBank,
  deleteSeafarerBank,
  getPageByCertificate,
  getPageByCertificatesaveAdd,
  getPageByCertificateSaveEdit,
  deleteSeafarerCertificate,
  alertCertificate,
  closeAlertCertificate,
  getListHistoryBySefarerId,
  replacementCertificate,
  getPageBlacklistsBySeafarerBlacklist,
  deleteBlackList,
  vesselListByCompId,
  getPageByCondition,
  cancelInterview,
  getPageByConditionInterview,
  getPageContractBySeafarerContract,
  SeafarerContractSaveEdit,
  getPageByAppendixInfo,
  deleteSeafarerAppendix,
  addSeafarerAppendix,
  getPageByOnSeafarer,
  getUserVesselList,
  getListBySeafarerCrew,
  promotionOnSeafarer,
  disembark,
  getListByCondition,
  getPageBySeafarerId,
  getPageByConditionList,
  importOne,
  positionInfo,
  getFileList,
  getNavigationArea,
  parameterTenant,
  getLaborContract,
  saveRescission,
  addLaborContract,
  editLaborContract,
  getLaborContractDetail,
  getContractTemplate,
  getAllBasicInfo,
  getAllBasicInfoInDic,
  getSeniorityVessel,
  getVesselInfo,
  saveSeniorityVessel,
  editSeniorityVessel,
  removeSeniorityVessel,
  selectCrewStatus


}