const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['Engineer', 'Intern', 'Finish building the team'],
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
const addQuestion = () => {
    inquirer.prompt(addTeamOrFinishQuestion)
    .then(input=>{
        console.log(input);
    })
};
const promptUser = () => {
    inquirer.prompt(managerQuestions)
        .then(input => {
            console.log(input)
            dataArray.push(input);
            addQuestion();
        })
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
}

promptUser()
