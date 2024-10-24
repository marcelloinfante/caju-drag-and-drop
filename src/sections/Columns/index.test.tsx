import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { RegistrationContext, RegistrationContextType } from "@/contexts/registration";

import { SnackbarProvider } from "@/components/Snackbar";

import Columns from ".";

import { StatusEnum, RegistrationRead } from "@/types";

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

const renderColumn = () => {
  const updateRegistrations = jest.fn();

  render(
    <RegistrationContext.Provider
      value={
        {
          reviewRegistrations,
          approvedRegistrations,
          reprovedRegistrations,
          updateRegistrations,
        } as unknown as RegistrationContextType
      }
    >
      <SnackbarProvider>
        <Columns />
      </SnackbarProvider>
    </RegistrationContext.Provider>
  );

  return { updateRegistrations };
};

jest.mock("@/config-global", () => ({
  HOST_API: "http://localhost:8000",
}));

describe("Columns", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderColumn();

      const columns = screen.getByTestId("columns");
      expect(columns).toBeInTheDocument();
    });

    it("should render all columns correctly", () => {
      renderColumn();

      const columns = screen.getAllByTestId("column");
      expect(columns).toHaveLength(3);
    });

    it("should render all registration cards correctly", () => {
      renderColumn();

      const registrationCard = screen.getAllByTestId("registration-card");
      expect(registrationCard).toHaveLength(9);
    });
  });
});
