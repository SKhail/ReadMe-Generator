const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
 {
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?'
 },
 {
  type: 'input',
  name: 'description',
  message: 'Enter the description'
 },
 {
  type: 'input',
  name: 'Installation',
  message: 'Provide step by step guide to install your poject',
 },
 {
  type: 'input',
  name: 'Usage',
  message: 'Provide the use of your project',
 },
 {
  type: 'input',
  name: 'Installation',
  message: 'Provide step by step guide to install your project',
 },
 {
  type: 'list',
  name: 'license',
  message: 'What type of license does your project need?',
  choices: ['None', 'MIT', 'Apache 2.0', 'GPL v3', 'BSD 3']
 },
 {
  type: 'input',
  name: 'Contribution',
  message: 'What guidelines must others follow when contributing to the project?',
 },
 {
  type: 'input',
  name: 'test',
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
 },

];

// function to write README file
// function writeToFile(fileName, data) {

// }

const writeToFile = fileInfo => {
 return new Promise((resolve, reject) => {
  fs.writeFile('./generateREADME.md', fileInfo, err => {
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
  .then(function (answer) {
   console.log(answer);
   const fileInfo = generateMarkdown(answer)
   writeToFile(fileInfo)
  });
}

// function call to initialize program
init();

//Exporting the questions
module.export = questions;