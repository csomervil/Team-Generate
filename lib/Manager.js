function Manager(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
  
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
        return "Manger"
    }

    function getOffice() {
        return office
    }
    getName()
    getId()
    getEmail()
    getRole()
    getOffice()
}
  module.exports = Manager;