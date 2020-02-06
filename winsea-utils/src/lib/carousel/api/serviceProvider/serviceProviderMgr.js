/**
 * @Author: Sun Rising
 * @Date: 2019-11-08 16:44:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2019-12-25 15:10:33
 * @Description: 服务商管理对外接口
 */
import request from "@/utils/request";

function  getListByCondition(params) {
  return request({
    url: "/servicerMerchantInfo/query/getBankListByCondition",
    method: "get",
    params: params
  });
}

export default {
  // 服务商信息一览分页查询
  getPageByCondition(params) {
    return request({
      url: "/servicerMerchantInfo/query/getPageByCondition",
      method: "get",
      params: params
    });
  },

  // 服务类型下拉字典项拉取
  getServType(params) {
    return request({
      url: "/parameterCompany/query/parameterTenant",
      method: "get",
      params: params
    });
  },
  // 服务商信息查询（根据主键查询）
  getServicerMerchantInfoById(params) {
    return request({
      url: "/servicerMerchantInfo/query/getServicerMerchantInfoById",
      method: "get",
      params: params
    });
  },
  // 新增服务商
  saveAdd(data) {
    return request({
      url: "/servicerMerchantInfo/api/saveAdd",
      method: "post",
      data
    });
  },
  // 编辑服务商
  saveEdit(data) {
    return request({
      url: "/servicerMerchantInfo/api/saveEdit",
      method: "post",
      data
    });
  },
  // 删除服务商
  deleteMerchantById(data) {
    return request({
      url: "/servicerMerchantInfo/api/deleteMerchantById",
      method: "post",
      data
    });
  },
  // 获取国籍
  getNationtyList(params) {
    return request({
      url: "/crewNationality/query/getList",
      method: "get",
      params: params
    });
  },
  // 获取省市
  getDictList(params) {
    return request({
      url: "/commonCity/query/getList",
      method: "get",
      params: params
    });
  },
  // 审核服务商
  approveServicerMerchant(data) {
    return request({
      url: "/servicerMerchantInfo/api/approveServicerMerchant",
      method: "post",
      data
    });
  },
  // 提交服务商
  submitServicerMerchant(data) {
    return request({
      url: "/servicerMerchantInfo/api/submitServicerMerchant",
      method: "post",
      data
    });
  },
  // 查询操作历史
  getBillOperateHis(params) {
    return request.get("/servicerMerchantInfo/query/getBillOperateHis", {
      params: params
    });
  }
};
