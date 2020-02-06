import request from '../../request';

function  queryRecycleData(params) {
  return request({
    url: '/recycleBin/query/records',
    params
  })
}
function  queryModules() {
  return request({
    url: '/recycleBin/query/moduleInfos',
  })
}
function  retrieveDeletedData(data) {
  return request({
    url: '/recycleBin/api/retrieveData',
    method: 'post',
    data
  })
}
function  removeDataPermanently(data) {
  return request({
    url: '/recycleBin/api/removePermanently',
    method: 'post',
    data
  })
}
