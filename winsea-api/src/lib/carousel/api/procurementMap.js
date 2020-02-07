// 采购模块-海图申请请求处理
// 2019年5月27日 19:49:15 by zw
import request from "../request";

// 获取数据
function fetchList(query, activeName) {
  let url = "";
  if (activeName == "SQ") {
    url = "/purMapApplInfo/query/selectPage";
  } else if (activeName == "XJ") {
    url = "/purMapEnquiryInfo/query/selectPage";
  } else if (activeName == "BJD") {
    url = "/purMapQuotesInfo/query/selectPage";
  } else if (activeName == "BJ") {
    url = "/purMapParityInfo/query/selectPage";
  } else if (activeName == "CG") {
    url = "/purMapPurchasInfo/query/selectPage";
  } else if (activeName == "JS") {
    url = "/purMapBillInfo/query/selectPage";
  } else if (activeName == "BJTJ") {
    url = "";
  }
  return request({
    url: url,
    method: "get",
    params: query
  });
}

// 采购历史
function selectHistoryMap(data) {
  return request({
    url: "/purMapPurchasDetail/query/selectHistoryPage",
    method: "get",
    params: data
  });
}

// 申请列表导入
function importApplFileUrl(data) {
  return request({
    url: "purImport/add/map/appl",
    method: "post",
    data: data
  });
}

// 覆盖导入
function fileUpLoadUrl(data, module, type) {
  return request({
    url: `purImport/modity/${module}/${type}`,
    method: "post",
    data: data
  });
}

// 获得下载文件信息
// module是 备件:sp;物料:mat;海图:map
function exportFile(module, type, id, vendorId) {
  return request({
    url: `/purExport/data/${module}/${type}?id=${id}&vendorId=${vendorId}`,
    method: "get"
  });
}

// 获得下载文件URl
function exportFileUrl(module, type, id, fileName, vendorId) {
  return `${process.env.VUE_APP_BASE_API}/purExport/${module}/${type}?id=${id}&fileName=${fileName}&vendorId=${vendorId}`;
}

// 跳转宣传网站
// function  uccnUrl() {
//   return `${
//     process.env.VUE_APP_BASE_API
//     }`
// }

// #region 备件申请

// 根据ID获取申请单明细信息
function getApplTempById(data) {
  return request({
    url: "purMapApplInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 修改备件申请
function updateApplTemp(data) {
  return request({
    url: "purMapApplInfo/api/updatePur",
    method: "post",
    data
  });
}

// 删除备件申请
function delApplTemp(data) {
  return request({
    url: "purMapApplDetail/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID修改备件申请状态
function updateApplStatusbyId(data) {
  return request({
    url: "purMapApplInfo/api/updatePurStatus",
    method: "post",
    data
  });
}

// 根据ID审核备件申请
function approveApplbyId(data) {
  return request({
    url: "purMapApplInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 拆分单据
function splitApplBills(data) {
  return request({
    url: "purMapApplInfo/api/splitPurMapAppl",
    method: "post",
    data
  });
}

// 提交至工作流
function submitToWorkFlowAppl(data) {
  return request({
    url: "purMapApplInfo/api/submitToWorkflow",
    method: "post",
    data
  });
}

// 采购询价、直接询价单
function submitToEnquiry(data) {
  return request({
    url: "purMapApplInfo/api/submitToEnquiry",
    method: "post",
    data
  });
}

// 直接供船-生成供船单 
function createInStore(data) {
  return request({
    url: "/navigationShipSupplyInfo/api/saveAdd",
    method: "post",
    data
  });
}

// 直接采购-生成采购单
function submitToPurchas(data) {
  return request({
    url: "purMapApplInfo/api/submitToPurchas",
    method: "post",
    data
  });
}

// #endregion

// #region 备件询价

// 根据ID获取申请单明细信息
function getEnquiryTempById(data) {
  return request({
    url: "purMapEnquiryInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 根据ID获取备注历史数据
function getRemark(data) {
  return request({
    url: "purMapApplInfo/query/getRemark",
    method: "get",
    params: data
  });
}

// 修改备件询价
function updateEnquiryTemp(data) {
  return request({
    url: "purMapEnquiryInfo/api/updateEnquiry",
    method: "post",
    data
  });
}

// 删除备件询价
function delEnquiryTemp(data) {
  return request({
    url: "purMapEnquiryInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID审核备件询价
function approveEnquirybyId(data) {
  return request({
    url: "purMapEnquiryInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 拆分单据
function splitEnquiryBills(data) {
  return request({
    url: "purMapEnquiryInfo/api/splitEnquiry",
    method: "post",
    data
  });
}

// 删除供货商信息(针对备件询价单供货商表)
function delEnquiryVendor(data) {
  return request({
    url: "purMapEnquiryVendor/api/deleteEnquiryVendor",
    method: "post",
    data
  });
}

// 根据询价单ID获取供货商信息
function getEnquiryVendorByEnquiryId(data) {
  return request({
    url: "/purMapEnquiryInfo/query/selectVendorByEnquiry",
    method: "get",
    params: data
  });
}

// 根据ID修改备件询价状态
function updateEnquiryStatusbyId(data) {
  return request({
    url: "purMapEnquiryInfo/api/updateEnquiryStatus",
    method: "post",
    data
  });
}

// 根据询价单ID创建报价单和比价单
function PurSpEnquiryVendor(data) {
  return request({
    url: "purMapEnquiryInfo/api/createQuotesAndParity",
    method: "post",
    data
  });
}

// 给供货商发送询价单邮件
function sendEnquiryMail(data) {
  return request({
    url: "purMapEnquiryInfo/api/sendMail",
    method: "post",
    data
  });
}

// #endregion

// #region 备件报价

// 根据ID获取报价单明细信息
function getQuotesTempById(data) {
  return request({
    url: "purMapQuotesInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 新增备件报价
function addQuotesTemp(data) {
  return request({
    url: "purMapQuotesInfo/api/addQuotes",
    method: "post",
    data
  });
}

// 修改备件报价
function updateQuotesTemp(data) {
  return request({
    url: "purMapQuotesInfo/api/updateQuotes",
    method: "post",
    data
  });
}

// 删除备件报价
function delQuotesTemp(data) {
  return request({
    url: "purMapQuotesInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID审核备件报价
function approveQuotesbyId(data) {
  return request({
    url: "purMapQuotesInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 拆分单据
function splitQuotesBills(data) {
  return request({
    url: "purMapQuotesInfo/api/splitPurSpAppl",
    method: "post",
    data
  });
}

// 根据ID修改备件报价状态
function updateQuotesStatusbyId(data) {
  return request({
    url: "purMapQuotesInfo/api/updateQuotesStatus",
    method: "post",
    data
  });
}

// 废弃备件报价单
function obsoleteQuotes(data) {
  return request({
    url: "purMapQuotesInfo/api/obsoleteQuotes",
    method: "post",
    data
  });
}

// #endregion

// #region 备件比价

// 根据ID获取比价单明细信息
function getParityTempById(data) {
  return request({
    url: "purMapParityInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 新增备件比价
function addParityTemp(data) {
  return request({
    url: "purMapParityInfo/api/addParity",
    method: "post",
    data
  });
}

// 修改备件比价
function updateParityTemp(data) {
  return request({
    url: "purMapParityInfo/api/updateParityInfo",
    method: "post",
    data
  });
}

// 删除备件比价
function delParityTemp(data) {
  return request({
    url: "purMapParityInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID审核备件比价
function approveParitybyId(data) {
  return request({
    url: "purMapParityInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 根据ID修改备件比价状态
function updateParityStatusbyId(data) {
  return request({
    url: "purMapParityInfo/api/updateParityStatus",
    method: "post",
    data
  });
}

// 再次做成询价单
function againToEnquiry(data) {
  return request({
    url: "/purMapParityInfo/api/againToEnquiry",
    method: "post",
    data
  });
}

// 提交至工作流
function submitToWorkflowParity(data) {
  return request({
    url: "purMapParityInfo/api/submitToWorkflow",
    method: "post",
    data
  });
}

// #endregion

// #region 备件采购

// 根据ID获取采购单明细信息
function getPurchasTempById(data) {
  return request({
    url: "purMapPurchasInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 新增备件采购
function addPurchasTemp(data) {
  return request({
    url: "purMapPurchasInfo/api/addPurchas",
    method: "post",
    data
  });
}

// 修改备件采购
function updatePurchasTemp(data) {
  return request({
    url: "purMapPurchasInfo/api/updatePurchasInfo",
    method: "post",
    data
  });
}

// 删除备件采购
function delPurchasTemp(data) {
  return request({
    url: "purMapPurchasInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID审核备件采购
function approvePurchasbyId(data) {
  return request({
    url: "purMapPurchasInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 根据ID修改备件采购状态
function updatePurchasStatusbyId(data) {
  return request({
    url: "purMapPurchasInfo/api/updatePurchasStatus",
    method: "post",
    data
  });
}

// 提交至工作流
function submitToWorkflowPurchas(data) {
  return request({
    url: "purMapPurchasInfo/api/submitToWorkflow",
    method: "post",
    data
  });
}

// 给供货商发送采购单邮件
function sendPurchasMail(data) {
  return request({
    url: "purMapPurchasInfo/api/sendMail",
    method: "post",
    data
  });
}

// 根据采购单ID获取供货商信息
function getPurchasVendorByPurchasId(data) {
  return request({
    url: "/purMapPurchasInfo/query/selectVendorByPurchas",
    method: "get",
    params: data
  });
}

// #endregion

// #region 备件结算

// 根据ID获取结算单明细信息
function getBillTempById(data) {
  return request({
    url: "/purMapBillInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 根据ID获取结算单明细信息
function getMapBillTempById(data) {
  return request({
    url: "/purMapBillInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 修改备件结算
function updateBillTemp(data) {
  return request({
    url: "purMapBillInfo/api/updateBill",
    method: "post",
    data
  });
}

// 删除备件结算
function delBillTemp(data) {
  return request({
    url: "purMapBillInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID审核备件结算
function approveBillbyId(data) {
  return request({
    url: "purMapBillInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 根据ID修改备件结算状态
function updateBillStatusbyId(data) {
  return request({
    url: "purMapBillInfo/api/updateBillStatus",
    method: "post",
    data
  });
}

// 提交至工作流
function submitToWorkflowBill(data) {
  return request({
    url: "purMapBillInfo/api/submitToWorkflow",
    method: "post",
    data
  });
}

// 生成付款申请
function generatePayment(data) {
  return request({
    url: "/purMapBillInfo/api/createPayAppl",
    method: "post",
    data
  });
}

// #endregion

// #region 供应商接口

// 获取供货商信息
function GetEnquiryVendorList(data) {
  return request({
    url: "supVendorInfo/query/selectList",
    method: "get",
    params: data
  });
}

function GetEnquiryVendorPage(data) {
  return request({
    url: "supVendorInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 新增供货商信息
function AddEnquiryVendor(data) {
  return request({
    url: "supVendorInfo/add/vendor",
    method: "post",
    data
  });
}

// #endregion

// #region 获取公共接口

// 根据公司ID获公司详细信息
function getCompanyInfoById(data) {
  return request({
    url: "/company/query/companyInfo",
    method: "get",
    params: data
  });
}

// 根据公司ID获取船舶数据
function getAppShips(data) {
  return request({
    url: "/staff/query/vesselListByCompId",
    method: "get",
    params: data
  });
}

// 根据ID,常量类别获常量数据
function getTypeList(data) {
  return request({
    url: "/parameterCompany/query/parameterTenant",
    method: "get",
    params: data
  });
}

// 根据ID获取所属科目类别
function getApplySubject(data) {
  return request({
    url: "/financeCostSubject/query/getListByCondition",
    method: "get",
    params: data
  });
}

// 获得oss的token,id.Secret
function getOssInterimCredentials() {
  return request({
    url: "/file/query/interimCredentials",
    method: "get"
  });
}

// 获得oss 的bucket 和 endpoint
function GotOssAccessConfig() {
  return request({
    url: "/file/query/accessConfig",
    method: "get"
  });
}

// 查询邮件配置
function getEmailConfig(data) {
  return request({
    url: "/emailConfig/query/emailConfig",
    method: "get",
    params: data
  });
}

// 修改更新邮件配置
function updateEmailConfig(data) {
  return request({
    url: "/emailConfig/api/update",
    method: "post",
    params: data
  });
}

// #endregion

// #region 审核工作流

// 处理任务任务审批
function taskHandle(data) {
  return request({
    url: "/workflow/api/handle",
    method: "get",
    params: data
  });
}

// 获取任务审批历史
function taskHistories(data) {
  return request({
    url: "/workflowHistory/query/taskHistories",
    method: "get",
    params: data
  });
}
export default {
  fetchList,
  selectHistoryMap,
  importApplFileUrl,
  fileUpLoadUrl,
  exportFile,
  exportFileUrl,
  getApplTempById,
  updateApplTemp,
  delApplTemp,
  updateApplStatusbyId,
  approveApplbyId,
  splitApplBills,
  submitToWorkFlowAppl,
  submitToEnquiry,
  createInStore,
  submitToPurchas,
  getEnquiryTempById,
  getRemark,
  updateEnquiryTemp,
  delEnquiryTemp,
  approveEnquirybyId,
  splitEnquiryBills,
  delEnquiryVendor,
  getEnquiryVendorByEnquiryId,
  updateEnquiryStatusbyId,
  PurSpEnquiryVendor,
  sendEnquiryMail,
  getQuotesTempById,
  addQuotesTemp,
  updateQuotesTemp,
  delQuotesTemp,
  approveQuotesbyId,
  splitQuotesBills,
  updateQuotesStatusbyId,
  obsoleteQuotes,
  getParityTempById,
  addParityTemp,
  updateParityTemp,
  delParityTemp,
  approveParitybyId,
  updateParityStatusbyId,
  againToEnquiry,
  submitToWorkflowParity,
  getPurchasTempById,
  addPurchasTemp,
  updatePurchasT,
  delPurchasTemp,
  approvePurchasbyId,
  updatePurchasStatusbyId,
  submitToWorkflowPurchas,
  sendPurchasMail,
  getPurchasVendorByPurchasId,
  getBillTempById,
  getMapBillTempById,
  updateBillTemp,
  delBillTemp,
  approveBillbyId,
  updateBillStatusbyId,
  submitToWorkflowBill,
  generatePayment,
  GetEnquiryVendorList,
  GetEnquiryVendorPage,
  AddEnquiryVendor,
  getCompanyInfoById,
  getAppShips,
  getTypeList,
  getApplySubject,
  getOssInterimCredentials,
  GotOssAccessConfig,
  getEmailConfig,
  updateEmailConfig,
  taskHandle,
  taskHistories,
  updatePurchasTemp
}
// #endregion
