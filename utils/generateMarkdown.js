// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `
  # Title:
        ${answer.Title}

  ## Description:

  ![license](https://img.shields.io/badge/License-${answer.License}-green.svg "License Badge")
     
        ${answer.description}

  ## Table of Contents: 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Credits](#credits)
  - [License](#License)
  - [Questions](#Questions)

  ## Installation
        ${answer.installation}

  ## Usage
        ${answer.Usage}

  ## Contributing
        ${answer.Contributing}

  ## Tests
        ${answer.Tests}

  ## Credits
        ${answer.credits}
        
  ## License
  This project is covered under  the following licence: ${answer.License}
  
  
  ## Questions
  Below is my GitHub Profile
  - [GitHub Profile](https://github.com/${answer.username})
  - For any further question, reach out to me at: 
        email:${answer.useremail}
`;
}

module.exports = generateMarkdown;
