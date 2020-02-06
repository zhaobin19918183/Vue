// 航海资料管理-申请api接口
import request from '../../../request';

// 航海资料申请 判断是否是船端
function  isVesselTerminal() {
  return request({
    url: '/system/query/isVesselTerminal',
    method: 'get',
  })
}
// 航海资料申请 一览页接口 (原申请单)
function  getInfoListInListTable(data) {
  return request({
    url: '/navigationApplyPur/query/getPageBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 一览页过滤状态集合
function  getStatusInDialog(data) {
  return request({
    url: '/navigationApplyPur/query/getStatusListBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取申请类型
function  getApplicationType(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取新增页申请明细的航海资料分类的树状结构数据
function  getApplicationTree(data) {
  return request({
    url: '/navigationType/query/getNavigationTypes',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取分类下的航海资料表格数据
function  getTableDataWithTree(data) {
  return request({
    url: '/navigationInfo/query/getPageByNavigationInfo',
    method: 'get',
    params: data
  })
}
// 航海资料申请 新增申请
function  saveApplication(data) {
  return request({
    url: '/navigationApplyPur/api/saveAdd',
    method: 'post',
    data
  })
}
// 航海资料申请 新增申请的单位下拉选数据
function  getUnitInSelect(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 航海资料申请 航海资料申请详情
function  getApplicationDetail(data) {
  return request({
    url: '/navigationApplyPur/query/getOneById',
    method: 'get',
    params: data
  })
}
// 航海资料申请 航海资料申请修改
function  saveApplicationEdit(data) {
  return request({
    url: '/navigationApplyPur/api/saveEdit',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请提交申请
function  submitApplication(data) {
  return request({
    url: '/navigationApplyPur/api/apply',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请废弃
function  discardApplication(data) {
  return request({
    url: '/navigationApplyPur/api/saveDiscard',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请确认
function  confirmApplication(data) {
  return request({
    url: '/navigationApplyPur/api/confirm',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请退回
function  sendBackApplication(data) {
  return request({
    url: '/navigationApplyPur/api/sendBack',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请提交
function  submitTheWholeApplication(data) {
  return request({
    url: '/navigationApplyPur/api/submit',
    method: 'post',
    data
  })
}
// 航海资料申请 获取航海资料已存在的单据
function  getExisting(data) {
  return request({
    url: '/navigationApplyPur/query/getListExistBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取原单据数据
function  getFormer(data) {
  return request({
    url: '/navigationApplyPur/query/getListBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取操作历史
function  getOperateHis(data) {
  return request({
    url: '/navigationApplyPur/query/getOperateHis',
    method: 'get',
    params: data
  })
}
// 航海资料申请 审核
function  handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 航海资料申请 获取审核历史
function  getExamineHis(data) {
  return request({
    url: '/navigationApplyPur/query/getExamineHis',
    method: 'get',
    params: data
  })
}
// 航海资料申请 导入
function  applyImport(data) {
  return request({
    url: '/applyImport/api/applyImport',
    method: 'post',
    data: data
  })
}
// 查询公司模板
function  positionInfo(params) {
  return request({
    url: '/importSeafarer/query/positionInfo',
    method: 'get',
    params
  })
}
// 删除明细
function  removeDetails(data) {
  return request({
    url: '/navigationApplyPur/api/removeDetails',
    method: 'post',
    data: data
  })
}
// 已有单据提示
function  getListExist(params) {
  return request({
    url: '/navigationApplyPur/query/getListExistBy',
    method: 'get',
    params
  })
}
// 关联单据
function  getApplyRelation(params) {
  return request({
    url: '/navigationApplyPur/query/getApplyRelation',
    method: 'get',
    params
  })
}
