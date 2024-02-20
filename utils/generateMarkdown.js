// required packages
const fs = require('fs');
const inquirer = require('inquirer');
const indexFile = require("../index.js");


//function for generating licenese badges 
function generateLicenseBadge(license) {
  let itembadge = ';'

  //changing the if/else to a ternary operator
  itembadge = license === 'MIT' ? '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)' :
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
- [usage](#usage)
- [installation](#installation)
- [license](#license)
- [contribution](#contribution)
- [tests](#test)
- [questions](#questions)

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

## Questions

### Github Profile: https://github.com/${data.askGithub}

### Email address: ${data.askEmail}

`;

}

module.exports = generateMarkdown;
