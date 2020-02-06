function issueDateMethod(issueDate, validDate, flag, birthday) {
  var passPortExpirationDate = ""
  if (issueDate.indexOf("/") >= 0) {
    issueDate = issueDate.replaceAll("/", "-");
  } else if (issueDate.indexOf(".") >= 0) {
    issueDate = issueDate.replaceAll("\\.", "-");
  } else if (issueDate.indexOf("_") >= 0) {
    issueDate = issueDate.replaceAll("_", "-");
  }
  if (issueDate && validDate) {
    validDate= validDate.replace(/[^0-9]/ig,"");
    var issueDateVal;
    if (validDate != "65") {
      issueDateVal = new Date(issueDate)
      issueDateVal =
        new Date(
          issueDateVal.getFullYear() + parseInt(validDate),
          issueDateVal.getMonth(),
          issueDateVal.getDate()
        );
    } else if (validDate == "65" && birthday) {
      issueDateVal = new Date(birthday)
      issueDateVal =
        new Date(
          issueDateVal.getFullYear() + 65,
          issueDateVal.getMonth(),
          issueDateVal.getDate()
        );
    }
    // 含当天
    if (flag) {
      issueDateVal.setDate((issueDateVal.getDate() + 1) - 1);
    }
    // 不含当天
    else{
      issueDateVal.setDate((issueDateVal.getDate() + 1) - 1 * 2);
    }
    var year = issueDateVal.getFullYear();
    var mStr = new String(issueDateVal.getMonth() + 1);
    var dStr = new String(issueDateVal.getDate());
    if (mStr.length == 1) {
      mStr = "0" + mStr;
    }
    if (dStr.length == 1) {
      dStr = "0" + dStr;
    }
    passPortExpirationDate = year + "-" + mStr + "-" + dStr;
  }
  return passPortExpirationDate;
}
export default {
  issueDateMethod,
}
