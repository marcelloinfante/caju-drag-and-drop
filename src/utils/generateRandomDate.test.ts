import { generateRandomDate } from "./generateRandomDate";

describe("generateRandomDate", () => {
  it("should generate a string of 12 digits", () => {
    const date = generateRandomDate();

    const [day, month, year] = date.split("/");

    expect(typeof day).toBe("string");
    expect(typeof month).toBe("string");
    expect(typeof year).toBe("string");
  });
});
