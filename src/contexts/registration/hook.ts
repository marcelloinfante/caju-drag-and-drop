import { useContext } from "react";

import { RegistrationContext } from "./registration-context";

export const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);

  if (!context)
    throw new Error(
      "useRegistrationContext context must be use inside RegistrationProvider"
    );

  return context;
};
