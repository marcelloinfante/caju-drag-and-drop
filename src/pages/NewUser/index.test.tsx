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

  it("should render correctly", () => {
    renderNewUser();

    const columns = screen.getByTestId("columns");
    expect(columns).toBeInTheDocument();
  });

  it("should render all columns correctly", () => {
    renderNewUser();

    const columns = screen.getAllByTestId("column");
    expect(columns).toHaveLength(3);
  });

  it("should render all registration cards correctly", () => {
    renderNewUser();

    const registrationCard = screen.getAllByTestId("registration-card");
    expect(registrationCard).toHaveLength(9);
  });

  it("should render correctly", () => {
    renderNewUser();

    const searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  it("should call readRegistrations", () => {
    const { readRegistrations } = renderNewUser();

    expect(readRegistrations.mock.calls).toHaveLength(1);
  });

  it("should not render loading page when loading is false", () => {
    renderNewUser(false);

    const loading = screen.queryByTestId("loading");
    expect(loading).not.toBeInTheDocument();
  });

  it("should render loading page when loading is true", () => {
    renderNewUser(true);

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});
