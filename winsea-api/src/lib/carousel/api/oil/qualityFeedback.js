// 质量反馈
import request from "../../utils/request";

// **********************油品************************

// 近三个月内加装的航次号
export function voyageNumber(data) {
  return request({
    url: "/oilBunkeringReport/query/voyageNumber",
    method: "get",
    params: data
  });
}

// 近三个月内加装的加装单号或者根据航次号显示该航次所有的加装单号
export function billNo(data) {
  return request({
    url: "/oilBunkeringReport/query/billNo",
    method: "get",
    params: data
  });
}

// 质量反馈查询one
export function one(data) {
  return request({
    url: "/oilFeedback/query/one",
    method: "get",
    params: data
  });
}

// 质量反馈一览列表page
export function page(data) {
  return request({
    url: "/oilFeedback/query/page",
    method: "get",
    params: data
  });
}

// 质量反馈save
export function save(data) {
  return request({
    url: "/oilFeedback/api/save",
    method: "post",
    data
  });
}

// 根据加装单号返回detail
export function findDetail(data) {
  return request({
    url: "/oilFeedback/query/findDetail",
    method: "get",
    params: data
  });
}

// 质量反馈submit
export function submit(data) {
  return request({
    url: "/oilFeedback/api/submit",
    method: "post",
    data
  });
}

// 质量反馈confirm
export function confirm(data) {
  return request({
    url: "/oilFeedback/api/confirm",
    method: "post",
    data
  });
}

// 质量反馈commitLandbased
export function commitLandbased(data) {
  return request({
    url: "/oilFeedback/api/commitLandbased",
    method: "post",
    data
  });
}

// 质量反馈approval
export function approval(data) {
  return request({
    url: "/oilFeedback/api/approval",
    method: "post",
    data
  });
}

// 质量反馈return
export function qualityReturn(data) {
  return request({
    url: "/oilFeedback/api/return",
    method: "post",
    data
  });
}

// 质量反馈deprecated
export function deprecated(data) {
  return request({
    url: "/oilFeedback/api/deprecated",
    method: "post",
    data
  });
}

// 新增
export function add(data) {
  return request({
    url: "/oilFeedbackTmpl/api/add",
    method: "post",
    data
  });
}

// 编辑
export function edit(data) {
  return request({
    url: "/oilFeedbackTmpl/api/edit",
    method: "post",
    data
  });
}

// 删除
export function del(data) {
  return request({
    url: "/oilFeedbackTmpl/api/del",
    method: "post",
    data
  });
}

// 一览
export function list(data) {
  return request({
    url: "/oilFeedbackTmpl/query/list",
    method: "get",
    params: data
  });
}

// 拖拽排序
export function changeOrder(data) {
  return request({
    url: "/oilFeedbackTmpl/api/changeOrder",
    method: "post",
    data
  });
}

// 质量反馈查询操作历史
export function getBillOperateHis(data) {
  return request({
    url: "/oilFeedback/query/getBillOperateHis",
    method: "get",
    params: data
  });
}
