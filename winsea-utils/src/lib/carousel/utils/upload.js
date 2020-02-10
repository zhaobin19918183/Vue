
const OSS = require('ali-oss')
// 获取OSS临时上传凭证
function interimCredentials(data) {
  return request({
    url: '/file/query/interimCredentials',
    method: 'get',
    params: data
  })
}

// 获取OSS访问配置
function accessConfig(data) {
  return request({
    url: '/file/query/accessConfig',
    method: 'get',
    params: data
  })
}
function client(data) {
  //后端提供数据
  interimCredentials().then((response) => {
    console.log('获取OSS临时上传凭证', response)
    let client = new OSS({
      accessKeyId: response.data.accessKeyId,
      accessKeySecret: response.data.accessKeySecret,
      stsToken: response.data.securityToken,
    })
  })

  accessConfig().then((response) => {
    console.log('获取OSS访问配置', response)
    let client = new OSS({
      region: response.data.bucket, // oss地区
      bucket: response.data.endpoint
    })
  })
  //后端提供数据
/*  return new OSS({
    region: data.region,  //oss-cn-shenzhen.aliyuncs.com
    accessKeyId: data.accessKeyId,
    accessKeySecret: data.accessKeySecret,
    bucket: data.bucket
  })*/
}
export default{
  client
}
