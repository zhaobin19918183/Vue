/**
 * @Author: Sun Rising
 * @Date: 2019-11-08 16:44:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2019-12-19 16:37:35
 * @Description: 模板表单对外接口
 */
import request from "../request";
 // 查询 - 租户购买服务内容
function tenantServiceForm(params) {
  return request.get("/tenant/query/tenantServiceForm", {
    params: params
  });
}
// 获取服务关联table
function findCode(params) {
  return request.get("/serviceTable/query/findCode", {
    params: params
  });
}
// 查询 - 根绝tableCode查询表单字段
function findTableCode(params) {
  return request.get("/tableForm/query/findTableCode", {
    params: params
  });
}
// 获取公司模板表单
function getTplForm(params) {
  return request.get("/tplForm/query/private", {
    params: params
  });
}
// 保存公司模板表单
function saveTplForm(data) {
  return request.post("/tplForm/api/savePrivate", data);
}
export default {
  tenantServiceForm,
  findCode,
  findTableCode,
  getTplForm,
  saveTplForm
};
