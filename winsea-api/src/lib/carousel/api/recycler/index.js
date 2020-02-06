import request from '../../utils/request';

export function queryRecycleData(params) {
  return request({
    url: '/recycleBin/query/records',
    params
  })
}
export function queryModules() {
  return request({
    url: '/recycleBin/query/moduleInfos',
  })
}
export function retrieveDeletedData(data) {
  return request({
    url: '/recycleBin/api/retrieveData',
    method: 'post',
    data
  })
}
export function removeDataPermanently(data) {
  return request({
    url: '/recycleBin/api/removePermanently',
    method: 'post',
    data
  })
}
