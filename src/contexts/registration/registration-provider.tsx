import { useMemo, useReducer, useCallback } from "react";

import axios, { endpoints } from "~/utils/axios";

import { RegistrationContext } from "./registration-context";
import { ActionMapType, RegistrationStateType } from "./types";

import {
  RegistrationRead,
  RegistrationCreate,
  RegistrationUpdate,
} from "~/types";

enum Types {
  RESET_REGISTRATION = "RESET_REGISTRATION",
  READ_REGISTRATIONS = "READ_REGISTRATIONS",
  CREATE_REGISTRATION = "CREATE_REGISTRATION",
  UPDATE_REGISTRATION = "UPDATE_REGISTRATION",
  DELETE_REGISTRATION = "DELETE_REGISTRATION",
}

type Payload = {
  [Types.RESET_REGISTRATION]: {};
  [Types.READ_REGISTRATIONS]: {
    registrations: RegistrationRead[];
  };
  [Types.CREATE_REGISTRATION]: {
    registration: RegistrationRead;
  };
  [Types.UPDATE_REGISTRATION]: {
    registration: RegistrationRead;
  };
  [Types.DELETE_REGISTRATION]: {
    registration: RegistrationRead;
  };
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: RegistrationStateType = {
  loading: true,
  registrations: [],
};

const reducer = (state: RegistrationStateType, action: ActionsType) => {
  if (action.type === Types.RESET_REGISTRATION) {
    return initialState;
  }

  if (action.type === Types.READ_REGISTRATIONS) {
    return {
      ...state,
      loading: false,
      registrations: action.payload.registrations,
    };
  }

  if (action.type === Types.CREATE_REGISTRATION) {
    return {
      ...state,
      registrations: [...state.registrations, action.payload.registration],
    };
  }

  if (action.type === Types.UPDATE_REGISTRATION) {
    const registration = state.registrations.find(
      (registration) => registration.id === action.payload.registration.id
    );

    if (registration) {
      registration.status = action.payload.registration.status;
    }

    return state;
  }

  if (action.type === Types.DELETE_REGISTRATION) {
    return {
      ...state,
      registrations: state.registrations.filter(
        (registration) => registration.id !== action.payload.registration.id
      ),
    };
  }

  return state;
};

type Props = {
  children: React.ReactNode;
};

export function RegistrationProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resetRegistration = useCallback(async () => {
    dispatch({
      type: Types.RESET_REGISTRATION,
      payload: {},
    });
  }, []);

  const readRegistrations = useCallback(async (cpf?: string) => {
    const { data: registrations } = await axios.get<RegistrationRead[]>(
      endpoints.registration.cpf(cpf)
    );

    dispatch({
      type: Types.READ_REGISTRATIONS,
      payload: { registrations },
    });
  }, []);

  const createRegistration = useCallback(
    async (registrationData: RegistrationCreate) => {
      const { data: registration } = await axios.post<RegistrationRead>(
        endpoints.registration.root,
        registrationData
      );

      dispatch({
        type: Types.CREATE_REGISTRATION,
        payload: { registration },
      });
    },
    []
  );

  const updateRegistration = useCallback(
    async ({ id, status }: RegistrationUpdate) => {
      const { data: registration } = await axios.put<RegistrationRead>(
        endpoints.registration.item(id),
        { status }
      );

      dispatch({
        type: Types.UPDATE_REGISTRATION,
        payload: { registration },
      });
    },
    []
  );

  const deleteRegistration = useCallback(async (id: string) => {
    const { data: registration } = await axios.delete(
      endpoints.registration.item(id)
    );

    dispatch({
      type: Types.DELETE_REGISTRATION,
      payload: { registration },
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      resetRegistration,
      readRegistrations,
      createRegistration,
      updateRegistration,
      deleteRegistration,
      loading: state.loading,
      registrations: state.registrations,
    }),
    [
      resetRegistration,
      readRegistrations,
      createRegistration,
      updateRegistration,
      deleteRegistration,
      state.loading,
      state.registrations,
    ]
  );

  return (
    <RegistrationContext.Provider value={memoizedValue}>
      {children}
    </RegistrationContext.Provider>
  );
}
