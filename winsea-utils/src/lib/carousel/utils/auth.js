import Cookies from 'js-cookie'

const TokenKey = 'wf-pf_admin-token'
const CompanyId = 'Company'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function clearStorage() {
  return sessionStorage.clear();
}

export function getCompanyId() {
  return Cookies.get(CompanyId)
}

export function setCompanyId(token) {
  return Cookies.set(CompanyId, token)
}
