import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { maskCpf } from "@/utils/cpfMask";

import { RegistrationContext, RegistrationContextType } from "@/contexts/registration";

import { SnackbarProvider } from "@/components/Snackbar";

import RegistrationCard from ".";

import { StatusEnum } from "@/types";

const registrationData = {
  id: "1",
  index: 0,
  cpf: "78502270001",
  status: StatusEnum.REVIEW,
  email: "jose@caju.com.br",
  name: "José Leão",
  date: "22/10/2023",
};

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
                <RegistrationCard registration={registrationData} />
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

        let text = registrationData[data];

        if (data === "cpf") {
          text = maskCpf(text);
        }

        const registrationCardName = screen.getByText(text);
        expect(registrationCardName).toBeInTheDocument();
      }
    );
  });

  it("should deleteRegistration trash is clicked", () => {
    const { deleteRegistration } = renderRegistrationCard();

    const registrationCardDelete = screen.getByTestId("registration-card-delete");
    fireEvent.click(registrationCardDelete);

    expect(deleteRegistration.mock.calls).toHaveLength(1);
  });
});
