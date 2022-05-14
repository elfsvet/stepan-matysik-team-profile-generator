const { inflateRaw } = require('zlib');
const Intern = require('../lib/Intern');

test("creates school value", () => {

    const intern = new Intern('High School');

    expect(intern.school).toBe("High School");
});

test("returns emploee's role", () => {
    const intern = new Intern('school');

    expect(intern.getRole()).toBe("Intern")
});

test("returns the intern's school",()=>{
    const intern = new Intern('school');

    expect(intern.getSchool()).toBe('school');
})

test("returns the intern's name",()=>{
    const intern = new Intern('school');

    expect(intern.name).toBe('');
})