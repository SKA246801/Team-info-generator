const Intern = require('../lib/intern')

test('can be created', () => {
    const intern = new Intern()
    expect(typeof (intern)).toBe('object')
})

test('does it create correctly', () => {
    const school = 'InternSchool'
    const intern = new Intern('Seb', 123, 'test@test.com', school)
    expect(intern.school).toBe(school) 
})