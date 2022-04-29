const Engineer = require('../lib/Engineer.js');

test("Testing Engineer Instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test("Testing name", () => {
    const name = "Alice";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
});

test("Testing id", () => {
    const testValue = 1;
    const e = new Engineer("wasd", testValue);
    expect(e.id).toBe(testValue);
});

test("Testing email", () => {
    const testEmail = "c@c.ca";
    const e = new Engineer("wasd", null, testEmail)
    expect(e.email).toBe(testEmail);
});

test("Testing github", () => {
    const testGit = "csom";
    const e = new Engineer("wasd", null, null, testGit);
    expect(e.github).toBe(testGit);
});