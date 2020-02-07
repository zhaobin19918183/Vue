//  采购模块-其他

import request from "../request";

// 获取合同数据
function purContractList(data) {
  return request({
    url: "/purContractTemplateInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 新增合同数据
function createContract(data) {
  return request({
    url: "/purContractTemplateInfo/api/saveContract",
    method: "post",
    data
  });
}

// 修改合同数据
function updateContract(data) {
  return request({
    url: "/purContractTemplateInfo/api/updateContract",
    method: "post",
    data
  });
}

// 删除合同某一条数据
function deleteContract(data) {
  return request({
    url: "purContractTemplateInfo/api/deleteContract",
    method: "post",
    data
  });
}

// 根据合同ID获取合同明细信息
function getContractDetail(data) {
  return request({
    url: "purContractTemplateInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 获取供应商数据
function purVendorList(data) {
  return request({
    url: "/supVendorInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 根据供应商ID获取供应商明细信息
function getVendorDetail(data) {
  return request({
    url: "/supVendorInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 新增合同数据
function createVendor(data) {
  return request({
    url: "/supVendorInfo/api/save",
    method: "post",
    data
  });
}

// 修改合同数据
function updateVendor(data) {
  return request({
    url: "/supVendorInfo/api/update",
    method: "post",
    data
  });
}

// 删除合同某一条数据
function deleteVendor(data) {
  return request({
    url: "/supVendorInfo/api/delete",
    method: "post",
    data
  });
}

// 查询基础数据
function getListByCondition(data) {
  return request({
    url: "/purParameter/query/getListByCondition",
    method: "get",
    params: data
  });
}

// 新增或修改基础数据
function save1(data) {
  return request({
    url: "/purParameter/api/save",
    method: "post",
    data: data
  });
}
// 删除基础数据
function deleteMsg(data) {
  return request({
    url: "/purParameter/api/delete",
    method: "post",
    data: data
  });
}
// 基础数据排序
function order(data) {
  return request({
    url: "/purParameter/api/order",
    method: "post",
    data: data
  });
}

// 判断是否有财务模块
function hasFinance() {
  return request({
    url: "/purchaseParameterStatus/query/hasFinance",
    method: "get"
  });
}

// 判断是否有二级模块服务
function findTenantDredgeService(params) {
  return request({
    url: "/pluginService/query/findTenantDredgeService",
    method: "get",
    params
  });
}

// 判断是否有供应模块
function hasSupply() {
  return request({
    url: "/purchaseParameterStatus/query/hasSupply",
    method: "get"
  });
}

// 获取租户信息
function getTenant() {
  return request({
    url: "/purchaseParameterStatus/query/getTenant",
    method: "get"
  });
}

// 判断船舶是否有船端
function isClientFlag(data) {
  return request({
    url: "/purchaseParameterStatus/query/isClientFlag",
    method: "get",
    params: data
  });
}

/*
查询汇率信息
参数 :
  currencyKey :币种标识
  rateYearMonth :年份
*/
function getExchangeRate(data) {
  return request({
    url: "/financeExchangeRate/query/getExchangeRate",
    method: "get",
    params: data
  });
}

//预算查询
function getBudgetMoney(data) {
  return request({
    url: "/financeBusiness/query/getBudgetMoney",
    method: "get",
    params: data
  });
}
//根据船舶ID查备用金
function getImprestByVesselId(data) {
  return request({
    url: "/financeBusiness/query/getImprestByVesselId",
    method: "get",
    params: data
  });
}

function getVesselOne(data) {
  return request({
    url: "/systemVessel/query/getVesselOne",
    method: "get",
    params: data
  });
}
export default {
  purContractList,
  createContract,
  updateContract,
  deleteContract,
  getContractDetail,
  purVendorList,
  getVendorDetail,
  createVendor,
  updateVendor,
  deleteVendor,
  getListByCondition,
  save1,
  deleteMsg,
  order,
  hasFinance,
  findTenantDredgeService,
  hasSupply,
  getTenant,
  isClientFlag,
  getExchangeRate,
  getBudgetMoney,
  getImprestByVesselId,
  getVesselOne
}