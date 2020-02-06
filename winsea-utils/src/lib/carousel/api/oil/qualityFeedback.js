// 质量反馈
import request from "../../utils/request";

// **********************油品************************

// 近三个月内加装的航次号
function  voyageNumber(data) {
  return request({
    url: "/oilBunkeringReport/query/voyageNumber",
    method: "get",
    params: data
  });
}

// 近三个月内加装的加装单号或者根据航次号显示该航次所有的加装单号
function  billNo(data) {
  return request({
    url: "/oilBunkeringReport/query/billNo",
    method: "get",
    params: data
  });
}

// 质量反馈查询one
function  one(data) {
  return request({
    url: "/oilFeedback/query/one",
    method: "get",
    params: data
  });
}

// 质量反馈一览列表page
function  page(data) {
  return request({
    url: "/oilFeedback/query/page",
    method: "get",
    params: data
  });
}

// 质量反馈save
function  save(data) {
  return request({
    url: "/oilFeedback/api/save",
    method: "post",
    data
  });
}

// 根据加装单号返回detail
function  findDetail(data) {
  return request({
    url: "/oilFeedback/query/findDetail",
    method: "get",
    params: data
  });
}

// 质量反馈submit
function  submit(data) {
  return request({
    url: "/oilFeedback/api/submit",
    method: "post",
    data
  });
}

// 质量反馈confirm
function  confirm(data) {
  return request({
    url: "/oilFeedback/api/confirm",
    method: "post",
    data
  });
}

// 质量反馈commitLandbased
function  commitLandbased(data) {
  return request({
    url: "/oilFeedback/api/commitLandbased",
    method: "post",
    data
  });
}

// 质量反馈approval
function  approval(data) {
  return request({
    url: "/oilFeedback/api/approval",
    method: "post",
    data
  });
}

// 质量反馈return
function  qualityReturn(data) {
  return request({
    url: "/oilFeedback/api/return",
    method: "post",
    data
  });
}

// 质量反馈deprecated
function  deprecated(data) {
  return request({
    url: "/oilFeedback/api/deprecated",
    method: "post",
    data
  });
}

// 新增
function  add(data) {
  return request({
    url: "/oilFeedbackTmpl/api/add",
    method: "post",
    data
  });
}

// 编辑
function  edit(data) {
  return request({
    url: "/oilFeedbackTmpl/api/edit",
    method: "post",
    data
  });
}

// 删除
function  del(data) {
  return request({
    url: "/oilFeedbackTmpl/api/del",
    method: "post",
    data
  });
}

// 一览
function  list(data) {
  return request({
    url: "/oilFeedbackTmpl/query/list",
    method: "get",
    params: data
  });
}

// 拖拽排序
function  changeOrder(data) {
  return request({
    url: "/oilFeedbackTmpl/api/changeOrder",
    method: "post",
    data
  });
}

// 质量反馈查询操作历史
function  getBillOperateHis(data) {
  return request({
    url: "/oilFeedback/query/getBillOperateHis",
    method: "get",
    params: data
  });
}
