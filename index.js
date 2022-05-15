const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateData = require('./src/page-template');
const {writeFile, copyFile} = require('./src/generate-site');
const dataArray = [];


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: (input) => {
            if (input !== "") {
                return true;
            }
            else {
                return "Please enter the name";
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: (input) => {
            if (isNaN(input)) {
                return 'Please enter an id number';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: (input) => {
            if (isNaN(input)) {
                return 'Please enter an id number';
            }
            return true;
        }
    },
];

const addTeamOrFinishQuestion = [
    {
        type: 'list',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Finish'],
        message: "Would you like to add another teammate?",
    },
];
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team engineer's name?",
        validate: (input) => {
            return (!input) ? 'Please provide the name' : true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team engineer's id?",
        validate: (input) => {
            if (isNaN(input)) {
                return 'Please enter an id number';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team engineer's email?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the team engineer's github?",
        validate: (input) => {
            return (!input) ? 'Please provide the github' : true;
        }
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team intern's name?",
        validate: (input) => {
            return (!input) ? 'Please provide the name' : true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team intern's id?",
        validate: (input) => {
            if (isNaN(input)) {
                return 'Please enter an id number';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team intern's email?",
        validate: (email) => {
            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            }
            return "Please enter a valid email";
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the team interns's school name?",
        validate: (input) => {
            return (!input) ? 'Please provide the school name' : true;
        }
    },
];

const addTeamOrFinish = () => {
    return inquirer.prompt(addTeamOrFinishQuestion)
        .then(answer => {
            switch (answer.choice) {
                case 'Engineer':
                    // addEngineer();
                    console.log('You chose Engineer');
                    addEngineer();
                    break;
                case 'Intern':
                    // addIntern();
                    console.log('You chose Intern');
                    addIntern();
                    break;
                case 'Finish':
                    // console.log(templateData(dataArray))
                    writeFile(templateData(dataArray));
                    copyFile();
                    console.log('You chose Finish');
                    // here needs to be added function of creating a html with all the stuff.
                    break;
            }
        })
}


const addManager = () => {
    //clean the array before start
    dataArray.length = 0;
    return inquirer.prompt(managerQuestions)
        .then(answers => {
            // destructure data by section
            const { name, id, email, officeNumber } = answers;
            const manager = new Manager(name, id, email, officeNumber);
            dataArray.push(manager);
            console.log(manager);
            addTeamOrFinish();
        })
};

const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
        .then(answers => {
            // console.log(answers);
            // destructure  data by section
            const { name, id, email, github } = answers;
            const engineer = new Engineer(name, id, email, github);
            dataArray.push(engineer);
            console.log(engineer);
            addTeamOrFinish();
        })

}

const addIntern = () => {
    return inquirer.prompt(internQuestions)
        .then(answers => {
            // console.log(answers);
            // destructure data by section
            const { name, id, email, school } = answers;
            const engineer = new Intern(name, id, email, school);
            dataArray.push(engineer);
            console.log(engineer);
            addTeamOrFinish();
        })
}

addManager();



