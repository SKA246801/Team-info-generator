const Employee = require('../lib/employee')

test('can be created', () => {
    const employee = new Employee()
    expect(typeof (employee)).toBe('object')
})

test('does it create correctly', () => {
    const email = 'test@test.com'
    const employee = new Employee('Seb', 123, email)
    expect(employee.email).toBe(email) 
})