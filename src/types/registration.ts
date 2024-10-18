export enum StatusEnum {
  REVIEW = "REVIEW",
  APROVED = "APROVED",
  REPROVED = "REPROVED",
}

interface RegistrationBase {
  cpf: string;
  email: string;
  employeeName: string;
  admissionDate: string;
}

export interface RegistrationRead extends RegistrationBase {
  id: string;
  status: StatusEnum;
}

export interface RegistrationCreate extends RegistrationBase {}

export interface RegistrationUpdate {
  id: string;
  status: StatusEnum;
}
