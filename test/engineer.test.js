const Engineer = require('../lib/engineer')

test('can be created', () => {
    const engineer = new Engineer()
    expect(typeof (engineer)).toBe('object')
})

test('does it create correctly', () => {
    const github = 'SKA246801'
    const engineer = new Engineer('Seb', 123, 'test@test.com', github)
    expect(engineer.github).toBe(github) 
})