import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";

import { maskCpf } from "@/utils/cpfMask";

import { RegistrationContext, RegistrationContextType } from "@/contexts/registration";

import { SnackbarProvider } from "@/components/Snackbar";

import SearchBar from ".";

const renderSearchBar = () => {
  const readRegistrations = jest.fn();

  const history = createMemoryHistory({ initialEntries: ["/dashboard"] });

  render(
    <BrowserRouter>
      <Router history={history}>
        <RegistrationContext.Provider
          value={
            {
              readRegistrations,
            } as unknown as RegistrationContextType
          }
        >
          <SnackbarProvider>
            <SearchBar />
          </SnackbarProvider>
        </RegistrationContext.Provider>
      </Router>
    </BrowserRouter>
  );

  return { readRegistrations, history };
};

jest.mock("@/config-global", () => ({
  HOST_API: "http://localhost:8000",
}));

describe("SearchBar", () => {
  it("should render correctly", () => {
    renderSearchBar();

    const searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  it("should call readRegistrations", () => {
    const { readRegistrations } = renderSearchBar();

    const iconButton = screen.getByTestId("icon-button");
    fireEvent.click(iconButton);

    expect(readRegistrations.mock.calls).toHaveLength(1);
  });

  it("should go to newUser page when button is clicked", () => {
    const { history } = renderSearchBar();

    expect(history.location.pathname).toBe("/dashboard");

    const iconButton = screen.getByTestId("button");
    fireEvent.click(iconButton);

    expect(history.location.pathname).toBe("/new-user");
  });

  it("should have CPF mask", () => {
    renderSearchBar();

    const cpf = "78502270001";

    const cpfField = screen.getByTestId("textfield-input");
    fireEvent.change(cpfField, { target: { value: cpf } });

    expect(cpfField).toHaveValue(maskCpf(cpf));
  });

  it("should call readRegistrations when CPF is valid", () => {
    const { readRegistrations } = renderSearchBar();

    const cpf = "78502270001";

    const cpfField = screen.getByTestId("textfield-input");
    fireEvent.change(cpfField, { target: { value: cpf } });

    expect(readRegistrations.mock.calls).toHaveLength(1);
  });

  it("should not call readRegistrations when CPF is invalid", () => {
    const { readRegistrations } = renderSearchBar();

    const cpf = "7850227000";

    const cpfField = screen.getByTestId("textfield-input");
    fireEvent.change(cpfField, { target: { value: cpf } });

    expect(readRegistrations.mock.calls).toHaveLength(0);
  });
});
