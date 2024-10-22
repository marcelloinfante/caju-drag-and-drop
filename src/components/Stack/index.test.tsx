import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Stack from ".";

describe("Stack", () => {
  it("should render correctly", () => {
    render(<Stack>Test Content</Stack>);

    const stack = screen.getByTestId("stack");
    expect(stack).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<Stack>{childText}</Stack>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <Stack>
        <div>First Child</div>
        <div>Second Child</div>
      </Stack>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should render nested complex elements correctly", () => {
    render(
      <Stack>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </Stack>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Title");
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should spread additional props correctly", () => {
    const testId = "custom-test-id";
    const className = "custom-class";

    render(
      <Stack data-testid={testId} className={className}>
        Content
      </Stack>
    );

    const stack = screen.getByTestId(testId);
    expect(stack).toHaveClass(className);
  });

  it("should apply innerRef correctly", () => {
    const mockRef = jest.fn();
    render(<Stack innerRef={mockRef}>Content</Stack>);

    expect(mockRef).toHaveBeenCalled();
    expect(mockRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("should apply spacing correctly", () => {
    const spacing = "16px";
    render(<Stack spacing={spacing}>Content</Stack>);

    const stack = screen.getByTestId("stack");
    expect(stack).toHaveStyle(`gap: ${spacing}`);
  });

  describe("direction prop", () => {
    it("should use default direction (column) when no value is provided", () => {
      render(<Stack>Content</Stack>);

      const stack = screen.getByTestId("stack");
      expect(stack).toHaveStyle("flex-direction: column");
    });

    it.each(["column-reverse", "column", "row-reverse", "row"] as const)(
      "should apply correct maxWidth when %s is provided",
      (direction) => {
        render(<Stack direction={direction}>Content</Stack>);

        const stack = screen.getByTestId("stack");
        expect(stack).toHaveStyle(`flex-direction: ${direction}`);
      }
    );
  });
});
