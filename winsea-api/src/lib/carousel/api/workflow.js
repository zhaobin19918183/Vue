import request from '../request'

/*登录*/
function textLogin(data) {
  return request({
    url: '/auth/api/login',
    method: 'post',
    data
  })
}

/*启动流程*/
function startInstance(data) {
  return request({
    url: '/workflow/api/startInstance',
    method: 'post',
    data
  })
}

/*获取任务列表*/
function tasks(data) {
  return request({
    url: '/workflow/query/tasks',
    method: 'get',
    params: data
  })
}

/*创建工作流*/
function create(data) {
  return request({
    url: '/workflow/api/create',
    method: 'post',
    data
  })
}

/*处理任务*/
function handle(data) {
  return request({
    url: '/workflow/api/handle',
    method: 'post',
    data
  })
}

/*获取任务审批历史*/
function taskHistories(data) {
  return request({
    url: '/workflowHistory/query/taskHistories',
    method: 'get',
    params: data
  })
}


/*获取用户申请列表*/
function applications(data) {
  return request({
    url: '/workflowHistory/query/applications',
    method: 'get',
    params: data
  })
}


/* 任务候选人信息*/
function candidateStaffInfo(data) {
  return request({
    url: '/flowTaskCandidate/query/candidateStaffInfo',
    method: 'get',
    params: data
  })
}

/* 任务签收*/
function claim(data) {
  return request({
    url: '/workflow/api/claim',
    method: 'post',
    data
  })
}

/* 获取当前活动任务*/
function activeTask(data) {
  return request({
    url: '/workflow/query/activeTask',
    method: 'get',
    params: data
  })
}
export default {
  textLogin,
  startInstance,
  tasks,
  create,
  handle,
  taskHistories,
  applications,
  candidateStaffInfo,
  claim,
  activeTask
}