import Cookies from 'js-cookie'

const TokenKey = 'wf-pf_admin-token'
const CompanyId = 'Company'

 function getToken() {
  return sessionStorage.getItem(TokenKey)
}

 function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

 function clearStorage() {
  return sessionStorage.clear();
}

 function getCompanyId() {
  return Cookies.get(CompanyId)
}

 function setCompanyId(token) {
  return Cookies.set(CompanyId, token)
}

export default{
  getToken,
  setToken,
  clearStorage,
  getCompanyId,
  setCompanyId
}