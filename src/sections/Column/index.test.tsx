import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";

import { registrationColumns } from "@/theme/palette";

import Column, { ColumnProps } from ".";

import { StatusEnum, RegistrationRead } from "@/types";

const registrations: RegistrationRead[] = [
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

const renderColumn = ({ ...props }: ColumnProps) => {
  const onDragEnd = jest.fn();

  render(
    <DragDropContext onDragEnd={onDragEnd}>
      <Column {...props} />
    </DragDropContext>
  );

  return { onDragEnd };
};

jest.mock("@/config-global", () => ({
  HOST_API: "http://localhost:8000",
}));

describe("Column", () => {
  it.each([
    { title: "Revisão", status: StatusEnum.REVIEW },
    { title: "Aprovado", status: StatusEnum.APPROVED },
    { title: "Reprovado", status: StatusEnum.REPROVED },
  ] as const)("should render correctly", ({ title, status }) => {
    renderColumn({ title, status, registrations });

    const column = screen.getByTestId("column");
    expect(column).toBeInTheDocument();
  });

  it.each([
    { title: "Revisão", status: StatusEnum.REVIEW },
    { title: "Aprovado", status: StatusEnum.APPROVED },
    { title: "Reprovado", status: StatusEnum.REPROVED },
  ] as const)("should render title correctly", ({ title, status }) => {
    renderColumn({ title, status, registrations });

    const columnTitle = screen.getByText(title);
    expect(columnTitle).toBeInTheDocument();
  });

  it.each([
    { title: "Revisão", status: StatusEnum.REVIEW },
    { title: "Aprovado", status: StatusEnum.APPROVED },
    { title: "Reprovado", status: StatusEnum.REPROVED },
  ] as const)("should render registration card correctly", ({ title, status }) => {
    renderColumn({ title, status, registrations });

    const registrationCards = screen.getAllByTestId("registration-card");
    expect(registrationCards).toHaveLength(3);
  });

  it.each([
    { title: "Revisão", status: StatusEnum.REVIEW },
    { title: "Aprovado", status: StatusEnum.APPROVED },
    { title: "Reprovado", status: StatusEnum.REPROVED },
  ] as const)("should style color by status", ({ title, status }) => {
    renderColumn({ title, status, registrations });

    const { color, backgroundColor } = registrationColumns[status];

    const column = screen.getByTestId("column");
    expect(column).toHaveStyle(`background-color: ${backgroundColor}`);

    const columnTitle = screen.getByText(title);
    expect(columnTitle).toHaveStyle(`color: ${color}`);
  });
});
