import request from '@/utils/request'

/*登录*/
export function textLogin(data) {
  return request({
    url: '/auth/api/login',
    method: 'post',
    data
  })
}

/*启动流程*/
export function startInstance(data) {
  return request({
    url: '/workflow/api/startInstance',
    method: 'post',
    data
  })
}

/*获取任务列表*/
export function tasks(data) {
  return request({
    url: '/workflow/query/tasks',
    method: 'get',
    params:  data
  })
}

/*创建工作流*/
export function create(data) {
  return request({
    url: '/workflow/api/create',
    method: 'post',
    data
  })
}

/*处理任务*/
export function handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data
  })
}

/*获取任务审批历史*/
export function taskHistories(data) {
  return request({
    url: '/workflowHistory/query/taskHistories',
    method: 'get',
    params:  data
  })
}


/*获取用户申请列表*/
export function applications(data) {
  return request({
    url: '/workflowHistory/query/applications',
    method: 'get',
    params:  data
  })
}
