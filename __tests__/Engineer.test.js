const Engineer = require('../lib/Engineer');

test('returns github username', ()=>{
    const engineer = new Engineer('John',3,'john@gmail.com','john003');

    expect(engineer.getGithub()).toEqual('john003');
    expect(engineer.name).toBe('John');
    expect(engineer.getName()).toBe('John');
    expect(engineer.id).toBe(3);
})

test("displays the eployee's role",()=>{
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})