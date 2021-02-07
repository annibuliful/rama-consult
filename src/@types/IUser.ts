export interface IUser {
  email: string;
  password: string;
  fullname: string;
  hospitalName: string;
  doctorIdNumber?: string;
  userStatus: IUserStatus;
  role: IUserRole;
}

export enum IUserStatus {
  ACCEPT = "accept",
  REJECT = "reject",
  PENDING = "pending",
}
export enum IUserRole {
  ADMIN = "admin",
  DOCTOR = "doctor",
  STAFF = "staff",
}
export type IUserInfo = Omit<IUser, "password">;
