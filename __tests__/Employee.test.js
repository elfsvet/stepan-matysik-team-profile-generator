const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

test('creates an employee object', () =>{
    const employee = new Employee('Alex',1,'al.gurino@gmail.com');

    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('al.gurino@gmail.com');
});