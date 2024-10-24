import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { RegistrationContext, RegistrationContextType } from "@/contexts/registration";

import { SnackbarProvider } from "@/components/Snackbar";

import Columns from ".";
import { RegistrationFactory } from "@/factories";

import { StatusEnum } from "@/types";

const reviewRegistrations = RegistrationFactory.create(3, { status: StatusEnum.REVIEW });
const approvedRegistrations = RegistrationFactory.create(3, { status: StatusEnum.APPROVED });
const reprovedRegistrations = RegistrationFactory.create(3, { status: StatusEnum.REPROVED });

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
