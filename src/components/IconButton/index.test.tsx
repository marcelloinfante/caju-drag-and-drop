import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import IconButton from ".";

describe("IconButton", () => {
  it("should render correctly", () => {
    render(<IconButton>Test Content</IconButton>);

    const iconButton = screen.getByTestId("icon-button");
    expect(iconButton).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<IconButton>{childText}</IconButton>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <IconButton>
        <div>First Child</div>
        <div>Second Child</div>
      </IconButton>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should spread additional props correctly", () => {
    const testId = "custom-test-id";
    const className = "custom-class";

    render(
      <IconButton data-testid={testId} className={className}>
        Content
      </IconButton>
    );

    const iconButton = screen.getByTestId(testId);
    expect(iconButton).toHaveClass(className);
  });
});
