const Employee = require('../lib/Employee.js');

test("Testing Employee Instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Testing name", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Testing id", () => {
    const testValue = 2;
    const e = new Employee("wasd", testValue);
    expect(e.id).toBe(testValue);
});

test("Testing email", () => {
    const testEmail = "c@c.ca";
    const e = new Employee("wasd", null, testEmail);
    expect(e.email).toBe(testEmail);
});