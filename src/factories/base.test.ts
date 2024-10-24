import BaseFactory from ".";

describe("BaseFactory", () => {
  it("should create instance correctly", () => {
    const factory = new BaseFactory();

    expect(factory).toBeInstanceOf(BaseFactory);
  });

  it("should create multiple instances when create is called", () => {
    const factories = BaseFactory.create(5);

    factories.forEach((factory) => expect(factory).toBeInstanceOf(BaseFactory));
  });
});
