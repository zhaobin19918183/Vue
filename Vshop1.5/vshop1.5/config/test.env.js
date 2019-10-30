'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"',
    ENV_CONFIG:'"test"',
    BASE_URL: '"http://zz.wsmtec.com/pay"'
})
