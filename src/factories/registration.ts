import { faker } from "@faker-js/faker";

import { generateRandomCpf } from "@/utils/generateRandomCpf";
import { generateRandomDate } from "@/utils/generateRandomDate";

import { BaseFactory } from "./base";

import { StatusEnum, RegistrationRead, RegistrationFactoryAttrs } from "@/types";

export class RegistrationFactory extends BaseFactory implements RegistrationRead {
  id: string;
  cpf: string;
  name: string;
  date: string;
  email: string;
  index: number;
  status: StatusEnum;

  constructor({ cpf, name, date, email, index, status }: RegistrationFactoryAttrs = {}) {
    super();
    this.id = faker.string.uuid();
    this.cpf = cpf || generateRandomCpf();
    this.name = name || faker.person.fullName();
    this.date = date || generateRandomDate();
    this.email = email || faker.internet.email();
    this.index = index || 0;
    this.status = status || StatusEnum.REVIEW;
  }

  static create(
    numberOfInstances: number,
    attrs?: RegistrationFactoryAttrs
  ): RegistrationFactory[] {
    return super.create(numberOfInstances, attrs) as RegistrationFactory[];
  }
}
