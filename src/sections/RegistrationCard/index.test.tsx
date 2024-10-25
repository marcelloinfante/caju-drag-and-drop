import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

import { maskCpf } from "@/utils/cpfMask";

import { RegistrationContext, RegistrationContextType } from "@/contexts/registration";

import { SnackbarProvider } from "@/components/Snackbar";

import RegistrationCard from ".";
import { RegistrationFactory } from "@/factories";

import { StatusEnum } from "@/types";

const registration = new RegistrationFactory();

const renderRegistrationCard = () => {
  const onDragEnd = jest.fn();
  const deleteRegistration = jest.fn();

  render(
    <RegistrationContext.Provider
      value={
        {
          deleteRegistration,
        } as unknown as RegistrationContextType
      }
    >
      <SnackbarProvider>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={StatusEnum.REVIEW}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <RegistrationCard registration={registration} />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </SnackbarProvider>
    </RegistrationContext.Provider>
  );

  return { onDragEnd, deleteRegistration };
};

jest.mock("@/config-global", () => ({
  HOST_API: "http://localhost:8000",
}));

describe("RegistrationCard", () => {
  describe("Render", () => {
    it("should render correctly", () => {
      renderRegistrationCard();

      const registrationCard = screen.getByTestId("registration-card");
      expect(registrationCard).toBeInTheDocument();
    });

    it.each(["name", "cpf", "email", "date"] as const)(
      "should render registration data correctly",
      (data) => {
        renderRegistrationCard();

        let text = registration[data];

        if (data === "cpf") {
          text = maskCpf(text);
        }

        const registrationCardName = screen.getByText(text);
        expect(registrationCardName).toBeInTheDocument();
      }
    );
  });
});
