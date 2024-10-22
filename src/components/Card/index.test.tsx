import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Card from ".";

describe("Card", () => {
  it("should render correctly", () => {
    render(<Card>Test Content</Card>);

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<Card>{childText}</Card>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <Card>
        <div>First Child</div>
        <div>Second Child</div>
      </Card>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should render nested complex elements correctly", () => {
    render(
      <Card>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </Card>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Title");
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should spread additional props correctly", () => {
    const testId = "custom-test-id";
    const className = "custom-class";

    render(
      <Card data-testid={testId} className={className}>
        Content
      </Card>
    );

    const card = screen.getByTestId(testId);
    expect(card).toHaveClass(className);
  });

  it("should apply innerRef correctly", () => {
    const mockRef = jest.fn();
    render(<Card innerRef={mockRef}>Content</Card>);

    expect(mockRef).toHaveBeenCalled();
    expect(mockRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
