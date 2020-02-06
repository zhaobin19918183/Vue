import request from '../../request'

// 工资科目 --设置
function  salaryItemSet(data) {
  return request({
    url: '/crewSalaryItemInfo/query/querySalaryItemSetting',
    method: 'get',
    params: data
  })
}

// 工资科目 --设置（get 币种/结算精度/月份天数）
function  getListByCrew(data) {
  return request({
    url: '/crewParameter/query/getListByCrewParmaeter',
    method: 'get',
    params: data
  })
}

// 工资科目 --save 设置
function  saveSetting(data) {
  return request({
    url: '/crewSalaryItemInfo/api/saveSalaryItemSetting',
    method: 'post',
    data
  })
}

// 工资科目 --save 新增
function  saveSalaryItem(data) {
  return request({
    url: '/crewSalaryItemInfo/api/saveSalaryItemInfo',
    method: 'post',
    data
  })
}

// 工资科目 --一览列表
function  queryInfoList(data) {
  return request({
    url: '/crewSalaryItemInfo/query/querySalaryItemInfoList',
    method: 'get',
    params: data
  })
}

// 工资科目 --列表一览 --edit
function  queryInfoListEdit(data) {
  return request({
    url: '/crewSalaryItemInfo/api/updateSalaryItemInfo',
    method: 'post',
    data
  })
}

// 工资科目 --列表一览 --del
function  queryInfoListDel(data) {
  return request({
    url: '/crewSalaryItemInfo/api/moveSalaryItemInfo',
    method: 'post',
    data
  })
}

// 个人工资标准
function  queryMonth(data) {
  return request({
    url: '/crewSalaryStandardInfo/query/querySalaryStandardMonth',
    method: 'get',
    params: data
  })
}

// 个人工资标准  --工资信息列表
function  StandardInfo(data) {
  return request({
    url: '/crewSalaryStandardInfo/query/querySalaryStandardInfoByVesselId',
    method: 'get',
    params: data
  })
}

//上下船日期精确到小时
function  findTenantTYpe(data) {
  return request({
    url: '/tenantPluginAttribute/query/findTenantTYpe',
    method: 'get',
    params: data
  })
}

// 银行账号
function  getSeafarerBankList(data) {
  return request({
    url: '/crewSeafarerBankAccountInfo/query/getSeafarerBankList',
    method: 'get',
    params: data
  })
}

// 个人工资标准  --币种
function  queryCurrency(data) {
  return request({
    url: '/crewSalaryItemInfo/query/querySalaryItemSettingByVesselId',
    method: 'get',
    params: data
  })
}

// 个人工资标准  --新增 保存
function  saveSalaryInfo(data) {
  return request({
    url: '/crewSalaryStandardInfo/api/saveSalaryStandardInfo',
    method: 'post',
    data
  })
}

// 个人工资标准  --一览列表
function  querySalaryList(data) {
  return request({
    url: '/crewSalaryStandardInfo/query/querySalaryStandardInfoList',
    method: 'get',
    params: data
  })
}

// 个人工资标准  --编辑页面--btn废弃
function  destorySalaryList(data) {
  return request({
    url: '/crewSalaryStandardInfo/api/updateSalaryStandardInfoStatus',
    method: 'post',
    data
  })
}

// 个人工资标准  --编辑页面--查询列表
function  querySalaryListDetail(data) {
  return request({
    url: '/crewSalaryStandardInfo/query/querySalaryStandardInfo',
    method: 'get',
    params: data
  })
}

// 工资标准 (外派公司)
function  getOutCompPageByCondition(data) {
  return request({
    url: '/ownedStandardInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}
// 工资标准 (外派公司)
function  getOwnedStandardDetail(data) {
  return request({
    url: '/ownedStandardInfo/query/getOwnedStandardDetail',
    method: 'get',
    params: data
  })
}
// 工资标准删除 (外派公司)
function  removeOwnedStandardInfo(data) {
  return request({
    url: '/ownedStandardInfo/api/removeOwnedStandardInfo',
    method: 'post',
    data
  })
}

// 个人工资标准  --编辑页面--列表删除
function  moveSalaryListDetail(data) {
  return request({
    url: '/crewSalaryStandardInfo/query/moveSalaryStandardInfo',
    method: 'post',
    data
  })
}

// 个人工资标准  --编辑页面--提交保存
function  saveSalaryListDetail(data) {
  return request({
    url: '/crewSalaryStandardInfo/api/updateSalaryStandardInfo',
    method: 'post',
    data
  })
}

// 个人工资标准  --编辑按钮 查询标准是否应用
function  getSettlemenCount(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalarySettlemenCount',
    method: 'get',
    params: data
  })
}

//工资结算  --一览列表
function  getSettlementList(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getPageByCondition',
    method: 'get',
    params: data
  })
}

//工资结算  --新增页面---月份查询
function  getSettlementMonth(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalarySettlementMonth',
    method: 'get',
    params: data
  })
}

//工资结算  --新增页面---工资信息列表查询
function  getStandardInfo(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalaryStandardInfo',
    method: 'get',
    params: data
  })
}

//工资结算  --新增页面---save
function  saveStandardInfo(data) {
  return request({
    url: '/crewSalarySettlementInfo/api/saveAdd',
    method: 'post',
    data
  })
}

//工资结算  --编辑页面 ---save
function  saveEditStandardInfo(data) {
  return request({
    url: '/crewSalarySettlementInfo/api/saveEdit',
    method: 'post',
    data
  })
}

//工资结算  --新增页面---submit
function  submitStandardInfo(data) {
  return request({
    url: '/crewSalarySettlementInfo/api/saveSubmit',
    method: 'post',
    data
  })
}

//工资结算  --新增页面---destory
function  destoryStandardInfo(data) {
  return request({
    url: '/crewSalarySettlementInfo/api/saveDiscard',
    method: 'post',
    data
  })
}

// 资金结算  --编辑页面--查询列表
function  getSettlementInfo(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalarySettlementInfo',
    method: 'get',
    params: data
  })
}

//工资结算  历史记录
function  getHistorys(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getOperateHistorys',
    method: 'get',
    params: data
  })
}

//保存工资科目结算公式信息
function  updateSalaryFormula(data) {
  return request({
    url: '/crewSalaryItemInfo/api/updateSalaryFormula',
    method: 'post',
    data
  })
}

// 基础数据维国籍
function  getNationtyList(params) {
  return request({
    url: '/crewNationality/query/getList',
    method: 'get',
    params
  })
}

// 职务列表
function  crewDutygetQueryList(data) {
  return request({
    url: '/dutyParameter/query/getQueryList',
    method: 'get',
    params: data
  })
}

// 工资科目 --下拉框（新增科目页面）
function  querySalaryItemForFormula(data) {
  return request({
    url: '/crewSalaryItemInfo/query/querySalaryItemForFormula',
    method: 'get',
    params: data
  })
}

/*2019-11-07 iseaco薪资*/

// 查询职务工资标准一览
function  getCompanyStandardDetail(data) {
  return request({
    url: '/crewSalaryCompanyStandardInfo/query/getCompanyStandardDetail',
    method: 'get',
    params: data
  })
}

// 保存职务工资标准
function  saveCompanyStandardInfo(data) {
  return request({
    url: '/crewSalaryCompanyStandardInfo/api/saveCompanyStandardInfo',
    method: 'post',
    data
  })
}

// 保存职务工资标准
function  getStandardItemList(data) {
  return request({
    url: '/crewSalaryItemInfo/query/getStandardItemList',
    method: 'get',
    params: data
  })
}

// 查询结算列显示科目
function  getShowItemInfo(data) {
  return request({
    url: '/crewSalarySettlementShowItem/query/getShowItemInfo',
    method: 'get',
    params: data
  })
}

// 查询结算列显示科目
function  getNewSalarySettlementInfoContract(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getNewSalarySettlementInfoContract',
    method: 'get',
    params: data
  })
}

// 查询结算列显示科目
function  saveCompanyStandardInfoSubject(data) {
  return request({
    url: '/crewSalarySettlementShowItem/api/saveCompanyStandardInfo',
    method: 'post',
    data
  })
}

// 编辑页查询工资结算明细-派遣合同分支
function  getSalarySettlementEditInfoContract(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalarySettlementEditInfoContract',
    method: 'get',
    params: data
  })
}

// 查看页查询工资结算明细-派遣合同分支
function  getSalarySettlementLabelInfoContract(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalarySettlementLabelInfoContract',
    method: 'get',
    params: data
  })
}

// 查看页查询工资结算明细-派遣合同分支
function  getSalarySettlementMonthContract(data) {
  return request({
    url: '/crewSalarySettlementInfo/query/getSalarySettlementMonthContract',
    method: 'get',
    params: data
  })
}

export default{
  salaryItemSet,
  getListByCrew,
  saveSetting,
  saveSalaryItem,
  queryInfoList,
  queryInfoListEdit,
  queryInfoListDel,
  queryMonth,
  StandardInfo,
  findTenantTYpe,
  getSeafarerBankList,
  queryCurrency,
  saveSalaryInfo,
  querySalaryList,
  destorySalaryList,
  querySalaryListDetail,
  getOutCompPageByCondition,
  getOwnedStandardDetail,
  removeOwnedStandardInfo,
  moveSalaryListDetail,
  saveSalaryListDetail,
  getSettlemenCount,
  getSettlementList,
  getSettlementMonth,
  getStandardInfo,
  saveStandardInfo,
  saveEditStandardInfo,
  submitStandardInfo,
  destoryStandardInfo,
  getSettlementInfo,
  getHistorys,
  updateSalaryFormula,
  getNationtyList,
  crewDutygetQueryList,
  querySalaryItemForFormula,
  getCompanyStandardDetail,
  saveCompanyStandardInfo,
  getStandardItemList,
  getShowItemInfo,
  getNewSalarySettlementInfoContract,
  saveCompanyStandardInfoSubject,
  getSalarySettlementEditInfoContract,
  getSalarySettlementLabelInfoContract,
  getSalarySettlementMonthContract


}

