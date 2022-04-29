const Manager = require('../lib/Manager.js');

test("Testing Manager Instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

test("Testing name", () => {
    const name = "Manger";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test("Testing id", () => {
    const testValue = 1;
    const e = new Manager("wasd", testValue);
    expect(e.id).toBe(testValue);
});

test("Testing email", () => {
    const testEmail = "c@c.ca";
    const e = new Manager("wasd", null, testEmail);
    expect(e.email).toBe(testEmail);
});

test("Testing office number", () => {
    const testOffice = 3;
    const e = new Manager("wasd", null, null, testOffice);
    expect(e.office).toBe(testOffice);
});