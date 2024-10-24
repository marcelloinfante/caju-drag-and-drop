import isEqual from "lodash/isEqual";
import { faker } from "@faker-js/faker";

import { generateRandomCpf } from "@/utils/generateRandomCpf";
import { generateRandomDate } from "@/utils/generateRandomDate";

import { StatusEnum } from "@/types";

import { RegistrationFactory } from ".";

describe("RegistrationFactory", () => {
  it("should create instance correctly", () => {
    const registration = new RegistrationFactory();

    expect(registration).toBeInstanceOf(RegistrationFactory);
  });

  it("should return object when dump is called", () => {
    const registration = new RegistrationFactory();

    expect(isEqual(registration.dump(), { ...registration })).toBeTruthy();
  });

  it.each([
    { field: "id", fieldType: "string" },
    { field: "cpf", fieldType: "string" },
    { field: "name", fieldType: "string" },
    { field: "date", fieldType: "string" },
    { field: "email", fieldType: "string" },
    { field: "index", fieldType: "number" },
    { field: "status", fieldType: "string" },
  ] as const)("should have default", ({ field, fieldType }) => {
    const registration = new RegistrationFactory();

    expect(typeof registration[field]).toBe(fieldType);
  });

  it.each([
    { field: "cpf", value: generateRandomCpf() },
    { field: "name", value: faker.person.fullName() },
    { field: "date", value: generateRandomDate() },
    { field: "email", value: faker.internet.email() },
    { field: "index", value: 20 },
    { field: "status", value: StatusEnum.APPROVED },
  ] as const)("should have overwrite default when provided", ({ field, value }) => {
    const registration = new RegistrationFactory({ [field]: value });

    expect(registration[field]).toBe(value);
  });
});
