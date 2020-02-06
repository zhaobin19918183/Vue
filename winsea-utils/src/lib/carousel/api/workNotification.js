import request from '@/utils/request'

// 获取工作通知分页查询
function  getQueryPage(data) {
  return request({
    url: '/notificationStaffTodoTask/api/getQueryPage',
    method: 'get',
    params: data
  })
}

// 获取工作类型 分类总数
function  countAmount(data) {
  return request({
    url: '/notificationStaffTodoTask/query/countAmount',
    method: 'get',
    params: data
  })
}

// 消息已查看接口
function  msgConfirmed(data) {
  return request({
    url: '/notificationStaffTodoTask/api/confirm',
    method: 'post',
    data
  })
}

// 通知长连接url
function  noticeWsUrl() {
  return `${
    process.env.VUE_APP_BASE_API
  }/ws`
}

function  handleLater(data) {
  return request({
    url: '/notificationStaffTodoTask/api/changeShowTime',
    method: 'post',
    data
  })
}
