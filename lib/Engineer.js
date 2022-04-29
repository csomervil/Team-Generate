function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  
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
        return "Engineer"
    }

    function getGithub() {
        return github
    }
    getName()
    getId()
    getEmail()
    getRole()
    getGithub()
}
  module.exports = Engineer;