const DB = require('../db');
const _ = require('lodash');
const msg = require('../msg');

module.exports = ((query) => {
  let db = DB.load();

  let items = _.filter(db, (x) => {
    return x.name.includes(query) || _.indexOf(x.tags, query) > -1;
  });

  items.forEach((item) => {
    msg.info("-------");
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        let paddedKey = (key + '      ').slice(0, 6);
        msg.info(paddedKey + ": " + item[key]);
      }
    }       
  });
});