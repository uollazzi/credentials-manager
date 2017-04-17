const _ = require('lodash');
const inquirer = require('inquirer');
const DB = require('../db');
const msg = require('../msg');

module.exports = (() => {
  let db = DB.load();

  let qName = {
    type: 'input',
    name: 'name',
    message: 'Name:'
  };

  let questions = [{
      type: 'input',
      name: 'server',
      message: 'Server:'
    },
    {
      type: 'input',
      name: 'user',
      message: 'User:'
    },
    {
      type: 'input',
      name: 'pwd',
      message: 'Password:'
    },
    {
      type: 'input',
      name: 'tags',
      message: 'Tags:'
    }
  ];
  inquirer.prompt(qName).then(answer => {
    let name = answer.name;

    let item = _.find(db, {
      name: name
    });

    if (item) {
      msg.error(name, "already taken.");
      return;
    }

    inquirer.prompt(questions).then(answers => {

      let entry = {
        name: name,
        server: answers.server,
        user: answers.user,
        pwd: answers.pwd,
        tags: answers.tags.split(' '),
      };

      db.push(entry);

      DB.save();

      msg.success(name, "added.");      
    });
  });
});