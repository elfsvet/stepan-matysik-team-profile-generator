const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Alex', 1, 'al.gurino@gmail.com');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('al.gurino@gmail.com');
});

test('returns employee\'s name value', () => {

    const employee = new Employee('Alex');

    expect(employee.getName()).toBe('Alex');
});

test("returns an employee's id", () => {
    const employee = new Employee('Alex',1);
    expect(employee.getId()).toBe(1);
});

test("returns an employee's email", () => {
    const employee = new Employee('Alex',1,'al.gurino@gmail.com');
    expect(employee.getEmail()).toBe('al.gurino@gmail.com');
});

test("returns an employee's role", () => {
    const employee = new Employee('Alex',1,'al.gurino@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});