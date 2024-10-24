import { faker } from "@faker-js/faker";

import { generateRandomCpf } from "@/utils/generateRandomCpf";
import { generateRandomDate } from "@/utils/generateRandomDate";

import { StatusEnum, RegistrationRead, RegistrationFactoryProps } from "@/types";

export class RegistrationFactory implements RegistrationRead {
  id: string;
  cpf: string;
  name: string;
  date: string;
  email: string;
  index: number;
  status: StatusEnum;

  constructor({ cpf, name, date, email, index, status }: RegistrationFactoryProps = {}) {
    this.id = faker.string.uuid();
    this.cpf = cpf || generateRandomCpf();
    this.name = name || faker.person.fullName();
    this.date = date || generateRandomDate();
    this.email = email || faker.internet.email();
    this.index = index || 0;
    this.status = status || StatusEnum.REVIEW;
  }

  dump() {
    return { ...this };
  }
}
