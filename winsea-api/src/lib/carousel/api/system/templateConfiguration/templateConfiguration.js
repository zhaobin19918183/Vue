import request from '../../../utils/request'

// 查询访船报告信息
export function getTemplateConfigurationInfoList(data) {
  return request({
    url: '/txTemplateConfiguration/query/queryTemplateConfigurationList',
    method: 'get',
    params: data
  })
}
// 保存访船报告信息
export function saveTemplateConfigurationInfo(data) {
  return request({
    url: '/txTemplateConfiguration/api/saveTemplateConfiguration',
    method: 'post',
    data
  })
}
// 删除访船报告信息
export function deleteTemplateConfigurationInfo(data) {
  return request({
    url: '/txTemplateConfiguration/api/moveTemplateConfiguration',
    method: 'post',
    data
  })
}
