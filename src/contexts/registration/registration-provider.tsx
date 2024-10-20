import { useMemo, useReducer, useCallback } from "react";

import axios, { endpoints } from "~/utils/axios";

import { RegistrationContext } from "./registration-context";
import { ActionMapType, RegistrationStateType } from "./types";

import {
  RegistrationRead,
  RegistrationCreate,
  RegistrationUpdate,
  StatusEnum,
} from "~/types";

enum Types {
  RESET_LOADING = "RESET_LOADING",
  RESET_REGISTRATION = "RESET_REGISTRATION",
  READ_REGISTRATIONS = "READ_REGISTRATIONS",
  CREATE_REGISTRATION = "CREATE_REGISTRATION",
  UPDATE_REGISTRATIONS = "UPDATE_REGISTRATIONS",
  DELETE_REGISTRATION = "DELETE_REGISTRATION",
}

type Payload = {
  [Types.RESET_LOADING]: {};
  [Types.RESET_REGISTRATION]: {};
  [Types.READ_REGISTRATIONS]: {
    reviewRegistrations: RegistrationRead[];
    approvedRegistrations: RegistrationRead[];
    reprovedRegistrations: RegistrationRead[];
  };
  [Types.CREATE_REGISTRATION]: {
    reviewRegistrations: RegistrationRead[];
    approvedRegistrations: RegistrationRead[];
    reprovedRegistrations: RegistrationRead[];
  };
  [Types.UPDATE_REGISTRATIONS]: {
    reviewRegistrations: RegistrationRead[];
    approvedRegistrations: RegistrationRead[];
    reprovedRegistrations: RegistrationRead[];
  };
  [Types.DELETE_REGISTRATION]: {
    reviewRegistrations: RegistrationRead[];
    approvedRegistrations: RegistrationRead[];
    reprovedRegistrations: RegistrationRead[];
  };
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: RegistrationStateType = {
  loading: true,
  reviewRegistrations: [],
  approvedRegistrations: [],
  reprovedRegistrations: [],
};

const reducer = (state: RegistrationStateType, action: ActionsType) => {
  if (action.type === Types.RESET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === Types.RESET_REGISTRATION) {
    return initialState;
  }

  if (action.type === Types.READ_REGISTRATIONS) {
    return {
      ...state,
      loading: false,
      reviewRegistrations: action.payload.reviewRegistrations,
      approvedRegistrations: action.payload.approvedRegistrations,
      reprovedRegistrations: action.payload.reprovedRegistrations,
    };
  }

  if (action.type === Types.CREATE_REGISTRATION) {
    return {
      ...state,
      loading: false,
      reviewRegistrations: action.payload.reviewRegistrations,
      approvedRegistrations: action.payload.approvedRegistrations,
      reprovedRegistrations: action.payload.reprovedRegistrations,
    };
  }

  if (action.type === Types.UPDATE_REGISTRATIONS) {
    return {
      ...state,
      loading: false,
      reviewRegistrations: action.payload.reviewRegistrations,
      approvedRegistrations: action.payload.approvedRegistrations,
      reprovedRegistrations: action.payload.reprovedRegistrations,
    };
  }

  if (action.type === Types.DELETE_REGISTRATION) {
    return {
      ...state,
      loading: false,
      reviewRegistrations: action.payload.reviewRegistrations,
      approvedRegistrations: action.payload.approvedRegistrations,
      reprovedRegistrations: action.payload.reprovedRegistrations,
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
    dispatch({
      type: Types.RESET_LOADING,
      payload: {},
    });

    const { data: registrations } = await axios.get<RegistrationRead[]>(
      endpoints.registrations.cpf(cpf)
    );

    // // TODO: remove timeout
    // await new Promise((r) => setTimeout(r, 1000));
    // //

    let reviewRegistrations: RegistrationRead[] = [];
    let approvedRegistrations: RegistrationRead[] = [];
    let reprovedRegistrations: RegistrationRead[] = [];

    registrations.forEach((registration) => {
      if (registration.status === StatusEnum.REVIEW) {
        reviewRegistrations[registration.index] = registration;
      }

      if (registration.status === StatusEnum.APPROVED) {
        approvedRegistrations[registration.index] = registration;
      }

      if (registration.status === StatusEnum.REPROVED) {
        reprovedRegistrations[registration.index] = registration;
      }
    });

    dispatch({
      type: Types.READ_REGISTRATIONS,
      payload: {
        reviewRegistrations,
        approvedRegistrations,
        reprovedRegistrations,
      },
    });
  }, []);

  const createRegistration = useCallback(
    async (registrationData: RegistrationCreate) => {
      dispatch({
        type: Types.RESET_LOADING,
        payload: {},
      });

      const { data: registration } = await axios.post<RegistrationRead>(
        endpoints.registrations.root,
        registrationData
      );

      // // TODO: remove timeout
      // await new Promise((r) => setTimeout(r, 1000));
      // //

      if (registration.status === StatusEnum.REVIEW) {
        state.reviewRegistrations.push(registration);
      }

      if (registration.status === StatusEnum.APPROVED) {
        state.approvedRegistrations.push(registration);
      }

      if (registration.status === StatusEnum.REPROVED) {
        state.reprovedRegistrations.push(registration);
      }

      dispatch({
        type: Types.CREATE_REGISTRATION,
        payload: {
          reviewRegistrations: state.reviewRegistrations,
          approvedRegistrations: state.approvedRegistrations,
          reprovedRegistrations: state.reprovedRegistrations,
        },
      });
    },
    [state]
  );

  const updateRegistration = useCallback(
    async (registrationData: RegistrationUpdate) => {
      await axios.put<RegistrationRead>(
        endpoints.registrations.item(registrationData.id),
        registrationData
      );
    },
    []
  );

  const updateRegistrations = useCallback(
    async (
      reviewRegistrations: RegistrationRead[],
      approvedRegistrations: RegistrationRead[],
      reprovedRegistrations: RegistrationRead[]
    ) => {
      const registrations = [
        ...reviewRegistrations,
        ...approvedRegistrations,
        ...reprovedRegistrations,
      ];

      registrations.forEach(async (registration) => {
        await axios.put<RegistrationRead>(
          endpoints.registrations.item(registration.id),
          registration
        );
      });

      dispatch({
        type: Types.UPDATE_REGISTRATIONS,
        payload: {
          reviewRegistrations,
          approvedRegistrations,
          reprovedRegistrations,
        },
      });
    },
    [state]
  );

  const deleteRegistration = useCallback(
    async (id: string) => {
      const { data: registration } = await axios.delete<RegistrationRead>(
        endpoints.registrations.item(id)
      );

      if (registration.status === StatusEnum.REVIEW) {
        state.reviewRegistrations = state.reviewRegistrations.filter(
          (item) => item.id !== registration.id
        );
      }

      if (registration.status === StatusEnum.APPROVED) {
        state.approvedRegistrations = state.approvedRegistrations.filter(
          (item) => item.id !== registration.id
        );
      }

      if (registration.status === StatusEnum.REPROVED) {
        state.reprovedRegistrations = state.reprovedRegistrations.filter(
          (item) => item.id !== registration.id
        );
      }

      dispatch({
        type: Types.DELETE_REGISTRATION,
        payload: {
          reviewRegistrations: state.reviewRegistrations,
          approvedRegistrations: state.approvedRegistrations,
          reprovedRegistrations: state.reprovedRegistrations,
        },
      });
    },
    [state]
  );

  const memoizedValue = useMemo(
    () => ({
      resetRegistration,
      readRegistrations,
      createRegistration,
      updateRegistration,
      updateRegistrations,
      deleteRegistration,
      loading: state.loading,
      reviewRegistrations: state.reviewRegistrations,
      approvedRegistrations: state.approvedRegistrations,
      reprovedRegistrations: state.reprovedRegistrations,
    }),
    [
      resetRegistration,
      readRegistrations,
      createRegistration,
      updateRegistration,
      updateRegistrations,
      deleteRegistration,
      state.loading,
      state.reviewRegistrations,
      state.approvedRegistrations,
      state.reprovedRegistrations,
    ]
  );

  return (
    <RegistrationContext.Provider value={memoizedValue}>
      {children}
    </RegistrationContext.Provider>
  );
}
