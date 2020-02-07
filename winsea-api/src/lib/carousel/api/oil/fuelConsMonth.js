/**
 * @Author: Sun Rising
 * @Date: 2019-11-08 16:44:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2019-12-31 11:16:24
 * @Description: 油品-月度油耗对外接口
 */
import request from "../../request";
// ---------------------------------------- 月度油耗一览 开始 --------------------------------
// 获取全部的船舶信息
function getUserVesselListByStatus(params) {
  return request.get("/vessel/query/getUserVesselListByStatus", {
    params: params
  });
}
// 获取油品名称及牌号
function getOilNames(params) {
  return request.get("/oilTank/query/page", { params: params });
}
// 获取全部油品名称及牌号
function getAllOilNames(params) {
  return request.get("/oilName/query/page", { params: params });
}
// 月度油耗一览分页查询
function getPageByCondition(params) {
  return request.get("/oilMonthlyConsumptionInfo/query/getPageByCondition", {
    params: params
  });
}
// 查询新增月度油耗（by月份，给新增月度油耗用的）
function getAddConsumptionInfoByMonth(params) {
  return request.get(
    "/oilMonthlyConsumptionInfo/query/getAddConsumptionInfoByMonth",
    {
      params: params
    }
  );
}
// 新增
function saveAdd(data) {
  return request.post("/oilMonthlyConsumptionInfo/api/saveAdd", data);
}
// 编辑
function saveEdit(data) {
  return request.post("/oilMonthlyConsumptionInfo/api/saveEdit", data);
}
// 信息查询（根据主键查询）
function getServicerMerchantInfoById(params) {
  return request.get(
    "/oilMonthlyConsumptionInfo/query/getConsumptionInfoById",
    {
      params: params
    }
  );
}
// 废弃
function discard(data) {
  return request.post("/oilMonthlyConsumptionInfo/api/discard", data);
}
// 提交
function submitMonthlyConsumInfo(data) {
  return request.post(
    "/oilMonthlyConsumptionInfo/api/submitMonthlyConsumInfo",
    data
  );
}
// 确认
function confirm(data) {
  return request.post("/oilMonthlyConsumptionInfo/api/confirm", data);
}
// 提交岸基
function submitAudit(data) {
  return request.post("/oilMonthlyConsumptionInfo/api/submitAudit", data);
}
// 回退
function returnMonthlyConsumption(data) {
  return request.post(
    "/oilMonthlyConsumptionInfo/api/returnMonthlyConsumption",
    data
  );
}
// 审核
function approve(data) {
  return request.post("/oilMonthlyConsumptionInfo/api/approve", data);
}
// 查询操作历史
function getBillOperateHis(params) {
  return request.get("/oilMonthlyConsumptionInfo/query/getBillOperateHis", {
    params: params
  });
}
// ---------------------------------------- 月度油耗一览 结束 --------------------------------
// ---------------------------------------- 月度油耗统计 开始 --------------------------------
// 获取表格统计
function getMonthStatistics(params) {
  return request.get("/oilMonthlyConsumptionInfo/query/getMonthStatistics", {
    params: params
  });
}
// ---------------------------------------- 月度油耗统计 结束 --------------------------------
export default {
  getUserVesselListByStatus,
  getOilNames,
  getAllOilNames,
  getPageByCondition,
  getAddConsumptionInfoByMonth,
  saveAdd,
  saveEdit,
  getServicerMerchantInfoById,
  discard,
  submitMonthlyConsumInfo,
  confirm,
  submitAudit,
  returnMonthlyConsumption,
  approve,
  getBillOperateHis,
  getMonthStatistics
};
