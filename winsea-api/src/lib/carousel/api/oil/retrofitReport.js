// 加装报告
import request from "../../utils/request";

// 加装报告save
export function saveDate(data) {
  return request({
    url: "/oilBunkeringReport/api/save",
    method: "post",
    data
  });
}

// 加装报告submit
export function submitDate(data) {
  return request({
    url: "/oilBunkeringReport/api/submit",
    method: "post",
    data
  });
}

// 加装报告一览列表page
export function getOilBunkReportPage(data) {
  return request({
    url: "/oilBunkeringReport/query/page",
    method: "get",
    params: data
  });
}

// 加装报告查询one
export function getOilBunkReportOne(data) {
  return request({
    url: "/oilBunkeringReport/query/one",
    method: "get",
    params: data
  });
}

// 加装报告删除
export function removeDate(data) {
  return request({
    url: "/oilBunkeringReport/api/remove",
    method: "post",
    data
  });
}

// 加装报告confirm
export function confirmDate(data) {
  return request({
    url: "/oilBunkeringReport/api/confirm",
    method: "post",
    data
  });
}

// 加装报告return退回
export function returnDate(data) {
  return request({
    url: "/oilBunkeringReport/api/return",
    method: "post",
    data
  });
}

// 加装报告deprecated废弃
export function deprecatedDate(data) {
  return request({
    url: "/oilBunkeringReport/api/deprecated",
    method: "post",
    data
  });
}

// 加油报告-选择油舱
export function choiceOilTank(data) {
  return request({
    url: "/oilBunkeringReport/query/choiceOilTank",
    method: "get",
    params: data
  });
}

// 加装报告commitLandbased
export function commitLandbased(data) {
  return request({
    url: "/oilBunkeringReport/api/commitLandbased",
    method: "post",
    data
  });
}

// 加装报告查询操作历史
export function getBillOperateHis(data) {
  return request({
    url: "/oilBunkeringReport/query/getBillOperateHis",
    method: "get",
    params: data
  });
}
