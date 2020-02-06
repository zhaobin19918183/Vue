import request from '../../../utils/request'

// 公告类型新增
export function noticeTypecreate(data) {
  return request({
    url: '/announcementType/api/create',
    method: 'post',
    data
  })
}

// 公告类型删除
export function noticeTyperemove(data) {
  return request({
    url: '/announcementType/api/remove',
    method: 'post',
    data
  })
}

// 公告类型修改
export function noticeTypechange(data) {
  return request({
    url: '/announcementType/api/change',
    method: 'post',
    data
  })
}

// 公告类型查看一览页
export function noticeTypelist(params) {
  return request({
    url: '/announcementType/query/list',
    method: 'get',
    params: params
  })
}

// 公告新增
export function noticecreate(data) {
  return request({
    url: '/announcementIssue/api/create',
    method: 'post',
    data
  })
}

// 公告删除
export function noticeremove(data) {
  return request({
    url: '/announcementIssue/api/remove',
    method: 'post',
    data
  })
}

// 公告修改
export function noticechagneInfo(data) {
  return request({
    url: '/announcementIssue/api/chagneInfo',
    method: 'post',
    data
  })
}

// 公告查看一览页
export function noticelist(params) {
  return request({
    url: '/announcementIssue/query/page',
    method: 'get',
    params: params
  })
}

// 获取当前用户
export function user(params) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: params
  })
}

// 用户发送范围
export function sendScope(params) {
  return request({
    url: '/announcementIssue/query/sendScope',
    method: 'get',
    params: params
  })
}

// 公告 - 查看详情
export function issueDetail(data) {
  return request({
    url: '/announcementIssue/query/annoInfo',
    method: 'get',
    params: data
  })
}
