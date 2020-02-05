/**

* 判断是否为整数

*/

function validatenum(num, type) {

    let regName = /[^\d.]/g;
    
    if (type == 1) {
    
    if (!regName.test(num)) return false;
    
    } else if (type == 2) {
    
    regName = /[^\d]/g;
    
    if (!regName.test(num)) return false;
    
    }
    
    return true;
    
    }
    module.exports = validatenum

    // Allow use of default import syntax in TypeScript
    module.exports.default = validatenum