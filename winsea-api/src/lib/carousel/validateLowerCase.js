function validateLowerCase(str) {

  const reg = /^[a-z]+$/
  console.log(str)
  return reg.test(str)
  
}


module.exports = validateLowerCase

// Allow use of default import syntax in TypeScript
module.exports.default = validateLowerCase