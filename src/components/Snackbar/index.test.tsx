import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { SnackbarProvider } from ".";

describe("Snackbar", () => {
  it("should render correctly", () => {
    const childText = "Child Content";
    render(<SnackbarProvider>{childText}</SnackbarProvider>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<SnackbarProvider>{childText}</SnackbarProvider>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <SnackbarProvider>
        <div>First Child</div>
        <div>Second Child</div>
      </SnackbarProvider>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should render nested complex elements correctly", () => {
    render(
      <SnackbarProvider>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </SnackbarProvider>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Title");
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });
});
