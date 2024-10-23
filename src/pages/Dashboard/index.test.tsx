import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { RegistrationContext, RegistrationContextType } from "~/contexts/registration";

import DashboardPage from ".";

import { StatusEnum, RegistrationRead } from "~/types";

const reviewRegistrations: RegistrationRead[] = [
  {
    id: "1",
    index: 0,
    cpf: "78502270001",
    status: StatusEnum.REVIEW,
    email: "jose@caju.com.br",
    name: "José Leão",
    date: "22/10/2023",
  },
  {
    id: "2",
    index: 1,
    cpf: "56642105087",
    status: StatusEnum.REVIEW,
    email: "luiz@caju.com.br",
    name: "Luiz Filho",
    date: "23/10/2023",
  },
  {
    id: "3",
    index: 2,
    cpf: "12345678901",
    status: StatusEnum.REVIEW,
    email: "ana@caju.com.br",
    name: "Ana Silva",
    date: "24/10/2023",
  },
];

const approvedRegistrations: RegistrationRead[] = [
  {
    id: "4",
    index: 0,
    cpf: "78502270001",
    status: StatusEnum.APPROVED,
    email: "jose@caju.com.br",
    name: "José Leão",
    date: "22/10/2023",
  },
  {
    id: "5",
    index: 1,
    cpf: "56642105087",
    status: StatusEnum.APPROVED,
    email: "luiz@caju.com.br",
    name: "Luiz Filho",
    date: "23/10/2023",
  },
  {
    id: "6",
    index: 2,
    cpf: "12345678901",
    status: StatusEnum.APPROVED,
    email: "ana@caju.com.br",
    name: "Ana Silva",
    date: "24/10/2023",
  },
];

const reprovedRegistrations: RegistrationRead[] = [
  {
    id: "7",
    index: 0,
    cpf: "78502270001",
    status: StatusEnum.REPROVED,
    email: "jose@caju.com.br",
    name: "José Leão",
    date: "22/10/2023",
  },
  {
    id: "8",
    index: 1,
    cpf: "56642105087",
    status: StatusEnum.REPROVED,
    email: "luiz@caju.com.br",
    name: "Luiz Filho",
    date: "23/10/2023",
  },
  {
    id: "9",
    index: 2,
    cpf: "12345678901",
    status: StatusEnum.REPROVED,
    email: "ana@caju.com.br",
    name: "Ana Silva",
    date: "24/10/2023",
  },
];

const renderDashboardPage = (loading: boolean = false) => {
  const readRegistrations = jest.fn();

  render(
    <BrowserRouter>
      <RegistrationContext.Provider
        value={
          {
            loading,
            reviewRegistrations,
            approvedRegistrations,
            reprovedRegistrations,
            readRegistrations,
          } as unknown as RegistrationContextType
        }
      >
        <DashboardPage />
      </RegistrationContext.Provider>
    </BrowserRouter>
  );

  return { readRegistrations };
};

jest.mock("~/config-global", () => ({
  HOST_API: "http://localhost:3000",
}));

describe("DashboardPage", () => {
  it("should render correctly", () => {
    renderDashboardPage();

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  it("should render correctly", () => {
    renderDashboardPage();

    const columns = screen.getByTestId("columns");
    expect(columns).toBeInTheDocument();
  });

  it("should render all columns correctly", () => {
    renderDashboardPage();

    const columns = screen.getAllByTestId("column");
    expect(columns).toHaveLength(3);
  });

  it("should render all registration cards correctly", () => {
    renderDashboardPage();

    const registrationCard = screen.getAllByTestId("registration-card");
    expect(registrationCard).toHaveLength(9);
  });

  it("should render correctly", () => {
    renderDashboardPage();

    const searchBar = screen.getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  it("should call readRegistrations", () => {
    const { readRegistrations } = renderDashboardPage();

    expect(readRegistrations.mock.calls).toHaveLength(1);
  });

  it("should not render loading page when loading is false", () => {
    renderDashboardPage(false);

    const loading = screen.queryByTestId("loading");
    expect(loading).not.toBeInTheDocument();
  });

  it("should render loading page when loading is true", () => {
    renderDashboardPage(true);

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});
