module.exports = [
  {
    type: 'list',
    name: 'length',
    message: 'What\'s your password length?',
    choices: ['8', '12', '24', '32', 'Custom']
  },
  {
    type: 'input',
    name: 'custom_length',
    message: 'Enter your custom length:',
    when: function (answers) {
      return answers.length === 'Custom'
    }
  }
  ,
  {
    type: 'confirm',
    name: 'special_chars',
    message: 'Is including special chars?'
  }
];
