export const generateRandomCpf = (): string => {
  const numbers = [];

  for (let i = 0; i < 12; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);
  }

  return numbers.join("");
};
