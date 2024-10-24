import isEqual from "lodash/isEqual";

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

  it("should create multiple objects when create is create_dump", () => {
    const factories = BaseFactory.create_dump(5);

    factories.forEach((factory) => expect(factory).toBeInstanceOf(Object));
  });

  it("should return object when dump is called", () => {
    const factory = new BaseFactory();

    expect(isEqual(factory.dump(), { ...factory })).toBeTruthy();
  });
});
