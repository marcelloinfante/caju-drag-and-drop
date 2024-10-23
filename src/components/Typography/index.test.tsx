import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { text } from "~/theme/palette";
import { typography as typographyStyles } from "~/theme/typography";

import Typography from ".";

describe("Typography", () => {
  it("should render correctly", () => {
    render(<Typography>Test Content</Typography>);

    const typography = screen.getByTestId("typography");
    expect(typography).toBeInTheDocument();
  });

  it("should render children content correctly", () => {
    const childText = "Child Content";
    render(<Typography>{childText}</Typography>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("should render multiple children correctly", () => {
    render(
      <Typography>
        <div>First Child</div>
        <div>Second Child</div>
      </Typography>
    );

    expect(screen.getByText("First Child")).toBeInTheDocument();
    expect(screen.getByText("Second Child")).toBeInTheDocument();
  });

  it("should render nested complex elements correctly", () => {
    render(
      <Typography>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </Typography>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Title");
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("should spread additional props correctly", () => {
    const testId = "custom-test-id";
    const className = "custom-class";

    render(
      <Typography data-testid={testId} className={className}>
        Content
      </Typography>
    );

    const typography = screen.getByTestId(testId);
    expect(typography).toHaveClass(className);
  });

  it("should have color when provided", () => {
    render(<Typography color="white">Test</Typography>);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle("color: white");
  });

  it("should have style when provided", () => {
    render(<Typography style={{ backgroundColor: "salmon" }}>Test</Typography>);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle("background-color: salmon");
  });

  it.each([
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
    "textPrimary",
    "textSecondary",
    "textDisabled",
    "white",
  ] as const)("should have color when provided", (color) => {
    render(<Typography color={color}>Test</Typography>);

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle(`color: ${text[color] || color}`);
  });

  it.each(["center", "inherit", "justify", "left", "right"] as const)(
    "should have align when provided",
    (align) => {
      render(<Typography align={align}>Test</Typography>);

      const typography = screen.getByTestId("typography");
      expect(typography).toHaveStyle(`text-align: ${align}`);
    }
  );

  it.each([
    "body1",
    "body2",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
  ] as const)("should have variant when provided", (variant) => {
    render(<Typography variant={variant}>Test</Typography>);

    const { fontSize, fontWeight, lineHeight } = typographyStyles[variant];

    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle(`font-size: ${fontSize}`);
    expect(typography).toHaveStyle(`font-weight: ${fontWeight}`);
    expect(typography).toHaveStyle(`line-height: ${lineHeight}`);
  });
});
