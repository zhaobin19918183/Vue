// 加油申请
import request from "../../utils/request";

// **********************油品************************

// 加油申请一览列表page
function  page(data) {
  return request({
    url: "/oilBunkeringApply/query/page",
    method: "get",
    params: data
  });
}

// 加油申请详情
function  one(data) {
  return request({
    url: "/oilBunkeringApply/query/one",
    method: "get",
    params: data
  });
}

// 油品
function  oilPage(data) {
  return request({
    url: "/oilName/query/page",
    method: "get",
    params: data
  });
}

// 加油申请save
function  save(data) {
  return request({
    url: "/oilBunkeringApply/api/save",
    method: "post",
    data
  });
}

// 加油申请-选择油品
function  choiceOilName(data) {
  return request({
    url: "/oilBunkeringApply/query/choiceOilName",
    method: "get",
    params: data
  });
}

// 加油申请submit
function  submit(data) {
  return request({
    url: "/oilBunkeringApply/api/submit",
    method: "post",
    data
  });
}

// 加油申请confirm
function  confirm(data) {
  return request({
    url: "/oilBunkeringApply/api/confirm",
    method: "post",
    data
  });
}

// 加油申请commitLandbased
function  commitLandbased(data) {
  return request({
    url: "/oilBunkeringApply/api/commitLandbased",
    method: "post",
    data
  });
}

// 加油申请approval
function  approval(data) {
  return request({
    url: "/oilBunkeringApply/api/approval",
    method: "post",
    data
  });
}

// 加油申请notifyVessel
function  notifyVessel(data) {
  return request({
    url: "/oilBunkeringApply/api/notifyVessel",
    method: "post",
    data
  });
}

// 加油申请vesselReceive
function  vesselReceive(data) {
  return request({
    url: "/oilBunkeringApply/api/vesselReceive",
    method: "post",
    data
  });
}

// 加油申请return
function  oilReturn(data) {
  return request({
    url: "/oilBunkeringApply/api/return",
    method: "post",
    data
  });
}

// 加油申请deprecated
function  deprecated(data) {
  return request({
    url: "/oilBunkeringApply/api/deprecated",
    method: "post",
    data
  });
}

// 供油方
function  getListByCondition(data) {
  return request({
    url: "/servicerMerchantInfo/query/getListByCondition",
    method: "get",
    params: data
  });
}

// 加油申请查询操作历史
function  getBillOperateHis(data) {
  return request({
    url: "/oilBunkeringApply/query/getBillOperateHis",
    method: "get",
    params: data
  });
}

// 通过船舶加载油
function  findOilNamesByVessel(data) {
  return request({
    url: "/oilName/query/findOilNamesByVessel",
    method: "get",
    params: data
  });
}
