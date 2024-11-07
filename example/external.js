/*
const moment = require('moment');
const time = moment().format();
console.log(time);
*/ 

const moment = require('moment');

setInterval(() => {
    const time = moment().format();
    console.log(`hozirgi vaqt: ${time}`);
}, 5000);


console.log('======');

const inquirer = require('inquirer');

inquirer
  .createPromptModule()([{ type: 'input', name: "raqam", message: 'raqamni kiriting' }])
  .then((answer) => {
    console.log('man kiritgan raqam qiymati:', answer.raqam);
  })
  .catch((err) => {
    console.log(err);
  });


  const validator = require('validator');

// Check if the string is an email
const testEmail = validator.isEmail('foo@bar.com');
console.log('testEmail:', testEmail);

// Check if the string is an IP address
const testIP = validator.isIP('82.215.105.132');
console.log('testIP:', testIP);


console.log('---------');

const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log('random:', random);

const chalk = require('chalk');
const log = console.log;

log(chalk.blue('Hello') + random + chalk.red('!'));





