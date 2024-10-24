import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { button as buttonPalette } from "@/theme/palette";

import Button from ".";

describe("Button", () => {
  it("should render correctly", () => {
    render(<Button>Test Content</Button>);

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<Button>{childText}</Button>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <Button>
        <div>First Child</div>
        <div>Second Child</div>
      </Button>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should spread additional props correctly", () => {
    const testId = "custom-test-id";
    const className = "custom-class";

    render(
      <Button data-testid={testId} className={className}>
        Content
      </Button>
    );

    const button = screen.getByTestId(testId);
    expect(button).toHaveClass(className);
  });

  it("should have style when provided", () => {
    render(<Button style={{ backgroundColor: "salmon" }}>Test</Button>);

    const button = screen.getByTestId("button");
    expect(button).toHaveStyle("background-color: salmon");
  });

  it.each(["primary", "secondary", "success", "error", "info", "warning"] as const)(
    "should have color when provided",
    (color) => {
      render(<Button color={color}>Test</Button>);

      const button = screen.getByTestId("button");
      const buttonText = screen.getByTestId("button-text");

      const { textColor, backgroundColor } = buttonPalette[color];

      expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
      expect(buttonText).toHaveStyle(`color: ${textColor}`);
    }
  );
});
