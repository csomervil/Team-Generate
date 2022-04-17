/* Defining Node Functions */
const fs = require('fs');
const inquirer = require('inquirer');
/* Setting the Page to Generate from */
const generatePage = require('./src/inner_app');
const pageHTML = generatePage();

const generateSystem = () => {
    fs.writeFile('./Team.html', pageHTML, err => {
        if (err) throw new Error(err);
        
        });
}



console.log("You will be asked a series of questions to generate a profile for your team");
const prompting = () => {


/* Creating Prompts */
const promptUser = () => {
    
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your member's name? (Required)",
      validate: nameinput => {
        if (nameinput) {
          return true;
        } else {
          console.log('Input Required');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your member's identification number? (Required)",
        validate: idinput => {
          if (idinput) {
            return true;
          } else {
            console.log('Input Required');
            return false;
          }
        }
      },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
      validate: emailinput => {
        if (emailinput) {
          return true;
        } else {
          console.log('Input Required');
          return false;
        }
      }
    },
    
    {
      type: 'list',
      name: 'status',
      message: 'What is their role? (Select One)',
      choices: ['Manager', 'Intern', 'Engineer']
    },
  
  ]);
};



/* Taking the Array of Prompt Answers and Appending new Items as well as Modifying Current Ones */
promptUser()
  .then(portfolioData => {

    function pageGen () {
            
        fs.appendFileSync('./Team.html', `
        
    <div class="card" style="width: 12rem; height: 12rem; margin: 10px">
    <div class="card-body">
    <h5 class="card-title">${portfolioData.status}</h5>
    <div class="card-text">
    <div class="identification" id="i-temp2">id: ${portfolioData.id}</div>
    <div class="name" id="i-temp2">Name: ${portfolioData.name}</div>
        <div class="email">Email: ${portfolioData.email}</div>
        <div class="offn" id="i-feel2">${portfolioData.spec}</div>
    
    </div>
    </div>
    </div>
            `
        , err => {
            if (err) throw new Error(err);
            
            });
    
            const promptUserterm = () => {
                return inquirer.prompt([
                    {
                    type: 'confirm',
                    name: 'term',
                    message: "Would you like to add another member? (Required)",
                    default: false
                    }]);
            }; 
            
            promptUserterm()
            .then(termData => {
                console.log(termData.term)
            if (termData.term) {
                prompting();
            } else {
                console.log('File created! Check out Team.html in this directory to see it! Come back if you want to add a new team member!');
            }
            
            });
    }


    if (portfolioData.status === 'Manager') {
        const promptUserspec = () => {
            return inquirer.prompt([
                {
                  type: 'input',
                  name: 'spec',
                  message: "What is their office number? (Required)",
                  validate: specinput => {
                    if (specinput) {
                      return true;
                    } else {
                      console.log('Input Required');
                      return false;
                    }
                  }
                }]);
            
        }; promptUserspec()
            .then(specData => {
            portfolioData.spec = "Office Number: " + specData.spec;
            pageGen();
        });
    }  
    if (portfolioData.status === 'Intern') {
        const promptUserspec = () => {
            return inquirer.prompt([
                {
                  type: 'input',
                  name: 'spec',
                  message: "What school do they go to? (Required)",
                  validate: specinput => {
                    if (specinput) {
                      return true;
                    } else {
                      console.log('Input Required');
                      return false;
                    }
                  }
                }]);
        }; promptUserspec()
            .then(specData => {
            portfolioData.spec = "Acedemic Origin: " + specData.spec;
            pageGen();
        });
    }
    if (portfolioData.status === 'Engineer') {
        const promptUserspec = () => {
            return inquirer.prompt([
                {
                  type: 'input',
                  name: 'spec',
                  message: "What is their GitHub? (Required)",
                  validate: specinput => {
                    if (specinput) {
                      return true;
                    } else {
                      console.log('Input Required');
                      return false;
                    }
                  }
                }]);
                
        }; promptUserspec()
            .then(specData => {
            portfolioData.spec = "GitHub: " + specData.spec;
            pageGen();
        });
    } 
    

  });
}
generateSystem();
prompting();