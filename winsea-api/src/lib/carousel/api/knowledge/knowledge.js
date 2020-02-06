// 基础数据
import request from '../../utils/request'
// 查询知识库信息一览列表
export function getPageByCondition(data) {
  return request({
    url: '/knowledgebaseInfo/query/page',
    method: 'get',
    params: data
  })
}
// 新增知识库信息
export function createNewKnowledge(data) {
  return request({
    url: '/knowledgebaseInfo/api/createOrUpdate',
    method: 'post',
    data: data
  })
}
// 分类下拉
export function customDropDown(data) {
  return request({
    url: '/customDropDown/query/customDropDown',
    method: 'get',
    params: data
  })
}
// 详情页
export function getKnowledgeInfo(data) {
  return request({
    url: '/knowledgebaseInfo/query/one',
    method: 'get',
    params: data
  })
}
// 删除数据
export function deleteInfo(data) {
  return request({
    url: '/knowledgebaseInfo/api/remove',
    method: 'post',
    data: data
  })
}
// 下载附件
export function downLoadFiles(data) {
  return request({
    url: '/knowledgebaseInfo/api/downloadAppendixs',
    method: 'get',
    responseType: 'blob',
    withCredentials: true,
    params: data
  })
}