// 供应模块Api接口

import request from "../../request";

// #region 设备管理

// 设备管理 -> 设备管理-保存
function saveSupplyDeviceInfo(data) {
  return request({
    url: "/supplyDeviceInfo/api/saveSupplyDeviceInfo",
    method: "post",
    data: data
  });
}

// 设备管理 -> 设备管理-删除
function delSupplyDeviceInfo(data) {
  return request({
    url: "/supplyDeviceInfo/api/deleteSupplyDeviceInfo",
    method: "post",
    data: data
  });
}

// 设备管理 -> 设备管理-分页查询
function selectSupplyDeviceInfoPage(data) {
  return request({
    url: "/supplyDeviceInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 设备管理 -> 设备管理-列表查询
function selectSupplyDeviceInfoList(data) {
  return request({
    url: "/supplyDeviceInfo/query/selectList",
    method: "get",
    params: data
  });
}

// 设备管理 -> 设备管理-设备排序
function supplyDeviceInfoorder(data) {
  return request({
    url: "/supplyDeviceInfo/api/order",
    method: "post",
    data: data
  });
}
// 设备管理->船舶设备树
function deviceTree(data) {
  return request({
    url: "/supplyDeviceInfo/query/deviceTree",
    method: "get",
    params: data
  });
}

// 设备管理->备件分类列表
function getSupplyDeviceTypeList(data) {
  return request({
    url: "/supplyDeviceTypeInfo/query/selectList",
    method: "get",
    params: data
  });
}

// 设备管理->保存备件分类列表
function saveSupplyDeviceType(data) {
  return request({
    url: "/supplyDeviceTypeInfo/api/save",
    method: "post",
    data: data
  });
}

// 设备管理->删除备件分类列表
function delSupplyDeviceType(data) {
  return request({
    url: "/supplyDeviceTypeInfo/api/delete",
    method: "post",
    data: data
  });
}

// 设备管理->拖动排序备件分类列表
function orderSupplyDeviceType(data) {
  return request({
    url: "/supplyDeviceTypeInfo/api/order",
    method: "post",
    data: data
  });
}

// #endregion

// #region 备件手册

// 备件手册 -> 保存手册
function saveSupplySparePartInfo(data) {
  return request({
    url: "/supplySparePartInfo/api/save",
    method: "post",
    data: data
  });
}

// 备件手册 -> 删除手册
function deleteSupplySparePartInfo(data) {
  return request({
    url: "/supplySparePartInfo/api/deleteSupplySparePartInfo",
    method: "post",
    data: data
  });
}

// 备件手册->船舶设备树
function spDeviceTree(data) {
  return request({
    url: "/supplyDeviceInfo/query/spDeviceTree",
    method: "get",
    params: data
  });
}

// 备件手册 -> 分页查询
function selectSupplySparePartInfoPage(data) {
  return request({
    url: "/supplySparePartInfo/query/selectPage",
    method: "get",
    params: data
  });
}

// 备件手册 -> 手册审核通过
function auditSupplySparePartInfo(data) {
  return request({
    url: "/supplySparePartInfo/api/auditSupplySparePartInfo",
    method: "post",
    data: data
  });
}

// #endregion

// #region 申请

// 申请 -> 获取申请列表

// 获取申请数据
function fetchList(query, activeName) {
  return request({
    url: "/purSpApplInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// 获取申请采购明细列表
// vesselId 船舶ID 必传
function selectApplPageList(query) {
  return request({
    url: "/supplySparePartInfo/query/selectApplPageList",
    method: "get",
    params: query
  });
}

// 申请单新增保存接口
function billaddSpSave(data) {
  return request({
    url: "/sparepartApplInfo/api/BilladdSpSave",
    method: "post",
    data: data
  });
}

// 根据ID获取申请单明细信息
function getApplTempById(data) {
  return request({
    url: "sparepartApplInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 修改备件申请单
function updateApplTemp(data) {
  return request({
    url: "sparepartApplInfo/api/updatePur",
    method: "post",
    data
  });
}

// 删除备件申请单
function delApplTemp(data) {
  return request({
    url: "sparepartApplInfo/api/deletePart",
    method: "post",
    data
  });
}

// 根据ID修改备件单申请状态
function updateApplStatusbyId(data) {
  return request({
    url: "sparepartApplInfo/api/updatePurStatus",
    method: "post",
    data
  });
}

// 根据ID审核备件申请单
function approveApplbyId(data) {
  return request({
    url: "sparepartApplInfo/api/approveWorkFlow",
    method: "post",
    data
  });
}

// 拆分单据
function splitApplBills(data) {
  return request({
    url: "sparepartApplInfo/api/splitPurSpAppl",
    method: "post",
    data
  });
}

// 提交至工作流
function submitToWorkFlowAppl(data) {
  return request({
    url: "sparepartApplInfo/api/submitToWorkflow",
    method: "post",
    data
  });
}

// 申请-获得历史单据明细
// 参数 purSpApplDetailIds 逗号分隔的 appl_no
function selectListMoreAppl(data) {
  return request({
    url: "/purSpApplDetail/api/selectListMoreAppl",
    method: "post",
    data: data
  });
}

// 申请-申请单详情导出
// 获得下载文件URl
function sparepartExport(id) {
  return `${process.env.VUE_APP_BASE_API}/sparepartExport/down/sparepart/export?id=${id}`;
}

// #endregion

// #region 供船接口

// 分页查询
function supplySparepartInStoreInfoPage(query) {
  return request({
    url: "/supplySparepartInStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// 查询详情
function supplySparepartInStoreInfoDetail(query) {
  return request({
    url: "/supplySparepartInStoreInfo/query/selectDetail",
    method: "get",
    params: query
  });
}

// 强制关闭
function supplySparepartInStoreInfoForceClose(data) {
  return request({
    url: "/supplySparepartInStoreInfo/api/forceClose",
    method: "post",
    data: data
  });
}

// 入库
function supplySparepartInStoreInfoInStore(data) {
  return request({
    url: "/supplySparepartInStoreInfo/api/inStore",
    method: "post",
    data: data
  });
}

// 提交签收单
function supplySparepartInStoreInfoSubmitBill(data) {
  return request({
    url: "/supplySparepartInStoreInfo/api/submitBill",
    method: "post",
    data: data
  });
}

// #endregion

// #region 出库

// 出库-单据列表
function sparepartOutStoreInfoSlectPage(query) {
  return request({
    url: "/supplySparepartOutStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// 出库-出库类型为退掉出库之外的出库
function sparepartOutStoreInfoAddSpSave(data) {
  return request({
    url: "/supplySparepartOutStoreInfo/api/addBillSave",
    method: "post",
    data: data
  });
}

// 出库-单据列表(无分页)
function sparepartOutStoreInfoSlectList(query) {
  return request({
    url: "/supplySparepartOutStoreInfo/query/selectList",
    method: "get",
    params: query
  });
}

// 出库-单据详情
function sparepartOutStoreInfoSelectDetail(query) {
  return request({
    url: "/supplySparepartOutStoreInfo/query/selectDetail",
    method: "get",
    params: query
  });
}

// 出库-废弃单据状态
function sparepartOutStoreInfoCancelBill(data) {
  return request({
    url: "/supplySparepartOutStoreInfo/api/cancelBill",
    method: "post",
    data: data
  });
}

// 出库-保存单据
function sparepartOutStoreInfoSave(data) {
  return request({
    url: "/supplySparepartOutStoreInfo/api/save",
    method: "post",
    data: data
  });
}

// 出库-单据审核
function sparepartOutStoreInfoVerifyBill(data) {
  return request({
    url: "/supplySparepartOutStoreInfo/api/verifyBill",
    method: "post",
    data: data
  });
}

// 出库-单据提交
function sparepartOutStoreInfoSubmitBill(data) {
  return request({
    url: "/supplySparepartOutStoreInfo/api/submitBill",
    method: "post",
    data: data
  });
}

// 出库-根据供船单ID获取供船备件明细
function sparepartOutStoreInfoGetInStoreDetail(data) {
  return request({
    url: "/supplySparepartInStoreInfo/query/getInStoreDetail",
    method: "get",
    params: data
  });
}

// #endregion

// #region 库存管理

function supplySparePartInfoPage(query) {
  return request({
    url: "/supplySparePartInfo/query/selectCheckPageList",
    method: "get",
    params: query
  });
}

// #endregion

// #region 库位

// 批量保存
function supplyLocationInfoSaveList(data) {
  return request({
    url: "/supplyLocationInfo/api/saveList ",
    method: "post",
    data: data
  });
}

function supplyLocationInfoList(query) {
  return request({
    url: "/supplyLocationInfo/query/selectList",
    method: "get",
    params: query
  });
}
function supplyLocationInfoSave(data) {
  return request({
    url: "/supplyLocationInfo/api/save",
    method: "post",
    data: data
  });
}
function supplyLocationInfoDel(data) {
  return request({
    url: "/supplyLocationInfo/api/delete",
    method: "post",
    data: data
  });
}

// #endregion

// #region  库位
function selectCheckPageList(query) {
  return request({
    url: "/supplySparePartInfo/query/selectCheckPageList",
    method: "get",
    params: query
  });
}

// #endregion

// #region 库存盘点

// 查询库存盘点列表带分页
function supplySparepartCheckStoreInfoSelectPage(query) {
  return request({
    url: "/supplySparepartCheckStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}
// 新增库存盘点明细列表
function supplySparePartInfoCheckPageList(query) {
  return request({
    url: "/supplySparePartInfo/query/selectCheckPageList",
    method: "get",
    params: query
  });
}
// 新增库存盘点明细保存
function supplySparepartCheckStoreInfoSave(data) {
  return request({
    url: "/supplySparepartCheckStoreInfo/api/BilladdSpSave",
    method: "post",
    data: data
  });
}

// 库存盘点.详情查询
function supplySparepartCheckStoreInfoSelectDetail(data) {
  return request({
    url: "/supplySparepartCheckStoreInfo/query/selectDetail",
    method: "get",
    params: data
  });
}

// 库存盘点.保存单据详情
function supplySparepartCheckSave(data) {
  return request({
    url: "/supplySparepartCheckStoreInfo/api/save",
    method: "post",
    data: data
  });
}

// 库存盘点.提交单据详情
function supplySparepartCheckSubmitBill(data) {
  return request({
    url: "/supplySparepartCheckStoreInfo/api/submitBill",
    method: "post",
    data: data
  });
}

// 库存盘点.审核确认
function supplySparepartCheckStoreInfoVerifyBill(data) {
  return request({
    url: "/supplySparepartCheckStoreInfo/api/verifyBill",
    method: "post",
    data: data
  });
}

// #endregion

// #region 库存

function supplySparepartStoreInfoSelectPage(query) {
  return request({
    url: "supplySparepartStoreInfo/query/selectPage",
    method: "get",
    params: query
  });
}

// #endregion

// 备件质量反馈列表页
function supplyQualityPageList(query) {
  return request({
    url: "/sparepartFeedbackInfo/query/getPageBy",
    method: "get",
    params: query
  });
}
// 备件质量反馈列表页状态
function supplyQualityStatus(query) {
  return request({
    url: "/sparepartFeedbackInfo/query/getStatus",
    method: "get",
    params: query
  });
}
// 备件质量反馈操作历史
function supplyQualityOperateHis(query) {
  return request({
    url: "/sparepartFeedbackInfo/query/getBillOperateHis",
    method: "get",
    params: query
  });
}
// 备件质量反馈供应商列表
function supplyQualitySupplier(query) {
  return request({
    url: "/sparepartFeedbackInfo/query/getSupplierStatus",
    method: "get",
    params: query
  });
}
// 备件质量反馈详情
function supplyQualityDetail(query) {
  return request({
    url: "/sparepartFeedbackInfo/query/getOneById",
    method: "get",
    params: query
  });
}
// 备件质量反馈保存
function saveSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/saveEdit",
    method: "post",
    data: data
  });
}
//备件质量反馈提交
function submitSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/vesselSubmit",
    method: "post",
    data: data
  });
}
// 备件质量反馈确认
function confirmSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/confirm",
    method: "post",
    data: data
  });
}
// 备件质量反馈提交岸基
function bankSubmitSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/bankSubmit",
    method: "post",
    data: data
  });
}
// 备件质量反馈普通退回
function backSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/back",
    method: "post",
    data: data
  });
}
// 备件质量反馈审核之后再提交
function vesselSubmitSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/completeSubmit",
    method: "post",
    data: data
  });
}
// 备件质量反馈审核之后再确认
function completeConfirmSupplyQuality(data) {
  return request({
    url: "/sparepartFeedbackInfo/api/completeConfirm",
    method: "post",
    data: data
  });
}

export default {
  saveSupplyDeviceInfo,
  delSupplyDeviceInfo,
  selectSupplyDeviceInfoPage,
  selectSupplyDeviceInfoList,
  supplyDeviceInfoorder,
  deviceTree,
  getSupplyDeviceTypeList,
  saveSupplyDeviceType,
  delSupplyDeviceType,
  orderSupplyDeviceType,
  saveSupplySparePartInfo,
  deleteSupplySparePartInfo,
  spDeviceTree,
  selectSupplySparePartInfoPage,
  auditSupplySparePartInfo,
  fetchList,
  selectApplPageList,
  billaddSpSave,
  getApplTempById,
  updateApplTemp,
  delApplTemp,
  updateApplStatusbyId,
  approveApplbyId,
  splitApplBills,
  submitToWorkFlowAppl,
  selectListMoreAppl,
  sparepartExport,
  supplySparepartInStoreInfoPage,
  supplySparepartInStoreInfoDetail,
  supplySparepartInStoreInfoForceClose,
  supplySparepartInStoreInfoInStore,
  supplySparepartInStoreInfoSubmitBill,
  sparepartOutStoreInfoSlectPage,
  sparepartOutStoreInfoAddSpSave,
  sparepartOutStoreInfoSlectList,
  sparepartOutStoreInfoSelectDetail,
  sparepartOutStoreInfoCancelBill,
  sparepartOutStoreInfoSave,
  sparepartOutStoreInfoVerifyBill,
  sparepartOutStoreInfoSubmitBill,
  sparepartOutStoreInfoGetInStoreDetail,
  supplySparePartInfoPage,
  supplyLocationInfoSaveList,
  supplyLocationInfoList,
  supplyLocationInfoSave,
  supplyLocationInfoDel,
  selectCheckPageList,
  supplySparepartCheckStoreInfoSelectPage,
  supplySparePartInfoCheckPageList,
  supplySparepartCheckStoreInfoSave,
  supplySparepartCheckStoreInfoSelectDetail,
  supplySparepartCheckSave,
  supplySparepartCheckSubmitBill,
  supplySparepartCheckStoreInfoVerifyBill,
  supplySparepartStoreInfoSelectPage,
  supplyQualityPageList,
  supplyQualityStatus,
  supplyQualityOperateHis,
  supplyQualitySupplier,
  supplyQualityDetail,
  saveSupplyQuality,
  submitSupplyQuality,
  confirmSupplyQuality,
  bankSubmitSupplyQuality,
  backSupplyQuality,
  vesselSubmitSupplyQuality,
  completeConfirmSupplyQuality
}





