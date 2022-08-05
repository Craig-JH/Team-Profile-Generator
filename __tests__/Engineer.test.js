const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Craig");

  expect(engineer.name).toBe("Craig");
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name and sets it as object's name", () => {
  const engineer = new Engineer("Craig");

  expect(engineer.getName()).toHaveProperty("name");
});

test("get's engineer's id and sets it as object's id", () => {
  const engineer = new Engineer("Craig");

  expect(engineer.getId()).toHaveProperty("id");
});

test("get's engineer's email and sets it as object's email", () => {
  const engineer = new Engineer("Craig");

  expect(engineer.getEmail()).toHaveProperty("email");
});

test("get's engineer's github username and sets it as object's github", () => {
  const engineer = new Engineer("Craig");

  expect(engineer.getGithub()).toHaveProperty("github");
});

test("get's engineer's role and sets it as object's role", () => {
  const engineer = new Engineer("Craig");

  expect(engineer.getRole()).toEqual(expect.any(String));
});
