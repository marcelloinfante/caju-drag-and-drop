import { faker } from "@faker-js/faker";
import { fDate } from "@/utils/formatDate";

export const generateRandomDate = (): string => {
  const date = faker.date.anytime();
  const unformattedDate = date.toISOString().substring(0, 10);
  const formattedDate = fDate(unformattedDate);

  return formattedDate;
};
