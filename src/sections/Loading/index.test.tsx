import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Loading from ".";

describe("Loading", () => {
  it("should render correctly", () => {
    render(<Loading />);

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
  });
});
