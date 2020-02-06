import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/Wx_Role/GetPageByObjectList',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/Wx_Role/Insert',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: `/Wx_Role/Update`,
    method: 'post',
    data
  })
}

export function updateRoleIsuse(data) {
  return request({
    url: `/Wx_Role/updateRoleIsuse`,
    method: 'post',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/${id}`,
    method: 'delete'
  })
}
