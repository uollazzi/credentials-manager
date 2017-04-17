const _ = require('lodash');
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

  _.remove(db, item);

  DB.save();
  msg.success(name, "deleted.");
});