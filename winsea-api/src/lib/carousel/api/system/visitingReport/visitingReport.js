import request from '../../../request'

// 新增访船报告
function saveAdd(data) {
  return request({
    url: '/visitVesselInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 一览查询
function getPageBy(params) {
  return request({
    url: '/visitVesselInfo/query/getPageBy',
    method: 'get',
    params: params
  })
}

// 修改访船报告
function saveEdit(data) {
  return request({
    url: '/visitVesselInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 详情查询
function getOneById(params) {
  return request({
    url: '/visitVesselInfo/query/getOneById',
    method: 'get',
    params: params
  })
}

// 获取状态列表
function getStatusListBy(params) {
  return request({
    url: '/visitVesselInfo/query/getStatusListBy',
    method: 'get',
    params: params
  })
}

// 缺陷类型查询
function getParameterCompanyDefectCategory(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}
// 语种
function getParameterCompanyLanguage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyLanguage',
    method: 'get',
    params: data
  })
}
// 批准单位
function getParameterCompanyApprovedUnit(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyApprovedUnit',
    method: 'get',
    params: data
  })
}

// 项目   检查要点
function queryThirdTemplateConfigurationList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryThirdTemplateConfigurationList',
    method: 'get',
    params: data
  })
}

// 项目   检查要点
function queryTemplateConfigurationList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryTemplateConfigurationList',
    method: 'get',
    params: data
  })
}
// 通过部门ID获取岸基发起人数据
function deptRoleList(params) {
  return request({
    url: '/role/query/deptRoleList',
    method: 'get',
    params: params
  });
}

// 获取全部职务
function getQueryList(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 获取数据字典分类信息
function items(data) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params: data
  })
}

// 根据职务查询职员
function findRole(data) {
  return request({
    url: '/staff/query/findRole',
    method: 'get',
    params: data
  })
}

// 获取操作历史
function getHisListBy(data) {
  return request({
    url: '/visitVesselInfo/query/getHisListBy',
    method: 'get',
    params: data
  })
}

// 删除船员评定
function removeEvaluate(data) {
  return request({
    url: '/visitVesselInfo/api/removeEvaluate',
    method: 'post',
    data
  })
}

// 废弃访船报告
function discard(data) {
  return request({
    url: '/visitVesselInfo/api/discard',
    method: 'post',
    data
  })
}

// 提交访船报告
function submit(data) {
  return request({
    url: '/visitVesselInfo/api/submit',
    method: 'post',
    data
  })
}

// 发送访船报告
function send(data) {
  return request({
    url: '/visitVesselInfo/api/send',
    method: 'post',
    data
  })
}

// 整改访船报告
function rectify(data) {
  return request({
    url: '/visitVesselInfo/api/rectify',
    method: 'post',
    data
  })
}

// 关闭访船报告
function closed(data) {
  return request({
    url: '/visitVesselInfo/api/closed',
    method: 'post',
    data
  })
}

// 船舶自查明细删除
function deleteSelfShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteSelfShipInspectionDefectList',
    method: 'post',
    data
  })
}

// 退回
function back(data) {
  return request({
    url: '/visitVesselInfo/api/back',
    method: 'post',
    data
  })
}

// 通过公司ID获取部门列表
function deptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  })
}

// 通过公司ID获取部门列表
function findVesselRole(data) {
  return request({
    url: '/role/query/findVesselRole',
    method: 'get',
    params: data
  })
}

// 添加下船船员弹出框信息
function getInVesselSeafarerList(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getInVesselSeafarerList',
    method: 'get',
    params: data
  })
}

export default {
  saveAdd,
  getPageBy,
  saveEdit,
  getOneById,
  getStatusListBy,
  getParameterCompanyDefectCategory,
  getParameterCompanyLanguage,
  getParameterCompanyApprovedUnit,
  queryThirdTemplateConfigurationList,
  queryTemplateConfigurationList,
  deptRoleList,
  getQueryList,
  items,
  findRole,
  getHisListBy,
  removeEvaluate,
  discard,
  submit,
  send,
  rectify,
  closed,
  deleteSelfShipInspectionDefectList,
  back,
  deptListByCompId,
  findVesselRole,
  getInVesselSeafarerList
}