import request from '../request'

function getRoutes() {
  return request({
    url: '/routes',
    method: 'get'
  })
}

function getRoles() {
  return request({
    url: '/Wx_Role/GetPageByObjectList',
    method: 'get'
  })
}

function addRole(data) {
  return request({
    url: '/Wx_Role/Insert',
    method: 'post',
    data
  })
}

function updateRole(data) {
  return request({
    url: `/Wx_Role/Update`,
    method: 'post',
    data
  })
}

function updateRoleIsuse(data) {
  return request({
    url: `/Wx_Role/updateRoleIsuse`,
    method: 'post',
    data
  })
}

function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}
export default {
  getRoutes,
  getRoles,
  addRole,
  updateRole,
  updateRoleIsuse,
  deleteRole,
}