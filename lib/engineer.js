class Engineer{
    constructor(name, id, email, github){
        this.name = name
        this.id = id
        this.email = email
        this.github = github
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
    getGitHub() {
        return response.github
    }
    getRole() {
        console.log('Engineer')
        return 'Engineer'
    }
}

module.exports = Engineer