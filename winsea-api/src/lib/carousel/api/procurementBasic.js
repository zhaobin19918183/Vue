//  采购模块-其他

import request from "@/utils/request";

// 获取合同数据
export function purContractList(data) {
  return request({
    url: "/purContractTemplateInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 新增合同数据
export function createContract(data) {
  return request({
    url: "/purContractTemplateInfo/api/saveContract",
    method: "post",
    data
  });
}

// 修改合同数据
export function updateContract(data) {
  return request({
    url: "/purContractTemplateInfo/api/updateContract",
    method: "post",
    data
  });
}

// 删除合同某一条数据
export function deleteContract(data) {
  return request({
    url: "purContractTemplateInfo/api/deleteContract",
    method: "post",
    data
  });
}

// 根据合同ID获取合同明细信息
export function getContractDetail(data) {
  return request({
    url: "purContractTemplateInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 获取供应商数据
export function purVendorList(data) {
  return request({
    url: "/supVendorInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 根据供应商ID获取供应商明细信息
export function getVendorDetail(data) {
  return request({
    url: "/supVendorInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 新增合同数据
export function createVendor(data) {
  return request({
    url: "/supVendorInfo/api/save",
    method: "post",
    data
  });
}

// 修改合同数据
export function updateVendor(data) {
  return request({
    url: "/supVendorInfo/api/update",
    method: "post",
    data
  });
}

// 删除合同某一条数据
export function deleteVendor(data) {
  return request({
    url: "/supVendorInfo/api/delete",
    method: "post",
    data
  });
}

// 查询基础数据
export function getListByCondition(data) {
  return request({
    url: "/purParameter/query/getListByCondition",
    method: "get",
    params: data
  });
}

// 新增或修改基础数据
export function save1(data) {
  return request({
    url: "/purParameter/api/save",
    method: "post",
    data: data
  });
}
// 删除基础数据
export function deleteMsg(data) {
  return request({
    url: "/purParameter/api/delete",
    method: "post",
    data: data
  });
}
// 基础数据排序
export function order(data) {
  return request({
    url: "/purParameter/api/order",
    method: "post",
    data: data
  });
}

// 判断是否有财务模块
export function hasFinance() {
  return request({
    url: "/purchaseParameterStatus/query/hasFinance",
    method: "get"
  });
}

// 判断是否有二级模块服务
export function findTenantDredgeService(params) {
  return request({
    url: "/pluginService/query/findTenantDredgeService",
    method: "get",
    params
  });
}

// 判断是否有供应模块
export function hasSupply() {
  return request({
    url: "/purchaseParameterStatus/query/hasSupply",
    method: "get"
  });
}

// 获取租户信息
export function getTenant() {
  return request({
    url: "/purchaseParameterStatus/query/getTenant",
    method: "get"
  });
}

// 判断船舶是否有船端
export function isClientFlag(data) {
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
export function getExchangeRate(data) {
  return request({
    url: "/financeExchangeRate/query/getExchangeRate",
    method: "get",
    params: data
  });
}

//预算查询
export function getBudgetMoney(data) {
  return request({
    url: "/financeBusiness/query/getBudgetMoney",
    method: "get",
    params: data
  });
}
//根据船舶ID查备用金
export function getImprestByVesselId(data) {
  return request({
    url: "/financeBusiness/query/getImprestByVesselId",
    method: "get",
    params: data
  });
}

export function getVesselOne(data) {
  return request({
    url: "/systemVessel/query/getVesselOne",
    method: "get",
    params: data
  });
}
