import { RegistrationRead, RegistrationCreate } from "@/types";

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface RegistrationStateType {
  loading: boolean;
  reviewRegistrations: RegistrationRead[];
  approvedRegistrations: RegistrationRead[];
  reprovedRegistrations: RegistrationRead[];
}

export interface RegistrationContextType {
  resetRegistration: () => Promise<void>;
  readRegistrations: (cpf?: string) => Promise<void>;
  createRegistration: (registration: RegistrationCreate) => Promise<void>;
  updateRegistrations: (
    reviewRegistrations: RegistrationRead[],
    approvedRegistrations: RegistrationRead[],
    reprovedRegistrations: RegistrationRead[]
  ) => Promise<void>;
  deleteRegistration: (id: string) => Promise<void>;
  loading: boolean;
  reviewRegistrations: RegistrationRead[];
  approvedRegistrations: RegistrationRead[];
  reprovedRegistrations: RegistrationRead[];
}
