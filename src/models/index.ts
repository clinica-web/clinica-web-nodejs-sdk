// Generated from openapi/swagger.json and sdk-config.json. Do not edit.

export type AclDto = {
  AclId?: number;
  ItemName?: string | null;
  PublicName?: string | null;
  Roles?: Array<RolesDto> | null;
};

export type AclEditableDto = {
  ItemName?: string | null;
  PublicName?: string | null;
};

export type ActiveReferalSalepackPackage = {
  Id?: number;
  MainSalepackId?: number;
  MainPackageId?: number;
  MainPackageName?: string | null;
  MainPackageCode?: string | null;
  MainPackageDateCr?: string;
  MainDoctorName?: string | null;
  ReferalPackageId?: number;
  ReferalPackageName?: string | null;
  ReferalPackageCode?: string | null;
  ReferalPackageDateWhen?: string | null;
  PackageType?: PackageType;
  AssuranceAproveState?: AssuranceAproveEnum;
  Status?: ReferalSalepackPackageStatus;
  PrerecordId?: number | null;
  PrerecordDateStart?: string | null;
  ReferringDoctorId?: number | null;
};

/**
 * Information about planned service\package for prerecord
 */
export type AdditionalPackagePrerecordOnlineDto = {
  /**
   * Package identifier
   */
  PackageId: number;
  /**
   * Name of package\service
   */
  Name: string;
  /**
   * Code of package\service
   */
  Code: string;
  /**
   * Default pacakge duration (in minutes)
   */
  DefaultInterval?: number;
  PackageType: PackageType;
  /**
   * Planned count of services (default is 1)
   */
  Count?: number;
  /**
   * Approximate cost of 1 package\service
   */
  Cost?: number;
};

export type AddPatientPackageRequestModel = {
  SalepackId?: number;
  PackageId?: number;
  readonly IsValid?: boolean;
};

export type AddReferalSalepackPackageByIcd10RequestModel = {
  SalepackId?: number;
  Icd10Ids?: Array<number> | null;
};

/**
 * Values:
 *
 * - `1`: CodesFromLaboratory
 *
 * - `2`: OwnPrinter
 *
 *
 */
export type AnalysisCodeWorkMode = 1 | 2;

export type AnalysisEditModelPatientCard = {
  /**
   * Salepack (order) identifier
   */
  SalepackId?: number;
  /**
   * Date of order
   */
  DateCr?: string;
  /**
   * Time of laboratory test bio material assembling
   */
  AssembledAt?: string;
  /**
   * Analysis identifier
   */
  AnalysisId?: number;
  /**
   * Clinic\branch identifier where examination was given
   */
  ClinicId?: number;
  /**
   * Indicates if analysis contains patalogy (some of results are out of norm)
   */
  Pathology?: boolean;
  /**
   * Indicates if responsibe person confirmed that pathology is present and it is not a false positive
   */
  PathologyConfirmed?: boolean;
  /**
   * Discovery doctor identifier
   */
  DiscoveryId?: number | null;
  /**
   * Referring doctor identifier
   */
  ReferringId?: number | null;
  /**
   * Diagnosis given by doctor
   */
  Diagnosis?: string | null;
  Note?: string | null;
  /**
   * Notes from supporting staff
   */
  Note_Inner?: string | null;
  /**
   * Date when last period was (related to female only)
   */
  DateLastPeriods?: string | null;
  DateLock?: string | null;
  Recommendations?: string | null;
  /**
   * How many years of menopause (related to female only)
   */
  Menopause?: number | null;
  /**
   * How many days of cycle (related to female only)
   */
  DaysOfCycle?: number | null;
  /**
   * Number of weeks of Pregnancy (related to female only)
   */
  WeeksOfPregnancy?: number | null;
  /**
   * Clinic\branch name where examination was given
   */
  ClinicName?: string | null;
  /**
   * If analysis was given in another organization
   */
  SourceClinicName?: string | null;
  /**
   * Name of user who order laboratory test\analysis
   */
  CreatedUserName?: string | null;
  Conclusion?: string | null;
  RecomendationConclusion?: string | null;
  /**
   * Laboratory identifier
   */
  LaboratoryId?: number;
  /**
   * Associated dynamic form identifier
   */
  DynamicFormPatientId?: number | null;
  /**
   * Indicates if analysis\laboratory test is completed (finished)
   */
  Completed?: boolean;
  /**
   * Date and time when analysis\laboratory test results was signed
   */
  SignedDate?: string | null;
  /**
   * Detailed laboratory test\analysis results
   */
  Results?: Array<AnalysisResultEditModel> | null;
  LaboratoryIntegrationType?: ExternalIntegrationType;
  LaboratoryIntegrationEnabled?: boolean;
};

export type AnalysisExportCovidModel = {
  DateEntered?: string | null;
  District?: string | null;
  LabaratoryName?: string | null;
  PatientLast?: string | null;
  PatientFirst?: string | null;
  PatientMiddle?: string | null;
  PatientPhone?: string | null;
  PatientBorn?: string | null;
  PatientSex?: string | null;
  PatientEmail?: string | null;
  DateMaterialCollection?: string | null;
  DateLastUpdate?: string | null;
  AnalysisCode?: string | null;
  AnalysisResult?: string | null;
  Laborant?: string | null;
  KZ?: string | null;
  AnalysisNorm?: string | null;
  IdESOZ?: string | null;
  RNOKPP?: string | null;
};

export type AnalysisFileViewModel = {
  Id?: number;
  Name?: string | null;
  url?: string | null;
  readonly IsImage?: boolean;
  IsSend?: boolean;
};

export type AnalysisResultEditModel = {
  /**
   * Analysis identifier
   */
  AnalysisId?: number;
  /**
   * analysis norm identifier
   */
  AnalysisComponentNormId?: number;
  /**
   * text based result
   */
  Result?: string | null;
  /**
   * notes from laboratory\laborant
   */
  Note?: string | null;
  Age?: string | null;
  AnalysisComponentDaysOfCycle?: string | null;
  AnalysisComponentWeeksOfPregnancy?: string | null;
  /**
   * General normal result range
   */
  Norma?: string | null;
  /**
   * Name of component
   */
  Component?: string | null;
  AnalysisComponentNormType?: string | null;
  AnalysisClass?: string | null;
  Number?: number;
  /**
   * Indicates if result is out of norm
   */
  Pathology?: boolean;
  Group?: string | null;
};

/**
 * Values:
 *
 * - `0`: VenousBlood
 *
 * - `1`: CapillaryBlood
 *
 * - `2`: Serum
 *
 * - `3`: Plasma
 *
 * - `4`: Urine
 *
 * - `5`: Dung
 *
 *
 */
export type AnalysisSampleMaterialType = 0 | 1 | 2 | 3 | 4 | 5;

export type APISMSCommand = {
  PhoneNumber?: string | null;
  Message?: string | null;
};

/**
 * Request for assigning an external analysis code to analyses.
 */
export type AssignExternalAnalysisCodeRequest = {
  Code: string;
  ClinicId: number;
  PatientId: number;
  ContainerId: number;
  AnalysisIds: Array<number>;
};

/**
 * Values:
 *
 * - `0`: NONE
 *
 * - `1`: REJECTED
 *
 * - `2`: APROVED
 *
 * - `3`: PARTIALLY
 *
 *
 */
export type AssuranceAproveEnum = 0 | 1 | 2 | 3;

/**
 * Values:
 *
 * - `0`: Completed
 *
 * - `1`: NotCompleted
 *
 * - `2`: Approved
 *
 *
 */
export type AutoSalesStatus = 0 | 1 | 2;

/**
 * Values:
 *
 * - `0`: Middle
 *
 * - `1`: Small
 *
 * - `2`: MiddleSmall
 *
 *
 */
export type BarCodeSize = 0 | 1 | 2;

/**
 * Values:
 *
 * - `0`: Unknown
 *
 * - `1`: Barcode39
 *
 * - `2`: Barcode128
 *
 * - `3`: HistologyBox
 *
 * - `4`: Barcode128_30x20
 *
 * - `5`: Barcode24x14
 *
 * - `6`: Barcode128_40x20
 *
 * - `7`: Barcode128_40x20sm
 *
 * - `8`: HistologyBox_Vega
 *
 * - `10`: Barcode128_40x20_slim
 *
 *
 */
export type BarcodeTemplate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10;

/**
 * General entity to display name and id
 */
export type BaseDto = {
  /**
   * Display name
   */
  Name?: string | null;
  /**
   * Identifier
   */
  Id?: number;
};

export type BaseERPSalepackExecutor = {
  UserId?: number;
  UserPositionId?: number | null;
  /**
   * allow set custom rate coefficient for executor
   * if executor was involved a bit more or less than others
   * this coefficient will be used to calculate executor's share per this salepack
   */
  RateCoefficient?: number | null;
  Note?: string | null;
  SalepackId?: number;
};

export type BasePrePrerecordPackageDto = {
  PackageId?: number;
  PriceId?: number | null;
  Count?: number;
  ContractPackageId?: number | null;
  ReferalSalepackPackageId?: number | null;
  ContractorPactId?: number | null;
};

export type BusinessResponse = {
  errors?: Array<BusinessResponseError> | null;
  readonly isSuccess?: boolean;
};

export type BusinessResponseError = {
  code?: string | null;
  message?: string | null;
};

export type CalculateContractPackagesCostResult = {
  PackageId?: number;
  PriceUndiscount?: number;
  PriceDiscount?: number;
  PromotionValue?: number;
  DiscountValue?: number;
  UsedPromotionId?: number | null;
  UsedDiscountId?: number | null;
};

export type CancelContractCommand = { ContractId?: number };

/**
 * Values:
 *
 * - `0`: Number1
 *
 * - `1`: Number2
 *
 *
 */
export type CashDesk = 0 | 1;

export type ChangePatientPasswordModel = {
  CurrentPassword?: string | null;
  NewPassword?: string | null;
};

/**
 * Model for changing patient phone number
 */
export type ChangePatientPhoneModel = {
  /**
   * New phone number
   */
  PhoneNumber?: string | null;
  Code?: string | null;
};

export type ChildPackageInformation = {
  PackageId?: number;
  ShortName?: string | null;
  Name?: string | null;
  Code?: string | null;
  IsOnline?: boolean;
  PackageType?: PackageType;
  Cost?: number;
};

/**
 * City base information
 */
export type CityModel = {
  /**
   * KOATUU city identifier
   */
  Id?: number;
  /**
   * Name of city
   */
  Name?: string | null;
};

/**
 * Values:
 *
 * - `0`: Clean
 *
 * - `1`: Dirty
 *
 *
 */
export type CleanlinessClass = 0 | 1;

export type ClinicDto = {
  Id?: number;
  Name?: string | null;
  Street?: string | null;
  City?: string | null;
  ParentId?: number | null;
  OrderNumber?: number | null;
  IsDebt?: boolean;
};

/**
 * Values:
 *
 * - `0`: AllowAll
 *
 * - `1`: AllowByDoctorRoom
 *
 * - `2`: AllowByDoctorRoomAndPreRecord
 *
 *
 */
export type ClinicMaterialStorageType = 0 | 1 | 2;

/**
 * Object represents information about clinic\branch in context of online recording
 */
export type ClinicOnlineDto = {
  /**
   * Clinic identifier
   */
  ClinicId: number;
  /**
   * Clinic external identifier
   */
  ExternalClinicId?: string | null;
  NameClinic: string;
  /**
   * Start working hours
   */
  StartTime?: string;
  /**
   * End working hours
   */
  EndTime?: string;
  /**
   * Name of city where clinic is located
   */
  NameCity?: string | null;
  /**
   * Street where clinic is located
   */
  Street?: string | null;
  /**
   * Longitude of clinic location
   */
  Longitude?: number;
  /**
   * Latitude of clinic location
   */
  Latitude?: number;
};

export type ConfirmResetPasswordModel = {
  Phone?: string | null;
  Born?: string;
  Code?: string | null;
  NewPassword?: string | null;
};

export type ContractInfo = {
  ContractId?: number;
  Cost?: number;
  Status?: ContractStatus;
  DateStart?: string;
  DateEnd?: string;
  OnlinePaid?: boolean;
};

/**
 * Values:
 *
 * - `0`: Assurance
 *
 * - `1`: Company
 *
 * - `2`: Fop
 *
 * - `3`: MaterialProvider
 *
 *
 */
export type ContractorType = 0 | 1 | 2 | 3;

/**
 * Values:
 *
 * - `0`: New
 *
 * - `1`: Active
 *
 * - `2`: Completed
 *
 * - `3`: Closed
 *
 * - `4`: Cancelled
 *
 *
 */
export type ContractStatus = 0 | 1 | 2 | 3 | 4;

export type CreateDirectionModel = {
  PatientName?: string | null;
  PatientPhoneNumber?: string | null;
  SurveyName?: string | null;
  Comment?: string | null;
  Born?: string | null;
};

export type CreateExternalAnalysisCodeResponse = {
  errors?: Array<BusinessResponseError> | null;
  readonly isSuccess?: boolean;
  data?: Array<ExternalAnalysisCodeDto> | null;
};

export type CreateExternalAnalysisGroupCodesRequest = {
  clientName?: string | null;
  orderId?: number;
  externalCodeMode?: AnalysisCodeWorkMode;
  contractorEDRPOU?: string | null;
};

export type CreateExternalOrderResponse = {
  errors?: Array<BusinessResponseError> | null;
  readonly isSuccess?: boolean;
  SalePacks?: Array<Int32DecimalKeyValuePair> | null;
};

export type CreateOnlinePatientContractResponse = {
  NewContractNumber?: string | null;
  NewContractId?: number;
  errors?: Array<BusinessResponseError> | null;
  readonly isSuccess?: boolean;
};

/**
 * Represents the data model for creating an online prerecord entry.
 */
export type CreateOnlinePrerecordModel = {
  /**
   * Scheduler identifier for recording
   */
  SchedulerId: number;
  /**
   * Additional notes for prerecord
   */
  Note?: string | null;
  OnlinePaymentStatus?: PrerecordOnlinePaymentStatus;
  /**
   * start of planed appointment
   */
  DateStart: string;
  /**
   * end of planed appointment
   */
  DateEnd: string;
  /**
   * Patient identifier for prerecord (optional)
   * When creatating appointment for family member - should be family member id
   */
  PatientId?: number | null;
  Status?: number | null;
};

export type CreatePublicPatientPrerecordModel = {
  Packages?: Array<CreatePublicPrerecordPackageModel> | null;
  UserId?: number;
  OnlinePaymentStatus?: PrerecordOnlinePaymentStatus;
  DateStart?: string;
  DateEnd?: string | null;
  Note?: string | null;
};

export type CreatePublicPatientPrerecordRequest = {
  Patient: PublicPatientModel;
  Prerecord: CreatePublicPatientPrerecordModel;
  PatientSearchOptions?: PatientOperationOptions;
};

export type CreatePublicPatientRequest = {
  Patient: PublicPatientModel;
  Metadata?: PublicPatientMetadataModel;
  Verified?: boolean | null;
  Options?: PatientOperationOptions;
};

export type CreatePublicPrerecordPackageModel = { PackageId?: number };

export type CreatePublicPrerecordRequest = {
  Packages?: Array<CreatePublicPrerecordPackageModel> | null;
  SchedulerId?: number;
  Note?: string | null;
  OnlinePaymentStatus?: PrerecordOnlinePaymentStatus;
  DateStart?: string;
  DateEnd?: string;
  PatientId?: number | null;
  ExternalPatientId?: string | null;
};

export type CreatePublicPrerecordResponse = { PrerecordId?: number };

/**
 * Values:
 *
 * - `0`: UAH
 *
 * - `1`: USD
 *
 * - `2`: EUR
 *
 * - `3`: KZT
 *
 * - `4`: MDL
 *
 * - `5`: AZN
 *
 *
 */
export type CurrencyType = 0 | 1 | 2 | 3 | 4 | 5;

export type DateTimeOffsetOneValueUpdateDto = { Value?: string };

/**
 * Values:
 *
 * - `0`: Discount
 *
 * - `1`: Cashback
 *
 * - `2`: DiscountAndCahsback
 *
 * - `10`: Legacy
 *
 *
 */
export type DiscountCardType = 0 | 1 | 2 | 10;

export type DiscountTemplateDto = {
  DiscountTemplateId?: number;
  Note?: string | null;
  Name?: string | null;
  Type?: DiscountCardType;
  MinCashbackUsage?: number | null;
  MaxCashbackUsage?: number | null;
  CashbackPercentage?: number;
  DiscountPercentage?: number;
  AllowAnalysis?: boolean;
  AllowUsg?: boolean;
  AllowProtocols?: boolean;
  AllowGroupPackages?: boolean;
  IsSystem?: boolean;
};

/**
 * Values:
 *
 * - `0`: Percentage
 *
 * - `1`: Cost
 *
 * - `2`: Absolute
 *
 *
 */
export type DiscountValueType = 0 | 1 | 2;

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: Daily
 *
 * - `2`: EveryOtherDay
 *
 * - `3`: SpecificWeekdays
 *
 * - `4`: RepeatingCycle
 *
 * - `5`: Interval
 *
 * - `6`: AsNeeded
 *
 *
 */
export type DoctorAssignmentFrequency = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: Day
 *
 * - `2`: Week
 *
 * - `3`: Month
 *
 *
 */
export type DoctorAssignmentIntervalUnit = 0 | 1 | 2 | 3;

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: Once
 *
 * - `2`: Twice
 *
 * - `3`: ThreeTimes
 *
 * - `4`: MoreThanThree
 *
 * - `5`: EveryHours
 *
 * - `6`: RepeatingCycle
 *
 * - `7`: AsNeeded
 *
 *
 */
export type DoctorAssignmentMultiplicity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: Monday
 *
 * - `2`: Tuesday
 *
 * - `3`: Wednesday
 *
 * - `4`: Thursday
 *
 * - `5`: Friday
 *
 * - `6`: Saturday
 *
 * - `7`: Sunday
 *
 *
 */
export type DoctorAssignmentWeekday = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type DoctorInfo = {
  DoctorType?: string | null;
  HospitalName?: string | null;
  HospitalId?: number | null;
  TypeDoctorId?: number | null;
  Name?: string | null;
  readonly Last?: string | null;
  readonly First?: string | null;
  readonly Middle?: string | null;
  PhoneNumber?: string | null;
  City?: string | null;
  CityId?: number;
  DateCr?: string;
};

export type DoctorPatient = {
  PatientName?: string | null;
  PatientGender?: boolean;
  PatientBorn?: string;
  PatientId?: number;
  DateLastDirection?: string;
};

export type DoctorPatientV2 = {
  PatientId?: number;
  PatientName?: string | null;
  PatientPhoneNumber?: string | null;
  Surveys?: Array<PatientSurveys> | null;
};

export type DoctorStatistic = {
  Survay?: number;
  Patients?: number;
  Referrals?: number;
  Date?: string;
};

export type DrugDto = {
  id?: number;
  pharmacyId?: string;
  name?: string | null;
  component?: string | null;
  atxCode?: string | null;
  dosage?: string | null;
  dosageUnit?: string | null;
  medicationForm?: string | null;
  manufacture?: string | null;
};

/**
 * Values:
 *
 * - `0`: Checkbox
 *
 * - `1`: InputString
 *
 * - `2`: InputNumber
 *
 * - `3`: SelectBox
 *
 * - `4`: MultiSelectBox
 *
 * - `5`: DatePicker
 *
 * - `6`: TextArea
 *
 * - `7`: SelectBoxWithComments
 *
 * - `8`: Summernotebox
 *
 * - `9`: Group
 *
 * - `20`: HistologyContainer
 *
 * - `31`: IcpcBox
 *
 * - `32`: IcdsBox
 *
 * - `40`: Computed
 *
 * - `41`: NumberSelectBox
 *
 *
 */
export type DynamicFormItemType =
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 20 | 31 | 32 | 40 | 41;

export type DynamicFormResultDto = {
  DynamicFormPatientId?: number;
  FormItemId?: number;
  ItemType?: DynamicFormItemType;
  Name?: string | null;
  Result?: string | null;
  IsRequired?: boolean;
  Value?: string | null;
  OrderIndex?: number;
  RowWidth?: number;
  IsPrimary?: boolean | null;
  IsPublic?: boolean;
  StrongName?: string | null;
  Disabled?: boolean;
  HideOnVinLab?: boolean;
  Children?: Array<DynamicFormResultDto> | null;
};

export type EditableERPBed = {
  Title?: string | null;
  WardId?: number;
  Color?: string | null;
  PackageId?: number | null;
  Note?: string | null;
  Active?: boolean | null;
};

/**
 * Payload for bulk ERP city updates.
 */
export type EditableERPBulkCity = {
  /**
   * Short city code used by ERP integrations.
   * Maximum length: 10 characters.
   */
  NameParam: string;
  /**
   * City name.
   * Maximum length: 128 characters.
   */
  NameCity: string;
  /**
   * Full city name.
   * Maximum length: 256 characters.
   */
  FullName?: string | null;
  /**
   * Unique city identifier.
   */
  CityId?: number;
};

/**
 * Payload for creating or updating a city through the ERP API.
 */
export type EditableERPCity = {
  /**
   * Short city code used by ERP integrations.
   * Maximum length: 10 characters.
   */
  NameParam: string;
  /**
   * City name.
   * Maximum length: 128 characters.
   */
  NameCity: string;
  /**
   * Full city name.
   * Maximum length: 256 characters.
   */
  FullName?: string | null;
};

export type EditableERPGroupPackage = {
  Name?: string | null;
  Code?: string | null;
  ParentGroupPackageId?: number | null;
};

export type EditableERPHospitalDivision = {
  Name?: string | null;
  Type?: HospitalDivisionType;
  ClinicId?: number;
  ResponsibleUserId?: number | null;
  Note?: string | null;
  Color?: string | null;
  AvailableFrom?: string | null;
  AvailableTo?: string | null;
};

export type EditableERPHospitalization = {
  AdmitSource?: string | null;
  ReAdmission?: string | null;
  DischargeDisposition?: string | null;
  DischargeDepartment?: string | null;
  PreAdmissionIdentifier?: string | null;
  Note?: string | null;
  PatientId?: number;
  BedId?: number;
  IsUrgent?: boolean;
  HospitalizationCategoryId?: number | null;
  CleanlinessClass?: CleanlinessClass;
  HospitalizationType?: HospitalizationType;
  PackageId?: number | null;
  HospitalDivisionId?: number | null;
  DiscoveryUserId?: number | null;
  ReferringDoctorId?: number | null;
  AssuranceId?: number | null;
  ReferingHospitalId?: number | null;
  Start?: string;
  End?: string;
};

export type EditableERPHospitalizationCategory = {
  Name?: string | null;
  Color?: string | null;
};

/**
 * ERP ICD10 payload used for create and update operations.
 */
export type EditableERPIcd10 = {
  /**
   * ICD10 code value.
   */
  Code: string;
  /**
   * ICD10 diagnosis description.
   */
  Description: string;
};

export type EditableERPMaterialLot = {
  LotCode?: string | null;
  ExpiryDate?: string | null;
};

export type EditableERPMonitoringIndicator = {
  Name: string;
  /**
   * Optional eHealth/ucum/units dictionary code, used for display only.
   */
  Unit?: string | null;
};

export type EditableERPNomenclature = {
  Name?: string | null;
  Code?: string | null;
  VendorCode?: string | null;
  MarionId?: number;
  Form?: string | null;
  Number?: string | null;
  FormRelease?: string | null;
  Category?: string | null;
  LicenseOvnerId?: number | null;
  RegСertificate?: string | null;
  RegStartDate?: string;
  RegEndDate?: string;
  NomenclatureGroupId?: number | null;
  TaxCodeId?: number | null;
  AllowFiscalization?: boolean;
  Barcode?: string | null;
  Uktzed?: string | null;
  MaterialUnitTypeId?: number;
  MaterialManufacturerId?: number;
  MinimalCountOnStorage?: number | null;
  ExpiryAlertDays?: number | null;
};

export type EditableERPNomenclaturePrice = { Cost?: number };

/**
 * Editable recommendation data. The routed patient/protocol determines the source service.
 */
export type EditableERPReferralSalepackPackage = {
  ProtocolId: number;
  /**
   * Catalog service identifier. An existing referral cannot be moved to another service.
   */
  PackageId: number;
  AssuranceAproveState?: AssuranceAproveEnum;
  /**
   * Appointment date, independent of the reminder date.
   */
  TargetDate?: string | null;
  RecommendationDetails?: ERPServiceRecommendationDetailsDto;
};

export type EditableERPUnitType = { Name?: string | null };

export type EditableERPUserShift = {
  Date?: string;
  UserId?: number;
  Hours?: number;
  Note?: string | null;
  UserPositionId?: number | null;
  ClinicId?: number | null;
};

export type EditableERPWard = {
  Title?: string | null;
  ClinicId?: number;
  WardCategoryId?: number | null;
  HospitalDivisionId?: number | null;
  Sex?: boolean | null;
  PackageId?: number | null;
  Note?: string | null;
  BackgroundColor?: string | null;
  Active?: boolean | null;
  AvailableFrom?: string | null;
  AvailableTo?: string | null;
};

export type EditableERPWardCategory = {
  Title?: string | null;
  Index?: number;
  Color?: string | null;
};

export type EhealthDictionariesV2 = {
  id?: string;
  name?: string | null;
  description?: string | null;
  values?: Array<EhealthDictionariesV2Value> | null;
  labels?: Array<string> | null;
  is_active?: boolean;
  inserted_at?: string | null;
  updated_at?: string | null;
};

export type EhealthDictionariesV2Value = {
  code?: string | null;
  description?: string | null;
  is_active?: boolean;
  child_values?: Array<EhealthDictionariesV2Value> | null;
  inserted_at?: string | null;
  updated_at?: string | null;
};

/**
 * Values:
 *
 * - `0`: Unknown
 *
 * - `1`: Encounter
 *
 * - `2`: DiagnosticReport
 *
 * - `3`: Procedure
 *
 *
 */
export type EhealthPackageType = 0 | 1 | 2 | 3;

/**
 * Values:
 *
 * - `1`: SendSchedulerOnEmailAnHourBefore
 *
 * - `2`: SendSchedulerOnEmailAnDayBefore
 *
 * - `3`: SendFinanceReport
 *
 * - `4`: NotifyOnPrerecordToTelegram
 *
 *
 */
export type EmailSetting = 1 | 2 | 3 | 4;

export type ERPAdjustmentInCreatable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  Goods?: Array<ERPAdjustmentInItemCreatable> | null;
};

export type ERPAdjustmentInItemCreatable = {
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
  Cost?: number | null;
  VAT?: number | null;
  CostWithVAT?: number | null;
  LotCode?: string | null;
  ExpiryDate?: string | null;
  SourceGoodsReceiptItemId?: number | null;
};

export type ERPAdjustmentMaterial = {
  DocumentId?: number;
  CreatedUserId?: number | null;
  ClinicId?: number;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  StorageId?: number;
  Goods?: Array<ERPAdjustmentMaterialItem> | null;
  DocumentType?: MaterialDocumentType;
};

export type ERPAdjustmentMaterialItem = {
  DocumentItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
  Cost?: number | null;
  CostWithVAT?: number | null;
  VAT?: number | null;
};

export type ERPAdjustmentOutCreatable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  Goods?: Array<ERPAdjustmentOutItemCreatable> | null;
};

export type ERPAdjustmentOutItemCreatable = {
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
  SourceGoodsReceiptItemId?: number | null;
};

export type ERPAdministrativeExpense = {
  AdministrativeExpenseId?: number;
  Cost: number;
  Name: string;
  Comment?: string | null;
  DeletedReasonComment?: string | null;
  ClinicId: number;
  CreatedAt?: string;
  CreatedById: number;
  DeletedById?: number | null;
  DeletedAt?: string | null;
  PaymentTypeId: PaymentTypeId;
  AdministrativeExpenseCategoryId?: number | null;
};

export type ERPAdministrativeExpenseCategory = {
  Id?: number;
  Name?: string | null;
};

export type ERPAssurance = {
  AssuranceId?: number;
  ContractorId?: number;
  PatientId?: number;
  Number?: string | null;
  Specialization?: string | null;
  DateModified?: string;
  DateEnd?: string;
};

export type ERPBed = {
  Title?: string | null;
  WardId?: number;
  Color?: string | null;
  PackageId?: number | null;
  Note?: string | null;
  Active?: boolean | null;
  Id?: number;
  ClinicId?: number;
  HospitalDivisionId?: number | null;
};

/**
 * ERP city response model.
 */
export type ERPCity = {
  /**
   * Short city code used by ERP integrations.
   * Maximum length: 10 characters.
   */
  NameParam: string;
  /**
   * City name.
   * Maximum length: 128 characters.
   */
  NameCity: string;
  /**
   * Full city name.
   * Maximum length: 256 characters.
   */
  FullName?: string | null;
  /**
   * Unique city identifier.
   */
  CityId?: number;
};

export type ERPClinic = {
  /**
   * KOATUU city identifier
   */
  CityId: number;
  /**
   * Indentifier in external systems
   */
  ExternalId?: string | null;
  /**
   * Patient's card number prefix
   */
  Prefix?: string | null;
  /**
   * Name of clinic\branch\organization
   */
  NameClinic: string;
  /**
   * Short version of name - for displaying inside system
   */
  LocalNameClinic: string;
  /**
   * Version of name for displaying in patient portal systems
   */
  OnlineNameClinic?: string | null;
  /**
   * Enables patient portal systems for the clinic\branch\organization
   */
  IsOnline?: boolean;
  Street?: string | null;
  Bookkeeper?: string | null;
  Director?: string | null;
  Details?: string | null;
  EDRPOU?: string | null;
  IPN?: string | null;
  MFO?: string | null;
  RR?: string | null;
  NS?: string | null;
  ClinicEmail?: string | null;
  PostAddresses?: string | null;
  BankName?: string | null;
  /**
   * Only takes into account `time` part
   */
  StartTime?: string;
  /**
   * Only takes into account `time` part
   */
  EndTime?: string;
  Latitude?: number;
  Longitude?: number;
  OrderNumber?: number | null;
  Color?: string | null;
  BookedPrerecordColor?: string | null;
  UseOneBillPerDay?: boolean;
  /**
   * Indicates if debt enabled by default while ordering
   */
  IsDebt?: boolean;
  DayToLock?: number;
  RepeatVisitMounsAge?: number;
  /**
   * each bit indicates working day (starts from Monday)
   */
  WorkDays?: number;
  Code?: string | null;
  MobilePreRecordEmail?: boolean;
  MobilePreRecordSms?: boolean;
  UseExtendedDoctorForm?: boolean;
  IsReturnMaterial?: boolean;
  IsWriteOffMaterial?: boolean;
  Logo?: string | null;
  IsNotSetDiscoveryInOrderAdding?: boolean;
  IsFileteringPatientCardLogColumnViewed?: boolean;
  ClinicMaterialStorageType?: ClinicMaterialStorageType;
  /**
   * Internal identifier of paretn organization
   */
  ParentId?: number | null;
  /**
   * External identifier of paretn organization (should not equal to ExternalId)
   */
  ExternalParentId?: string | null;
  ClinicId?: number;
};

export type ERPClinicEditModel = {
  /**
   * KOATUU city identifier
   */
  CityId: number;
  /**
   * Indentifier in external systems
   */
  ExternalId?: string | null;
  /**
   * Patient's card number prefix
   */
  Prefix?: string | null;
  /**
   * Name of clinic\branch\organization
   */
  NameClinic: string;
  /**
   * Short version of name - for displaying inside system
   */
  LocalNameClinic: string;
  /**
   * Version of name for displaying in patient portal systems
   */
  OnlineNameClinic?: string | null;
  /**
   * Enables patient portal systems for the clinic\branch\organization
   */
  IsOnline?: boolean;
  Street?: string | null;
  Bookkeeper?: string | null;
  Director?: string | null;
  Details?: string | null;
  EDRPOU?: string | null;
  IPN?: string | null;
  MFO?: string | null;
  RR?: string | null;
  NS?: string | null;
  ClinicEmail?: string | null;
  PostAddresses?: string | null;
  BankName?: string | null;
  /**
   * Only takes into account `time` part
   */
  StartTime?: string;
  /**
   * Only takes into account `time` part
   */
  EndTime?: string;
  Latitude?: number;
  Longitude?: number;
  OrderNumber?: number | null;
  Color?: string | null;
  BookedPrerecordColor?: string | null;
  UseOneBillPerDay?: boolean;
  /**
   * Indicates if debt enabled by default while ordering
   */
  IsDebt?: boolean;
  DayToLock?: number;
  RepeatVisitMounsAge?: number;
  /**
   * each bit indicates working day (starts from Monday)
   */
  WorkDays?: number;
  Code?: string | null;
  MobilePreRecordEmail?: boolean;
  MobilePreRecordSms?: boolean;
  UseExtendedDoctorForm?: boolean;
  IsReturnMaterial?: boolean;
  IsWriteOffMaterial?: boolean;
  Logo?: string | null;
  IsNotSetDiscoveryInOrderAdding?: boolean;
  IsFileteringPatientCardLogColumnViewed?: boolean;
  ClinicMaterialStorageType?: ClinicMaterialStorageType;
  /**
   * Internal identifier of paretn organization
   */
  ParentId?: number | null;
  /**
   * External identifier of paretn organization (should not equal to ExternalId)
   */
  ExternalParentId?: string | null;
};

export type ERPConsumptionMaterial = {
  DocumentId?: number;
  CreatedUserId?: number | null;
  ClinicId?: number;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  StorageId?: number;
  ConsumptionSalepackId?: number | null;
  Goods?: Array<ERPConsumptionMaterialItem> | null;
  IsReturn?: boolean;
  ReferringUserId?: number | null;
};

export type ERPConsumptionMaterialCreatable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  ReferringUserId?: number | null;
  Goods?: Array<ERPConsumptionMaterialEditableItem> | null;
  ConsumptionSalepackId?: number | null;
  PatientId?: number | null;
};

export type ERPConsumptionMaterialEditable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  ReferringUserId?: number | null;
  Goods?: Array<ERPConsumptionMaterialEditableItem> | null;
};

export type ERPConsumptionMaterialEditableItem = {
  ConsumptionMaterialItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
};

export type ERPConsumptionMaterialItem = {
  DocumentItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
};

export type ERPConsumptionReportModel = {
  DocumentId?: number;
  DocumentType?: MaterialDocumentType;
  CreatedUserId?: number | null;
  ClinicId?: number;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  StorageId?: number;
  ConsumptionSalepackId?: number | null;
  IsReturn?: boolean;
  ReferringUserId?: number | null;
  ConsumptionPackageId?: number | null;
  IsAutoSale?: boolean;
  AutoSalesStatus?: AutoSalesStatus;
  ConsumptionDiscoveryUserId?: number | null;
  Count?: number;
  Sum?: number;
  ConsumptionPackageGroupId?: number | null;
  SaleSum?: number | null;
  PatientLFM?: string | null;
  ConsumptionSalepackDateCreated?: string | null;
  HasProvisional?: boolean;
};

export type ERPContainer = {
  Id?: number;
  Name?: string | null;
  ShortName?: string | null;
  Capacity?: number;
  Description?: string | null;
  IsBlend?: boolean;
  Del?: boolean;
  CodeFixedLength?: number | null;
  Suffix?: string | null;
  TemperatureLimits?: string | null;
  ContainerTypeId?: number | null;
  BarCodeSize?: BarCodeSize;
  BarcodeTemplate?: BarcodeTemplate;
  AllowManualCode?: boolean;
};

export type ERPContractor = {
  ContractorId?: number;
  CityId?: number;
  PrinterSerialNumber?: string | null;
  IsFiskal?: boolean;
  PrinterModel?: string | null;
  Email?: string | null;
  /**
   * Название компании
   */
  NameComp?: string | null;
  /**
   * Название улицы
   */
  Street?: string | null;
  /**
   * Контактный телефон
   */
  Tel1?: string | null;
  /**
   * Дополнительный телефон
   */
  Tel2?: string | null;
  /**
   * ФИО директора
   */
  Director?: string | null;
  /**
   * Дополнииельная инфомрация
   */
  Details?: string | null;
  /**
   * ЄДРПОУ
   */
  EDRPOU?: string | null;
  /**
   * Индивидуальный налоговый номер
   */
  IPN?: string | null;
  /**
   * МФО
   */
  MFO?: string | null;
  /**
   * Расчетный счет
   */
  RR?: string | null;
  /**
   * НС
   */
  NS?: string | null;
  /**
   * Реквизиты банка
   */
  BankName?: string | null;
  ContractorType?: ContractorType;
  MedicalLicense?: string | null;
  MedicalLicenseDate?: string | null;
  GovernamentRegistration?: string | null;
  GovernamentRegistrationDate?: string | null;
  LicenseSeria?: string | null;
  LicenseSeriaDate?: string | null;
  PrintAttributes?: boolean;
};

export type ERPCostAdjustmentCreatable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  Goods?: Array<ERPCostAdjustmentItemCreatable> | null;
};

export type ERPCostAdjustmentItemCreatable = {
  SourceGoodsReceiptItemId?: number;
  Cost?: number;
};

export type ERPCreateGoodsReceipt = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  ContractorProviderId?: number;
  Goods?: Array<ERPCreateGoodsReceiptItem> | null;
};

export type ERPCreateGoodsReceiptItem = {
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  VAT?: number;
  Cost?: number;
  CostWithVAT?: number;
  LotId?: number | null;
  LotCode?: string | null;
  ExpiryDate?: string | null;
};

/**
 * Identifiers created for one package item in an ERP order.
 */
export type ERPCreateOrderItemResponse = {
  BookingId?: number;
  SalepackId?: number;
  AnalysisId?: number | null;
  ProtocolId?: number | null;
  PackageTypeId?: PackageType;
  PackageId?: number;
};

/**
 * One service, analysis, or protocol inside an order package.
 */
export type ERPCreateOrderPackageItemRequest = {
  DiscoveryId?: number;
  PackageId: number;
  Note?: string | null;
  InternalNote?: string | null;
  ContractPackageId?: number | null;
  AnalysisSampleMaterialId?: number | null;
  IsUrgent?: boolean;
};

/**
 * One priced package in an ERP order request.
 */
export type ERPCreateOrderPackageRequest = {
  PriceId?: number | null;
  PrerecordId?: number | null;
  Quantity: number;
  ContractorAgreementId?: number | null;
  ParentPackageId?: number;
  ReferralSalepackPackageId?: number | null;
  PaymentTypeId: PaymentTypeId;
  ReferringTypeId: ReferringTypeId;
  AssuranceId?: number | null;
  ReferringId?: number | null;
  ContractPackageId?: number | null;
  PromotionId?: number | null;
  PromotionNote?: string | null;
  UseContractAccount?: boolean;
  NestedPackages: Array<ERPCreateOrderPackageItemRequest>;
};

/**
 * Request for creating one patient order through the ERP API.
 * Server-owned values, such as the current user and cash desk, are intentionally excluded.
 */
export type ERPCreateOrderRequest = {
  TemporaryBookingId?: number | null;
  /**
   * Caller-provided key used to correlate this request with an external system.
   */
  IdempotencyKey?: string | null;
  PatientId: number;
  ClinicId: number;
  OrderDate: string;
  DiscountId?: number | null;
  PromotionId?: number | null;
  PromotionNote?: string | null;
  UseCashback?: boolean;
  ContractorId?: number | null;
  MarketingTypeId: number;
  ContractId?: number | null;
  IsDebt?: boolean | null;
  Packages: Array<ERPCreateOrderPackageRequest>;
};

/**
 * Identifiers created for an ERP order.
 */
export type ERPCreateOrderResponse = {
  Items?: Array<ERPCreateOrderItemResponse> | null;
};

export type ERPDepartment = {
  /**
   * Identifier of the department in external system.
   */
  ExternalId?: string | null;
  /**
   * name of the department
   */
  Name: string;
  Code?: string | null;
  /**
   * Internal identifier of the clinic\branch\organization.
   * Required only when `ExternalClinicId` is not set
   */
  ClinicId: number;
  /**
   * External identifier of the clinic\branch\organization.
   * Required only when `ClinicId` is not set
   */
  ExternalClinicId: string;
  Description?: string | null;
  DepartmentId?: number;
  HarmfulWorkingConditions?: Array<HarmfulWorkingConditionsDto> | null;
};

export type ERPDepartmentEditModel = {
  /**
   * Identifier of the department in external system.
   */
  ExternalId?: string | null;
  /**
   * name of the department
   */
  Name: string;
  Code?: string | null;
  /**
   * Internal identifier of the clinic\branch\organization.
   * Required only when `ExternalClinicId` is not set
   */
  ClinicId: number;
  /**
   * External identifier of the clinic\branch\organization.
   * Required only when `ClinicId` is not set
   */
  ExternalClinicId: string;
  Description?: string | null;
};

export type ERPDoctorAssignmentScheduleDto = {
  frequency?: DoctorAssignmentFrequency;
  weekdays?: Array<DoctorAssignmentWeekday> | null;
  intervalValue?: number | null;
  intervalUnit?: DoctorAssignmentIntervalUnit;
  cycleActiveDays?: number | null;
  cyclePauseDays?: number | null;
  multiplicity?: DoctorAssignmentMultiplicity;
  everyHours?: number | null;
  reminders?: Array<ReminderItem> | null;
  durationDays?: number | null;
};

export type ERPEditableSalaryRule = {
  Title?: string | null;
  Description?: string | null;
  EffectiveFrom?: string;
  EffectiveTo?: string | null;
  Active?: boolean;
  MaxMonthlySalary?: number | null;
  MinMonthlySalary?: number | null;
  PercentDiscovery?: number | null;
  HourlyRate?: number | null;
  OvertimeHourlyRate?: number | null;
  NormalDayDurationHours?: number | null;
  TariffDiscovery?: number | null;
  UserId?: number | null;
  UserPositionId?: number | null;
  ClinicId?: number | null;
  PackageTagId?: number | null;
  PackageGroupId?: number | null;
  SalaryExtensions?: SalaryExtensions;
  Packages?: Array<BaseDto> | null;
};

export type ERPEditableSalepackExecutor = {
  UserId?: number;
  UserPositionId?: number | null;
  /**
   * allow set custom rate coefficient for executor
   * if executor was involved a bit more or less than others
   * this coefficient will be used to calculate executor's share per this salepack
   */
  RateCoefficient?: number | null;
  Note?: string | null;
};

export type ERPEditableUserPosition = {
  Name?: string | null;
  Description?: string | null;
  SalaryRuleLimits?: SalaryRuleLimits;
  Type?: SystemUserPosition;
};

export type ERPEhealthComposition = {
  Id?: string;
  Focus?: ERPEhealthPerson;
  Subject?: ERPEhealthPerson;
  Employee?: ERPEhealthEmployee;
  LegalEntity?: ERPEhealthLegalEntity;
  Type?: string | null;
  Category?: string | null;
  Title?: string | null;
  Status?: string | null;
  Start?: string | null;
  End?: string | null;
  IsAccident?: boolean;
  TreatmentViolation?: string | null;
  TreatmentVialationDate?: string | null;
  IsIntoxicated?: boolean;
  IsForeignTreatment?: boolean;
  IsForceRenew?: boolean;
  CreatedAt?: string;
};

export type ERPEhealthDeclaration = {
  Id?: string;
  Status?: string | null;
  DeclarationNumber?: string | null;
  StartDate?: string;
  EndDate?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Division?: ERPEhealthDivision;
  Person?: ERPEhealthPerson;
  Employee?: ERPEhealthEmployee;
  LegalEntity?: ERPEhealthLegalEntity;
};

export type ERPEhealthDivision = {
  Id?: string;
  Name?: string | null;
  Status?: string | null;
  MountainGroup?: boolean;
};

export type ERPEhealthEmployee = {
  Id?: string;
  InternalId?: number;
  LFM?: string | null;
  Sepciality?: string | null;
};

export type ERPEhealthLegalEntity = { Id?: string; Name?: string | null };

export type ERPEhealthMedicationRequest = {
  Id?: string;
  MedicationName?: string | null;
  MedicationId?: string;
  Status?: string | null;
  RequestNumber?: string | null;
  Intent?: string | null;
  Priority?: string | null;
  RejectReason?: string | null;
  IsBlocked?: boolean | null;
  BlockReason?: string | null;
  BlockReasonCode?: string | null;
  Category?: string | null;
  MedicationQty?: number | null;
  DenumeratorUnit?: string | null;
  DenumeratorValue?: number | null;
  CreatedAt?: string;
  StartedAt?: string;
  EndedAt?: string;
  DispenseValidTo?: string;
  DispenseValidFrom?: string;
  Person?: ERPEhealthPerson;
  Employee?: ERPEhealthEmployee;
  LegalEntity?: ERPEhealthLegalEntity;
};

export type ERPEhealthPerson = {
  Id?: string;
  LastName?: string | null;
  FirstName?: string | null;
};

export type ERPEhealthServiceRequest = {
  Id?: string;
  Status?: string | null;
  ProgramProcessingStatus?: string | null;
  CodeText?: string | null;
  ServiceCode?: string | null;
  CodeResource?: string | null;
  Requisition?: string | null;
  Intent?: string | null;
  Priority?: string | null;
  Category?: string | null;
  Code?: string | null;
  Start?: string | null;
  End?: string | null;
  Person?: ERPEhealthPerson;
  Employee?: ERPEhealthEmployee;
  LegalEntity?: ERPEhealthLegalEntity;
  CreatedAt?: string;
  ExpirationDate?: string | null;
};

export type ERPGoodsReceipt = {
  GoodsReceiptId?: number;
  CreatedUserId?: number | null;
  ClinicId?: number;
  ContractorProviderId?: number | null;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  StorageId?: number | null;
  Goods?: Array<ERPGoodsReceiptItem> | null;
  IsReturn?: boolean;
};

export type ERPGoodsReceiptItem = {
  GoodsReceiptItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  VAT?: number;
  Cost?: number;
  CostWithVAT?: number;
  CostWithVATSum?: number;
  LotId?: number | null;
  LotCode?: string | null;
  ExpiryDate?: string | null;
};

export type ERPGoodsReceiptLookup = {
  GoodsReceiptId?: number;
  DocumentDate?: string;
  DocumentNumber?: string | null;
};

export type ERPGoodsReceiptLookupQuery = {
  GoodsReceiptIds?: Array<number> | null;
};

export type ERPGroupPackage = {
  Name?: string | null;
  Code?: string | null;
  ParentGroupPackageId?: number | null;
  GroupPackageId?: number;
  HasChild?: boolean;
};

export type ERPHospitalDivision = {
  Name?: string | null;
  Type?: HospitalDivisionType;
  ClinicId?: number;
  ResponsibleUserId?: number | null;
  Note?: string | null;
  Color?: string | null;
  AvailableFrom?: string | null;
  AvailableTo?: string | null;
  Id?: number;
};

export type ERPHospitalizationCategory = {
  Name?: string | null;
  Color?: string | null;
  Id?: number;
};

export type ERPHospitals = {
  HospitalId?: number;
  EDRPOU?: string | null;
  CityId?: number;
  Name?: string | null;
  ShortName?: string | null;
  Street?: string | null;
};

/**
 * ERP ICD10 dictionary item.
 */
export type ERPIcd10 = {
  /**
   * ICD10 code value.
   */
  Code: string;
  /**
   * ICD10 diagnosis description.
   */
  Description: string;
  /**
   * Internal ICD10 identifier.
   */
  Id?: number;
};

export type ERPLaboratoryInfo = { Id?: number; Name?: string | null };

export type ERPMaterialDocument = {
  MaterialDocumentId?: number;
  DocumentNumber?: string | null;
  FromStorageId?: number | null;
  ToStorageId?: number | null;
  CreatedUserId?: number | null;
  ConfirmedUserId?: number | null;
  ConsumptionSalepackId?: number | null;
  DateCreated?: string;
  DocumentDate?: string;
  DateConfirmed?: string;
  Del?: boolean;
  Confirmed?: boolean;
  Note?: string | null;
  DocumentType?: MaterialDocumentType;
  IsReturn?: boolean;
  PatientId?: number | null;
  ReferringUserId?: number | null;
};

export type ERPMaterialDocumentItem = {
  MaterialDocumentItemId?: number;
  MaterialDocumentId?: number;
  MaterialUnitTypeId?: number;
  NomenclatureId?: number;
  Count?: number;
  MaterialLotId?: number | null;
};

export type ERPMaterialDocumentItemViewModel = {
  MaterialDocumentItemId?: number;
  MaterialUnitTypeId?: number;
  NomenclatureId?: number;
  Count?: number;
  MaterialLotId?: number | null;
  Cost?: unknown | null;
  CostWithVAT?: number | null;
  VAT?: number | null;
  SaleCost?: number;
  IsProvisional?: boolean;
};

export type ERPMaterialDocumentViewModel = {
  DocumentId?: number;
  CreatedUserId?: number | null;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  IsReturn?: boolean;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string;
  FromStorageId?: number | null;
  ClinicId?: number | null;
  ConsumptionSalepackId?: number | null;
  ReferringUserId?: number | null;
  Patient?: string | null;
  ConsumptionSalepackPackName?: string | null;
  ConsumptionSalepackDateCreated?: string | null;
  Items?: Array<ERPMaterialDocumentItemViewModel> | null;
  DocumentType?: MaterialDocumentType;
  ToStorageId?: number | null;
  readonly HasProvisional?: boolean;
  PatientId?: number | null;
};

export type ERPMaterialLot = {
  LotCode?: string | null;
  ExpiryDate?: string | null;
  MaterialLotId?: number;
  CreatedAt?: string;
  Del?: boolean;
  IsSystem?: boolean;
  NomenclatureId?: number;
};

export type ERPMaterialManufacturer = {
  MaterialManufacturerId?: number;
  Name?: string | null;
};

export type ERPMaterialMovement = {
  MovementId?: number;
  NomenclatureId?: number;
  Count?: number;
  UnitTypeId?: number;
  Date?: string;
  ActualDate?: string;
  Type?: MaterialMovementType;
  SequenceNo?: number;
  UserId?: number | null;
  StorageId?: number | null;
  MaterialLotId?: number;
  SourceDocumentItemId?: number;
  DocumentType?: MaterialDocumentType;
  MaterialDocumentId?: number;
  DocumentNumber?: string | null;
  Cost?: number;
};

export type ERPMedicationAssignmentDetailsDto = {
  /**
   * MEDICATION_FORM dictionary
   */
  medicationForm?: string | null;
  dosageAmount?: number | null;
  dosageUnit?: string | null;
  mealRelation?: MedicationMealRelation;
  schedule: ERPDoctorAssignmentScheduleDto;
};

/**
 * A selectable monitoring indicator in the customer dictionary.
 */
export type ERPMonitoringIndicator = {
  Name: string;
  /**
   * Optional eHealth/ucum/units dictionary code, used for display only.
   */
  Unit?: string | null;
  Id?: number;
};

export type ERPMonitoringReminder = {
  /**
   * Local reminder time, at minute precision.
   */
  Time: string;
};

/**
 * Reminder settings only; saving these settings does not deliver notifications.
 */
export type ERPMonitoringSchedule = {
  Frequency?: DoctorAssignmentFrequency;
  Weekdays?: Array<DoctorAssignmentWeekday> | null;
  IntervalValue?: number | null;
  IntervalUnit?: DoctorAssignmentIntervalUnit;
  CycleActiveDays?: number | null;
  CyclePauseDays?: number | null;
  Multiplicity?: DoctorAssignmentMultiplicity;
  EveryHours?: number | null;
  Reminders?: Array<ERPMonitoringReminder> | null;
  DurationDays?: number | null;
};

export type ERPNomencaltureLookup = {
  MinimalCountOnStorage?: number | null;
  ExpiryAlertDays?: number | null;
  NomenclatureId?: number;
  MaterialManufacturerId?: number;
  Name?: string | null;
  ManufacturerName?: string | null;
  UnitTypeId?: number;
  GroupId?: number | null;
  AccessGroupIds?: Array<number> | null;
  Code?: string | null;
};

export type ERPNomenclature = {
  Name?: string | null;
  VendorCode?: string | null;
  MarionId?: number;
  Form?: string | null;
  Number?: string | null;
  FormRelease?: string | null;
  Category?: string | null;
  LicenseOvnerId?: number | null;
  RegСertificate?: string | null;
  RegStartDate?: string;
  RegEndDate?: string;
  NomenclatureGroupId?: number | null;
  TaxCodeId?: number | null;
  AllowFiscalization?: boolean;
  Barcode?: string | null;
  Uktzed?: string | null;
  MaterialUnitTypeId?: number;
  MaterialManufacturerId?: number;
  MinimalCountOnStorage?: number | null;
  ExpiryAlertDays?: number | null;
  NomenclatureId?: number;
  Del?: boolean;
  Code?: string | null;
};

export type ERPNomenclatureAccessGroup = { Id?: number; Name?: string | null };

export type ERPNomenclatureAccessGroupEditable = { Name?: string | null };

export type ERPNomenclatureAccessGroupMember = {
  NomenclatureAccessGroupId?: number;
  MemberId?: number;
};

export type ERPNomenclatureGroups = {
  NomenclatureGroupId?: number;
  Name?: string | null;
  ParentId?: number | null;
};

export type ERPNomenclaturePrice = {
  Cost?: number;
  PriceId?: number;
  NomenclatureId?: number;
};

export type ERPPackageNomenclature = {
  NomenclatureId?: number;
  PackageId?: number;
  Count?: number;
  UnitTypeId?: number;
};

export type ERPPackagePrice = {
  PriceId?: number;
  PackageId?: number;
  Cost?: number;
};

export type ERPPackageTagEditableDto = { Name?: string | null };

export type ERPPatientPosition = {
  ExternalId?: string | null;
  Name: string;
  Code: string;
  /**
   * Required only when `ExternalClinicId` is not set.
   */
  ClinicId: number;
  /**
   * Required only when `ClinicId` is not set.
   */
  ExternalClinicId: string;
  Id?: number;
};

export type ERPPatientPositionEditModel = {
  ExternalId?: string | null;
  Name: string;
  Code: string;
  /**
   * Required only when `ExternalClinicId` is not set.
   */
  ClinicId: number;
  /**
   * Required only when `ClinicId` is not set.
   */
  ExternalClinicId: string;
};

export type ERPPatientSickLeave = {
  ExternalId?: string | null;
  OrganizationName?: string | null;
  /**
   * Not used for now
   */
  Kind?: string | null;
  From?: string | null;
  To?: string | null;
  /**
   * Name of medical organization when sickleave issued
   */
  HospitalName?: string | null;
  Diagnosis?: string | null;
  /**
   * Sick leave number
   */
  Number: string;
  Comment?: string | null;
  Id?: number;
  PatientId?: number;
};

export type ERPPatientSickLeaveEditModel = {
  ExternalId?: string | null;
  OrganizationName?: string | null;
  /**
   * Not used for now
   */
  Kind?: string | null;
  From?: string | null;
  To?: string | null;
  /**
   * Name of medical organization when sickleave issued
   */
  HospitalName?: string | null;
  Diagnosis?: string | null;
  /**
   * Sick leave number
   */
  Number: string;
  Comment?: string | null;
};

export type ERPPrerecordStatusHistoryDto = {
  Id?: number;
  Status?: PrerecordStatus;
  Date?: string;
  Note?: string | null;
  PrerecordId?: number;
  WhoSetStatusId?: number;
};

export type ERPPrice = {
  PriceId?: number;
  ContractorPactId?: number | null;
  Name?: string | null;
  PriceType?: PriceType;
  InWork?: boolean;
  DateStart?: string | null;
  DateEnd?: string | null;
  Currency?: CurrencyType;
  Cashless?: boolean;
  Cash?: boolean;
  Online?: boolean;
  DefaultForClinic?: boolean;
};

export type ERPPriceClinic = { PriceId?: number; ClinicId?: number };

export type ERPProtocolDrugCreateRequest = {
  drug: DrugDto;
  description?: string | null;
  assignmentDetails: ERPMedicationAssignmentDetailsDto;
};

export type ERPProtocolDrugDto = {
  id?: number;
  patientId?: number;
  protocolId?: number;
  del?: boolean;
  drug?: DrugDto;
  description?: string | null;
  assignmentDetails?: ERPMedicationAssignmentDetailsDto;
  daysCount?: number;
  perDayCount?: number;
  dose?: string | null;
};

export type ERPProtocolDrugUpdateRequest = {
  /**
   * New name for a locally created drug. Null keeps the current name; catalog drugs cannot be renamed.
   */
  drugName?: string | null;
  description?: string | null;
  assignmentDetails: ERPMedicationAssignmentDetailsDto;
};

export type ERPProtocolMonitoringAssignment = {
  ScheduleDetails: ERPMonitoringSchedule;
  Id?: number;
  PatientId?: number;
  ProtocolId?: number;
  Del?: boolean;
  MonitoringIndicatorId?: number;
  MonitoringIndicatorName?: string | null;
  /**
   * The indicator's optional eHealth/ucum/units dictionary code, used for display only.
   */
  MonitoringIndicatorUnit?: string | null;
};

export type ERPProtocolMonitoringCreateRequest = {
  ScheduleDetails: ERPMonitoringSchedule;
  MonitoringIndicatorId: number;
};

export type ERPProtocolMonitoringUpdateRequest = {
  ScheduleDetails: ERPMonitoringSchedule;
};

/**
 * Full referral, including source information and computed links, for read APIs and webhooks.
 */
export type ERPReferralSalepackPackage = {
  ProtocolId: number;
  /**
   * Catalog service identifier. An existing referral cannot be moved to another service.
   */
  PackageId: number;
  AssuranceAproveState?: AssuranceAproveEnum;
  /**
   * Appointment date, independent of the reminder date.
   */
  TargetDate?: string | null;
  RecommendationDetails?: ERPServiceRecommendationDetailsDto;
  /**
   * Referral Salepack Package identifier
   */
  Id?: number;
  PackageCode?: string | null;
  PackageName?: string | null;
  PackageType?: PackageType;
  Status?: ReferalSalepackPackageStatus;
  /**
   * Patient identifier
   */
  PatientId?: number;
  /**
   * Identifier of the doctor/user who issued the referral
   */
  SourceDiscoveryId?: number;
  /**
   * Source prerecord identifier (appointment that led to this referral)
   */
  SourcePrerecordId?: number | null;
  /**
   * Source ordered service identifier (service during which the referral was issued)
   */
  SourceSalepackId?: number;
  /**
   * Source service/package creation date
   */
  SourceSalepackCreatedAt?: string;
  /**
   * Referral creation date
   */
  CreatedAt?: string;
  /**
   * Referral-based prerecord identifier
   * (appointment created as a result of this referral)
   */
  PrerecordId?: number | null;
  /**
   * Referral-based service identifiers (created as a result of this referral)
   */
  SalepackIds?: Array<number> | null;
};

/**
 * Represent room information
 */
export type ERPRoom = {
  /**
   * Clinic identifier where the room is located
   */
  ClinicId?: number;
  /**
   * Name of the room
   *
   * - maximum length: 200 characters
   */
  Name?: string | null;
  /**
   * Short name of the room
   *
   *  - maximum length: 7 characters
   */
  ShortName?: string | null;
  /**
   * Room group identifier, can be used to group rooms located in different clinics
   */
  GroupId?: number | null;
  /**
   * Room identifier
   */
  RoomId?: number;
};

/**
 * Payload for creating or updating a room
 */
export type ERPRoomEditable = {
  /**
   * Clinic identifier where the room is located
   */
  ClinicId?: number;
  /**
   * Name of the room
   *
   * - maximum length: 200 characters
   */
  Name?: string | null;
  /**
   * Short name of the room
   *
   *  - maximum length: 7 characters
   */
  ShortName?: string | null;
  /**
   * Room group identifier, can be used to group rooms located in different clinics
   */
  GroupId?: number | null;
};

export type ERPSalaryRule = {
  Title?: string | null;
  Description?: string | null;
  EffectiveFrom?: string;
  EffectiveTo?: string | null;
  Active?: boolean;
  MaxMonthlySalary?: number | null;
  MinMonthlySalary?: number | null;
  PercentDiscovery?: number | null;
  HourlyRate?: number | null;
  OvertimeHourlyRate?: number | null;
  NormalDayDurationHours?: number | null;
  TariffDiscovery?: number | null;
  UserId?: number | null;
  UserPositionId?: number | null;
  ClinicId?: number | null;
  PackageTagId?: number | null;
  PackageGroupId?: number | null;
  SalaryExtensions?: SalaryExtensions;
  Packages?: Array<BaseDto> | null;
  Id?: number;
};

export type ERPSaleMaterial = {
  DocumentId?: number;
  CreatedUserId?: number | null;
  ClinicId?: number;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  StorageId?: number;
  PatientId?: number;
  PriceId?: number;
  TempBookingId?: number | null;
  Goods?: Array<ERPSaleMaterialItem> | null;
  IsReturn?: boolean;
  ReferringUserId?: number | null;
};

export type ERPSaleMaterialEditable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  PatientId?: number;
  PriceId?: number;
  TempBookingId?: number | null;
  ReferringUserId?: number | null;
  Goods?: Array<ERPSaleMaterialEditableItem> | null;
};

export type ERPSaleMaterialEditableItem = {
  SaleMaterialItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
};

export type ERPSaleMaterialItem = {
  DocumentItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
};

/**
 * Information about ordered service to patient
 */
export type ERPSalePack = {
  /**
   * Identifier of ordered service
   */
  SalepackId?: number;
  /**
   * Identifier of service\package
   */
  PackageId?: number;
  /**
   * Identifier of parent service\package (in case if package is group of services)
   * For regular services equal to PackageId
   */
  ParentPackageId?: number | null;
  AssuranceId?: number | null;
  DiscountId?: number | null;
  PaymentTypeId?: PaymentTypeId;
  ReferringTypeId?: ReferringTypeId;
  /**
   * Indicates if was fiscalized using PRRO\RRO
   */
  IsFiscal?: boolean;
  PriceId?: number | null;
  /**
   * Identifier of branch/clinic where service was ordered
   */
  ClinicId?: number;
  PatientId?: number;
  PatientLfm?: string | null;
  /**
   * Who create the record
   */
  CreatedUserId?: number;
  /**
   * Identifier of prerecord (appointment) linked to the ordered service
   */
  PrerecordId?: number | null;
  PriceDiscountCash?: number;
  PriceUndiscountCash?: number;
  /**
   * Date and time of ordering
   */
  DateCreated?: string;
  /**
   * Indicates if record was deleted
   */
  Del?: boolean;
  /**
   * Name of service\package
   */
  PackName?: string | null;
  /**
   * Count of ordered services\packages
   */
  Count?: number;
  RoomId?: number | null;
  PriceDiscountWithoutCash?: number;
  PriceUndiscountWithoutCash?: number;
  /**
   * Sum of debt (if patient did not pay full price yet)
   */
  Debt?: number;
  RepaymentOfDebt?: string | null;
  /**
   * Identifier of receipt
   */
  BookingId?: number;
  ContractorPactId?: number | null;
  Currency?: CurrencyType;
  CashDeskId?: CashDesk;
  SalepackMaterialType?: SalepackMaterialTypeEnum;
  ContractorCoordinatorId?: number | null;
  /**
   * Identifier to referral (origin of the sale)
   */
  ReferalSalepackPackageId?: number | null;
  TagName?: string | null;
  IncomingMoney?: number | null;
  ContractorId?: number | null;
  Laboratory?: ERPLaboratoryInfo;
  Discovery?: ERPUserInfo;
  ReferringDoctor?: ERPUserInfo;
};

export type ERPSalepackExecutor = {
  UserId?: number;
  UserPositionId?: number | null;
  /**
   * allow set custom rate coefficient for executor
   * if executor was involved a bit more or less than others
   * this coefficient will be used to calculate executor's share per this salepack
   */
  RateCoefficient?: number | null;
  Note?: string | null;
  Id?: number;
  SalepackId?: number;
  UserLFM?: string | null;
  Position?: string | null;
};

export type ERPSalesInvoice = {
  SalesInvoiceId?: number;
  ParentSalepackId?: number | null;
  ApplyInvoice?: boolean;
  UserCrId?: number;
  ApplyedUserId?: number | null;
  Note?: string | null;
  Direct?: SalesInvoiceDirect;
  DateCr?: string;
  DateApply?: string | null;
};

export type ERPSalesInvoiceNomenclature = {
  SalesInvoiceNomenclatureId?: number;
  NomenclatureId?: number;
  SalesInvoiceId?: number;
  StorageId?: number;
  DateCr?: string;
  UserId?: number;
  Count?: number;
  Cost?: number;
  VAT?: number;
  CostWithVAT?: number;
  UnitId?: number;
  MaterialReceiptInvoiceId?: number;
};

export type ERPServiceRecommendationDetailsDto = {
  ReminderRule?: ServiceReminderRule;
  ReminderDate?: string | null;
  DaysAfterMedication?: number | null;
  TreatmentDay?: number | null;
  AdditionalCondition?: ServiceAdditionalCondition;
  AdditionalConditionText?: string | null;
  Recipient?: string | null;
};

export type ERPStockBalance = {
  StockBalanceId?: number;
  Count?: number;
  NomenclatureId?: number;
  LotId?: number | null;
  StorageId?: number;
  UnitTypeId?: number;
  Cost?: number;
  ClinicId?: number | null;
  NomenclatureGroupId?: number | null;
  SaleCost?: number | null;
};

export type ERPStockBalanceReport = {
  Count?: number;
  NomenclatureId?: number;
  LotId?: number | null;
  StorageId?: number;
  UnitTypeId?: number;
  UnitCost?: number;
  Cost?: number | null;
  SourceGoodsReceiptId?: number | null;
  SourceGoodsReceiptItemId?: number | null;
};

export type ERPStockBalanceReportQuery = {
  StorageIds?: Array<number> | null;
  NomenclatureIds?: Array<number> | null;
};

export type ERPStorage = {
  Name?: string | null;
  ClinicId?: number | null;
  RoomId?: number | null;
  DefaultForClinic?: boolean;
  StorageId?: number;
  Del?: boolean;
  AllowNegativeStock?: boolean;
};

export type ERPStorageEditable = {
  Name?: string | null;
  ClinicId?: number | null;
  RoomId?: number | null;
  DefaultForClinic?: boolean;
};

export type ERPTaxCode = {
  TaxCodeId?: number;
  Name?: string | null;
  CheckboxTaxCode?: number | null;
  ClassicTaxCode?: number | null;
  VchasnoTaxCode?: number | null;
};

export type ERPTransferMaterial = {
  TransferMaterialId?: number;
  CreatedUserId?: number | null;
  ClinicId?: number;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  FromStorageId?: number;
  ToStorageId?: number;
  TransferOrderId?: number | null;
  Goods?: Array<ERPTransferMaterialItem> | null;
};

export type ERPTransferMaterialEditable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  FromStorageId?: number;
  ToStorageId?: number;
  TransferOrderId?: number | null;
  Goods?: Array<ERPTransferMaterialEditableItem> | null;
};

export type ERPTransferMaterialEditableItem = {
  TransferMaterialItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
};

export type ERPTransferMaterialItem = {
  TransferMaterialItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
};

export type ERPTransferOrder = {
  TransferOrderId?: number;
  CreatedUserId?: number | null;
  ClinicId?: number;
  DateCreated?: string;
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  Confirmed?: boolean;
  ConfirmedUserId?: number | null;
  DateConfirmed?: string | null;
  ToStorageId?: number;
  Goods?: Array<ERPTransferOrderItem> | null;
};

export type ERPTransferOrderEditable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  ToStorageId?: number;
  Goods?: Array<ERPTransferOrderEditableItem> | null;
};

export type ERPTransferOrderEditableItem = {
  TransferOrderItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
};

export type ERPTransferOrderItem = {
  TransferOrderItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
};

export type ERPUnitType = { Name?: string | null; UnitTypeId?: number };

export type ERPUnitTypeConversions = {
  FromUnitId?: number;
  ToUnitId?: number;
  Coef?: number;
};

export type ERPUpdateGoodsReceipt = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  ContractorProviderId?: number;
  Goods?: Array<ERPUpdateGoodsReceiptItem> | null;
};

export type ERPUpdateGoodsReceiptItem = {
  GoodsReceiptItemId?: number;
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  VAT?: number;
  Cost?: number;
  CostWithVAT?: number;
  LotId?: number | null;
  LotCode?: string | null;
  ExpiryDate?: string | null;
};

export type ERPUserCreateInformation = {
  ExternalId?: string | null;
  ClinicId?: number;
  PrerecordIndex?: number;
  DefaultInterval?: number;
  OrderIndex?: number;
  DefaultPageId?: number;
  AllowRemoteLogin?: boolean;
  PhoneNumberConfirmed?: boolean | null;
  AllowLogin?: boolean;
  Born?: string | null;
  Experience?: string | null;
  MinimumCost?: number | null;
  Email?: string | null;
  FirstTelephone?: string | null;
  SecondTelephone?: string | null;
  Note?: string | null;
  UserName?: string | null;
  Last?: string | null;
  First?: string | null;
  Middle?: string | null;
  Passport?: string | null;
  IdentificationCode?: string | null;
  AdditionalInformation?: string | null;
  Education?: string | null;
  ScientificDegree?: string | null;
  QualificationCategory?: string | null;
  UserPositionId?: number | null;
  Photo?: string | null;
  ExecutorId?: number | null;
  IsOnline?: boolean;
  Acls?: Array<number> | null;
  UserStorages?: Array<number> | null;
  UserEmailSettings?: Array<EmailSetting> | null;
  SubordinatedUsers?: Array<number> | null;
  Specializations?: Array<number> | null;
  AllowedClinics?: Array<number> | null;
};

export type ERPUserDto = {
  ExternalId?: string | null;
  ClinicId?: number;
  PrerecordIndex?: number;
  DefaultInterval?: number;
  OrderIndex?: number;
  DefaultPageId?: number;
  AllowRemoteLogin?: boolean;
  PhoneNumberConfirmed?: boolean | null;
  AllowLogin?: boolean;
  Born?: string | null;
  Experience?: string | null;
  MinimumCost?: number | null;
  Email?: string | null;
  FirstTelephone?: string | null;
  SecondTelephone?: string | null;
  Note?: string | null;
  UserName?: string | null;
  Last?: string | null;
  First?: string | null;
  Middle?: string | null;
  Passport?: string | null;
  IdentificationCode?: string | null;
  AdditionalInformation?: string | null;
  Education?: string | null;
  ScientificDegree?: string | null;
  QualificationCategory?: string | null;
  UserPositionId?: number | null;
  Photo?: string | null;
  ExecutorId?: number | null;
  IsOnline?: boolean;
  UserId?: number;
};

export type ERPUserInfo = { Id?: number | null; Name?: string | null };

export type ERPUserInformation = {
  ExternalId?: string | null;
  ClinicId?: number;
  PrerecordIndex?: number;
  DefaultInterval?: number;
  OrderIndex?: number;
  DefaultPageId?: number;
  AllowRemoteLogin?: boolean;
  PhoneNumberConfirmed?: boolean | null;
  AllowLogin?: boolean;
  Born?: string | null;
  Experience?: string | null;
  MinimumCost?: number | null;
  Email?: string | null;
  FirstTelephone?: string | null;
  SecondTelephone?: string | null;
  Note?: string | null;
  UserName?: string | null;
  Last?: string | null;
  First?: string | null;
  Middle?: string | null;
  Passport?: string | null;
  IdentificationCode?: string | null;
  AdditionalInformation?: string | null;
  Education?: string | null;
  ScientificDegree?: string | null;
  QualificationCategory?: string | null;
  UserPositionId?: number | null;
  Photo?: string | null;
  ExecutorId?: number | null;
  IsOnline?: boolean;
};

export type ERPUserPosition = {
  Name?: string | null;
  Description?: string | null;
  SalaryRuleLimits?: SalaryRuleLimits;
  Type?: SystemUserPosition;
  UserPositionId?: number;
};

export type ERPUserShift = {
  Date?: string;
  UserId?: number;
  Hours?: number;
  Note?: string | null;
  UserPositionId?: number | null;
  ClinicId?: number | null;
  Id?: number;
  CreatedAt?: string;
  CreatedById?: number;
  Approved?: boolean;
  Type?: UserShiftType;
  ApprovingNote?: string | null;
  IsAutoGenerated?: boolean;
};

export type ERPUserShiftApprove = { ApprovingNote: string | null };

export type ERPUserStorage = { UserId?: number; StorageId?: number };

export type ERPWard = {
  Title?: string | null;
  ClinicId?: number;
  WardCategoryId?: number | null;
  HospitalDivisionId?: number | null;
  Sex?: boolean | null;
  PackageId?: number | null;
  Note?: string | null;
  BackgroundColor?: string | null;
  Active?: boolean | null;
  AvailableFrom?: string | null;
  AvailableTo?: string | null;
  Id?: number;
  WardCategory?: ERPWardCategory;
  HospitalDivision?: ERPHospitalDivision;
};

export type ERPWardCategory = {
  Title?: string | null;
  Index?: number;
  Color?: string | null;
  Id?: number;
};

export type ERPWriteOffCreatable = {
  DocumentDate?: string;
  DocumentNumber?: string | null;
  Note?: string | null;
  StorageId?: number;
  Goods?: Array<ERPWriteOffItemCreatable> | null;
};

export type ERPWriteOffItemCreatable = {
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
  LotId?: number | null;
  SourceGoodsReceiptItemId?: number | null;
};

/**
 * Values:
 *
 * - `0`: Discovery
 *
 * - `1`: Assistant
 *
 *
 */
export type ExecutionType = 0 | 1;

export type ExternalAnalysisCodeDto = {
  сode?: string | null;
  prefix?: string | null;
  activeStatusId?: number | null;
  index?: number;
  orderItems?: Array<ExternalOrderItemCodeDto> | null;
  container?: ExternalAnalysisContainerDto;
};

export type ExternalAnalysisContainerDto = {
  name?: string | null;
  shortName?: string | null;
  capacity?: number;
  temperatureLimits?: string | null;
  description?: string | null;
  isBlend?: boolean;
  containerType?: ExternalOrderCodeExtension;
  analysisSampleMaterials?: Array<ExternalOrderCodeSampleMaterials> | null;
  barCodeSize?: BarCodeSize;
};

export type ExternalCreateReferringDoctorModel = {
  PhoneNumber?: string | null;
  Last?: string | null;
  First?: string | null;
  Middle?: string | null;
  Email?: string | null;
  CityId?: number | null;
  HospitalId?: number | null;
  TypeDoctorId?: number | null;
};

/**
 * Values:
 *
 * - `0`: Medakadem
 *
 * - `1`: Synevo
 *
 * - `2`: Esculab
 *
 * - `3`: TerraLab
 *
 * - `4`: MedCloud
 *
 *
 */
export type ExternalIntegrationType = 0 | 1 | 2 | 3 | 4;

export type ExternalOrderCodeExtension = {
  name?: string | null;
  shortName?: string | null;
};

export type ExternalOrderCodeSampleMaterials = {
  name?: string | null;
  shortName?: string | null;
  analysisSampleMaterialType?: AnalysisSampleMaterialType;
};

export type ExternalOrderItem = {
  itemId?: number;
  externalUniqueId?: string;
  parentExternalUniqueId?: string;
  quantity?: number;
  assembledAt?: string | null;
  menopause?: number | null;
  dateLastPeriods?: string | null;
  weeksOfPregnancy?: number | null;
  note?: string | null;
  orderId?: number;
  сontractorEDRPOU?: string | null;
  analysisSampleMaterial?: string | null;
  dateCreated?: string;
  laboratoryPrice?: number;
};

export type ExternalOrderItemCodeDto = {
  orderItemId?: number;
  packageUniqueId?: string;
};

export type ExternalOrderPatient = {
  first?: string | null;
  last?: string | null;
  middle?: string | null;
  born?: string;
  gender?: string | null;
  phone?: string | null;
  email?: string | null;
  animalBreed?: string | null;
  animalKind?: string | null;
  Code?: string | null;
};

export type ExternalReferralMessageCommand = {
  patientName?: string | null;
  born?: string | null;
  patientPhoneNumber?: string | null;
  surveyName?: string | null;
  sourceName?: string | null;
  comment?: string | null;
  category?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
};

export type FileDto = {
  Id?: number;
  Name?: string | null;
  url?: string | null;
  readonly IsImage?: boolean;
};

export type GetMatchingRulesRequest = {
  Id?: number | null;
  EffectiveFrom?: string;
  EffectiveTo?: string | null;
  UserId?: number | null;
  PackageTagId?: number | null;
  UserPositionId?: number | null;
  ClinicId?: number | null;
  Packages?: Array<BaseDto> | null;
};

export type GroupPackageInformation = {
  AnalysisSampleMaterialId?: number | null;
  AnalyzerDeviceId?: number | null;
  BaseTemplate?: string | null;
  ContainerId?: number | null;
  DateWhenDefault?: number | null;
  Detail?: string | null;
  DetailOnline?: string | null;
  DynamicFormGroupId?: number | null;
  EhealthPackageType?: EhealthPackageType;
  EnableMedicalExamination?: boolean;
  EnglishName?: string | null;
  ExternalCode?: string | null;
  GroupPackageId?: number;
  IsHavePreparation?: boolean;
  MozNamePrinting?: string | null;
  PercentReferring?: number;
  Preparation?: string | null;
  PrintOldAnalysisResult?: boolean;
  RoomId?: number | null;
  TagId?: number | null;
  TariffReferring?: number;
  TaxCodeId?: number | null;
  PackageType?: PackageType;
  IsUsg?: boolean;
  TariffDiscovery?: number;
  PercentDiscovery?: number;
  ShortName?: string | null;
  DefaultPrice?: number;
  IsOnline?: boolean;
  NameOnline?: string | null;
  OnlinePreparation?: string | null;
  AllowPrerecord?: boolean;
  DefaultInterval?: number;
  AbsoluteTimeToReady?: number | null;
  ActualTimeToReady?: number | null;
  CapacityIntake?: number | null;
  ProductCoefficient?: number;
  AllowMultiple?: boolean;
  AlwaysReady?: boolean;
  DiagnosisRequired?: boolean;
  Invisible?: boolean;
  DisallowDiscount?: boolean;
  DisallowPromotions?: boolean;
  BlockParallelExecution?: boolean;
  ValidateNomenclature?: boolean;
  DateWhenRequired?: boolean;
  IsNotSetRefferingDoctor?: boolean;
  IsPrimaryReception?: boolean;
  Name?: string | null;
  Code?: string | null;
  Barcode?: string | null;
  Uktzed?: string | null;
  OrderQuestionaryFormGroupId?: number | null;
  RequiredOrderQuestionary?: boolean;
  CanBeCito?: boolean;
  PercentCito?: number;
  TariffCito?: number;
  CitoNamePrefix?: string | null;
  CitoCodePrefix?: string | null;
  PackageId?: number;
  ParentGroupPackageId?: number | null;
  /**
   * Price from package package price (in case of import\export)
   */
  CostFromPrice?: number | null;
  CitoAbsoluteTimeToReady?: number | null;
  CitoActualTimeToReady?: number | null;
  ChildPackages?: Array<ChildPackageInformation> | null;
};

export type GroupPackageTree = {
  Level1Name?: string | null;
  Level2Name?: string | null;
  Level3Name?: string | null;
  Level4Name?: string | null;
  Level5Name?: string | null;
  Id?: number;
  Level1?: number;
  Level2?: number | null;
  Level3?: number | null;
  Level4?: number | null;
  Level5?: number | null;
};

export type HarmfulWorkingConditionsDto = {
  Name?: string | null;
  Packages?: Array<MedicalExaminationPackageDto> | null;
  HarmfulWorkingConditionId?: number;
};

/**
 * Values:
 *
 * - `0`: Hospitalization
 *
 * - `1`: Surgery
 *
 *
 */
export type HospitalDivisionType = 0 | 1;

export type HospitalizationAppointment = {
  AdmitSource?: string | null;
  ReAdmission?: string | null;
  DischargeDisposition?: string | null;
  DischargeDepartment?: string | null;
  PreAdmissionIdentifier?: string | null;
  Note?: string | null;
  PatientId?: number;
  BedId?: number;
  IsUrgent?: boolean;
  HospitalizationCategoryId?: number | null;
  CleanlinessClass?: CleanlinessClass;
  HospitalizationType?: HospitalizationType;
  PackageId?: number | null;
  HospitalDivisionId?: number | null;
  DiscoveryUserId?: number | null;
  ReferringDoctorId?: number | null;
  AssuranceId?: number | null;
  ReferingHospitalId?: number | null;
  Start?: string;
  End?: string;
  Id?: number;
  Patient?: PrerecordPatient;
  WardId?: number;
  ClinicId?: number;
  CreatedById?: number;
  CreatedAt?: string;
};

/**
 * Values:
 *
 * - `0`: Stationary
 *
 * - `1`: Surgical
 *
 *
 */
export type HospitalizationType = 0 | 1;

export type HospitalModel = {
  Id?: number;
  Name?: string | null;
  CityId?: number;
  CityName?: string | null;
};

export type HttpValidationProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  errors?: Record<string, Array<string>>;
} & Record<string, unknown>;

export type ImageDto = {
  Id?: number;
  Name?: string | null;
  url?: string | null;
  readonly IsImage?: boolean;
};

/**
 * Model for initialization of OTP login
 * required for `grant_type=patient`
 */
export type InitializeOTPLogin = {
  /**
   * Patient's phone number for login
   */
  Phone: string;
  /**
   * When there are more than one patient with the same phone number,
   * we need to check the date of birth
   */
  Born?: string | null;
};

export type InitializeOTPLoginCommand = {
  readonly Phone?: string | null;
  Born?: string | null;
};

/**
 * Contains information about the result of online operations
 *
 * When `ResultType` is `Ok` -> OTP token was sent to patient
 */
export type InitializeOTPLoginCommandOnlineResult = {
  ResultType?: OnlineResultType;
  /**
   * If result is not successful, this property contains the error messages
   */
  readonly Errors?: Array<string> | null;
  Data?: InitializeOTPLoginCommand;
};

export type InitializeOTPLoginInvalidArgumentOnlineResult = {
  ResultType?: OnlineResultType;
  /**
   * If result is not successful, this property contains the error messages
   */
  readonly Errors?: Array<string> | null;
};

export type InitializeOTPLoginUnexpectedResult = {
  ResultType?: OnlineResultType;
  readonly Errors?: Array<string> | null;
};

export type InitializeRegisterModel = { PhoneNumber?: string | null };

export type Int32BusinessResponse = {
  errors?: Array<BusinessResponseError> | null;
  readonly isSuccess?: boolean;
  data?: number;
};

export type Int32DecimalKeyValuePair = { Key?: number; Value?: number };

export type Interval = { From?: string; To?: string };

/**
 * Interval
 */
export type IntervalHolder = {
  /**
   * start of interval
   */
  From?: string;
  /**
   * end of interval
   */
  To?: string;
};

export type IOrderMessage = {
  PatientId: number;
  Items: Array<OrderItem> | null;
};

export type LaboratoryPackageCostModel = {
  Code?: string | null;
  Name?: string | null;
  LaboratoryPrice?: number | null;
  PackageId?: number;
};

/**
 * Values:
 *
 * - `0`: Exact
 *
 * - `1`: Age
 *
 * - `2`: Unknown
 *
 *
 */
export type LocalPatientBirthDateKind = 0 | 1 | 2;

export type LocalPatientIdentityMetadata = {
  IsPreperson?: boolean;
  Age?: number | null;
  NameKind?: LocalPatientNameKind;
  BirthDateKind?: LocalPatientBirthDateKind;
};

/**
 * Values:
 *
 * - `0`: Manual
 *
 * - `1`: Structured
 *
 * - `2`: Short
 *
 * - `3`: Placeholder
 *
 *
 */
export type LocalPatientNameKind = 0 | 1 | 2 | 3;

/**
 * Values:
 *
 * - `0`: Default
 *
 * - `1`: Single
 *
 *
 */
export type MatchMode = 0 | 1;

/**
 * Values:
 *
 * - `1`: Receipt
 *
 * - `2`: Consumption
 *
 * - `3`: Sale
 *
 * - `4`: Transfer
 *
 * - `5`: AdjustmentIn
 *
 * - `6`: AdjustmentOut
 *
 * - `7`: CostAdjustment
 *
 * - `8`: WriteOff
 *
 * - `9`: ReturnConsumption
 *
 * - `10`: ReturnSale
 *
 * - `11`: ReturnReceipt
 *
 * - `12`: TransferOrder
 *
 *
 */
export type MaterialDocumentType =
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Values:
 *
 * - `0`: IN
 *
 * - `1`: OUT
 *
 * - `2`: TRANSFER_OUT
 *
 * - `3`: TRANSFER_IN
 *
 * - `4`: ADJUST_IN
 *
 * - `5`: ADJUST_OUT
 *
 * - `6`: WRITEOFF_OUT
 *
 *
 */
export type MaterialMovementType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type MedicalExaminationPackageDto = {
  PackageId?: number;
  Name?: string | null;
  Type?: MedicalExaminationPackageType;
};

/**
 * Values:
 *
 * - `0`: PrimaryAndSecondary
 *
 * - `1`: Primary
 *
 * - `2`: Secondary
 *
 *
 */
export type MedicalExaminationPackageType = 0 | 1 | 2;

export type MedicationCatalogDetail = {
  stableId?: string;
  requestedStableId?: string | null;
  ehealthMedicationId?: string | null;
  pillId?: string | null;
  reestrId?: string | null;
  drlzSkuId?: string | null;
  drlzLicenceNumber?: string | null;
  morionCode?: number | null;
  barcode?: string | null;
  sourceFlags?: MedicationCatalogSourceFlags;
  displayName?: string | null;
  tradeName?: string | null;
  internationalName?: string | null;
  dosage?: string | null;
  medicationForm?: string | null;
  releaseForm?: string | null;
  packageText?: string | null;
  packageMinQuantity?: number | null;
  packageQuantity?: number | null;
  containerNumeratorValue?: number | null;
  containerNumeratorUnit?: string | null;
  containerDenominatorValue?: number | null;
  containerDenominatorUnit?: string | null;
  pillQuantityInPack?: number | null;
  manufacturer?: string | null;
  manufacturerCountry?: string | null;
  atcCode?: string | null;
  registryStatus?: string | null;
  dispensingConditions?: string | null;
  activeComposition?: string | null;
  instructionUrl?: string | null;
  indications?: string | null;
  application?: string | null;
  contraindications?: string | null;
  sideEffects?: string | null;
  interactions?: string | null;
  sources?: Array<MedicationCatalogSourceItem> | null;
  programIds?: Array<string> | null;
};

/**
 * Values:
 *
 * - `0`: UK
 *
 * - `1`: RU
 *
 *
 */
export type MedicationCatalogLanguage = 0 | 1;

export type MedicationCatalogSearchItem = {
  stableId?: string;
  ehealthMedicationId?: string | null;
  pillId?: string | null;
  reestrId?: string | null;
  drlzSkuId?: string | null;
  drlzLicenceNumber?: string | null;
  morionCode?: number | null;
  barcode?: string | null;
  sourceFlags?: MedicationCatalogSourceFlags;
  displayName?: string | null;
  tradeName?: string | null;
  internationalName?: string | null;
  dosage?: string | null;
  medicationForm?: string | null;
  containerNumeratorValue?: number | null;
  containerNumeratorUnit?: string | null;
  manufacturer?: string | null;
  atcCode?: string | null;
  registryStatus?: string | null;
  programCount?: number;
};

export type MedicationCatalogSearchResponse = {
  loadId?: number;
  items?: Array<MedicationCatalogSearchItem> | null;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: EhealthMedication
 *
 * - `2`: ReestrCsv
 *
 * - `4`: Pills
 *
 *
 */
export type MedicationCatalogSourceFlags = 0 | 1 | 2 | 4;

export type MedicationCatalogSourceItem = {
  sourceType?: MedicationCatalogSourceType;
  sourceId?: string | null;
  language?: MedicationCatalogLanguage;
  isPrimary?: boolean;
};

/**
 * Values:
 *
 * - `1`: EhealthMedication
 *
 * - `2`: ReestrCsv
 *
 * - `4`: Pills
 *
 *
 */
export type MedicationCatalogSourceType = 1 | 2 | 4;

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: BeforeMeal
 *
 * - `2`: WithMeal
 *
 * - `3`: AfterMeal
 *
 * - `4`: Irrelevant
 *
 *
 */
export type MedicationMealRelation = 0 | 1 | 2 | 3 | 4;

export type MobilizationHistory = {
  DateStart?: string | null;
  DateEnd?: string | null;
  Reason?: string | null;
  MobilizationPoint?: string | null;
  Note?: string | null;
};

/**
 * Values:
 *
 * - `0`: any
 *
 * - `1`: uk
 *
 * - `2`: ru
 *
 * - `3`: en
 *
 * - `4`: uz
 *
 * - `5`: kz
 *
 * - `6`: ro
 *
 *
 */
export type NativeLanguageEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type NotificationStatusInfo = {
  DateSend?: string | null;
  DateReceiving?: string | null;
  Status?: string | null;
};

export type OldOnlineSchedulerIntervals = {
  FreeIntervals?: Array<PrerecordScheduleFreeIntervals> | null;
  TimeStart?: string;
  TimeEnd?: string;
  User?: UserSlimDto;
  Room?: PrerecordRoom;
};

/**
 * Analysis file model
 */
export type OnlineAnalysisFile = {
  /**
   * Analysis file identifier
   */
  AnalysisFileId?: number;
  /**
   * Name of file
   */
  Name?: string | null;
  /**
   * Download url
   */
  Url?: string | null;
  /**
   * Analysis identifier
   */
  AnalysisId?: number;
  /**
   * Patient identifier
   */
  PatientId?: number;
};

export type OnlineAnalysisInformation = {
  Referring?: string | null;
  Diagnosis?: string | null;
  Name?: string | null;
  DateCreated?: string;
  Clinic?: string | null;
};

export type OnlineDoctorFeedback = {
  Text?: string | null;
  Mark?: number;
  AnswerDate?: string;
};

export type OnlineDoctorFull = {
  /**
   * Doctor`s identifire
   */
  UserId: number;
  /**
   * Doctor`s name
   */
  LFM?: string | null;
  /**
   * Education inforation
   *
   * - If not present - value is empty
   */
  Education?: string | null;
  /**
   * Doctor`s photo url
   *
   * - If not present - value is empty
   */
  Photo?: string | null;
  /**
   * Doctor`s additional information
   *
   * - If not present - value is empty
   */
  AdditionalInformation?: string | null;
  ScientificDegree?: string | null;
  QualificationCategory?: string | null;
  FeedbackCount?: number;
  FeedbackAvg?: number;
  /**
   * Doctor`s display index
   *
   * - can be used for custom sorting
   * - If not present - value is empty
   */
  DiscoveryUserIndex?: number;
  /**
   * Doctor`s minimum cost value
   *
   * - If not present - value is empty
   */
  MinimumCost?: number | null;
  /**
   * If not present - value is empty
   */
  Experience?: string | null;
  /**
   * Doctor`s display index
   *
   * - can be used for custom sorting
   */
  OrderIndex?: number | null;
  /**
   * List of doctor`s specialization
   *
   * - can be empty
   */
  Specializations?: Array<Specialization> | null;
  SchedulerTypeDoctorId?: number | null;
  Feedbacks?: Array<OnlineDoctorFeedback> | null;
};

export type OnlinePackageFull = {
  Id?: number;
  Name?: string | null;
  Code?: string | null;
  PackageType?: number;
  DefaultPrice?: number;
  AbsoluteTimeToReady?: number | null;
  Preparation?: string | null;
  DetailOnline?: string | null;
  Doctors?: Array<BaseDto> | null;
};

export type OnlinePackageSlim = {
  Id?: number;
  Name?: string | null;
  Code?: string | null;
  PackageType?: number;
  DefaultPrice?: number;
  AbsoluteTimeToReady?: number | null;
};

/**
 * Patient information
 */
export type OnlinePatient = {
  /**
   * Patient`s identifier
   */
  Id: number;
  /**
   * Patient`s Last name
   */
  Last: string;
  /**
   * Patient`s middle\second name
   */
  Middle?: string | null;
  /**
   * Patient`s first name
   */
  First: string;
  /**
   * Patient`s phone number
   */
  PhoneNumber?: string | null;
  /**
   * Patient`s email
   */
  Email?: string | null;
  /**
   * Patient`s date of birth
   */
  Born: string;
  /**
   * Patient`s gender\sex
   */
  Sex?: boolean;
  /**
   * Patient`s city identifier
   */
  CityId?: number;
  /**
   * Patient`s clinic name
   */
  ClinicName?: string | null;
  /**
   * telegram bot user\chat identifier
   */
  TelegramBotId?: number | null;
  /**
   * primary Phone number of the patient
   */
  TelMob1?: string | null;
  /**
   * Secondary phone namr of the patient
   */
  TelMob2?: string | null;
  /**
   * Phone number of patient`s contact person
   */
  ContactTelMob1?: string | null;
  /**
   * External patient identifier
   */
  ExternalPatientId?: string | null;
};

export type OnlinePatientAccountContract = {
  TransactionId?: string | null;
  ContractNumber?: string | null;
  ContractId?: number;
  ClinicId?: number;
  Sum?: number;
};

export type OnlinePatientContract = {
  ContractTypeId?: number;
  ClinicId?: number;
  DiscountId?: number | null;
  PromotionId?: number | null;
  PatientId?: number | null;
  Packages?: Array<OnlinePatientContractPackage> | null;
  ContractNumber?: string | null;
};

export type OnlinePatientContractPackage = {
  PriceId?: number;
  PackageId?: number;
};

/**
 * Patient family member information
 */
export type OnlinePatientFamilyMember = {
  /**
   * Indicates if the patient is a family member
   */
  Owner?: boolean;
  /**
   * indicates if the patient is a contact person
   */
  ContactPerson?: boolean;
  /**
   * Indicates if the patient is a family member
   */
  FamilyMember?: boolean;
  Patient?: OnlinePatient;
};

/**
 * Represents the data model of given\ordered services.
 */
export type OnlinePatientHistory = {
  /**
   * Protocol or analysis identifier
   */
  ItemId?: number;
  /**
   * Package code
   */
  Code?: string | null;
  /**
   * Clinic name, where the service was given
   */
  ClinicName?: string | null;
  PackageType?: PackageType;
  /**
   * Date of service
   */
  DateCr?: string;
  /**
   * Name of the package\service
   */
  Name?: string | null;
  /**
   * Name of discovery doctor
   */
  Discovery?: string | null;
  /**
   * Indicates if the service is completed\finished
   */
  Completed?: boolean;
  /**
   * Indicates if the service has additional files
   */
  HasFiles?: boolean;
  /**
   * Identifier of salepack (given service)
   */
  SalePackId?: number;
  /**
   * Room identifier where service was given
   */
  RoomId?: number | null;
  /**
   * Room group id
   */
  RoomGroupId?: number | null;
  /**
   * Time of service
   */
  readonly Time?: string | null;
  /**
   * Date of service
   */
  readonly Date?: string;
  /**
   * indeicates if the service is analysis\laboratory test
   */
  readonly IsAnalysis?: boolean;
  /**
   * Indicates if the service is examination\visualization
   */
  readonly IsProtocol?: boolean;
  /**
   * Identifier of prerecord, which was used to create the service
   */
  PrerecordId?: number | null;
  /**
   * identifier of discovery
   */
  DiscoveryId?: number | null;
  /**
   * identifier of clinic, where the service was given
   */
  ClinicId?: number;
  /**
   * External identifier of clinic, where the service was given
   */
  ExternalClinicId?: string | null;
};

/**
 * Returns patient profile information with family information
 */
export type OnlinePatientProfile = {
  Patient: OnlinePatient;
  PatientFamily?: PatientFamilyMetadata;
};

export type OnlinePatientRegisterModel = {
  Last?: string | null;
  Middle?: string | null;
  First?: string | null;
  PhoneNumber?: string | null;
  Email?: string | null;
  Born?: string;
  Sex?: boolean;
  CityId?: number | null;
  Id?: number;
};

/**
 * Information about prerecord in online context
 */
export type OnlinePrerecord = {
  /**
   * Identifier of prerecord
   */
  PrerecordId?: number;
  /**
   * Prerecord start datetime
   */
  DateStart?: string;
  /**
   * Prerecord end datetime
   */
  DateEnd?: string;
  /**
   * Room of prerecord
   *
   * The room where the doctor conducts an examination
   */
  RoomId?: number;
  /**
   * Room group identifier
   */
  RoomGroupId?: number | null;
  /**
   * Name of room
   */
  RoomName?: string | null;
  /**
   * Name of doctor
   */
  DiscoveryLfm: string;
  /**
   * Marketing type (source of patient)
   */
  MarketingTypeId?: number | null;
  /**
   * Appointment comment, included in webhook payloads
   */
  Note?: string | null;
  Contractor?: BaseDto;
  /**
   * Insurance policy number, included in webhook payloads
   */
  AssuranceNumber?: string | null;
  /**
   * Doctor`s identifier
   */
  DiscoveryId: number;
  Referring?: BaseDto;
  TypeDoctor?: BaseDto;
  /**
   * Clinic identifier
   *
   * Clinic\branch where the doctor conducts an examination
   */
  ClinicId?: number;
  /**
   * Name of clinic
   */
  ClinicName?: string | null;
  /**
   * External clinic identifier
   */
  ExternalClinicId?: string | null;
  /**
   * Street where clinic located
   */
  Street?: string | null;
  /**
   * Latitude where clinic located
   */
  Latitude?: number;
  /**
   * Longitude where clinic located
   */
  Longitude?: number;
  /**
   * Reason of prerecord cancellation
   *
   * - not present if prerecord is not cancelled
   */
  PrerecordDeleteReasonId?: number | null;
  Patient: OnlinePatient;
  /**
   * List of packages planned for prerecord
   */
  AdditionalPackages?: Array<AdditionalPackagePrerecordOnlineDto> | null;
  /**
   * indicates whether the prerecord is cancelled
   */
  Del?: boolean;
  /**
   * User identifier who created the prerecord
   */
  CreatedById?: number;
  /**
   * User identifier who deleted\cancelled the prerecord
   */
  WhoDelId?: number | null;
  OnlinePaymentStatus?: PrerecordOnlinePaymentStatus;
  /**
   * Indicates whether the prerecord is deleted by external systems
   */
  readonly IsDeletedByExternalSystems?: boolean;
  /**
   * Date and time when the prerecord was created
   */
  DateCreated?: string;
};

export type OnlinePriceModel = { PriceId?: number; Name?: string | null };

export type OnlinePriceViewModel = {
  PackageId?: number;
  PackageName?: string | null;
  PackageCode?: string | null;
  PackageDetail?: string | null;
  Cost?: number;
  DisallowPromotions?: boolean;
  UniqueId?: string;
  Child?: Array<OnlinePriceViewModelChild> | null;
};

export type OnlinePriceViewModelChild = {
  PackageId?: number;
  PackageName?: string | null;
  PackageCode?: string | null;
  PackageDetail?: string | null;
  Cost?: number;
  DisallowPromotions?: boolean;
  UniqueId?: string;
};

export type OnlineProtocolInformation = {
  ProtocolId?: number;
  PatientId?: number;
  Name?: string | null;
  Discovery?: string | null;
  DiscoveryPhoto?: string | null;
  Referring?: string | null;
  Diagnosis?: string | null;
  Retested?: string | null;
  DateCreated?: string;
  Clinic?: string | null;
};

/**
 * Values:
 *
 * - `0`: Ok
 *
 * - `1`: Invalid
 *
 * - `2`: InvalidArgument
 *
 * - `3`: NotFound
 *
 * - `4`: PermissionDenied
 *
 * - `5`: Unexpected
 *
 * - `6`: NotFoundVeryfiedPatient
 *
 *
 */
export type OnlineResultType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type OnlineSchedulerIntervals = {
  User: OnlineUserDto;
  Schedules: Array<OnlineSchedules>;
};

/**
 * Describes free interval, available for booking (if empty - no free intervals)
 */
export type OnlineSchedules = {
  /**
   * Identifire of doctor`s schedule
   */
  ScheduleId: number;
  Date: string;
  /**
   * Identifire of schedule branch\clinic
   */
  ClinicId: number;
  /**
   * Identifire of schedule room
   */
  RoomId: number;
  /**
   * Name of room
   */
  RoomName?: string | null;
  /**
   * Doctor specialization for the scheduler
   */
  Specialization?: string | null;
  SpecializationId?: number | null;
  /**
   * Name of room group id, rooms in different locations (clinics) can have the same group
   */
  RoomGroupId?: number | null;
  /**
   * List of free intervasl, available for booking (if empty - no free intervals)
   */
  FreeIntervals: Array<IntervalHolder>;
};

export type OnlineSpecialization = {
  /**
   * Specialization`s identifire
   */
  SpecializationId?: number;
  /**
   * Specialization`s name (can be empty)
   */
  Name?: string | null;
  /**
   * Specialization`s category identifire (optional)
   */
  CategoryId?: number | null;
  /**
   * Specialization`s category name (optional)
   */
  CategoryName?: string | null;
  OrderIndex?: number;
  DoctorId?: number;
};

/**
 * Information about doctor\user
 */
export type OnlineUserDto = {
  /**
   * Doctor`s identifire
   */
  UserId: number;
  /**
   * Doctor`s name
   */
  LFM?: string | null;
  /**
   * Education inforation
   *
   * - If not present - value is empty
   */
  Education?: string | null;
  /**
   * Doctor`s photo url
   *
   * - If not present - value is empty
   */
  Photo?: string | null;
  /**
   * Doctor`s additional information
   *
   * - If not present - value is empty
   */
  AdditionalInformation?: string | null;
  ScientificDegree?: string | null;
  QualificationCategory?: string | null;
  FeedbackCount?: number;
  FeedbackAvg?: number;
  /**
   * Doctor`s display index
   *
   * - can be used for custom sorting
   * - If not present - value is empty
   */
  DiscoveryUserIndex?: number;
  /**
   * Doctor`s minimum cost value
   *
   * - If not present - value is empty
   */
  MinimumCost?: number | null;
  /**
   * If not present - value is empty
   */
  Experience?: string | null;
  /**
   * Doctor`s display index
   *
   * - can be used for custom sorting
   */
  OrderIndex?: number | null;
  /**
   * List of doctor`s specialization
   *
   * - can be empty
   */
  Specializations?: Array<Specialization> | null;
  SchedulerTypeDoctorId?: number | null;
};

export type OrderItem = {
  BookingId: number;
  PackageId: number;
  ParentPackageId: number | null;
  SalepackId: number;
  PackageType: PackageType;
  PaymentTypeId: PaymentTypeId;
  DiscoveryId: number | null;
  PrerecordDiscoveryId?: number | null;
  PrerecordId: number | null;
  ClinicId: number;
  Count: number;
  ReferringDoctorId: number | null;
  ReferringDoctorOldId?: number | null;
  ExternalSalepackId: number | null;
  Debt: number;
  DebtChanged: boolean;
  ReferringIdUpdated: boolean;
  ReferringTypeIdUpdated: boolean;
  PriceDiscountCash: number;
  PriceUndiscountCash: number;
  PriceDiscountWithoutCash: number;
  PriceUndiscountWithoutCash: number;
  IsFiscal: boolean;
  Del: boolean;
  DateCreated: string;
  AnalysisId?: number | null;
  ProtocolId?: number | null;
};

export type PackageAnalysisComponentsModel = {
  AnalysisComponentId?: number;
  Number?: number;
};

export type PackageCategoriesInfoModel = {
  Id?: number;
  NameUa?: string | null;
  NameEn?: string | null;
  NameRu?: string | null;
  NameKz?: string | null;
  DescriptionUa?: string | null;
  DescriptionEn?: string | null;
  DescriptionRu?: string | null;
  DescriptionKz?: string | null;
  Order?: number;
  ParentPackageCategoryId?: number | null;
};

export type PackageCategoriesViewModel = {
  Id?: number;
  NameUa?: string | null;
  NameEn?: string | null;
  NameRu?: string | null;
  NameKz?: string | null;
  DescriptionUa?: string | null;
  DescriptionEn?: string | null;
  DescriptionRu?: string | null;
  DescriptionKz?: string | null;
  Order?: number;
  ParentPackageCategoryId?: number | null;
  ChildPackageCategories?: Array<PackageCategoriesViewModel> | null;
  Packages?: Array<PackageCategoryPackageViewModel> | null;
};

export type PackageCategoryEditableDto = {
  NameUa?: string | null;
  NameEn?: string | null;
  NameRu?: string | null;
  NameKz?: string | null;
  DescriptionUa?: string | null;
  DescriptionEn?: string | null;
  DescriptionRu?: string | null;
  DescriptionKz?: string | null;
  Order?: number;
  ParentPackageCategoryId?: number | null;
};

export type PackageCategoryPackageViewModel = {
  PackageId?: number;
  PackageCategoryId?: number;
  Order?: number;
  Name?: string | null;
  ShortName?: string | null;
  Code?: string | null;
  NameOnline?: string | null;
  DetailOnline?: string | null;
  Detail?: string | null;
  DefaultPrice?: number;
};

export type PackageCreateCommand = {
  Information?: PackageInformationModel;
  DefaultConclusionTemplate?: string | null;
  SecondaryPackages?: Array<SecondaryPackagesModel> | null;
  Laboratories?: Array<PackageLaboratoriesModel> | null;
  Nomenclatures?: Array<PackageNomenclatureModel> | null;
  Prices?: Array<PackagePriceModel> | null;
  Storages?: Array<PackageStoragesModel> | null;
  TypeDoctors?: Array<PackageTypeDoctorsModel> | null;
  AnalysisComponents?: Array<PackageAnalysisComponentsModel> | null;
  AnalysisSampleMaterials?: Array<BaseDto> | null;
};

export type PackageEditableModel = {
  AnalysisSampleMaterialId?: number | null;
  AnalyzerDeviceId?: number | null;
  BaseTemplate?: string | null;
  ContainerId?: number | null;
  DateWhenDefault?: number | null;
  Detail?: string | null;
  DetailOnline?: string | null;
  DynamicFormGroupId?: number | null;
  EhealthPackageType?: EhealthPackageType;
  EnableMedicalExamination?: boolean;
  EnglishName?: string | null;
  ExternalCode?: string | null;
  GroupPackageId?: number;
  IsHavePreparation?: boolean;
  MozNamePrinting?: string | null;
  PercentReferring?: number;
  Preparation?: string | null;
  PrintOldAnalysisResult?: boolean;
  RoomId?: number | null;
  TagId?: number | null;
  TariffReferring?: number;
  TaxCodeId?: number | null;
  PackageType?: PackageType;
  IsUsg?: boolean;
  TariffDiscovery?: number;
  PercentDiscovery?: number;
  ShortName?: string | null;
  DefaultPrice?: number;
  IsOnline?: boolean;
  NameOnline?: string | null;
  OnlinePreparation?: string | null;
  AllowPrerecord?: boolean;
  DefaultInterval?: number;
  AbsoluteTimeToReady?: number | null;
  ActualTimeToReady?: number | null;
  CapacityIntake?: number | null;
  ProductCoefficient?: number;
  AllowMultiple?: boolean;
  AlwaysReady?: boolean;
  DiagnosisRequired?: boolean;
  Invisible?: boolean;
  DisallowDiscount?: boolean;
  DisallowPromotions?: boolean;
  BlockParallelExecution?: boolean;
  ValidateNomenclature?: boolean;
  DateWhenRequired?: boolean;
  IsNotSetRefferingDoctor?: boolean;
  IsPrimaryReception?: boolean;
  Name?: string | null;
  Code?: string | null;
  Barcode?: string | null;
  Uktzed?: string | null;
  OrderQuestionaryFormGroupId?: number | null;
  RequiredOrderQuestionary?: boolean;
  CanBeCito?: boolean;
  PercentCito?: number;
  TariffCito?: number;
  CitoNamePrefix?: string | null;
  CitoCodePrefix?: string | null;
  CitoAbsoluteTimeToReady?: number | null;
  CitoActualTimeToReady?: number | null;
};

export type PackageInformationModel = {
  AnalysisSampleMaterialId?: number | null;
  AnalyzerDeviceId?: number | null;
  BaseTemplate?: string | null;
  ContainerId?: number | null;
  DateWhenDefault?: number | null;
  Detail?: string | null;
  DetailOnline?: string | null;
  DynamicFormGroupId?: number | null;
  EhealthPackageType?: EhealthPackageType;
  EnableMedicalExamination?: boolean;
  EnglishName?: string | null;
  ExternalCode?: string | null;
  GroupPackageId?: number;
  IsHavePreparation?: boolean;
  MozNamePrinting?: string | null;
  PercentReferring?: number;
  Preparation?: string | null;
  PrintOldAnalysisResult?: boolean;
  RoomId?: number | null;
  TagId?: number | null;
  TariffReferring?: number;
  TaxCodeId?: number | null;
  PackageType?: PackageType;
  IsUsg?: boolean;
  TariffDiscovery?: number;
  PercentDiscovery?: number;
  ShortName?: string | null;
  DefaultPrice?: number;
  IsOnline?: boolean;
  NameOnline?: string | null;
  OnlinePreparation?: string | null;
  AllowPrerecord?: boolean;
  DefaultInterval?: number;
  AbsoluteTimeToReady?: number | null;
  ActualTimeToReady?: number | null;
  CapacityIntake?: number | null;
  ProductCoefficient?: number;
  AllowMultiple?: boolean;
  AlwaysReady?: boolean;
  DiagnosisRequired?: boolean;
  Invisible?: boolean;
  DisallowDiscount?: boolean;
  DisallowPromotions?: boolean;
  BlockParallelExecution?: boolean;
  ValidateNomenclature?: boolean;
  DateWhenRequired?: boolean;
  IsNotSetRefferingDoctor?: boolean;
  IsPrimaryReception?: boolean;
  Name?: string | null;
  Code?: string | null;
  Barcode?: string | null;
  Uktzed?: string | null;
  OrderQuestionaryFormGroupId?: number | null;
  RequiredOrderQuestionary?: boolean;
  CanBeCito?: boolean;
  PercentCito?: number;
  TariffCito?: number;
  CitoNamePrefix?: string | null;
  CitoCodePrefix?: string | null;
  PackageId?: number;
  ParentGroupPackageId?: number | null;
  /**
   * Price from package package price (in case of import\export)
   */
  CostFromPrice?: number | null;
  CitoAbsoluteTimeToReady?: number | null;
  CitoActualTimeToReady?: number | null;
};

export type PackageLaboratoriesModel = {
  Id?: number;
  LaboratoryPrice?: number | null;
  Name?: string | null;
};

export type PackageLaboratoryDto = {
  LaboratoryId?: number;
  LaboratoryPrice?: number | null;
  PackageId?: number;
};

export type PackageNomenclatureModel = {
  NomenclatureId?: number;
  MaterialUnitTypeId?: number;
  Count?: number;
};

export type PackagePackagePriceModel = {
  PriceId?: number;
  SecondaryPackageId?: number | null;
  Cost?: number;
};

export type PackagePriceModel = {
  PriceId?: number;
  PackagePackagePrices?: Array<PackagePackagePriceModel> | null;
};

export type PackagesForPatientSearchDto = {
  Skip?: number;
  Take?: number;
  Search?: string | null;
  GroupPackageIds?: Array<number> | null;
  TypeDoctorsIds?: Array<number> | null;
  ProtocolsOnly?: boolean;
  AnalysisOnly?: boolean;
  GroupsOnly?: boolean;
};

export type PackageShortDto = {
  PackageId?: number;
  ShortName?: string | null;
  Name?: string | null;
  DefaultPrice?: number;
  Code?: string | null;
  IsOnline?: boolean;
  PackageType?: PackageType;
};

export type PackagesReportsDto = {
  PackageId?: number;
  Name?: string | null;
  Code?: string | null;
  GroupPackageId?: number;
  PackageType?: PackageType;
  TagId?: number | null;
  FromDate?: string | null;
  ToDate?: string | null;
};

export type PackageStoragesModel = { StorageId?: number };

/**
 * Values:
 *
 * - `0`: Group
 *
 * - `1`: Protocol
 *
 * - `2`: Analize
 *
 * - `3`: MaterialSale
 *
 *
 */
export type PackageType = 0 | 1 | 2 | 3;

export type PackageTypeDoctorDto = {
  PackageId?: number;
  TypeDoctorId?: number;
};

export type PackageTypeDoctorsModel = { TypeDoctorId?: number };

/**
 * Values:
 *
 * - `0`: Default
 *
 * - `1`: GetOrCreate
 *
 * - `2`: CreateOrUpdate
 *
 *
 */
export type PatientCreateStrategy = 0 | 1 | 2;

export type PatientDepartmenPositionDto = {
  /**
   * Indicates if current position is primary
   * (if no one position is set - first one is primary)
   */
  IsPrimary?: boolean | null;
  /**
   * Internal ERP identifier of the department.
   * Required only when `ExternalDepartmentId` is not set
   */
  DepartmentId: number;
  /**
   * Internal ERP identifier of the position.
   * Required only when `ExternalPositionId` is not set
   */
  PositionId: number;
  /**
   * External identifier of the department.
   * Required only when `DepartmentId` is not set
   */
  ExternalDepartmentId: string;
  ExternalDepartmentName?: string | null;
  /**
   * External identifier of the position
   * Required only when `PositionId` is not set
   */
  ExternalPositionId: string;
  ExternalPositionName?: string | null;
  Extensions?: PatientPositionExtensions;
  ClinicId?: number;
  Clinic?: string | null;
  Department?: string | null;
  Position?: string | null;
  HarmfulWorkingConditions?: Array<BaseDto> | null;
};

/**
 * Describe patient's position information.
 * If item does not have deparment or position identifiers (external or internal), then item will be ignored
 */
export type PatientDepartmentPositionModel = {
  /**
   * Indicates if current position is primary
   * (if no one position is set - first one is primary)
   */
  IsPrimary?: boolean | null;
  /**
   * Internal ERP identifier of the department.
   * Required only when `ExternalDepartmentId` is not set
   */
  DepartmentId: number;
  /**
   * Internal ERP identifier of the position.
   * Required only when `ExternalPositionId` is not set
   */
  PositionId: number;
  /**
   * External identifier of the department.
   * Required only when `DepartmentId` is not set
   */
  ExternalDepartmentId: string;
  ExternalDepartmentName?: string | null;
  /**
   * External identifier of the position
   * Required only when `PositionId` is not set
   */
  ExternalPositionId: string;
  ExternalPositionName?: string | null;
  Extensions?: PatientPositionExtensions;
};

export type PatientDiscountDto = {
  DiscountId?: number;
  Id?: number;
  Number?: string | null;
  Amount?: number;
  Accumulated?: number;
  Force?: boolean;
  Name?: string | null;
  DateCreated?: string;
  DiscountTemplateId?: number;
  DiscountTemplate?: DiscountTemplateDto;
};

/**
 * Information about patient family (includes owner, family members and contact persons)
 */
export type PatientFamilyMetadata = {
  /**
   * Patient family owner identifier
   */
  OwnerId?: number;
  /**
   * Family members identifiers
   */
  readonly Members?: Array<number> | null;
};

/**
 * Model represention short information about given services
 */
export type PatientHistory = {
  /**
   * Analysis or Protocol identifier
   */
  ItemId?: number;
  /**
   * Indicates if the item is an analysis\laboratory test
   */
  IsAnalysis?: boolean;
  /**
   * Service\Package code
   */
  Code?: string | null;
  /**
   * Indicates if the item is a USG
   */
  IsUSG?: boolean;
  /**
   * Indicates if the item is a protocol\examination
   */
  IsProtocol?: boolean;
  IsCarcinoma?: boolean;
  /**
   * Indicates if the item is completed
   */
  Completed?: boolean;
  /**
   * Clinic\branch identifier
   */
  ClinicId?: number;
  PackageType?: PackageType;
  /**
   * Date of creation
   */
  DateCr?: string;
  /**
   * Name of package\service given to the patient
   */
  Name?: string | null;
  /**
   * List of ICD10 codes associated with the item
   */
  ICD10?: string | null;
  /**
   * Diagnosis given in context of curretn examination\test
   */
  Diagnosis?: string | null;
  /**
   * Discovery doctor identifier
   */
  DiscoveryId?: number | null;
  /**
   * Referring doctor name
   */
  Referring?: string | null;
  /**
   * Price of the package\service
   */
  Price?: number;
  Assurance?: string | null;
  /**
   * Identifier of the contractor\insurance company
   */
  ContractorId?: number | null;
  /**
   * Identifier of order
   */
  SalePackId?: number;
  ActiveStatusId?: number | null;
  ActiveStatusTemplateId?: number | null;
};

export type PatientHistoryItem = {
  /**
   * Protocol or analysis identifier
   */
  Id?: number;
  /**
   * Package\service code
   */
  Code?: string | null;
  /**
   * Identifier of salepack (order)
   */
  SalepackId?: number;
  /**
   * Identifier of package\service
   */
  PackageId?: number;
  /**
   * Name of package\service
   */
  Name?: string | null;
  /**
   * Date of order
   */
  DateCr?: string;
};

export type PatientMetadataExtensions = {
  EhealthIdentity?: LocalPatientIdentityMetadata;
  IsHarmfulWorkingConditions?: boolean;
  IsMainJob?: boolean;
  Shift?: string | null;
  ActualWorkplaceAddress?: string | null;
  OutSourceOrganization?: string | null;
  IsOutSource?: boolean;
  IsFired?: boolean;
  FiringConfirmed?: boolean | null;
  FiredAt?: string | null;
  DateOfEmployment?: string | null;
  Department?: string | null;
  HasOncologicalDiseases?: boolean;
  Demobilized?: boolean | null;
  MobilizationInformation?: MobilizationHistory;
  MobilizationHistiory?: Array<MobilizationHistory> | null;
  Comment?: string | null;
};

export type PatientOperationOptions = {
  CreateStrategy?: PatientCreateStrategy;
  SearchMode?: PatientSearchMode;
  MatchMode?: MatchMode;
};

export type PatientPackagesDto = {
  PackageId?: number;
  PackageCode?: string | null;
  PackageName?: string | null;
  Count?: number;
  ShortName?: string | null;
  Single?: PackageType;
  PriceId?: number | null;
  ReferalSalepackPackageId?: number | null;
  DefaultInterval?: number;
  Preparation?: string | null;
  IsHavePreparation?: boolean;
  Detail?: string | null;
  SalepackId?: number;
  Prices?: Array<ShortPrice> | null;
  AllowMultiple?: boolean;
  PackageCost?: number;
  ReferringType?: ReferringTypeId;
  ContractorPactId?: number | null;
  Id?: number;
  AssuranceAproveState?: AssuranceAproveEnum;
  DateWhen?: string | null;
};

export type PatientPositionExtensions = {
  Shift?: string | null;
  OutSourceOrganization?: string | null;
  IsOutSource?: boolean;
  DateOfEmployment?: string | null;
  IsHarmfulWorkingConditions?: boolean | null;
};

/**
 * Values:
 *
 * - `0`: Default
 *
 * - `1`: Phone
 *
 * - `2`: Born
 *
 * - `3`: Whildcard
 *
 * - `4`: Number
 *
 *
 */
export type PatientSearchMode = 0 | 1 | 2 | 3 | 4;

export type PatientServiceIdentificator = {
  SalepackId?: number;
  ProtocolId?: number | null;
  AnalysisId?: number | null;
  PackageType?: PackageType;
  PatientId?: number;
};

export type PatientSurveys = {
  Id?: number;
  PatientSurvey?: string | null;
  Date?: string;
  Status?: PatientSurveyStatus;
};

/**
 * Values:
 *
 * - `0`: newSurvey
 *
 * - `1`: Active
 *
 * - `2`: Ready
 *
 *
 */
export type PatientSurveyStatus = 0 | 1 | 2;

/**
 * Values:
 *
 * - `0`: New
 *
 * - `1`: InProgress
 *
 * - `2`: Hold
 *
 * - `3`: Success
 *
 * - `4`: Failure
 *
 * - `5`: Reversed
 *
 * - `6`: Expired
 *
 *
 */
export type PaymentOperationStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Values:
 *
 * - `1`: Assurance
 *
 * - `2`: Cash
 *
 * - `3`: Franchise
 *
 * - `4`: Terminal
 *
 * - `5`: FranchiseTerminal
 *
 * - `6`: Account
 *
 * - `7`: Online
 *
 * - `8`: Split
 *
 *
 */
export type PaymentTypeId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type PrePrerecordCreateModel = {
  PatientId?: number;
  RoomId?: number | null;
  DiscoveryUserId?: number | null;
  ClinicId?: number | null;
  DateStart?: string | null;
  DateEnd?: string | null;
  Note?: string | null;
  AdditionalPackages?: Array<BasePrePrerecordPackageDto> | null;
};

export type PrePrerecordDto = {
  PrePrerecordId?: number;
  PatientId?: number;
  Lfm?: string | null;
  TelMob1?: string | null;
  TelMob2?: string | null;
  ContactTelMob1?: string | null;
  ClinicId?: number | null;
  DiscoveryUserLfm?: string | null;
  ClinicName?: string | null;
  RoomName?: string | null;
  RoomId?: number | null;
  DiscoveryUserId?: number | null;
  DateStart?: string | null;
  DateEnd?: string | null;
  CreatedAt?: string;
  CreatedUserId?: number;
  CreatedUser?: string | null;
  Note?: string | null;
  AdditionalPackages?: Array<PrePrerecordPackageDto> | null;
};

export type PrePrerecordPackageDto = {
  PackageId?: number;
  PriceId?: number | null;
  Count?: number;
  ContractPackageId?: number | null;
  ReferalSalepackPackageId?: number | null;
  ContractorPactId?: number | null;
  Name?: string | null;
  Code?: string | null;
};

export type PrePrerecordPatch = { PrerecordId?: number };

/**
 * Values:
 *
 * - `0`: NotPaid
 *
 * - `1`: Paid
 *
 *
 */
export type PrerecordOnlinePaymentStatus = 0 | 1;

export type PrerecordOnlinePaymentStatusNullableOneValueUpdateDto = {
  Value?: PrerecordOnlinePaymentStatus;
};

export type PrerecordPatient = {
  LFM?: string | null;
  TelMob1?: string | null;
  Sex?: boolean;
  Born?: string;
  EhealthId?: string | null;
  Bad?: boolean;
  Del?: boolean;
};

export type PrerecordRoom = {
  RoomId?: number;
  ClinicId?: number;
  Name?: string | null;
  readonly RoomName?: string | null;
  LocalNameClinic?: string | null;
  BookedPrerecordColor?: string | null;
  Color?: string | null;
};

export type PrerecordScheduleFreeIntervals = {
  From?: string;
  To?: string;
  DisplayExpr?: string | null;
  UserId?: number;
  Scheduler?: PrerecordScheduler;
};

export type PrerecordScheduler = {
  UserId?: number;
  RoomId?: number;
  ScheduleId?: number;
  Room?: PrerecordRoom;
  TimeStart?: string;
  TimeEnd?: string;
  DefaultInterval?: number;
  User?: PrerecordUser;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: Recalled
 *
 * - `2`: DidNotCall
 *
 * - `3`: Callback
 *
 * - `4`: Approved
 *
 * - `5`: Сanceled
 *
 * - `6`: DocumentsIssued
 *
 * - `8`: WaitInHoll
 *
 * - `9`: InProgress
 *
 * - `10`: SMSSent
 *
 * - `11`: DidNotAppear
 *
 * - `12`: Rescheduled
 *
 * - `13`: Finished
 *
 *
 */
export type PrerecordStatus =
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12 | 13;

export type PrerecordStatusOneValueUpdateDto = { Value?: PrerecordStatus };

export type PrerecordUser = {
  UserId?: number;
  Name?: string | null;
  readonly LFM?: string | null;
  TypeDoctor?: string | null;
};

export type PrerecordValidationResult = {
  IsValid?: boolean;
  Id?: number | null;
  DetailedErrors?: Array<ValidationError> | null;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: Cash
 *
 * - `2`: WithoutCash
 *
 * - `3`: Default
 *
 * - `4`: DefaultWithoutCash
 *
 *
 */
export type PriceType = 0 | 1 | 2 | 3 | 4;

export type ProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
} & Record<string, unknown>;

/**
 * Model representing promotion information
 */
export type PromotionApiDto = {
  /**
   * Active from, if not set - unlimited
   */
  From?: string | null;
  /**
   * Active to, if not set - unlimited
   */
  To?: string | null;
  DiscountValueType?: DiscountValueType;
  /**
   * When `DiscountValueType` is `Percent` - value is in percents
   * when `DiscountValueType` is `Absolute` - value is in currency
   */
  DiscountValue?: number;
  /**
   * Indicates if the promotion is applicable for analysis\tests
   */
  AllowAnalysis?: boolean;
  /**
   * Indicates if the promotion is applicable for group packages
   */
  AllowGroupPackages?: boolean;
  /**
   * Indicates if the promotion is applicable for examination\protocols
   */
  AllowProtocols?: boolean;
  /**
   * Indicates if the promotion is applicable for ultrasound examination
   */
  AllowUsg?: boolean;
  /**
   * Code of promotion
   */
  Code?: string | null;
  /**
   * Indicates if the promotion is product promotion
   */
  IsProductPromotion?: boolean;
  /**
   * Name of promotion category
   */
  PromotionCategory?: string | null;
  /**
   * Display name of promotion
   */
  Name?: string | null;
  /**
   * Promotion identifier
   */
  PromotionId?: number;
  /**
   * Set of clinics where promotion is applicable
   */
  AllowedClinics?: Array<number> | null;
  /**
   * Set of packages what are applicable for promotion
   */
  AllowedPackages?: Array<number> | null;
  /**
   * Set of packages what are disallowed for promotion
   */
  PackageExclusions?: Array<number> | null;
};

export type PromotionPackagesDto = {
  /**
   * Promotion identifier
   */
  PromotionId?: number;
  /**
   * Package identifier
   */
  PackageId?: number;
  /**
   * Price of the package\service when promotion is applied
   */
  Price?: number | null;
};

export type ProtocolEditModel = {
  /**
   * Patient identifier
   */
  PatientId?: number;
  /**
   * Salepack identifier
   */
  SalepackId?: number;
  /**
   * Date of order
   */
  DateCr?: string;
  /**
   * Protocol identifier
   */
  ProtocolId?: number;
  /**
   * Discovery doctor identifier
   */
  DiscoveryId?: number;
  /**
   * Referring doctor identifier
   */
  ReferringId?: number | null;
  /**
   * Clinic\branch name where examination was given
   */
  ClinicName?: string | null;
  /**
   * Clinic\branch identifier where examination was given
   */
  ClinicId?: number;
  /**
   * Name of user who order examination
   */
  CreatedUserName?: string | null;
  /**
   * Date of recommended user re examination
   */
  Retested?: string | null;
  /**
   * Diagnosis given by doctor
   */
  Diagnosis?: string | null;
  /**
   * Notes
   */
  Note?: string | null;
  /**
   * Notes from supporting staff
   */
  Note_Inner?: string | null;
  /**
   * Date when last period was (related to female only)
   */
  DateLastPeriods?: string | null;
  DateLock?: string | null;
  /**
   * referring hospital identifier
   */
  HospitalId?: number | null;
  /**
   * Recommendations given by doctor
   */
  Recommendations?: string | null;
  /**
   * How many years of menopause (related to female only)
   */
  Menopause?: number | null;
  Conclusion?: string | null;
  FullRecommendations?: string | null;
  /**
   * Indicator if protocol is ready\completed
   */
  IsReady?: boolean;
  /**
   * List of assigned ICD10 codes
   */
  Icds?: Array<number> | null;
  /**
   * List of assigned ICPC codes
   */
  Icpcs?: Array<number> | null;
  Materials?: Array<SalepackMaterialsEditModel> | null;
  TypeDoctors?: Array<number> | null;
  DiscoverySignature?: string | null;
  /**
   * Associated dynamic form identifier
   */
  DynamicFormPatientId?: number | null;
  /**
   * Associated form group identifier
   */
  FormGroupId?: number | null;
  SaveProtocolConclusion?: boolean;
  SaveProtocolRecomendation?: boolean;
  /**
   * Package\service identifier
   */
  PackageId?: number;
  DiagnosisRequired?: boolean;
  /**
   * Associated encounter identifier
   */
  EncounterId?: string | null;
  /**
   * Associated episode identifier
   */
  EpisodeId?: string | null;
  /**
   * Name of package\service
   */
  Name?: string | null;
};

export type PublicExternalOrderPackage = {
  patient?: ExternalOrderPatient;
  orders?: Array<ExternalOrderItem> | null;
  contractorEDRPOU?: string | null;
  uniqKey?: string | null;
};

export type PublicPatientInformation = {
  /**
   * Patient's full name (space separated)
   */
  LFM: string;
  /**
   * First name
   */
  First: string;
  /**
   * Last name
   */
  Last: string;
  /**
   * Middle name
   */
  Middle?: string | null;
  /**
   * Patient`s date of birth
   */
  Born: string;
  /**
   * Gender of the patient. Allowed values: `male` or `female`
   */
  Gender?: string | null;
  /**
   * Patient's primary phone number (the same as `TelMob1`)
   */
  Phone?: string | null;
  /**
   * Primary Phone number of the patient
   */
  TelMob1?: string | null;
  /**
   * Secondary Phone number of the patient
   */
  TelMob2?: string | null;
  /**
   * Patient's home phone number
   */
  TelHome?: string | null;
  /**
   * Patient's work phone number
   */
  TelWork?: string | null;
  /**
   * Patient's email
   * should follow email pattern
   */
  Email?: string | null;
  /**
   * Patient's street name
   */
  StreetName?: string | null;
  /**
   * Patient's street number
   */
  StreetNumber?: string | null;
  Room?: string | null;
  /**
   * Additional information about patient
   */
  Note?: string | null;
  Barcode?: string | null;
  /**
   * Patient ID card number
   */
  Passport?: string | null;
  /**
   * Patient`s internal card number
   */
  InternalCardNumber?: string | null;
  BloodType?: string | null;
  RhFactor?: string | null;
  Weight?: number;
  Height?: number;
  /**
   * City of patient birth
   */
  BirthCity?: string | null;
  ENG_Last?: string | null;
  ENG_Middle?: string | null;
  ENG_First?: string | null;
  /**
   * Card number of patient in clinic
   */
  CardNumber?: string | null;
  /**
   * Patient`s work place
   */
  Works?: string | null;
  /**
   * Patient identification code\tax code
   */
  Code?: string | null;
  /**
   * Patient`s photo url
   */
  Photo?: string | null;
  NativeLanguage?: NativeLanguageEnum;
  /**
   * Patient`s gender\sex (Male = true; Female = false)
   */
  Sex?: boolean;
  /**
   * Patient`s marketing type (source of patient)
   */
  MarketingTypeId?: number | null;
  /**
   * Who referred the patient to clinic
   */
  ReferringDoctorId?: number | null;
  /**
   * KOATUU city id of the patient
   */
  CityId?: number | null;
  /**
   * internal identifier of the clinic where the patient was registered or assigned
   */
  ClinicId?: number | null;
  /**
   * Patient`s contact person (family member)
   */
  ContactPatientId?: number | null;
  /**
   * External patient identifier (unique)
   */
  ExternalId?: string | null;
  /**
   * external identifier of the clinic where the patient was registered or assigned
   */
  ExternalClinicId?: string | null;
  /**
   * Patient identifier
   */
  PatientId?: number;
  /**
   * Indicates if the patient is verified using OTP
   */
  VerifyPhoneNumber?: boolean;
  /**
   * Identifier of the patient\customer in Binotel
   */
  BinotelId?: number | null;
};

export type PublicPatientMetadataModel = {
  /**
   * external identifier of primary position (should not be used)
   * use `Positions` array instead
   */
  ExternalPositionId?: string | null;
  /**
   * identifier of primary position (should not be used)
   * use `Positions` array instead
   */
  PositionId?: number | null;
  /**
   * indicates whether the patient is disabled
   */
  IsDisabled?: boolean;
  /**
   * indicates whether the patient is a Chernobyl victim
   */
  ChernobylCategory?: number | null;
  /**
   * disability start date
   */
  DisabilityStart?: string | null;
  /**
   * disability end date
   */
  DisabilityEnd?: string | null;
  /**
   * disability group name
   */
  DisabilityGroup?: string | null;
  Extensions?: PatientMetadataExtensions;
  /**
   * When customer is `ZOO` - identifier of the animal breed
   */
  AnimalBreedId?: number | null;
  /**
   * When customer is `ZOO` - identifier of the animal kind
   */
  AnimalKindId?: number | null;
  /**
   * Set of patient working positions
   */
  Positions?: Array<PatientDepartmentPositionModel> | null;
  /**
   * Internal identifier of the primary department (should not be used)
   * use `Positions` array instead
   */
  DepartmentId?: number | null;
  /**
   * External identifier of the primary department (should not be used)
   * use `Positions` array instead
   */
  ExternalDepartmentId?: string | null;
  UtmInformation?: UtmInformation;
  CityName?: string | null;
  RegionName?: string | null;
  DistrictName?: string | null;
  CityType?: string | null;
  RegionalLogisticCenterid?: number | null;
};

/**
 * Patient's general information
 *
 * - when `LFM` is empty - `First`, `Last`  names are required and vice versa
 * - when `TelMob1` or `TelMob2` is set - they should follow the region format `0XXXXXXXXX` without additioanl symbols
 */
export type PublicPatientModel = {
  /**
   * Patient's full name (space separated)
   */
  LFM: string;
  /**
   * First name
   */
  First: string;
  /**
   * Last name
   */
  Last: string;
  /**
   * Middle name
   */
  Middle?: string | null;
  /**
   * Patient`s date of birth
   */
  Born: string;
  /**
   * Gender of the patient. Allowed values: `male` or `female`
   */
  Gender?: string | null;
  /**
   * Patient's primary phone number (the same as `TelMob1`)
   */
  Phone?: string | null;
  /**
   * Primary Phone number of the patient
   */
  TelMob1?: string | null;
  /**
   * Secondary Phone number of the patient
   */
  TelMob2?: string | null;
  /**
   * Patient's home phone number
   */
  TelHome?: string | null;
  /**
   * Patient's work phone number
   */
  TelWork?: string | null;
  /**
   * Patient's email
   * should follow email pattern
   */
  Email?: string | null;
  /**
   * Patient's street name
   */
  StreetName?: string | null;
  /**
   * Patient's street number
   */
  StreetNumber?: string | null;
  Room?: string | null;
  /**
   * Additional information about patient
   */
  Note?: string | null;
  Barcode?: string | null;
  /**
   * Patient ID card number
   */
  Passport?: string | null;
  /**
   * Patient`s internal card number
   */
  InternalCardNumber?: string | null;
  BloodType?: string | null;
  RhFactor?: string | null;
  Weight?: number;
  Height?: number;
  /**
   * City of patient birth
   */
  BirthCity?: string | null;
  ENG_Last?: string | null;
  ENG_Middle?: string | null;
  ENG_First?: string | null;
  /**
   * Card number of patient in clinic
   */
  CardNumber?: string | null;
  /**
   * Patient`s work place
   */
  Works?: string | null;
  /**
   * Patient identification code\tax code
   */
  Code?: string | null;
  /**
   * Patient`s photo url
   */
  Photo?: string | null;
  NativeLanguage?: NativeLanguageEnum;
  /**
   * Patient`s gender\sex (Male = true; Female = false)
   */
  Sex?: boolean;
  /**
   * Patient`s marketing type (source of patient)
   */
  MarketingTypeId?: number | null;
  /**
   * Who referred the patient to clinic
   */
  ReferringDoctorId?: number | null;
  /**
   * KOATUU city id of the patient
   */
  CityId?: number | null;
  /**
   * internal identifier of the clinic where the patient was registered or assigned
   */
  ClinicId?: number | null;
  /**
   * Patient`s contact person (family member)
   */
  ContactPatientId?: number | null;
  /**
   * External patient identifier (unique)
   */
  ExternalId?: string | null;
  /**
   * external identifier of the clinic where the patient was registered or assigned
   */
  ExternalClinicId?: string | null;
};

export type PublicPatientResponse = {
  /**
   * Indicates whether the patient is deleted
   */
  Deleted?: boolean;
  /**
   * Date of deletion
   */
  DeletedAt?: string | null;
  Patient: PublicPatientInformation;
  Metadata?: PublicPatientMetadataModel;
};

export type ReferalSalepackForPrerecord = {
  Id?: number;
  DateWhen?: string | null;
  PackageId?: number;
  PackageTypeDoctor?: Array<number> | null;
  PatientId?: number;
  PatientLFM?: string | null;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: PatientRefusal
 *
 * - `2`: AlreadyDone
 *
 * - `3`: RemindedLater
 *
 * - `4`: NotReachedByPhone
 *
 *
 */
export type ReferalSalepackPackageStatus = 0 | 1 | 2 | 3 | 4;

export type ReferralDto = {
  Id?: number;
  PatientName?: string | null;
  PatientPhoneNumber?: string | null;
  SurveyName?: string | null;
  Comment?: string | null;
  Born?: string | null;
  ReferringId?: number | null;
  CreatedAt?: string;
  Status?: ReferralStatus;
};

/**
 * Values:
 *
 * - `0`: Created
 *
 * - `10`: Completed
 *
 * - `20`: Canceled
 *
 *
 */
export type ReferralStatus = 0 | 10 | 20;

export type ReferringDoctor = {
  Id?: number;
  SelfUserId?: number | null;
  ManagerId?: number | null;
  Name?: string | null;
  Hospital?: string | null;
  Tel1?: string | null;
  Tel2?: string | null;
  Email?: string | null;
};

export type ReferringDoctorDto = {
  DoctorId?: number;
  HospitalId?: number | null;
  CityId?: number;
  Tel1?: string | null;
  Tel2?: string | null;
  Email?: string | null;
  LFM?: string | null;
  CityName?: string | null;
};

export type ReferringDoctorsIds = {
  fromDoctorId?: number;
  intoDoctorId?: number;
};

export type ReferringDoctorsLookupModel = {
  Id?: number;
  SelfUserId?: number | null;
  ManagerId?: number | null;
  Name?: string | null;
};

/**
 * Values:
 *
 * - `1`: Self
 *
 * - `2`: Doctor
 *
 * - `3`: Assurance
 *
 * - `4`: Company
 *
 * - `5`: Contract
 *
 *
 */
export type ReferringTypeId = 1 | 2 | 3 | 4 | 5;

export type RegisterFamilyMemberModel = {
  Patient?: OnlinePatientRegisterModel;
  Password?: string | null;
};

export type RegisterModel = {
  Patient?: OnlinePatientRegisterModel;
  Password?: string | null;
  Code?: string | null;
};

export type ReminderItem = {
  time?: string;
  dosageAmount?: number | null;
  dosageUnit?: string | null;
};

/**
 * Values:
 *
 * - `0`: CorrectionOfAppointments
 *
 * - `1`: PatientRefusal
 *
 * - `2`: AlreadyDone
 *
 *
 */
export type RemoveReferalSalepackPackageReason = 0 | 1 | 2;

export type ReorderPackageCategoryCommad = {
  PackageCategoryIds?: Array<number> | null;
};

export type ReportAll = {
  PackType?: number | null;
  ID?: number;
  PatientId?: number;
  PatientLFM?: string | null;
  PatientTelMob1?: string | null;
  Born?: string | null;
  LaboratoryId?: number | null;
  DiscoveryId?: number | null;
  DoctorsLFM?: string | null;
  PackName?: string | null;
  PackageId?: number | null;
  ParentPackageId?: number | null;
  BookingId?: number;
  PaymentTypeId?: PaymentTypeId;
  SalepackId?: number;
  Count?: number;
  Active?: boolean;
  ActualTimeToReady?: number | null;
  AbsoluteTimeToReady?: number | null;
  Diagnosis?: string | null;
  ICD10?: string | null;
  DateCr?: string;
  ClinicId?: number;
  CreatedById?: number | null;
  Number?: string | null;
  ContractorId?: number | null;
  ExecutorId?: number | null;
  TypeRef?: number;
  GroupName?: string | null;
  CashDesk?: number;
  BookingMarketingTypeId?: number | null;
  PatientMarketingTypeId?: number | null;
  PrerecordMarketingTypeId?: number | null;
  ContractorCoordinatorId?: number | null;
  RoomId?: number | null;
  DiscountTemplateId?: number | null;
  PromotionId?: number | null;
  Note?: string | null;
  PromotionNote?: string | null;
  /**
   * Исполнителя/Виконавця
   */
  DiscountNumber?: string | null;
  /**
   * 0 => non fiscal
   * 1 => fiscaled
   * 2 => returned
   */
  FiscalStatus?: number;
  ContractNumber?: string | null;
  PriceDiscountCash?: number;
  PriceUndiscountCash?: number;
  PriceDiscountWithoutCash?: number;
  PriceUndiscountWithoutCash?: number;
  Debt?: number;
  LaboratoryPrice?: number | null;
  readonly PriceDiscount?: number;
  readonly PriceUndiscount?: number;
  readonly Cash?: number;
  readonly Terminal?: number;
  readonly Online?: number;
  readonly Account?: number;
  readonly Cashless?: number;
  readonly WithoutCash?: number;
  readonly Discount?: number;
  RoundSum?: number | null;
};

export type ReportCashDesk = {
  BookingId?: number;
  DiscoveryId?: number | null;
  LaboratoryId?: number | null;
  DateCr?: string;
  DoctorsLFM?: string | null;
  PackName?: string | null;
  Count?: number;
  PatientID?: number;
  PatientLFM?: string | null;
  PaymentTypeId?: PaymentTypeId;
  TypeReff?: number;
  ContractorCoordinatorId?: number | null;
  RoundSum?: number | null;
  ContractorId?: number | null;
  Code?: string | null;
  CreatedById?: number | null;
  GroupPackageId?: number | null;
  ParentGroupPackageId?: number | null;
  PackageTagId?: number | null;
  PackageId?: number | null;
  ParentPackageId?: number | null;
  ParentPackageCode?: string | null;
  ParentPackageName?: string | null;
  Number?: string | null;
  PriceName?: string | null;
  PackageTypeId?: number;
  CashDesk?: number;
  Note?: string | null;
  FiskalPrinterContractorName?: string | null;
  ReceiptFiscalNumber?: string | null;
  ExecutorId?: number | null;
  /**
   * 0 => non fiscal
   * 1 => fiscaled
   * 2 => returned
   */
  FiscalStatus?: number;
  ClinicId?: number | null;
  PaymentInformationStatus?: PaymentOperationStatus;
  SalepackCreatedAt?: string | null;
  Debt?: number;
  readonly SalepackId?: number;
  PriceUndiscountCash?: number;
  PriceDiscountCash?: number;
  PriceDiscountWithoutCash?: number;
  PriceUndiscountWithoutCash?: number;
  CashbackUsed?: number;
  PromotionNote?: string | null;
  PromotionId?: number | null;
  readonly Del?: boolean;
  TotalIncomingMoney?: number;
  readonly CostWithDiscount?: number;
  readonly Cash?: number;
  readonly Terminal?: number;
  readonly Discount?: number;
  readonly Cost?: number;
  IsRepayment?: boolean;
};

export type ReportPrerecordBase = {
  ID?: number;
  PatientId?: number;
  PatientFLM?: string | null;
  TelMob1?: string | null;
  TelMob2?: string | null;
  ContactTelMob1?: string | null;
  PatientMarketingTypeId?: number | null;
  CreatedUserId?: number;
  DateStart?: string;
  DateEnd?: string;
  Note?: string | null;
  RoomId?: number;
  DateCr?: string;
  ClinicId?: number;
  Status?: PrerecordStatus;
  DiscoveryId?: number | null;
};

export type ResetPatientPasswordModel = {
  Phone?: string | null;
  Born?: string;
};

export type RoleCategoryDto = {
  Id?: number;
  Name?: string | null;
  SystemName?: string | null;
};

export type RolesDto = {
  Id?: number;
  Name?: string | null;
  Description?: string | null;
  RoleCategoryId?: number | null;
  FullDescription?: string | null;
};

export type SalaryExtensions = {
  Extensions?: string | null;
  PercentReferring?: number | null;
  TariffReferring?: number | null;
};

export type SalaryRuleLimits = {
  MaxMonthlySalary?: number | null;
  MinMonthlySalary?: number | null;
  PercentDiscovery?: number | null;
  HourlyRate?: number | null;
  OvertimeHourlyRate?: number | null;
  NormalDayDurationHours?: number | null;
  TariffDiscovery?: number | null;
};

export type SalepackMaterialsEditModel = {
  SalepackId?: number;
  MaterialId?: number;
  Name?: string | null;
  Count?: number;
  UnitId?: number;
  UnitName?: string | null;
  MaterialTypeId?: number | null;
  MaterialTypeName?: string | null;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: Sale
 *
 * - `2`: Service
 *
 *
 */
export type SalepackMaterialTypeEnum = 0 | 1 | 2;

/**
 * Values:
 *
 * - `0`: Sale
 *
 * - `1`: Service
 *
 *
 */
export type SalesInvoiceDirect = 0 | 1;

/**
 * Confirmed editable state returned after saving, without reloading referral links.
 */
export type SavedERPReferralSalepackPackage = {
  ProtocolId: number;
  /**
   * Catalog service identifier. An existing referral cannot be moved to another service.
   */
  PackageId: number;
  AssuranceAproveState?: AssuranceAproveEnum;
  /**
   * Appointment date, independent of the reminder date.
   */
  TargetDate?: string | null;
  RecommendationDetails?: ERPServiceRecommendationDetailsDto;
  /**
   * Referral Salepack Package identifier
   */
  Id?: number;
};

export type SchedulerExportViewModel = {
  Doctor?: UserDto;
  TypeDoctors?: Array<string> | null;
  Monday?: Array<Interval> | null;
  Tuesday?: Array<Interval> | null;
  Wednesday?: Array<Interval> | null;
  Thursday?: Array<Interval> | null;
  Friday?: Array<Interval> | null;
  Saturday?: Array<Interval> | null;
  Sunday?: Array<Interval> | null;
};

export type SecondaryPackagesModel = {
  Name?: string | null;
  Code?: string | null;
  DefaultPrice?: number;
  PackageType?: PackageType;
  PackageId?: number;
};

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: Fasting
 *
 * - `2`: OneHourBeforeMeal
 *
 * - `3`: OneHourAfterMeal
 *
 * - `4`: WithMeal
 *
 * - `5`: Other
 *
 *
 */
export type ServiceAdditionalCondition = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Values:
 *
 * - `0`: Unspecified
 *
 * - `1`: SpecificDate
 *
 * - `2`: DaysAfterMedication
 *
 * - `3`: NoDate
 *
 * - `4`: TreatmentDay
 *
 *
 */
export type ServiceReminderRule = 0 | 1 | 2 | 3 | 4;

export type ShortPrice = {
  PriceId?: number;
  Name?: string | null;
  Cost?: number;
  PackageId?: number;
  Type?: PriceType;
};

/**
 * Information about specialization
 */
export type Specialization = {
  /**
   * Specialization`s identifire
   */
  SpecializationId?: number;
  /**
   * Specialization`s name (can be empty)
   */
  Name?: string | null;
  /**
   * Specialization`s category identifire (optional)
   */
  CategoryId?: number | null;
  /**
   * Specialization`s category name (optional)
   */
  CategoryName?: string | null;
  OrderIndex?: number;
};

export type StringOneValueUpdateDto = { Value?: string | null };

export type SurveyImage = {
  Data?: string | null;
  Url?: string | null;
  Description?: string | null;
};

export type SurveyInfo = {
  PatientId?: number;
  ConclusionHtml?: string | null;
  Images?: Array<SurveyImage> | null;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: Administrator
 *
 * - `2`: Doctor
 *
 * - `3`: LaboratoryAssistant
 *
 * - `4`: Receptionist
 *
 * - `5`: Accountant
 *
 * - `6`: Manager
 *
 * - `7`: Director
 *
 * - `8`: Nurse
 *
 * - `9`: Spetsialist
 *
 *
 */
export type SystemUserPosition = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TypeDoctorDto = {
  /**
   * Display name
   */
  Name?: string | null;
  /**
   * Identifier
   */
  Id?: number;
  IsOnline?: boolean;
  CategoryId?: number | null;
};

export type TypeDoctorEditableDto = {
  Name?: string | null;
  IsOnline?: boolean;
  CategoryId?: number | null;
};

export type TypeDoctorWithMetadataDto = {
  /**
   * Display name
   */
  Name?: string | null;
  /**
   * Identifier
   */
  Id?: number;
  IsOnline?: boolean;
  CategoryId?: number | null;
  /**
   * Count of packages
   */
  Count?: number;
  UsersCount?: number;
};

export type UpdatePacakgeCategoryPackageOrderCommad = { Order?: number };

/**
 * Patient famiy member information
 */
export type UpdatePatientInformationModel = {
  /**
   * Family member last name
   */
  Last?: string | null;
  /**
   * Family member middle\second name
   */
  Middle?: string | null;
  /**
   * Family member first name
   */
  First?: string | null;
  /**
   * Family member email
   */
  Email?: string | null;
  /**
   * Family member date of birth
   */
  Born?: string;
  /**
   * Family member gender
   */
  Sex?: boolean;
  CityId?: number;
};

export type UpdatePublicPatientRequest = {
  Patient: PublicPatientModel;
  Metadata?: PublicPatientMetadataModel;
  Verified?: boolean | null;
};

export type UpdateUserTypeDoctorOrderRequest = {
  TypeDoctorIds?: Array<number> | null;
};

export type UserBaseDto = {
  Id?: number;
  Name?: string | null;
  ExecutorId?: number | null;
  UserPositionId?: number | null;
  DefaultInterval?: number;
};

export type UserDto = { UserId?: number; LFM?: string | null };

export type UserSalaryReportDto = {
  UserId?: number;
  UserName?: string | null;
  PatientId?: number;
  PatientLFM?: string | null;
  PackageName?: string | null;
  TagName?: string | null;
  PackageId?: number;
  ParentPackageId?: number;
  DateCr?: string;
  Count?: number;
  Percent?: number;
  Tax?: number;
  readonly SalaryDiscount?: number;
  readonly SalaryUndiscount?: number;
  readonly CostDiscount?: number;
  readonly CostUndiscount?: number;
  SalepackId?: number;
  PriceDiscountCash?: number;
  PriceDiscountWithoutCash?: number;
  PaymentTypeId?: PaymentTypeId;
  PriceUndiscountCash?: number;
  PriceUndiscountWithoutCash?: number;
  Type?: ExecutionType;
  ClinicId?: number;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: Approved
 *
 * - `2`: Rejected
 *
 * - `3`: Pending
 *
 *
 */
export type UserShiftType = 0 | 1 | 2 | 3;

export type UserShortInformationModel = {
  UserId?: number;
  Lfm?: string | null;
};

export type UserSlimDto = {
  LFM?: string | null;
  UserId?: number;
  TypeDoctor?: string | null;
  DiscoveryUserIndex?: number;
  Photo?: string | null;
  MinimumCost?: number | null;
  Experience?: string | null;
  OrderIndex?: number | null;
  Specializations?: Array<Specialization> | null;
};

export type UserTypeDoctorDto = {
  /**
   * Display name
   */
  Name?: string | null;
  /**
   * Identifier
   */
  Id?: number;
  OrderIndex?: number;
};

export type UserTyperDoctorsPackageModel = {
  PackId?: number;
  PackCode?: string | null;
  PackName?: string | null;
  Single?: PackageType;
};

export type UtmInformation = {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  refferer?: string | null;
  last_page?: string | null;
  status?: string | null;
  record?: string | null;
  employee?: string | null;
};

export type ValidationError = { Code?: string | null; Message?: string | null };

export type ValidationProblemDetails = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  errors?: Record<string, Array<string>>;
} & Record<string, unknown>;

export type ValidationResult = {
  readonly IsValid?: boolean;
  /**
   * gambit front use only errors
   */
  readonly Errors?: Array<string> | null;
  /**
   * online app use codes
   */
  readonly DetailedErrors?: Array<ValidationError> | null;
  Warnings?: Warning;
};

/**
 * make it readonly struct
 */
export type Warning = {
  WarningMessage?: string | null;
  WarningType?: WarningEnumType;
};

/**
 * Values:
 *
 * - `0`: None
 *
 * - `1`: BusyRoom
 *
 *
 */
export type WarningEnumType = 0 | 1;

export type WebhookDescription = {
  Uri?: string | null;
  Triggers?: Array<WebhookTriggers> | null;
  SecretToken?: string | null;
  Id?: string;
};

export type WebhookDetails = {
  Uri?: string | null;
  Triggers?: Array<WebhookTriggers> | null;
  SecretToken?: string | null;
  Id?: string;
  LastErrorMessage?: string | null;
  LastErrorDate?: string | null;
};

export type WebhookEditModel = {
  Uri?: string | null;
  Triggers?: Array<WebhookTriggers> | null;
  SecretToken?: string | null;
};

/**
 * Values:
 *
 * - `0`: PrerecordCreated
 *
 * - `1`: PrerecordDeleted
 *
 * - `2`: PrerecordUpdated
 *
 * - `3`: PatientCreated
 *
 * - `4`: PatientUpdated
 *
 * - `5`: OrderAdded
 *
 * - `6`: OrderUpdated
 *
 * - `7`: OrderDeleted
 *
 * - `8`: Fiscalization
 *
 * - `9`: ProtocolUpdated
 *
 * - `10`: ReferralSalepackPackageCreated
 *
 * - `11`: ReferralSalepackPackageDeleted
 *
 * - `12`: ReferralSalepackPackageUpdated
 *
 * - `13`: ProtocolDrugCreated
 *
 * - `14`: ProtocolDrugDeleted
 *
 * - `15`: ProtocolDrugUpdated
 *
 * - `16`: ProtocolMonitoringAssignmentCreated
 *
 * - `17`: ProtocolMonitoringAssignmentDeleted
 *
 * - `18`: ProtocolMonitoringAssignmentUpdated
 *
 *
 */
export type WebhookTriggers =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;

export type WebhookUpdateEvent = {
  Trigger: WebhookTriggers;
  Prerecord?: OnlinePrerecord;
  Patient?: OnlinePatient;
  Order?: IOrderMessage;
  ReferralSalepackPackage?: ERPReferralSalepackPackage;
  ProtocolDrug?: ERPProtocolDrugDto;
  ProtocolMonitoringAssignment?: ERPProtocolMonitoringAssignment;
  Protocol?: OnlineProtocolInformation;
};
