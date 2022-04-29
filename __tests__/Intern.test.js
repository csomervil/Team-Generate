const Intern = require('../lib/Intern.js');

test("Testing Intern Instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

test("Testing name", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test("Testing id", () => {
    const testValue = 1;
    const e = new Intern("wasd", testValue);
    expect(e.id).toBe(testValue);
});

test("Testing email", () => {
    const testEmail = "c@c.ca";
    const e = new Intern("wasd", null, testEmail);
    expect(e.email).toBe(testEmail);
});

test("Testing school", () => {
    const testSchool = "UofT";
    const e = new Intern("wasd", null, null, testSchool);
    expect(e.school).toBe(testSchool);
});