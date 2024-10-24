import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { RegistrationContext, RegistrationContextType } from "@/contexts/registration";

import { SnackbarProvider } from "@/components/Snackbar";

import NewUser from ".";

const renderNewUser = () => {
  const createRegistration = jest.fn();

  render(
    <BrowserRouter>
      <SnackbarProvider>
        <RegistrationContext.Provider
          value={
            {
              createRegistration,
            } as unknown as RegistrationContextType
          }
        >
          <NewUser />
        </RegistrationContext.Provider>
      </SnackbarProvider>
    </BrowserRouter>
  );

  return { createRegistration };
};

jest.mock("@/config-global", () => ({
  HOST_API: "http://localhost:8000",
}));

describe("NewUser", () => {
  it("should render correctly", () => {
    renderNewUser();

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
});
