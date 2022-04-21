const inquirer = require('inquirer');
const fs = require('fs');
const savedFile = './saved-readme/sampleREADME.md';

inquirer.prompt([
    {
        type: 'input',
        message: "What is the amazing Title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Describe this fantastic project of yours:",
        name: 'description',
    },
    {
        type: 'input',
        message: "How can I install this phenomenal project:",
        name: 'install',
    },
    {
        type: 'input',
        message: "Be the awesome person that you are and provide any instructions I need to know for usage:",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Would you like other awesome people to contribute to your amazing project?",
        name: 'colab',
    },
    {
        type: 'input',
        message: "If you want to add some fun tests for your application, you can do that here! Make sure to include examples on how to run them:",
        name: 'tests',
    },
    {
        type: 'input',
        message: "Let me know any other amazing contributors or fantastic assets that require a shout out:",
        name: 'credits',
    },
    {
        type: 'checkbox',
        message: "Choose your outstanding license:",
        choices: [
            "None",
            "MIT",
            "GNUv3",
            "Apache",
            "OpenBSD",
            "Rust",
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: "Let me know that sweet GitHub user name of yours:",
        name: 'username',
    },
    {
        type: 'input',
        message: "What email address should I use to contact your awesomeness?",
        name: 'useremail',
    }
]).then((answer) => {
    const genReadme = `
# ${answer.title}
    
    
## Description:
![license](https://img.shields.io/badge/License-${answer.license}-green.svg "License Badge")

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
${answer.install}

## Usage
${answer.usage}

## Contributing
${answer.colab}

## Tests
${answer.tests}

## Credits
${answer.credits}

## License
This project is covered under the following licence: ${answer.license}


## Questions
### If you are curious to see more of my work, you can find a link to my GitHub below:

- [GitHub Profile](https://github.com/${answer.username})

### For any further question, reach out to me at: 
- ${answer.useremail}
`
    fs.writeFile(savedFile, genReadme, (err) => {
        err ? console.log(err) : console.log('You just generated your spectacular README!')
    });

});



