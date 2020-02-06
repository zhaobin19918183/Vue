// 航海资料管理-申请api接口
import request from '../../../utils/request';

// 航海资料申请 判断是否是船端
export function isVesselTerminal() {
  return request({
    url: '/system/query/isVesselTerminal',
    method: 'get',
  })
}
// 航海资料申请 一览页接口 (原申请单)
export function getInfoListInListTable(data) {
  return request({
    url: '/navigationApplyPur/query/getPageBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 一览页过滤状态集合
export function getStatusInDialog(data) {
  return request({
    url: '/navigationApplyPur/query/getStatusListBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取申请类型
export function getApplicationType(data) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取新增页申请明细的航海资料分类的树状结构数据
export function getApplicationTree(data) {
  return request({
    url: '/navigationType/query/getNavigationTypes',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取分类下的航海资料表格数据
export function getTableDataWithTree(data) {
  return request({
    url: '/navigationInfo/query/getPageByNavigationInfo',
    method: 'get',
    params: data
  })
}
// 航海资料申请 新增申请
export function saveApplication(data) {
  return request({
    url: '/navigationApplyPur/api/saveAdd',
    method: 'post',
    data
  })
}
// 航海资料申请 新增申请的单位下拉选数据
export function getUnitInSelect(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 航海资料申请 航海资料申请详情
export function getApplicationDetail(data) {
  return request({
    url: '/navigationApplyPur/query/getOneById',
    method: 'get',
    params: data
  })
}
// 航海资料申请 航海资料申请修改
export function saveApplicationEdit(data) {
  return request({
    url: '/navigationApplyPur/api/saveEdit',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请提交申请
export function submitApplication(data) {
  return request({
    url: '/navigationApplyPur/api/apply',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请废弃
export function discardApplication(data) {
  return request({
    url: '/navigationApplyPur/api/saveDiscard',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请确认
export function confirmApplication(data) {
  return request({
    url: '/navigationApplyPur/api/confirm',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请退回
export function sendBackApplication(data) {
  return request({
    url: '/navigationApplyPur/api/sendBack',
    method: 'post',
    data
  })
}
// 航海资料申请 航海资料申请提交
export function submitTheWholeApplication(data) {
  return request({
    url: '/navigationApplyPur/api/submit',
    method: 'post',
    data
  })
}
// 航海资料申请 获取航海资料已存在的单据
export function getExisting(data) {
  return request({
    url: '/navigationApplyPur/query/getListExistBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取原单据数据
export function getFormer(data) {
  return request({
    url: '/navigationApplyPur/query/getListBy',
    method: 'get',
    params: data
  })
}
// 航海资料申请 获取操作历史
export function getOperateHis(data) {
  return request({
    url: '/navigationApplyPur/query/getOperateHis',
    method: 'get',
    params: data
  })
}
// 航海资料申请 审核
export function handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data: data
  })
}
// 航海资料申请 获取审核历史
export function getExamineHis(data) {
  return request({
    url: '/navigationApplyPur/query/getExamineHis',
    method: 'get',
    params: data
  })
}
// 航海资料申请 导入
export function applyImport(data) {
  return request({
    url: '/applyImport/api/applyImport',
    method: 'post',
    data: data
  })
}
// 查询公司模板
export function positionInfo(params) {
  return request({
    url: '/importSeafarer/query/positionInfo',
    method: 'get',
    params
  })
}
// 删除明细
export function removeDetails(data) {
  return request({
    url: '/navigationApplyPur/api/removeDetails',
    method: 'post',
    data: data
  })
}
// 已有单据提示
export function getListExist(params) {
  return request({
    url: '/navigationApplyPur/query/getListExistBy',
    method: 'get',
    params
  })
}
// 关联单据
export function getApplyRelation(params) {
  return request({
    url: '/navigationApplyPur/query/getApplyRelation',
    method: 'get',
    params
  })
}
