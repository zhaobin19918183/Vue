//index.js
// import validateLowerCase from './validateLowerCase'
// import validatenum from './numberInt'
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



const carousel={
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
    payList
}
export default carousel
