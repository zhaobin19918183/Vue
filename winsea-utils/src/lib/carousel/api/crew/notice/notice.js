import request from '../../../request'

// 公告类型新增
function  noticeTypecreate(data) {
  return request({
    url: '/announcementType/api/create',
    method: 'post',
    data
  })
}

// 公告类型删除
function  noticeTyperemove(data) {
  return request({
    url: '/announcementType/api/remove',
    method: 'post',
    data
  })
}

// 公告类型修改
function  noticeTypechange(data) {
  return request({
    url: '/announcementType/api/change',
    method: 'post',
    data
  })
}

// 公告类型查看一览页
function  noticeTypelist(params) {
  return request({
    url: '/announcementType/query/list',
    method: 'get',
    params: params
  })
}

// 公告新增
function  noticecreate(data) {
  return request({
    url: '/announcementIssue/api/create',
    method: 'post',
    data
  })
}

// 公告删除
function  noticeremove(data) {
  return request({
    url: '/announcementIssue/api/remove',
    method: 'post',
    data
  })
}

// 公告修改
function  noticechagneInfo(data) {
  return request({
    url: '/announcementIssue/api/chagneInfo',
    method: 'post',
    data
  })
}

// 公告查看一览页
function  noticelist(params) {
  return request({
    url: '/announcementIssue/query/page',
    method: 'get',
    params: params
  })
}

// 获取当前用户
function  user(params) {
  return request({
    url: '/staff/query/getCurrentUserInfo',
    method: 'get',
    params: params
  })
}

// 用户发送范围
function  sendScope(params) {
  return request({
    url: '/announcementIssue/query/sendScope',
    method: 'get',
    params: params
  })
}

// 公告 - 查看详情
function  issueDetail(data) {
  return request({
    url: '/announcementIssue/query/annoInfo',
    method: 'get',
    params: data
  })
}

export default {
  noticeTypecreate,
  noticeTyperemove,
  noticeTypechange,
  noticeTypelist,
  noticecreate,
  noticeremove,
  noticechagneInfo,
  noticelist,
  user,
  sendScope,
  issueDetail


}