function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  
    function getName() {
        return name
    }

    function getId() {
        return id
    }

    function getEmail() {
        return email
    }

    function getRole() {
        return "Intern"
    }

    function getSchool() {
        return school
    }
    getName()
    getId()
    getEmail()
    getRole()
    getSchool()
}
  module.exports = Intern;