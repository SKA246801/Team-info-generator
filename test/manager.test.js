const Manager = require('../lib/manager')

test('can be created', () => {
    const manager = new Manager()
    expect(typeof (manager)).toBe('object')
})

test('does it create correctly', () => {
    const officeNumber = 123123
    const manager = new Manager('Seb', 123, 'test@test.com', officeNumber)
    expect(manager.officeNumber).toBe(officeNumber) 
})