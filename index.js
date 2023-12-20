import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
      type: 'input',
      name: 'title',
        message: 'Please give your project a title'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project (what problem does it solve?)'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation info'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage info'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    }
]);

const readmeContent = `
# ${answers.title}
## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## License
${answers.license}
## Questions
For any questions, please contact me with the information below:

GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
`;

await writeFile('README.md', readmeContent);
console.log('README.md generated!');
} catch (error) {
console.error('An error occurred:', error);
}
}

main();