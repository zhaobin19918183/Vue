import request from '../../../utils/request'

// 新增访船报告
export function saveAdd(data) {
  return request({
    url: '/visitVesselInfo/api/saveAdd',
    method: 'post',
    data
  })
}

// 一览查询
export function getPageBy(params) {
  return request({
    url: '/visitVesselInfo/query/getPageBy',
    method: 'get',
    params: params
  })
}

// 修改访船报告
export function saveEdit(data) {
  return request({
    url: '/visitVesselInfo/api/saveEdit',
    method: 'post',
    data
  })
}

// 详情查询
export function getOneById(params) {
  return request({
    url: '/visitVesselInfo/query/getOneById',
    method: 'get',
    params: params
  })
}

// 获取状态列表
export function getStatusListBy(params) {
  return request({
    url: '/visitVesselInfo/query/getStatusListBy',
    method: 'get',
    params: params
  })
}

// 缺陷类型查询
export function getParameterCompanyDefectCategory (data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyDefectCategory',
    method: 'get',
    params: data
  })
}
// 语种
export function getParameterCompanyLanguage(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyLanguage',
    method: 'get',
    params: data
  })
}
// 批准单位
export function getParameterCompanyApprovedUnit(data) {
  return request({
    url: '/txParameterCompany/query/getParameterCompanyApprovedUnit',
    method: 'get',
    params: data
  })
}

// 项目   检查要点
export function queryThirdTemplateConfigurationList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryThirdTemplateConfigurationList',
    method: 'get',
    params: data
  })
}

// 项目   检查要点
export function queryTemplateConfigurationList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryTemplateConfigurationList',
    method: 'get',
    params: data
  })
}
// 通过部门ID获取岸基发起人数据
export function deptRoleList(params) {
  return request({
    url: '/role/query/deptRoleList',
    method: 'get',
    params: params
  });
}

// 获取全部职务
export function getQueryList(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 获取数据字典分类信息
export function items(data) {
  return request({
    url: '/dictionary/query/items',
    method: 'get',
    params: data
  })
}

// 根据职务查询职员
export function findRole(data) {
  return request({
    url: '/staff/query/findRole',
    method: 'get',
    params: data
  })
}

// 获取操作历史
export function getHisListBy(data) {
  return request({
    url: '/visitVesselInfo/query/getHisListBy',
    method: 'get',
    params: data
  })
}

// 删除船员评定
export function removeEvaluate(data) {
  return request({
    url: '/visitVesselInfo/api/removeEvaluate',
    method: 'post',
    data
  })
}

// 废弃访船报告
export function discard(data) {
  return request({
    url: '/visitVesselInfo/api/discard',
    method: 'post',
    data
  })
}

// 提交访船报告
export function submit(data) {
  return request({
    url: '/visitVesselInfo/api/submit',
    method: 'post',
    data
  })
}

// 发送访船报告
export function send(data) {
  return request({
    url: '/visitVesselInfo/api/send',
    method: 'post',
    data
  })
}

// 整改访船报告
export function rectify(data) {
  return request({
    url: '/visitVesselInfo/api/rectify',
    method: 'post',
    data
  })
}

// 关闭访船报告
export function closed(data) {
  return request({
    url: '/visitVesselInfo/api/closed',
    method: 'post',
    data
  })
}

// 船舶自查明细删除
export function deleteSelfShipInspectionDefectList(data) {
  return request({
    url: '/txShipInspectionInfo/api/deleteSelfShipInspectionDefectList',
    method: 'post',
    data
  })
}

// 退回
export function back(data) {
  return request({
    url: '/visitVesselInfo/api/back',
    method: 'post',
    data
  })
}

// 通过公司ID获取部门列表
export function deptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  })
}

// 通过公司ID获取部门列表
export function findVesselRole(data) {
  return request({
    url: '/role/query/findVesselRole',
    method: 'get',
    params: data
  })
}

// 添加下船船员弹出框信息
export function getInVesselSeafarerList(data) {
  return request({
    url: '/crewBatchShiftsPlanInfo/query/getInVesselSeafarerList',
    method: 'get',
    params: data
  })
}