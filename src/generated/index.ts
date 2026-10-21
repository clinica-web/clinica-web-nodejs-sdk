// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import { createMainAcls } from "./main-acls/main-acls";
import { createMainAdjustmentMaterials } from "./main-adjustmentMaterials/main-adjustmentMaterials";
import { createMainAdministrativeExpenses } from "./main-administrativeExpenses/main-administrativeExpenses";
import { createMainAdministrativeExpensesCategory } from "./main-administrativeExpensesCategory/main-administrativeExpensesCategory";
import { createMainAnalysisCodes } from "./main-analysisCodes/main-analysisCodes";
import { createMainAnalyzerDevices } from "./main-analyzerDevices/main-analyzerDevices";
import { createMainAssurances } from "./main-assurances/main-assurances";
import { createMainBeds } from "./main-beds/main-beds";
import { createMainCities } from "./main-cities/main-cities";
import { createMainClinics } from "./main-clinics/main-clinics";
import { createMainConsumptionMaterials } from "./main-consumptionMaterials/main-consumptionMaterials";
import { createMainContainers } from "./main-containers/main-containers";
import { createMainContractors } from "./main-contractors/main-contractors";
import { createMainDepartments } from "./main-departments/main-departments";
import { createMainDictionaries } from "./main-dictionaries/main-dictionaries";
import { createMainDiscountTemplates } from "./main-discountTemplates/main-discountTemplates";
import { createMainDrugs } from "./main-drugs/main-drugs";
import { createMainEhealth } from "./main-ehealth/main-ehealth";
import { createMainFiles } from "./main-files/main-files";
import { createMainGoodsReceipts } from "./main-goodsReceipts/main-goodsReceipts";
import { createMainGroupPackages } from "./main-groupPackages/main-groupPackages";
import { createMainHospitalDivisions } from "./main-hospitalDivisions/main-hospitalDivisions";
import { createMainHospitalizationAppointments } from "./main-hospitalizationAppointments/main-hospitalizationAppointments";
import { createMainHospitalizationCategories } from "./main-hospitalizationCategories/main-hospitalizationCategories";
import { createMainHospitalizations } from "./main-hospitalizations/main-hospitalizations";
import { createMainHospitals } from "./main-hospitals/main-hospitals";
import { createMainIcd10 } from "./main-icd10/main-icd10";
import { createMainLaboratories } from "./main-laboratories/main-laboratories";
import { createMainMarketingTypes } from "./main-marketingTypes/main-marketingTypes";
import { createMainMaterialDocuments } from "./main-materialDocuments/main-materialDocuments";
import { createMainMaterialLots } from "./main-materialLots/main-materialLots";
import { createMainMaterialManufacturers } from "./main-materialManufacturers/main-materialManufacturers";
import { createMainMaterialMovements } from "./main-materialMovements/main-materialMovements";
import { createMainMonitoringIndicators } from "./main-monitoringIndicators/main-monitoringIndicators";
import { createMainNomenclatureAccessGroups } from "./main-nomenclatureAccessGroups/main-nomenclatureAccessGroups";
import { createMainNomenclatureGroups } from "./main-nomenclatureGroups/main-nomenclatureGroups";
import { createMainNomenclaturePrices } from "./main-nomenclaturePrices/main-nomenclaturePrices";
import { createMainNomenclatures } from "./main-nomenclatures/main-nomenclatures";
import { createMainOrders } from "./main-orders/main-orders";
import { createMainPackageCategories } from "./main-packageCategories/main-packageCategories";
import { createMainPackageNomenclature } from "./main-packageNomenclature/main-packageNomenclature";
import { createMainPackagePrice } from "./main-packagePrice/main-packagePrice";
import { createMainPackages } from "./main-packages/main-packages";
import { createMainPackageTags } from "./main-packageTags/main-packageTags";
import { createMainPatientPositions } from "./main-patientPositions/main-patientPositions";
import { createMainPatients } from "./main-patients/main-patients";
import { createMainPrePrerecords } from "./main-prePrerecords/main-prePrerecords";
import { createMainPrerecords } from "./main-prerecords/main-prerecords";
import { createMainPrices } from "./main-prices/main-prices";
import { createMainReferralSalepackPackage } from "./main-referralSalepackPackage/main-referralSalepackPackage";
import { createMainReferralSalepackPackages } from "./main-referralSalepackPackages/main-referralSalepackPackages";
import { createMainReferringDoctors } from "./main-referringDoctors/main-referringDoctors";
import { createMainRefferalMessage } from "./main-refferalMessage/main-refferalMessage";
import { createMainReports } from "./main-reports/main-reports";
import { createMainRoleCategories } from "./main-roleCategories/main-roleCategories";
import { createMainRoles } from "./main-roles/main-roles";
import { createMainRooms } from "./main-rooms/main-rooms";
import { createMainSalaryRules } from "./main-salaryRules/main-salaryRules";
import { createMainSaleMaterials } from "./main-saleMaterials/main-saleMaterials";
import { createMainSalepackExecutors } from "./main-salepackExecutors/main-salepackExecutors";
import { createMainSalepacks } from "./main-salepacks/main-salepacks";
import { createMainSalesInvoice } from "./main-salesInvoice/main-salesInvoice";
import { createMainSalesInvoiceNomenclature } from "./main-salesInvoiceNomenclature/main-salesInvoiceNomenclature";
import { createMainStockBalances } from "./main-stockBalances/main-stockBalances";
import { createMainStorages } from "./main-storages/main-storages";
import { createMainTaxCodes } from "./main-taxCodes/main-taxCodes";
import { createMainTransferMaterials } from "./main-transferMaterials/main-transferMaterials";
import { createMainTransferOrders } from "./main-transferOrders/main-transferOrders";
import { createMainTypeDoctors } from "./main-typeDoctors/main-typeDoctors";
import { createMainUnitTypeConversions } from "./main-unitTypeConversions/main-unitTypeConversions";
import { createMainUnitTypes } from "./main-unitTypes/main-unitTypes";
import { createMainUsers } from "./main-users/main-users";
import { createMainUsersPositions } from "./main-usersPositions/main-usersPositions";
import { createMainWardCategories } from "./main-wardCategories/main-wardCategories";
import { createMainWards } from "./main-wards/main-wards";
import { createMainWebhooks } from "./main-webhooks/main-webhooks";
import { createOnlineCities } from "./online-cities/online-cities";
import { createOnlineClinics } from "./online-clinics/online-clinics";
import { createOnlineContracts } from "./online-contracts/online-contracts";
import { createOnlineDoctors } from "./online-doctors/online-doctors";
import { createOnlineNotification } from "./online-notification/online-notification";
import { createOnlinePatientFamily } from "./online-patientFamily/online-patientFamily";
import { createOnlinePatients } from "./online-patients/online-patients";
import { createOnlinePrices } from "./online-prices/online-prices";
import { createOnlinePromotions } from "./online-promotions/online-promotions";
import { createOnlineReferringDoctors } from "./online-referringDoctors/online-referringDoctors";
import { createOnlineRooms } from "./online-rooms/online-rooms";
import { createOnlineSchedulers } from "./online-schedulers/online-schedulers";
import { createOnlineSpecializations } from "./online-specializations/online-specializations";
import { createReferringReferring } from "./referring-referring/referring-referring";
import type { Transport } from "../transport/transport";
export function createResources(
  main: Transport,
  online: Transport,
  referring: Transport,
) {
  return {
    acls: createMainAcls(main),
    adjustmentMaterials: createMainAdjustmentMaterials(main),
    administrativeExpenses: createMainAdministrativeExpenses(main),
    administrativeExpensesCategory:
      createMainAdministrativeExpensesCategory(main),
    analysisCodes: createMainAnalysisCodes(main),
    analyzerDevices: createMainAnalyzerDevices(main),
    assurances: createMainAssurances(main),
    beds: createMainBeds(main),
    cities: createMainCities(main),
    clinics: createMainClinics(main),
    consumptionMaterials: createMainConsumptionMaterials(main),
    containers: createMainContainers(main),
    contractors: createMainContractors(main),
    departments: createMainDepartments(main),
    dictionaries: createMainDictionaries(main),
    discountTemplates: createMainDiscountTemplates(main),
    drugs: createMainDrugs(main),
    ehealth: createMainEhealth(main),
    files: createMainFiles(main),
    goodsReceipts: createMainGoodsReceipts(main),
    groupPackages: createMainGroupPackages(main),
    hospitalDivisions: createMainHospitalDivisions(main),
    hospitalizationAppointments: createMainHospitalizationAppointments(main),
    hospitalizationCategories: createMainHospitalizationCategories(main),
    hospitalizations: createMainHospitalizations(main),
    hospitals: createMainHospitals(main),
    icd10: createMainIcd10(main),
    laboratories: createMainLaboratories(main),
    marketingTypes: createMainMarketingTypes(main),
    materialDocuments: createMainMaterialDocuments(main),
    materialLots: createMainMaterialLots(main),
    materialManufacturers: createMainMaterialManufacturers(main),
    materialMovements: createMainMaterialMovements(main),
    monitoringIndicators: createMainMonitoringIndicators(main),
    nomenclatureAccessGroups: createMainNomenclatureAccessGroups(main),
    nomenclatureGroups: createMainNomenclatureGroups(main),
    nomenclaturePrices: createMainNomenclaturePrices(main),
    nomenclatures: createMainNomenclatures(main),
    orders: createMainOrders(main),
    packageCategories: createMainPackageCategories(main),
    packageNomenclature: createMainPackageNomenclature(main),
    packagePrice: createMainPackagePrice(main),
    packages: createMainPackages(main),
    packageTags: createMainPackageTags(main),
    patientPositions: createMainPatientPositions(main),
    patients: createMainPatients(main),
    prePrerecords: createMainPrePrerecords(main),
    prerecords: createMainPrerecords(main),
    prices: createMainPrices(main),
    referralSalepackPackage: createMainReferralSalepackPackage(main),
    referralSalepackPackages: createMainReferralSalepackPackages(main),
    referringDoctors: createMainReferringDoctors(main),
    refferalMessage: createMainRefferalMessage(main),
    reports: createMainReports(main),
    roleCategories: createMainRoleCategories(main),
    roles: createMainRoles(main),
    rooms: createMainRooms(main),
    salaryRules: createMainSalaryRules(main),
    saleMaterials: createMainSaleMaterials(main),
    salepackExecutors: createMainSalepackExecutors(main),
    salepacks: createMainSalepacks(main),
    salesInvoice: createMainSalesInvoice(main),
    salesInvoiceNomenclature: createMainSalesInvoiceNomenclature(main),
    stockBalances: createMainStockBalances(main),
    storages: createMainStorages(main),
    taxCodes: createMainTaxCodes(main),
    transferMaterials: createMainTransferMaterials(main),
    transferOrders: createMainTransferOrders(main),
    typeDoctors: createMainTypeDoctors(main),
    unitTypeConversions: createMainUnitTypeConversions(main),
    unitTypes: createMainUnitTypes(main),
    users: createMainUsers(main),
    usersPositions: createMainUsersPositions(main),
    wardCategories: createMainWardCategories(main),
    wards: createMainWards(main),
    webhooks: createMainWebhooks(main),
    referring: createReferringReferring(referring),
    online: {
      cities: createOnlineCities(online),
      clinics: createOnlineClinics(online),
      contracts: createOnlineContracts(online),
      doctors: createOnlineDoctors(online),
      notification: createOnlineNotification(online),
      patientFamily: createOnlinePatientFamily(online),
      patients: createOnlinePatients(online),
      prices: createOnlinePrices(online),
      promotions: createOnlinePromotions(online),
      referringDoctors: createOnlineReferringDoctors(online),
      rooms: createOnlineRooms(online),
      schedulers: createOnlineSchedulers(online),
      specializations: createOnlineSpecializations(online),
    },
  };
}
