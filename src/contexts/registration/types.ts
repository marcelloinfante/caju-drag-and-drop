import {
  RegistrationRead,
  RegistrationCreate,
  RegistrationUpdate,
} from "src/types";

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

export type RegistrationStateType = {
  loading: boolean;
  reviewRegistrations: RegistrationRead[];
  approvedRegistrations: RegistrationRead[];
  reprovedRegistrations: RegistrationRead[];
};

export type RegistrationContextType = {
  resetRegistration: () => Promise<void>;
  readRegistrations: (cpf?: string) => Promise<void>;
  createRegistration: (registration: RegistrationCreate) => Promise<void>;
  updateRegistration: (registration: RegistrationUpdate) => Promise<void>;
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
};
