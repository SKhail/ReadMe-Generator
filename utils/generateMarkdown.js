// required packages
const fs = require('fs');
const inquirer = require('inquirer');
const indexFile = require("../index.js");
// const boxen = require('boxen');
// const chalk = require('chalk');
// import boxen from 'boxen';
// import chalk from 'chalk';

//function for generating licenese badges 
function generateLicenseBadge(license) {
  let itembadge = ';'

  //changing the if/else to a ternary operator
  itembadge = license === 'MIT' ? '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]' :
    license === 'Apache 2.0' ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' :
      license === 'GPL v3' ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' :
        license === 'BSD 3' ? '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' :
          '';
  ;

  return itembadge;

}

// function to generate markdown for README
function generateMarkdown(data) {
  // return 
  return `
# ${data.title}
  
## Table of Content
- [description](#description)
- [usage] (#usage)
- [installation](#installation)
- [license](#license)
- [contribution] (#contribution)
- [tests] (#test)

## Description
<a name="description"></a>${data.description}

## Usage
<a name="usage"></a> ${data.usage}


## Installation
<a name="installation"></a>${data.installation}

## License
<a name="license"></a>${generateLicenseBadge(data.license)}

## Contribution
<a name="contribution"></a>${data.contribution}

## Tests
<a name="tests"></a>${data.tests}

## Github

### Github Profile is: https://github.com/${data.askGithub}

## Email;
### your email address: ${data.askEmail}

`;
  // //use boxen to change the readme file look
  // const boxedContent = boxen(content, { padding: 1 });
  // // console.log(boxedContent);

  // //use chalk to add colour to it 
  // const colouredContent = chalk.bgBlue(boxedContent);
  // // console.log(colouredContent);

  // return colouredContent;
}

module.exports = generateMarkdown;




// not needed 

// if (license === 'MIT') {
//   itembadge = `[![ MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
// } else if(license === 'Apache 2.0') {
//   itembadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
// } else if (license === 'GPL v3') {
//   `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
// } else if (license === 'BSD 3'){
//   `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
// } else {
//   return badge;
// }
// }