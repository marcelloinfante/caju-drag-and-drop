import { fDate } from "./formatDate";

const unFormattedDate = "yyyy-mm-dd";
const formattedDate = "dd/mm/yyyy";

describe("formatDate", () => {
  it("should return formatted date", () => {
    expect(fDate(unFormattedDate)).toBe(formattedDate);
  });
});
