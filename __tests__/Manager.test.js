const Manager = require('../lib/Manager');

test("return office number", () => {
    const manager = new Manager ('Alex',2,'al.gurino@gmail.com',10);

    expect(manager.officeNumber).toBe(10);
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getName()).toBe('Alex');
    expect(manager.getId()).toBe(2);
    expect(manager.getEmail()).toBe('al.gurino@gmail.com');
});