const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const questions = require('./questions');

/**
 * Get random integer between two numbers.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Generate password by picking a random character in a string.
 *
 * @param {number} length
 * @param {boolean} specialChars
 * @param {boolean} extraSpecialChar
 * @returns {string}
 */
const generatePassword = function (length = 8, specialChars = false) {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  if (specialChars) {
    chars += '!@#$%^&*()-_[]{}<>~`+=,.;:/?|';
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.substr(getRandomInt(0, chars.length - 1), 1);
  }
  return password;
};

/**
 * Color the output password.
 *
 * @param {string} password
 */
const renderColorPassword = function (password) {
  console.log(chalk.green.bold(password))
};

// Define the command line.
program
  .version('0.1.0');

program
  .command('create')
  .alias('c')
  .option('-q, --quick', 'quick create a password')
  .description('create a strong password')
  .action(function(options) {
    if(options.quick) {
      let password = generatePassword(32, true);
      renderColorPassword(password);
      return;
    }

    let prompt = inquirer.prompt(questions);
    prompt.then(function(answers) {
      let length = answers.hasOwnProperty('custom_length') ? answers.custom_length : answers.length;
      let password = generatePassword(length, answers.special_chars)
      renderColorPassword(password)
    })
  });

program.parse(process.argv);

if (!program.args.length) program.help();
