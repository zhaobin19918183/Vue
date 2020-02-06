/**
 * @Author: Sun Rising
 * @Date: 2019-11-08 16:44:46
 * @Last Modified by: Sun Rising
 * @Last Modified time: 2019-12-23 13:00:49
 * @Description: 油品-航次油耗对外接口
 */
import request from "@/utils/request";

export default {
  // ---------------------------------------- 航次油耗一览 开始 --------------------------------
  // 获取全部的船舶信息
  getUserVesselListByStatus(params) {
    return request.get("/vessel/query/getUserVesselListByStatus", {
      params: params
    });
  },
  // // 获取油品名称及牌号
  // getOilNames(params) {
  //   return request.get("/oilName/query/page", { params: params });
  // },
  // 航次油耗一览分页查询
  getPageByCondition(params) {
    return request.get("/oilVoyageConsumptionInfo/query/getPageByCondition", {
      params: params
    });
  },
  // 查询新增航次油耗（by航次起止时间，给新增航次油耗用的）
  getAddConsumptionInfoByVoyageTime(params) {
    return request.get(
      "/oilVoyageConsumptionInfo/query/getAddConsumptionInfoByVoyageTime",
      {
        params: params
      }
    );
  },
  // 新增
  saveAdd(data) {
    return request.post("/oilVoyageConsumptionInfo/api/saveAdd", data);
  },
  // 编辑
  saveEdit(data) {
    return request.post("/oilVoyageConsumptionInfo/api/saveEdit", data);
  },
  // 查询航次油耗（by主键）
  getConsumptionInfoById(params) {
    return request.get(
      "/oilVoyageConsumptionInfo/query/getConsumptionInfoById",
      {
        params: params
      }
    );
  },
  // 提交
  submitVoyageConsumInfo(data) {
    return request.post(
      "/oilVoyageConsumptionInfo/api/submitVoyageConsumInfo",
      data
    );
  },
  // 废弃
  discard(data) {
    return request.post("/oilVoyageConsumptionInfo/api/discard", data);
  },
  // 确认
  confirm(data) {
    return request.post("/oilVoyageConsumptionInfo/api/confirm", data);
  },
  // 回退
  returnVoyageConsumption(data) {
    return request.post(
      "/oilVoyageConsumptionInfo/api/returnVoyageConsumption",
      data
    );
  },
  // 提交岸基
  submitAudit(data) {
    return request.post("/oilVoyageConsumptionInfo/api/submitAudit", data);
  },
  // 查询操作历史
  getBillOperateHis(params) {
    return request.get("/oilVoyageConsumptionInfo/query/getBillOperateHis", {
      params: params
    });
  },
  // ---------------------------------------- 航次油耗一览 结束 --------------------------------
  // ---------------------------------------- 航次油耗统计 开始 --------------------------------
  // 获取表格统计
  getVoyageStatistics(params) {
    return request.get("/oilVoyageConsumptionInfo/query/getVoyageStatistics", {
      params: params
    });
  }
  // ---------------------------------------- 航次油耗统计 结束 --------------------------------
};
