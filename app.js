/* Defining Node Functions */
const fs = require('fs');
const inquirer = require('inquirer');
/* Setting the Page to Generate from */
const generatePage = require('./src/inner_app');
const generatePagecont = require('./src/array_organization')

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
        };
        
    // if () {

    // }
        promptUserspec()
        .then(specData => {
            portfolioData.spec = specData.spec;
                    /* Genrating HTML File */
            const pageHTML = generatePage(portfolioData);
            fs.appendFile('./Team.html', pageHTML, err => {
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
        });
        
    }
    
    
  });
}
prompting();