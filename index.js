const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: function (value) {
      if (value.trim() === '') {
        return 'Please enter a title for your project '
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: ' Enter the description of your project?',
    validate: function (value) {
      if (value.trim() === '') {
        return 'Please enter the description of your project? '
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: ' Provide the usage of your project',
    validate: function (value) {
      if (value.trim() === '') {
        return 'Please add information about the usage of your project '
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide a step by step guide on how to install your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license does your project require?',
    choices: ['None', 'MIT', 'Apache 2.0', 'GPL v3', 'BSD 3']
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What guidelines must others follow when contributing to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test this project?',
  },
  {
    type: 'input',
    name: 'askGithub',
    message: 'If someone wants to contact you what is your Github username?',
  },
  {
    type: 'input',
    name: 'askEmail',
    message: 'What is your Email Address?',
    validate: function (value) {
      const emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //Check if it meets the correct email address format
      if (!emailChar.test(value)) {
        return 'Enter a valid Email Address'
      }
      return true;
    }
  },

];

// function to write README file
// function writeToFile(fileName, data) {

// }

const writeToFile = markdownContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generateREADME.md', markdownContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true
      });
    });
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      console.log(data);
      const markdownContent = generateMarkdown(data)
      writeToFile(markdownContent)
    });
}

// function call to initialize program
init();

//Exporting the questions
module.exports = questions;