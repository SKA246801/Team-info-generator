class Intern{
    constructor(name, id, email, school){
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }
    getName() {
        return response.name
    }
    getId() {
        return response.id    
    }
    getEmail() {
        return response.email
    }
    getSchool() {
        return response.school
    }
    getRole() {
        console.log('Intern')
        return 'Intern'
    }
}

module.exports = Intern