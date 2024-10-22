import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  it("should render text content correctly", () => {
    render(<Header />);

    const typography = screen.getByText("Caju Drag-and-Drop");
    expect(typography).toBeInTheDocument();
  });
});
