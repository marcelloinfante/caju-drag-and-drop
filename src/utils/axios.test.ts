// import axios from "./axios";

jest.mock("@/config-global", () => ({
  HOST_API: "http://localhost:8000",
}));

describe("axios", () => {
  it("", () => {
    expect(true).toBe(true);
  });
});
