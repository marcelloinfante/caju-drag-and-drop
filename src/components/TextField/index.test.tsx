import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { text } from "@/theme/palette";

import TextField from ".";

describe("TextField", () => {
  it("should render correctly", () => {
    render(<TextField />);

    const textfield = screen.getByTestId("textfield");
    const textfieldInput = screen.getByTestId("textfield-input");

    expect(textfield).toBeInTheDocument();
    expect(textfieldInput).toBeInTheDocument();
  });

  it("should have value when provided", () => {
    render(<TextField value="Test" />);

    const textfieldInput = screen.getByTestId("textfield-input");
    expect(textfieldInput).toHaveValue("Test");
  });

  it("should use mask when provided", () => {
    const mockMask = jest.fn((value: string) => value.toLowerCase());
    render(<TextField value="TEST" mask={mockMask} />);

    const textfieldInput = screen.getByTestId("textfield-input");

    expect(mockMask.mock.calls).toHaveLength(1);
    expect(mockMask.mock.calls[0][0]).toBe("TEST");
    expect(mockMask.mock.results[0].value).toBe("test");

    expect(textfieldInput).toHaveValue("test");
  });

  it("should have style when provided", () => {
    render(<TextField style={{ backgroundColor: "salmon" }} />);

    const textfield = screen.getByTestId("textfield");
    expect(textfield).toHaveStyle("background-color: salmon");
  });

  it("should spread additional props correctly", () => {
    const className = "custom-class";

    render(<TextField className={className} />);

    const textfield = screen.getByTestId("textfield-input");
    expect(textfield).toHaveClass(className);
  });

  describe("Label", () => {
    it("should render correctly", () => {
      render(<TextField label="Test" />);

      const textfieldLabel = screen.getByTestId("textfield-label");
      expect(textfieldLabel).toBeInTheDocument();
    });

    it("should not render when not provided", () => {
      render(<TextField />);

      const textfieldLabel = screen.queryByTestId("textfield-label");
      expect(textfieldLabel).not.toBeInTheDocument();
    });

    it("should have text", () => {
      render(<TextField label="Test" />);

      const textfieldLabel = screen.getByTestId("textfield-label");
      expect(textfieldLabel).toHaveTextContent("Test");
    });
  });

  describe("Error", () => {
    it("should render correctly", () => {
      render(<TextField error="Test" />);

      const textfieldError = screen.getByTestId("textfield-error");
      expect(textfieldError).toBeInTheDocument();
    });

    it("should not render when not provided", () => {
      render(<TextField />);

      const textfieldError = screen.queryByTestId("textfield-error");
      expect(textfieldError).not.toBeInTheDocument();
    });

    it("should have text", () => {
      render(<TextField error="Test" />);

      const textfieldError = screen.getByTestId("textfield-error");
      expect(textfieldError).toHaveTextContent("Test");
    });

    it("should turn label color to red", () => {
      render(<TextField label="Test" error="Test" />);

      const textfieldLabel = screen.queryByTestId("textfield-label");
      expect(textfieldLabel).toHaveStyle(`color: ${text.error}`);
    });

    it("should turn input border color to red", () => {
      render(<TextField error="Test" />);

      const textfield = screen.getByTestId("textfield-input");
      expect(textfield).toHaveStyle(`border-color: ${text.error}`);
    });
  });
});
