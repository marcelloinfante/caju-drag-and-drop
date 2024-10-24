export class BaseFactory {
  constructor(_attrs: any = {}) {}

  static create(numberOfInstances: number, attrs?: any): BaseFactory[] {
    const instances = [];

    for (let i = 0; i < numberOfInstances; i++) {
      instances.push(new this(attrs));
    }

    return instances;
  }
}
