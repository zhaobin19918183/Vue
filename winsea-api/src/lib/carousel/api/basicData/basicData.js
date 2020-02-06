import request from '../../request';

// 获取当前登录用户信息
 function getCurrentUserInfo(data) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: data
  });
}

// 通过公司ID获取船舶列表
 function vesselListByCompId(data) {
  return request({
    url: '/staff/query/vesselListByCompId',
    method: 'get',
    params: { compId: data }
  });
}

// 获取公司下所有部门 岸端
 function getDeptListByCompId(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: { compId: data, vesselBankFlag: 'B' }
  });
}

// 获取公司下所有部门 岸端
 function getDeptListByCompIdNew(data) {
  return request({
    url: '/staff/query/deptListByCompId',
    method: 'get',
    params: data
  });
}


// 获取公司下所有部门 船端
 function getVesselDeptByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getVesselDeptByCompId',
    method: 'get',
    params: { compId: data }
  });
}

// 查询部门下职员 岸端
 function getStaffListByDeptId(data) {
  return request({
    url: '/staff/query/getStaffListByDeptId',
    method: 'get',
    params: data
  });
}

// 根据公司ID获取船上所有职务 船端
 function getRoleDutyByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getRoleDutyByCompId',
    method: 'get',
    params: data
  });
}

// 根据公司Id获取角色列表 船端
 function getVessleRoleByCompId(data) {
  return request({
    url: '/commonDeptRole/query/getVessleRoleByCompId',
    method: 'get',
    params: data
  });
}

// 查询部门下职员 船端
 function getRoleListByDeptId(data) {
  return request({
    url: '/commonDeptRole/query/getRoleListByDeptId',
    method: 'get',
    params: data
  });
}

// 查询公司详细信息
 function companyInfo(params) {
  return request({
    url: '/company/query/companyInfo',
    method: 'get',
    params: params
  });
}

// 查询公司常量基础数据
 function getParameterTenant(params) {
  return request({
    url: '/parameterCompany/query/parameterTenant',
    method: 'get',
    params: params
  });
}

// 查询公司财务变量基础数据
 function getFinanceParameter(params) {
  return request({
    url: '/financeParameter/query/getListByCondition',
    method: 'get',
    params: params
  });
}
 function addShip(adaptIdList, budgetMonth, deptId) {
  return request({
    url: '/financeMonthBudget/query/getInitDetailInfo',
    method: 'get',
    params: { adaptIdList, budgetMonth, deptId }
  });
}

// 根据用户查询所在公司的船舶

 function getUserVesselList(data) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: { compId: data }
  });
}

// 获取所有船舶
 function getUserVesselListByStatus(params) {
  return request({
    url: '/vessel/query/getUserVesselListByStatus',
    method: 'get',
    params: params
  });
}

// 通过部门ID获取职务
 function getRole(params) {
  return request({
    url: '/role/query/role',
    method: 'get',
    params: params
  });
}

// 根据公司ID获取职务列表
 function getCompRole(params) {
  return request({
    url: '/role/query/roleList',
    method: 'get',
    params: params
  });
}

// 判断当前客户端是否是船端
 function isVesselTerminal(params) {
  return request({
    url: '/system/query/isVesselTerminal',
    method: 'get',
    params: params
  });
}

// 判断当前客户端是否是岸基
 function isLandBased(params) {
  return request({
    url: '/system/query/isLandBased',
    method: 'get',
    params: params
  });
}

// 查询当前租户服务类型
 function findTenantServiceType(params) {
  return request({
    url: '/tenant/query/findTenantServiceType',
    method: 'get',
    params: params
  });
}

// 判断当前租户在运营后台是否选择code
 function attributeService(params) {
  return request({
    url: '/pluginService/query/attributeService',
    method: 'get',
    params: params
  });
}
export default {
  getCurrentUserInfo,
  vesselListByCompId,
  getDeptListByCompId,
  getDeptListByCompIdNew,
  getVesselDeptByCompId,
  getStaffListByDeptId,
  getRoleDutyByCompId,
  getVessleRoleByCompId,
  getRoleListByDeptId,
  companyInfo,
  getParameterTenant,
  getFinanceParameter,
  addShip,
  getUserVesselList,
  getUserVesselListByStatus,
  getRole,
  getCompRole,
  isVesselTerminal,
  isLandBased,
  findTenantServiceType,
  attributeService
}