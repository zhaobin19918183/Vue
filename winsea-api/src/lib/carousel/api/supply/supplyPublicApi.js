// 供应模块公共Api接口

import request from "../../utils/request";

// 根据公司ID获取船舶数据
export function getAppShips(data) {
  return request({
    // url: "/staff/query/vesselListByCompId",
    url: "/vessel/query/getUserVesselListByStatus",
    method: "get",
    params: data
  });
}

// 获取物料类型
export function getMaterielType(data) {
  return request({
    url: "/supplyMaterielTypeInfo/query/selectListMaterielType",
    method: "get",
    params: data
  });
}

// 根据ID,常量类别获常量数据
// DEVICE_LEVEL:设备级别
// MEASUREMENT_UNIT: 备件单位
// CURRENCY : 币种单位
export function getTypeList(data) {
  return request({
    url: "/parameterCompany/query/parameterTenant",
    method: "get",
    params: data
  });
}

// 根据公司ID获公司详细信息
export function getCompanyInfoById(data) {
  return request({
    url: "/company/query/companyInfo",
    method: "get",
    params: data
  });
}

// 根据ID获取所属科目类别
export function getApplySubject(data) {
  return request({
    url: "/financeCostSubject/query/getListByCondition",
    method: "get",
    params: data
  });
}

// 获得oss的token,id.Secret
export function getOssInterimCredentials() {
  return request({
    url: "/file/query/interimCredentials",
    method: "get"
  });
}

// 获得oss 的bucket 和 endpoint
export function GotOssAccessConfig() {
  return request({
    url: "/file/query/accessConfig",
    method: "get"
  });
}

// 查询邮件配置
export function getEmailConfig(data) {
  return request({
    url: "/emailConfig/query/emailConfig",
    method: "get",
    params: data
  });
}

// 修改更新邮件配置
export function updateEmailConfig(data) {
  return request({
    url: "/emailConfig/api/update",
    method: "post",
    params: data
  });
}

// 单据状态列表
export function selectParameterStatus(data) {
  return request({
    url: "/purchaseParameterStatus/query/selectList",
    method: "get",
    params: data
  });
}


// 根据 船舶id 备件id 品牌id 查询库存数量
export function getStoreQuantity(data) {
  return request({
    url: "/supplySparepartStoreInfo/query/getStoreQuantity",
    method: "get",
    params: data
  });
}


// #endregion
