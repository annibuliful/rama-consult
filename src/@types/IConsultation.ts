export interface IBasicInfoData {
  physicianName: string;
  institutionName: string;
  telephone: string;
  email: string;
  todayDate: Date;
}
export enum GENDER {
  MALE = "male",
  FEMAIL = "female",
}
export interface IPatientInfoData {
  name: string;
  hnNumber: string;
  gender: GENDER;
}
