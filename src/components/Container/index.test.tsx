import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { sizes } from "~/theme/responsive";

import Container from ".";

describe("Container", () => {
  it("should render correctly", () => {
    render(<Container>Test Content</Container>);

    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<Container>{childText}</Container>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <Container>
        <div>First Child</div>
        <div>Second Child</div>
      </Container>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should render nested complex elements correctly", () => {
    render(
      <Container>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </Container>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Title");
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should spread additional props correctly", () => {
    const testId = "custom-test-id";
    const className = "custom-class";

    render(
      <Container data-testid={testId} className={className}>
        Content
      </Container>
    );

    const container = screen.getByTestId(testId);
    expect(container).toHaveClass(className);
  });

  describe("maxWidth prop", () => {
    it("should use default maxWidth (lg) when no value is provided", () => {
      render(<Container>Content</Container>);

      const container = screen.getByTestId("container");
      expect(container).toHaveStyle(`max-width: ${sizes.lg}`);
    });

    it.each(["xs", "sm", "md", "lg", "xl"] as const)(
      "should apply correct maxWidth when %s is provided",
      (size) => {
        render(<Container maxWidth={size}>Content</Container>);

        const container = screen.getByTestId("container");
        expect(container).toHaveStyle(`max-width: ${sizes[size]}`);
      }
    );
  });
});
