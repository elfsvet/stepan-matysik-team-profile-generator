const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { join } = require('path');
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
            return (!input) ? 'Please provide the id' : true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate: (input) => {
            return (!input) ? 'Please provide the email' : true;
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        validate: (input) => {
            return (!input) ? 'Please provide the office number' : true;
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
            return (!input) ? 'Please provide the id' : true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team engineer's email?",
        validate: (input) => {
            return (!input) ? 'Please provide the email' : true;
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
            return (!input) ? 'Please provide the id' : true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team intern's email?",
        validate: (input) => {
            return (!input) ? 'Please provide the email' : true;
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

const addTeamOrFinish = ()=>{
   return inquirer.prompt(addTeamOrFinishQuestion)
   .then(answer=>{
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
                console.log(dataArray);
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
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        dataArray.push(manager);
        console.log(manager);
        return addTeamOrFinish();
    })
};

const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
    .then(answers => {
        // console.log(answers);
        const engineer = new Engineer (answers.name,answers.id, answers.email,answers.github);
        dataArray.push(engineer);
        console.log(engineer);
        return addTeamOrFinish();
    })

}

const addIntern = () => {
    return inquirer.prompt(internQuestions)
    .then(answers => {
        // console.log(answers);
        // const {name, id, email, github} = answers; a way to deconstruct the object
        const engineer = new Intern (answers.name,answers.id, answers.email,answers.school);
        dataArray.push(engineer);
        console.log(engineer);
        return addTeamOrFinish();
    })
}

addManager()



// const addQuestion = (managerData) => {
//    return inquirer.prompt(addTeamOrFinishQuestion)
//     .then(input=>{
//         console.log(input);
//     })
// };
// const promptUser = () => {
//    return inquirer.prompt(managerQuestions)
//         .then(input => {
//             console.log(input)
//             dataArray.push(input);
//             return input;
//         })
        // .then(()=> {
        //     inquirer.prompt(addTeamOrFinishQuestion)
        //     .then(input => {
        //         console.log(input)
        //     })
        // });
    // use function each row function should end with a loop to run another 
    //we should use theen and put out loop there on the answer we got from running the question.
    // let answer2 = inquirer.prompt(addTeamOrFinishQuestion).then(input=>{
    //     console.log(input);
    // while (answer2 !== 'Finish building the team') {
    //     switch (answer2) {
    //         case 'Engineer':
    //             dataArray.push(inquirer.prompt(engineerQuestions));
    //             break;
    //         case 'Intern':
    //             dataArray.push(inquirer.prompt(internQuestions));
    //             break;
    //     }
    //     answer2 = inquirer.prompt(addTeamOrFinishQuestion);
    // }
    // console.log('Your team is now ready');
    // loop with a question do you want to add a teammate
    // 
// }

// promptUser().then(addQuestion())
