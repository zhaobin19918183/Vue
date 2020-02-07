import request from '../request'

// 公告-首页使用 获取前三条
function  issueList(data) {
  return request({
    url: '/announcementIssue/query/list',
    method: 'get',
    params: data
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
export default{
  issueList,
  issueDetail
}
