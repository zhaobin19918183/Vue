var OSS = require('ali-oss')

/**
   * 地址1:http://47.103.84.220:20000/file/query/interimCredentials
   * 地址1参数:
   *    "securityToken": "CAIS9gF1q6Ft5B2yfSjIr4jhHvDzv5VbzoqgSBWAsWYFbstGoablijz2IH9NfnJrBu0dsPgxlG5V5v8dlqNsSpleSEWBatBrtjWuLJB/Jtivgde8yJBZorvHcDHhKnyW9cvWZPqDO7G5U/yxalfCuzZuyL/hD1uLVECkNpv75vwKac8MDEvCGlggPtpNIRZ4o8I3LGbYMe3XUiTnmW3NFkFlyGEe4CFdkf3hk5zAt0CB1QamkbdE/dXLT8L6P5U2DvBWSMyo2eF6TK3F3RNL5gJCnKUM1/Mdo2yc4YzGXQUPs0vbY7OL6LxwLQlia6E9ALVUVU87J1+kUIcagAFRXSnWLl1eQFT66kUzCI5fsJfQgQ4LiVIP/Cz5E0P9st8e9inbXpIwzXfFK9mGG2rXA4UN3e4rgKZU8ZBcgrfjh84w/WY3kiXdEor5KxOYkHyY5nEitO5u95WF4Dm0ofXH2nd1e/CENy9XM0Nk2RDmcO6w6vBMHrUtX29CsQesRQ==",
        "accessKeySecret": "8wr2sENKxumTZRpgAerWLW78ZdLf5VgCs7sfQMpmDPMf",
        "accessKeyId": "STS.NKTUJGRJzyHKJ31UfPbDjNcNh",
        "expiration": "2019-06-19T11:09:21Z"
   *
   地址2:http://47.103.84.220:20000/file/query/accessConfig
   地址2参数:
        "bucket": "winsea-saas-test",
        "endpoint": "oss-cn-shanghai.aliyuncs.com"
   * */
export function client(ossInter, ossAccessConfig) {
  try {
    var client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: ossInter.accessKeyId,
      accessKeySecret: ossInter.accessKeySecret,
      stsToken: ossInter.securityToken,
      bucket: ossAccessConfig.bucket,
      endpoint: ossAccessConfig.endpoint
    }) // 后端提供数据
    return client
  } catch (error) {}
}
