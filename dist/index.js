"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: Will return an Emirates ID Validation
* @Param {string}
* @Return {boolean}
*/
function validate(identification) {
    const regex = /^784[0-9]{4}[0-9]{7}[0-9]{1}$/;
    return regex.test(identification.replace(/-|\s/g, ""));
}
exports.default = validate;
