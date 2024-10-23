import { maskCpf, unmaskCpf } from "./cpfMask";

const unmaskedCpf = "78502270001";
const maskedCpf = "785.022.700-01";

describe("cpfMask", () => {
  it("should return mask CPF when calling maskCpf", () => {
    expect(maskCpf(unmaskedCpf)).toBe(maskedCpf);
  });

  it("should return unmask CPF when calling unmaskCpf", () => {
    expect(unmaskCpf(maskedCpf)).toBe(unmaskedCpf);
  });
});
