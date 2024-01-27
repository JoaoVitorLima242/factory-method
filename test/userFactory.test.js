const rewiremock = require("rewiremock/node");
const { deepStrictEqual } = require("assert");

const dbData = [
  {
    name: "Gabriel",
  },
  {
    name: "Enzo",
  },
];

class MockDatabase {
  connect = () => this;
  find = async () => dbData;
}

rewiremock(() => require("../src/utils/database")).with(MockDatabase);

(async () => {
  {
    const expected = [
      {
        name: "GABRIEL",
      },
      {
        name: "ENZO",
      },
    ];
    rewiremock.enable();
    const UserFactory = require("../src/factory/userFactory");
    const userFactory = await UserFactory.createInstance();
    const result = await userFactory.find();

    deepStrictEqual(result, expected);

    rewiremock.disable();
  }
})();
