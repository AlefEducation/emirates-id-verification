/**
* @Method: Will return an Emirates ID Validation
* @Param {string}
* @Return {boolean}
*/
function validate (identification: string) : boolean {
  const regex: RegExp = /^784[0-9]{4}[0-9]{7}[0-9]{1}$/;
  return regex.test(identification.replace(/-|\s/g,""))
}

export default validate;