// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //https://lgtm.com/help/lgtm/adding-badges-to-project-readme-files
  //https://www.youtube.com/watch?v=Dl-ekLb4quE
  //https://www.youtube.com/watch?v=bNVRxb-MKGo
  switch (license){
    case  "MIT" : return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case "Apache 2.0" :  return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "Creative Commons 1.0" : return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    break;
    case "GNU GPL v3" : return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    break;
    case "BSD 3-Clause" : return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "Mozilla Public License 2.0" : return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
    case "The Unlicense" : return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    break;  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Licensing
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.install}

  ## Usage:
  ${data.usage}  

  ## Contribution:
  ${data.contribute}

  ## Testing:
  ${data.test}

  ## Additional Info:
  - Github: [${data.GitHub}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = {
  renderLicenseBadge,
  generateMarkdown
};
