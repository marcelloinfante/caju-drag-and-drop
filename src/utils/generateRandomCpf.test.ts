import { generateRandomCpf } from "./generateRandomCpf";

describe("generateRandomCpf", () => {
  it("should generate a string of 12 digits", () => {
    const cpf = generateRandomCpf();
    expect(cpf).toHaveLength(12);
    expect(cpf).toMatch(/^\d{12}$/);
  });
});
