/**
 * @Author: Sun Rising
 * @Date: 2019-11-08 16:44:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2019-12-31 11:16:24
 * @Description: 油品-月度油耗对外接口
 */
import request from "@/utils/request";

export default {
  // ---------------------------------------- 月度油耗一览 开始 --------------------------------
  // 获取全部的船舶信息
  getUserVesselListByStatus(params) {
    return request.get("/vessel/query/getUserVesselListByStatus", {
      params: params
    });
  },
  // 获取油品名称及牌号
  getOilNames(params) {
    return request.get("/oilTank/query/page", { params: params });
  },
  // 获取全部油品名称及牌号
  getAllOilNames(params) {
    return request.get("/oilName/query/page", { params: params });
  },
  // 月度油耗一览分页查询
  getPageByCondition(params) {
    return request.get("/oilMonthlyConsumptionInfo/query/getPageByCondition", {
      params: params
    });
  },
  // 查询新增月度油耗（by月份，给新增月度油耗用的）
  getAddConsumptionInfoByMonth(params) {
    return request.get(
      "/oilMonthlyConsumptionInfo/query/getAddConsumptionInfoByMonth",
      {
        params: params
      }
    );
  },
  // 新增
  saveAdd(data) {
    return request.post("/oilMonthlyConsumptionInfo/api/saveAdd", data);
  },
  // 编辑
  saveEdit(data) {
    return request.post("/oilMonthlyConsumptionInfo/api/saveEdit", data);
  },
  // 信息查询（根据主键查询）
  getServicerMerchantInfoById(params) {
    return request.get(
      "/oilMonthlyConsumptionInfo/query/getConsumptionInfoById",
      {
        params: params
      }
    );
  },
  // 废弃
  discard(data) {
    return request.post("/oilMonthlyConsumptionInfo/api/discard", data);
  },
  // 提交
  submitMonthlyConsumInfo(data) {
    return request.post(
      "/oilMonthlyConsumptionInfo/api/submitMonthlyConsumInfo",
      data
    );
  },
  // 确认
  confirm(data) {
    return request.post("/oilMonthlyConsumptionInfo/api/confirm", data);
  },
  // 提交岸基
  submitAudit(data) {
    return request.post("/oilMonthlyConsumptionInfo/api/submitAudit", data);
  },
  // 回退
  returnMonthlyConsumption(data) {
    return request.post(
      "/oilMonthlyConsumptionInfo/api/returnMonthlyConsumption",
      data
    );
  },
  // 审核
  approve(data) {
    return request.post("/oilMonthlyConsumptionInfo/api/approve", data);
  },
  // 查询操作历史
  getBillOperateHis(params) {
    return request.get("/oilMonthlyConsumptionInfo/query/getBillOperateHis", {
      params: params
    });
  },
  // ---------------------------------------- 月度油耗一览 结束 --------------------------------
  // ---------------------------------------- 月度油耗统计 开始 --------------------------------
  // 获取表格统计
  getMonthStatistics(params) {
    return request.get("/oilMonthlyConsumptionInfo/query/getMonthStatistics", {
      params: params
    });
  }
  // ---------------------------------------- 月度油耗统计 结束 --------------------------------
};
