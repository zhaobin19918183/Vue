// 基础数据
import request from "../../utils/request";

// **********************油品************************

// 油品名称的新增和修改
export function createOrUpdate(data) {
  return request({
    url: "/oilName/api/createOrUpdate",
    method: "post",
    data
  });
}

// 油品名称一览列表page
export function getPageByCondition(data) {
  return request({
    url: "/oilName/query/page",
    method: "get",
    params: data
  });
}

// 油品名称拖拽排序
export function changeOrder(data) {
  return request({
    url: "/oilName/api/changeOrder",
    method: "post",
    data
  });
}

// 油舱信息查询one
export function getDetailInfoById(data) {
  return request({
    url: "/oilName/query/one",
    method: "get",
    params: data
  });
}

// 油品名称删除
export function removeInfo(data) {
  return request({
    url: "/oilName/api/remove",
    method: "post",
    data
  });
}

// 判断该油品能否删除
export function canBeDeletedById(data) {
  return request({
    url: "/oilName/query/canBeDeletedById",
    method: "get",
    params: data
  });
}

// **********************油舱************************

// 油舱信息新增或者修改
export function createOilTank(data) {
  return request({
    url: "/oilTank/api/createOrUpdate",
    method: "post",
    data
  });
}

// 油舱信息一览列表page
export function getOilTankPage(data) {
  return request({
    url: "/oilTank/query/page",
    method: "get",
    params: data
  });
}

// 油舱信息查询one
export function getDetailOilTank(data) {
  return request({
    url: "/oilTank/query/one",
    method: "get",
    params: data
  });
}

// 油舱信息删除
export function removeOilTankInfo(data) {
  return request({
    url: "/oilTank/api/remove",
    method: "post",
    data
  });
}

// **********************污油水************************

// 污油水舱柜信息新增或者修改
export function createOilyWater(data) {
  return request({
    url: "/oilWaterTank/api/createOrUpdate",
    method: "post",
    data
  });
}

// 污油水舱柜信息一览列表page
export function getOilyWaterPage(data) {
  return request({
    url: "/oilWaterTank/query/page",
    method: "get",
    params: data
  });
}

// 污油水舱柜信息查询one
export function getDetailOilyWater(data) {
  return request({
    url: "/oilWaterTank/query/one",
    method: "get",
    params: data
  });
}

// 污油水舱柜信息删除
export function removeOilyWaterInfo(data) {
  return request({
    url: "/oilWaterTank/api/remove",
    method: "post",
    data
  });
}
