/**
 * Created by jiachenpan on 16/11/18.
 */

function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

function validPassword(str) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  return reg.test(str)
}

function validUserVeriCode(str) {
  const reg = /^\d{6}$/
  return reg.test(str)
}

function validUserCellPhone(str) {
  const reg = /^1[34578]\d{9}$/
  return reg.test(str)
}

function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
function isNumber(str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}
function cardId(str) {
  const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(str)
}
// 正整数
function isNumberInteger(str) {
  const reg = /^[1-9]\d*$/
  return reg.test(str)
}
// 其他电话
function otherPhone(str) {
  const reg = /^[0-9-\-;]*$/
  return reg.test(str)
}
// 纯11位手机号码
function mobilePhone(str) {
  const reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
  return reg.test(str)
}
function convertTwoDigitNumber(value) {
  return value.replace(/[^\d.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
    .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
    .replace(/^\./g, '')
}
export default {
  isExternal,
  validPassword,
  validUserVeriCode,
  validUserCellPhone,
  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  validEmail,
  isString,
  isArray,
  isNumber,
  cardId,
  isNumberInteger,
  otherPhone,
  mobilePhone,
  convertTwoDigitNumber
}