// 物料管理模块Api接口

import request from "../../utils/request";

// #region 设备管理

// 设备管理 -> 设备管理-保存
function  saveSupplyDeviceInfo(data) {
  return request({
    url: "/supplyDeviceInfo/api/saveSupplyDeviceInfo",
    method: "post",
    data: data
  });
}
// 申请-申请单详情导出
// 获得下载文件URl
function  materialExport(id) {
  return `${process.env.VUE_APP_BASE_API}/materialExport/down/material/export?id=${id}`;
}

// 设备管理 -> 设备管理-删除
function  delSupplyDeviceInfo(data) {
  return request({
    url: "/supplyDeviceInfo/api/deleteSupplyDeviceInfo",
    method: "post",
    data: data
  });
}

// 设备管理 -> 设备管理-分页查询
function  selectSupplyDeviceInfoPage(data) {
  return request({
    url: "/supplyDeviceInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 设备管理 -> 设备管理-列表查询
function  selectSupplyDeviceInfoList(data) {
  return request({
    url: "/supplyDeviceInfo/query/selectList",
    method: "get",
    params: data
  });
}

// 设备管理 -> 设备管理-设备排序
function  supplyDeviceInfoorder(data) {
  return request({
    url: "/supplyDeviceInfo/api/order",
    method: "post",
    data: data
  });
}
// 设备管理->船舶设备树
function  deviceTree(data) {
  return request({
    url: "/supplyDeviceInfo/query/deviceTree",
    method: "get",
    params: data
  });
}

// 物料管理->物料分类列表
function  getMaterielDeviceTypeList(data) {
  return request({
    url: "/supplyMaterielTypeInfo/query/selectList",
    method: "get",
    params: data
  });
}

// 物料管理->新增保存物料分类列表
function  saveMaterielDeviceType(data) {
  return request({
    url: "/supplyMaterielTypeInfo/api/saveInsert ",
    method: "post",
    data: data
  });
}

// 物料管理->编辑保存物料分类列表
function  saveMaterielDeviceTypeModify(data) {
  return request({
    url: "/supplyMaterielTypeInfo/api/saveModify ",
    method: "post",
    data: data
  });
}

// 物料管理->删除物料分类列表
function  delMaterielDeviceType(data) {
  return request({
    url: "/supplyMaterielTypeInfo/api/delete",
    method: "post",
    data: data
  });
}

// 船载物料->拖动排序物料分类列表
function  orderMaterielDeviceType(data) {
  return request({
    url: "/supplyMaterielTypeInfo/api/order ",
    method: "post",
    data: data
  });
}

// #endregion

// #region 船载物料

// 船载物料 -> 新增物料

function  materielPartInfoInsert(data) {
  return request({
    url: "/supplyMaterielPartInfo/api/saveInsert",
    method: "post",
    data: data
  });
}
// 船载物料 -> 编辑物料
function  materielPartInfoUpdate(data) {
  return request({
    url: "/supplyMaterielPartInfo/api/saveModify",
    method: "post",
    data: data
  });
}

// 船载物料 -> 删除物料
function  deleteSupplyMaterielInfo(data) {
  return request({
    url: "/supplyMaterielPartInfo/api/deleteSupplyMaterielPartInfo",
    method: "post",
    data: data
  });
}

// 船载物料->物料分类树
function  maDeviceTree(data) {
  return request({
    url: "/supplyMaterielTypeInfo/query/selectList",
    method: "get",
    params: data
  });
}

// 船载物料 -> 分页查询
function  selectMaterielPartInfoPage(data) {
  return request({
    url: "/supplyMaterielPartInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 船载物料 -> 审核通过
function  auditSupplyMaterielInfo(data) {
  return request({
    url: "/supplyMaterielPartInfo/api/auditSupplyMaterielPartInfo",
    method: "post",
    data: data
  });
}

// #endregion

// #region ipma6物料
// 获取impa6分类
function  maImpaDeviceTree(data) {
  return request({
    url: "/supplyImpa6MaterialTypeInfo/query/selectList",
    method: "get",
    params: data
  });
}
// 获取impa6列表
function  selectImpaMalApplPage(query) {
  return request({
    url: "/supplyImpa6MaterialInfo/query/selectPage",
    method: "get",
    params: query
  });
}
// 获取impa6列表明细
function  selectImpaListMoreAppl(query) {
  return request({
    url: "/supplyImpa6MaterialInfo/query/getIpma6Info",
    method: "get",
    params: query
  });
}
// #endregion

// #region 申请

// 申请 -> 获取申请列表

// 获取申请数据
function  fetchList(query, activeName) {
  return request({
    url: "/purMaApplInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// 获取申请采购明细列表
// vesselId 船舶ID 必传
function  selectMaApplPageList(query) {
  return request({
    url: "/supplyMaterielPartInfo/query/selectMaApplPageList",
    method: "get",
    params: query
  });
}

// 获取申请采购明细新增列表
// vesselId 船舶ID 必传
function  selectMalApplPage(query) {
  return request({
    url: "/supplyMaterielPartInfo/query/selectApplPageList",
    method: "get",
    params: query
  });
}

// 申请单新增保存接口
function  billaddMaSave(data) {
  return request({
    url: "/materielApplInfo/api/BilladdSpSave",
    method: "post",
    data: data
  });
}

// 根据ID获取申请单明细信息
function  getApplTempById(data) {
  return request({
    url: "materielApplInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 修改备件申请
function  updateApplTemp(data) {
  return request({
    url: "materielApplInfo/api/updatePur",
    method: "post",
    data
  });
}

// 删除备件申请
function  delApplTemp(data) {
  return request({
    url: "materielApplInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID修改备件申请状态
function  updateApplStatusbyId(data) {
  return request({
    url: "materielApplInfo/api/updatePurStatus",
    method: "post",
    data
  });
}

// 根据ID审核备件申请
function  approveApplbyId(data) {
  return request({
    url: "materielApplInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 拆分单据
function  splitApplBills(data) {
  return request({
    url: "materielApplInfo/api/splitPurMatAppl",
    method: "post",
    data
  });
}

// 提交至工作流
function  submitToWorkFlowAppl(data) {
  return request({
    url: "materielApplInfo/api/submitToWorkflow",
    method: "post",
    data
  });
}

// 申请-获得历史单据明细
// 参数 purSpApplDetailIds 逗号分隔的 appl_no
function  selectListMoreAppl(data) {
  return request({
    url: "/purSpApplDetail/api/selectListMoreAppl",
    method: "post",
    data: data
  });
}

// #endregion

// #region 供船接口

// 分页查询
function  supplyMaterielInStoreInfoPage(query) {
  return request({
    url: "/supplyMaterielInStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// 查询详情
function  supplyMaterielInStoreInfoDetail(query) {
  return request({
    url: "/supplyMaterielInStoreInfo/query/selectDetail",
    method: "get",
    params: query
  });
}

// 强制关闭
function  supplyMaterielInStoreInfoForceClose(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/api/forceClose",
    method: "post",
    data: data
  });
}

// 入库
function  supplyMaterielInStoreInfoInStore(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/api/inStore ",
    method: "post",
    data: data
  });
}

// 提交签收单
function  supplyMaterielInStoreInfoSubmitBill(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/api/submitBill",
    method: "post",
    data: data
  });
}

// #endregion

// #region 库存管理

function  supplyMaterielInfoPage(query) {
  return request({
    url: "/supplyMaterielStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// #endregion

// #region 库存盘点

// 查询库存盘点列表带分页
function  supplyMaterielCheckStoreInfoSelectPage(query) {
  return request({
    url: "/supplyMaterielCheckStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}
// 新增库存盘点明细列表
function  supplyMaterielInfoCheckPageList(query) {
  return request({
    url: "/supplyMaterielPartInfo/query/selectCheckPageList",
    method: "get",
    params: query
  });
}
// 新增库存盘点明细保存
function  supplyMaterielCheckStoreInfoSave(data) {
  return request({
    url: "/supplyMaterielCheckStoreInfo/api/BilladdSpSave",
    method: "post",
    data: data
  });
}

// 库存盘点.详情查询
function  supplyMaterielCheckStoreInfoSelectDetail(data) {
  return request({
    url: "/supplyMaterielCheckStoreInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 库存盘点.保存单据详情
function  supplyMaterielCheckSave(data) {
  return request({
    url: "/supplyMaterielCheckStoreInfo/api/save",
    method: "post",
    data: data
  });
}

// 库存盘点.提交单据详情
function  supplyMaterielCheckSubmitBill(data) {
  return request({
    url: "/supplyMaterielCheckStoreInfo/api/submitBill",
    method: "post",
    data: data
  });
}

// 库存盘点.审核确认
function  supplyMaterielCheckStoreInfoVerifyBill(data) {
  return request({
    url: "/supplyMaterielCheckStoreInfo/api/verifyBill",
    method: "post",
    data: data
  });
}

// #endregion

// #region 库位

function  supplyMaLocationInfoList(query) {
  return request({
    url: "/supplyLocationInfo/query/selectList",
    method: "get",
    params: query
  });
}

function  supplyMaLocationInfoSave(data) {
  return request({
    url: "/supplyLocationInfo/api/save",
    method: "post",
    data: data
  });
}

function  supplyMaLocationInfoDel(data) {
  return request({
    url: "/supplyLocationInfo/api/delete",
    method: "post",
    data: data
  });
}

function  selectMaCheckPageList(query) {
  return request({
    url: "/supplyMaterielInfo/query/selectCheckPageList",
    method: "get",
    params: query
  });
}

// #endregion

// #region 出库

// 出库-单据列表
function  materielOutStoreInfoSlectPage(query) {
  return request({
    url: "/supplyMaterielOutStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// 出库-查询物料明细列表
function  selectOutStorePageList(query) {
  return request({
    url: "/supplyMaterielPartInfo/query/selectOutStorePageList",
    method: "get",
    params: query
  });
}

// 出库-出库类型为退掉出库之外的出库
function  materielOutStoreInfoAddSpSave(data) {
  return request({
    url: "/supplyMaterielOutStoreInfo/api/addBillSave",
    method: "post",
    data: data
  });
}

// 出库-单据列表(无分页)
function  materielOutStoreInfoSlectList(query) {
  return request({
    url: "/supplyMaterielOutStoreInfo/query/selectList",
    method: "get",
    params: query
  });
}

// 出库-单据详情
function  materielOutStoreInfoSelectDetail(query) {
  return request({
    url: "/supplyMaterielOutStoreInfo/query/selectDetail",
    method: "get",
    params: query
  });
}

// 出库-废弃单据状态
function  materielOutStoreInfoCancelBill(data) {
  return request({
    url: "/supplyMaterielOutStoreInfo/api/cancelBill",
    method: "post",
    data: data
  });
}

// 出库-保存单据
function  materielOutStoreInfoSave(data) {
  return request({
    url: "/supplyMaterielOutStoreInfo/api/save",
    method: "post",
    data: data
  });
}

// 出库-单据审核
function  materielOutStoreInfoVerifyBill(data) {
  return request({
    url: "/supplyMaterielOutStoreInfo/api/verifyBill",
    method: "post",
    data: data
  });
}

// 出库-单据提交
function  materielOutStoreInfoSubmitBill(data) {
  return request({
    url: "/supplyMaterielOutStoreInfo/api/submitBill",
    method: "post",
    data: data
  });
}

// 出库-根据供船单ID获取供船备件明细
function  materielOutStoreInfoGetInStoreDetail(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/query/getInStoreDetail",
    method: "get",
    params: data
  });
}

// 物料质量反馈
function  materielQualityPageList(query) {
  return request({
    url: "/materielFeedbackInfo/query/getPageBy",
    method: "get",
    params: query
  });
}
// 物料质量反馈详情
function  materielQualityDetail(query) {
  return request({
    url: "/materielFeedbackInfo/query/getOneById",
    method: "get",
    params: query
  });
}
// 物料质量反馈列表页状态
function  materielQualityStatus(query) {
  return request({
    url: "/materielFeedbackInfo/query/getStatus",
    method: "get",
    params: query
  });
}
// 物料质量反馈操作历史
function  materielQualityOperateHis(query) {
  return request({
    url: "/materielFeedbackInfo/query/getBillOperateHis",
    method: "get",
    params: query
  });
}
// 物料质量反馈供应商列表
function  materielQualitySupplier(query) {
  return request({
    url: "/materielFeedbackInfo/query/getSupplierStatus",
    method: "get",
    params: query
  });
}
// 物料质量反馈保存
function  saveMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/saveEdit",
    method: "post",
    data: data
  });
}
//物料质量反馈提交
function  submitMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/vesselSubmit",
    method: "post",
    data: data
  });
}
// 物料质量反馈确认
function  confirmMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/confirm",
    method: "post",
    data: data
  });
}
// 物料质量反馈提交岸基
function  bankSubmitMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/bankSubmit",
    method: "post",
    data: data
  });
}
// 物料质量反馈普通退回
function  backMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/back",
    method: "post",
    data: data
  });
}
// 物料质量反馈审核之后再确认
function  vesselSubmitMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/completeSubmit",
    method: "post",
    data: data
  });
}
// 物料质量反馈审核之后再确认
function  completeConfirmMaterielQuality(data) {
  return request({
    url: "/materielFeedbackInfo/api/completeConfirm",
    method: "post",
    data: data
  });
}


// #endregion

function  saveMaterielMaterielInfoInsert(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/query/getInStoreDetail",
    method: "get",
    params: data
  });
}

function  saveMaterielMaterielInfoModify(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/query/getInStoreDetail",
    method: "get",
    params: data
  });
}

function  spDeviceTree(data) {
  return request({
    url: "/supplyMaterielInStoreInfo/query/getInStoreDetail",
    method: "get",
    params: data
  });
}