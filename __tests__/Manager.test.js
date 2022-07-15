const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Craig");

  expect(manager.name).toBe("Craig");
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(String));
});

test("gets manager's name and sets it as object's name", () => {
  const manager = new Manager("Craig");

  expect(manager.getName()).toHaveProperty("name");
});

test("get's manager's id and sets it as object's id", () => {
  const manager = new Manager("Craig");

  expect(manager.getId()).toHaveProperty("id");
});

test("get's manager's email and sets it as object's email", () => {
  const manager = new Manager("Craig");

  expect(manager.getEmail()).toHaveProperty("email");
});

test("get's manager's office number and sets it as object's office", () => {
  const manager = new Manager("Craig");

  expect(manager.getOffice()).toHaveProperty("office");
});

test("get's manager's role and sets it as object's role", () => {
  const manager = new Manager("Craig");

  expect(manager.getRole()).toEqual(expect.any(String));
});
