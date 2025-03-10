import inquirer from 'inquirer';
import { execSync } from 'child_process';

const questions = [
  {
    type: 'list',
    name: 'commitType',
    message: 'Choose the type of commit:',
    choices: [
      'feat - A new feature',
      'fix - A bug fix',
      'debug - Debugging or troubleshooting',
      'test - Adding or updating tests',
      'chore - Maintenance or routine tasks',
      'docs - Documentation only changes',
      'style - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      'refactor - A code change that neither fixes a bug nor adds a feature',
      'perf - A code change that improves performance',
      'build - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      'ci - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      'revert - Reverts a previous commit'
    ],
  },
  {
    type: 'input',
    name: 'commitMessage',
    message: 'Describe commit in a few sentences:',
  },
];

inquirer.prompt(questions).then((answers) => {
  const charBreaker = '-';
  const commitType = answers.commitType.slice(0, answers.commitType.indexOf(charBreaker) - 1);
  const commitMessage = `[${commitType}]: ${answers.commitMessage}`;
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
});
