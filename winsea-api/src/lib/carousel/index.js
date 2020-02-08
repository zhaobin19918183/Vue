import login from './api/login/login'
import workflow from './api/workflow'
import user from './api/user'
import basicData from './api/basicData/basicData'
import assigingCompany from './api/crew/baseData/assigingCompany'
import baseDataContract from './api/crew/baseData/baseDataContract'
import certificateGrade from './api/crew/baseData/certificateGrade'
import certificateParameter from './api/crew/baseData/certificateParameter'
import navigationArea from './api/crew/baseData/navigationArea'
import crewDuty from './api/crew/baseData/crewDuty'
import downBoardReason from './api/crew/baseData/downBoardReason'
import employmentType from './api/crew/baseData/employmentType'
import maintenanceWarnDayInfo from './api/crew/baseData/maintenanceWarnDayInfo'
import protection from './api/crew/baseData/protection'
import carrerTraining from './api/crew/carrerTraining/carrerTraining'
import cashFund from './api/crew/cashFund'
import contractManagement from './api/crew/contractManagement/contractManagement'
import examinationManagement from './api/crew/examinationManagement/examinationManagement'
import interviewManagement from './api/crew/interviewManagement/interviewManagement'
import laborSupplies from './api/crew/laborSupplies/laborSupplies'
import protectionEntry from './api/crew/laborSupplies/protectionEntry'
import protectionInventory from './api/crew/laborSupplies/protectionInventory'
import notice from './api/crew/notice/notice'
import intermediateExamination from './api/crew/onBoardExamination/intermediateExamination'
import onBoardExamination from './api/crew/onBoardExamination/onBoardExamination'
import preJobTraining from './api/crew/preJobTraining/preJobTraining'
import statisticalAnalysis from './api/crew/statisticalAnalysis/statisticalAnalysis'
import assessmentTraining from './api/crew/trainingManagement/assessmentTraining/assessmentTraining'
import systemTraining from './api/crew/trainingManagement/systemTraining/systemTraining'
import crewCertificate from './api/crew/crewCertificate'
import crewDeploy from './api/crew/crewDeploy'
import crewManageMent from './api/crew/crewManageMent'
import payList from './api/crew/payList'
import budgetSummary from './api/finance/annualBudget/budgetSummary'
import budgetSummaryZj from './api/finance/annualBudget/budgetSummaryZj'
import deptBudget from './api/finance/annualBudget/deptBudget'
import deptBudgetZj from './api/finance/annualBudget/deptBudgetZj'
import monthAndYearZj from './api/finance/budgetSummary/monthAndYearZj'
import monthContrast from './api/finance/budgetSummary/monthContrast'
import yearContrast from './api/finance/budgetSummary/yearContrast'
import expendList from './api/finance/expendCost/expendList'
import expendPayment from './api/finance/expendCost/expendPayment'
import expendReimburse from './api/finance/expendCost/expendReimburse'
import expendTravel from './api/finance/expendCost/expendTravel'
import expendZjPayment from './api/finance/expendCost/expendZjPayment'
import reserveManagement from './api/finance/expendCost/reserveManagement'
import expendCount from './api/finance/expendCount/expendCount'
import inOperationa from './api/finance/inOperation/inOperationa'
import financialSubject from './api/finance/other/financialSubject'
import managementSubject from './api/finance/other/managementSubject'
import other from './api/finance/other/other'
import financebasicData from './api/finance/basicData'//finance对应的basicData 
import exchangeRate from './api/finance/exchangeRate'//
import personalReceipt from './api/finance/personalReceipt'//
import settleAccount from './api/finance/settleAccount'//
import knowledge from './api/knowledge/knowledge'//
import clock from './api/maintenance/clock/clock'//
import equipmentManagementApi from './api/maintenance/equipmentManagement/equipmentManagementApi'//
import planArrangementApi from './api/maintenance/planArrangement/planArrangementApi'
import maintenancebasicData from './api/maintenance/basicData'//设备基础数据
import equipmentClock from './api/maintenance/equipmentClock'//
import inspectionReport from './api/maintenance/inspectionReport'//
import maintenanceHistory from './api/maintenance/maintenanceHistory'//
import maintenancePlan from './api/maintenance/maintenancePlan'//
import voyagePlan from './api/monitorManager/voyagePlan/voyagePlan'//
import voyageTask from './api/monitorManager/voyageTask/voyageTask'//
import reportList from './api/monitorManager/reportList'//
import application from './api/navigation/application/application'//
import navigationMaterialApi from './api/navigation/navigationMaterial/navigationMaterialApi'
import shipSupplyApi from './api/navigation/shipSupply/shipSupplyApi'
import applicationRefueling from './api/oil/applicationRefueling'
import oilbasicData from './api/oil/basicData'
import fuelConsMonth from './api/oil/fuelConsMonth'
import fuelConsVoyage from './api/oil/fuelConsVoyage'
import qualityFeedback from './api/oil/qualityFeedback'
//////////////////////
import retrofitReport from './api/oil/retrofitReport'
import stainOilRecord from './api/oil/stainOilRecord'
import recycler from './api/recycler/index'
import serviceProviderMgr from './api/serviceProvider/serviceProviderMgr'
import contractApi from './api/shipRepairManagement/baseData/contractApi'
import projedtType from './api/shipRepairManagement/baseData/projedtType'
import repairType from './api/shipRepairManagement/baseData/repairType'
import templateApi from './api/shipRepairManagement/baseData/templateApi'
import acceptanceSheetApi from './api/shipRepairManagement/factoryRepairManagement/factoryAcceptanceSheet/acceptanceSheetApi'
import factoryProjectApi from './api/shipRepairManagement/factoryRepairManagement/factoryProject/factoryProjectApi'
import factoryProjectBudgetApi from './api/shipRepairManagement/factoryRepairManagement/factoryProjectBudget/factoryProjectBudgetApi'
import requisitionFactoryApi from './api/shipRepairManagement/factoryRepairManagement/requisition/requisitionFactoryApi'
import selfRepairsettlementApi from './api/shipRepairManagement/selfRepairManagement/settlementApi'//*
import acceptanceApi from './api/shipRepairManagement/voyageRepairManagement/acceptance/acceptanceApi'
import projectApi from './api/shipRepairManagement/voyageRepairManagement/project/projectApi'
import projectBudgetApi from './api/shipRepairManagement/voyageRepairManagement/projectBudget/projectBudgetApi'
import qualityApi from './api/shipRepairManagement/voyageRepairManagement/quality/qualityApi'
import repairsettlementApi from './api/shipRepairManagement/voyageRepairManagement/repairVoyageSettlementInfo/settlementApi'//*
import requisitionApi from './api/shipRepairManagement/voyageRepairManagement/requisition/requisitionApi'
import settlementsApi from './api/shipRepairManagement/voyageRepairManagement/settlements/settlementApi'//*
import statisticsApi from './api/shipRepairManagement/voyageRepairManagement/totalExpenses/statisticsApi'
import materielApi from './api/supply/materielApi'
import supplyApi from './api/supply/supplyApi'
import supplyPublicApi from './api/supply/supplyPublicApi'
import systembasicData from './api/system/basicData/basicData'//*
import systemFolder from './api/system/basicData/systemFolder'
import defectSummaryStatistics from './api/system/defectSummaryStatistics/defectSummaryStatistics'
import nonConformReport from './api/system/nonConformReport/nonConformReport'
import companyInspection from './api/system/shipInspection/companyInspection'
import shipInspection from './api/system/shipInspection/shipInspection'
import shipInspectionFsc from './api/system/shipInspection/shipInspectionFsc'
import shipInspectionPsc from './api/system/shipInspection/shipInspectionPsc'
import archivedHistory from './api/system/systemFile/archivedHistory'
import systemFile from './api/system/systemFile/systemFile'
import warn from './api/system/systemFile/warn'
import templateConfiguration from './api/system/templateConfiguration/templateConfiguration'
import visitingReport from './api/system/visitingReport/visitingReport'
import visitingReportfy from './api/system/visitingReport/visitingReportfy'
import notificationCircular from './api/system/notificationCircular'
import announcement from './api/announcement'
import annualProcurementStatistics from './api/annualProcurementStatistics'
import bi from './api/bi'
import certificate from './api/certificate'
import dataManageMent from './api/dataManageMent'
import finance from './api/finance'
import procurementBasic from './api/procurementBasic'
import procurementMap from './api/procurementMap'
import procurementMaterial from './api/procurementMaterial'
import procurementSpare from './api/procurementSpare'
import role from './api/role'
import shipInformation from './api/shipInformation'
import templateform from './api/templateform'
import test from './api/test'
import upload from './api/upload'
import workNotification from './api/workNotification'
const carousel = {
    basicData,
    login,
    workflow,
    user,
    assigingCompany,
    baseDataContract,
    certificateGrade,
    certificateParameter,
    crewDuty,
    downBoardReason,
    employmentType,
    maintenanceWarnDayInfo,
    navigationArea,
    protection,
    carrerTraining,
    cashFund,
    contractManagement,
    examinationManagement,
    interviewManagement,
    laborSupplies,
    protectionEntry,
    protectionInventory,
    notice,
    intermediateExamination,
    onBoardExamination,
    preJobTraining,
    statisticalAnalysis,
    assessmentTraining,
    systemTraining,
    crewCertificate,
    crewDeploy,
    crewManageMent,
    payList,
    budgetSummary,
    budgetSummaryZj,
    deptBudget,
    deptBudgetZj,
    monthAndYearZj,
    monthContrast,
    yearContrast,
    expendList,
    expendPayment,
    expendReimburse,
    expendTravel,
    expendZjPayment,
    reserveManagement,
    expendCount,
    inOperationa,
    financialSubject,
    managementSubject,
    other,
    financebasicData,
    exchangeRate,
    personalReceipt,
    settleAccount,
    knowledge,
    clock,
    equipmentManagementApi,
    planArrangementApi,
    maintenancebasicData,
    equipmentClock,
    inspectionReport,
    maintenanceHistory,
    maintenancePlan,
    maintenanceReport,
    voyagePlan,
    voyageTask,
    reportList,
    application,
    navigationMaterialApi,
    shipSupplyApi,
    applicationRefueling,
    oilbasicData,
    fuelConsMonth,
    fuelConsVoyage,
    qualityFeedback,
    retrofitReport,
    stainOilRecord,
    recycler,
    serviceProviderMgr,
    contractApi,
    projedtType,
    repairType,
    templateApi,
    acceptanceSheetApi,
    factoryProjectApi,
    factoryProjectBudgetApi,
    requisitionFactoryApi,
    selfRepairsettlementApi,
    acceptanceApi,
    projectApi,
    projectBudgetApi,
    qualityApi,
    repairsettlementApi,
    requisitionApi,
    settlementsApi,
    statisticsApi,
    materielApi,
    supplyApi,
    supplyPublicApi,
    systembasicData,
    systemFolder,
    defectSummaryStatistics,
    nonConformReport,
    companyInspection,
    shipInspection,
    shipInspectionFsc,
    shipInspectionPsc,
    archivedHistory,
    systemFile,
    warn,
    templateConfiguration,
    visitingReport,
    visitingReportfy,
    notificationCircular,
    announcement,
    annualProcurementStatistics,
    bi,
    certificate,
    dataManageMent,
    finance,
    procurementBasic,
    procurementMap,
    procurementMaterial,
    procurementSpare,
    role,
    shipInformation,
    templateform,
    test,
    upload,
    workNotification


}
export default carousel
