export class BaseFactory {
  static create(numberOfInstances: number): BaseFactory[] {
    const instances = [];

    for (let i = 0; i < numberOfInstances; i++) {
      instances.push(new this());
    }

    return instances;
  }

  static create_dump(numberOfInstances: number): BaseFactory[] {
    const instances = this.create(numberOfInstances);

    return instances.map((instance) => instance.dump());
  }

  dump() {
    return { ...this };
  }
}
