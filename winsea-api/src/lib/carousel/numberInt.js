/**

* 判断是否为整数

*/

function validateInt(num, type) {

    let regName = /[^\d.]/g;

    if (type == 1) {

        if (!regName.test(num)) return false;

    } else if (type == 2) {

        regName = /[^\d]/g;

        if (!regName.test(num)) return false;

    }

    return true;

}

function validateLowerCase(str) {

    const reg = /^[a-z]+$/
    console.log(str)
    return reg.test(str)

}
const validatenum={validateLowerCase,validateInt}

module.exports = validatenum

// Allow use of default import syntax in TypeScript
module.exports.default = validatenum