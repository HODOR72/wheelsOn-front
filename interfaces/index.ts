export interface osagoFormData {
  vehicleMarks: string[];
  selectedMarkModels: string[];
}

export interface vehicleMarksState {
  osagoFormData: osagoFormData;
}

export interface vehicleMark {
  id: string;
  value: string;
}

export interface years {
  year: string[];
}

export interface vehicleModel {
  id: string;
  value: string;
  outYears: years;
}

export interface vehicleModification {
  id: string;
  value: string;
  engCap: string;
}

export interface OsagoForm {
  vehicleMarks: vehicleMark[];
}

export interface contractInfo {
  policyBeginDate: string;
  multidrive: boolean;
  followToRegistration: boolean;
  ownerRegistrationCity: string;
  ownerRegistrationCountry: string;
  ownerRegistrationRegion: string;
  period1Beg: string;
  period1End: string;
}

export interface transport {
  categoryId: number;
  operationType: string;
  power: string;
  trailer: boolean;
}

export interface Driver {
  birthDate: string;
  experienceDate: string;
  KBM: string;
}

export interface Drivers {
  driver: Driver;
}

export interface osagoReqFormDataObject {
  contractInfo: contractInfo;
  transport: transport;
  drivers: Drivers;
}

export interface osago1StepForm {
  city: string;
  mark: string;
  model: string;
  year: string;
  modification: string;
  isPricep: string;
  multidrive: boolean;
}

export interface osagoReqFormData {
  data: osagoReqFormDataObject;
  osago1StepForm: osago1StepForm;
}

export interface state {
  osagoReqFormData: osagoReqFormData;
}

export interface KBM {
  id: number | string;
  value: string;
}

export interface Osago2StepInterface {
  driverAge: string;
  driverExp: string;
  yearWithoutAccidence: string;
  setDriverAgeHandler(value: string): any;
  setDriverExpHandler(value: string): any;
  setYearWithoutAccidence(value: string): any;
  KBMS: KBM[];
  clearDriverAge(): any;
  clearDriverExp(): any;
}

export interface points {
  moto: number;
  wheelHouse: number;
  jetPack: number;
  droneTaxi: number;
}

interface steps {
	first: string
	second: string
	third: {
		company: string
		phone: string
		telegram: string
		name: string
	}
	forth: string
}

export interface testVictorina {
  points: points;
  steps: steps;
}

export interface state {
  testVictorina: testVictorina;
}
