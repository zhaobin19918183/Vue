// 加装报告
import request from "../../request";

// 加装报告save
function saveDate(data) {
  return request({
    url: "/oilBunkeringReport/api/save",
    method: "post",
    data
  });
}

// 加装报告submit
function submitDate(data) {
  return request({
    url: "/oilBunkeringReport/api/submit",
    method: "post",
    data
  });
}

// 加装报告一览列表page
function getOilBunkReportPage(data) {
  return request({
    url: "/oilBunkeringReport/query/page",
    method: "get",
    params: data
  });
}

// 加装报告查询one
function getOilBunkReportOne(data) {
  return request({
    url: "/oilBunkeringReport/query/one",
    method: "get",
    params: data
  });
}

// 加装报告删除
function removeDate(data) {
  return request({
    url: "/oilBunkeringReport/api/remove",
    method: "post",
    data
  });
}

// 加装报告confirm
function confirmDate(data) {
  return request({
    url: "/oilBunkeringReport/api/confirm",
    method: "post",
    data
  });
}

// 加装报告return退回
function returnDate(data) {
  return request({
    url: "/oilBunkeringReport/api/return",
    method: "post",
    data
  });
}

// 加装报告deprecated废弃
function deprecatedDate(data) {
  return request({
    url: "/oilBunkeringReport/api/deprecated",
    method: "post",
    data
  });
}

// 加油报告-选择油舱
function choiceOilTank(data) {
  return request({
    url: "/oilBunkeringReport/query/choiceOilTank",
    method: "get",
    params: data
  });
}

// 加装报告commitLandbased
function commitLandbased(data) {
  return request({
    url: "/oilBunkeringReport/api/commitLandbased",
    method: "post",
    data
  });
}

// 加装报告查询操作历史
function getBillOperateHis(data) {
  return request({
    url: "/oilBunkeringReport/query/getBillOperateHis",
    method: "get",
    params: data
  });
}
export default {
  saveDate,
  submitDate,
  getOilBunkReportPage,
  getOilBunkReportOne,
  removeDate,
  confirmDate,
  returnDate,
  deprecatedDate,
  choiceOilTank,
  commitLandbased,
  getBillOperateHis
}