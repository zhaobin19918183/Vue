/**
 * @Author: Sun Rising
 * @Date: 2019-11-08 16:44:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2019-12-25 15:10:33
 * @Description: 服务商管理对外接口
 */
import request from "../../request";

function getListByCondition(params) {
  return request({
    url: "/servicerMerchantInfo/query/getBankListByCondition",
    method: "get",
    params: params
  });
}
// 服务商信息一览分页查询
function getPageByCondition(params) {
  return request({
    url: "/servicerMerchantInfo/query/getPageByCondition",
    method: "get",
    params: params
  });
}

// 服务类型下拉字典项拉取
function getServType(params) {
  return request({
    url: "/parameterCompany/query/parameterTenant",
    method: "get",
    params: params
  });
}
// 服务商信息查询（根据主键查询）
function getServicerMerchantInfoById(params) {
  return request({
    url: "/servicerMerchantInfo/query/getServicerMerchantInfoById",
    method: "get",
    params: params
  });
}
// 新增服务商
function saveAdd(data) {
  return request({
    url: "/servicerMerchantInfo/api/saveAdd",
    method: "post",
    data
  });
}
// 编辑服务商
function saveEdit(data) {
  return request({
    url: "/servicerMerchantInfo/api/saveEdit",
    method: "post",
    data
  });
}
// 删除服务商
function deleteMerchantById(data) {
  return request({
    url: "/servicerMerchantInfo/api/deleteMerchantById",
    method: "post",
    data
  });
}
// 获取国籍
function getNationtyList(params) {
  return request({
    url: "/crewNationality/query/getList",
    method: "get",
    params: params
  });
}
// 获取省市
function getDictList(params) {
  return request({
    url: "/commonCity/query/getList",
    method: "get",
    params: params
  });
}
// 审核服务商
function approveServicerMerchant(data) {
  return request({
    url: "/servicerMerchantInfo/api/approveServicerMerchant",
    method: "post",
    data
  });
}
// 提交服务商
function submitServicerMerchant(data) {
  return request({
    url: "/servicerMerchantInfo/api/submitServicerMerchant",
    method: "post",
    data
  });
}
// 查询操作历史
function getBillOperateHis(params) {
  return request.get("/servicerMerchantInfo/query/getBillOperateHis", {
    params: params
  });
}
export default {
  getListByCondition,
  getPageByCondition,
  getServType,
  getServicerMerchantInfoById,
  saveAdd,
  saveEdit,
  deleteMerchantById,
  getNationtyList,
  getDictList,
  approveServicerMerchant,
  submitServicerMerchant,
  getBillOperateHis
};
