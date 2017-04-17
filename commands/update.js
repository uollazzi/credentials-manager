const _ = require('lodash');
const inquirer = require('inquirer');
const DB = require('../db');
const msg = require('../msg');

module.exports = ((name) => {
  let db = DB.load();

  let item = _.find(db, {
    name: name
  });

  if (!item) {
    msg.error(name, "not found.");
    return;
  }

  let questions = [{
      type: 'input',
      name: 'server',
      message: 'Server:',
      default: item.server
    },
    {
      type: 'input',
      name: 'user',
      message: 'User:',
      default: item.user
    },
    {
      type: 'input',
      name: 'pwd',
      message: 'Password:',
      default: item.pwd
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Tags:',
      default: item.tags
    }
  ];

  inquirer.prompt(questions).then(answers => {
    item.server = answers.server;
    item.user = answers.user;
    item.pwd = answers.pwd;
    item.tags = answers.tags.split(' ');

    // Find item index using indexOf+find
    let index = _.indexOf(db, _.find(db, {
      name: name
    }));

    // Replace item at index using native splice
    db.splice(index, 1, item);

    DB.save();

    msg.success(name, "updated.");
  });
});