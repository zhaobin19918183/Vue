var itemArr = [
  {
    "key":"ELSEIF",
    "value":"ELSE IF"
  },{
    "key":"IF{",
    "value":"IF("
  },{
    "key":"}{",
    "value":"){"
  },{
    "key":")(",
    "value":"){"
  },{
    "key":"ELSE(",
    "value":"ELSE{"
  },{
    "key":")ELSE",
    "value":"}ELSE"
  },{
    "key":"≥",
    "value":">="
  },{
    "key":"≤",
    "value":"<="
  },{
    "key":"×",
    "value":"*"
  },{
    "key":"∧",
    "value":"&&"
  },{
    "key":"∨",
    "value":"||"
  },{
    "key":"=",
    "value":"=="
  },{
    "key":"÷",
    "value":"/"
  },{
    "key":"{",
    "value":"{ return "
  },{
    "key":"≠",
    "value":"!="
  },{
    "key":"int",
    "value":"parseInt"
  },{
    "key":"mod",
    "value":"%"
  }
]
//删除字符
function funTrim(str,char) {
  var strArr=str.split(char),str="";
  for(var a=0;a<strArr.length;a++){
    str=str+strArr[a];
  }
  return str;
}
//替换字符
function changeLetter(str,olds,news){
  var strArr=str.split(olds),str="";
  for(var a=0;a<strArr.length;a++){
    var e=""
    if(a!=0)e=news

    str=str+e+strArr[a];

  }
  return str;
}
//递归取科目名做变量
function loop(sss,dic){

  if(sss.indexOf('[')!=-1){
    var fi=sss.indexOf('[')+1
    var se=sss.indexOf(']')
    var c=sss.substring(fi,se)
    dic[c]=true;
    sss=sss.substring(se+1,sss.length)
    return loop(sss,dic)
  }else{
    return dic
  }
}
//主方法
function init(formula,salaryArr,subjectObj){
  //需要替换转译的字符，key为原字符，value为替换字符，需根据业务补充
  var changeDic=itemArr
  var str=formula;
  var sss=str,dic={},par='',parStr="";
  //取字符串中出现的所有科目名存到字符串par内以,分割
  dic=loop(sss,dic);
  for(var a in dic){
    par=par+a+","
  }
  par=par.substring(0,par.length-1);
  //去除所有空格
  var salaryStr=funTrim(str," ")
  //去除所有THEN
  salaryStr=funTrim(salaryStr,"THEN")
  //遍历字典，查找含有需替换的字符替换
  for(var a=0;a<changeDic.length;a++){
    salaryStr=changeLetter(salaryStr,changeDic[a]['key'],changeDic[a]["value"]);
  }
  //去除科目名的[]符号，以便直接使用科目名做变量名
  salaryStr=funTrim(salaryStr,"[")
  salaryStr=funTrim(salaryStr,"]")
  //字符小写
  salaryStr=salaryStr.toLowerCase();
  //因为上面的changeLetter方法替换字符的缺陷，不能替换最后一个出现的字符,最后一个)手动替换或添加}
  if(salaryStr.substring(salaryStr.length-1,salaryStr.length)==")"){
    salaryStr=salaryStr.substring(0,salaryStr.length-1)+"}"
  }else{
    salaryStr=salaryStr+"}";
  }
  //如果输入的公式不包含任何判断，直接返回计算
  if(salaryStr.indexOf("return")==-1){
    salaryStr="{ return "+salaryStr
  }
  //把parseint转换成parseInt
  if(salaryStr.indexOf("parseint") > -1){
    salaryStr = salaryStr.replace(new RegExp("parseint","gm"),"parseInt")
  }
  salaryStr = salaryStr.replace(/<==/g,'<=')
  salaryStr = salaryStr.replace(/>==/g,'>=')
  //salaryStr为转译后的js公式，用跟科目名相同的中文做变量名
  eval("salaryStr=function("+subjectObj+"){ "+salaryStr+" }")
  var parstrnew=salaryArr
  return eval("salaryStr("+parstrnew+")")
}

// 取出所有的项
function formula(formula){
  //需要替换转译的字符，key为原字符，value为替换字符，需根据业务补充
  let changeDic = itemArr
  let str = formula
  var sss=str,dic={},par='',parStr="";
  //取字符串中出现的所有科目名存到字符串par内以,分割
  dic=loop(sss,dic);
  for(var a in dic){
    par=par+a+","
  }
  par=par.substring(0,par.length-1);
  return par
}
export default {
  init,
  formula
}
