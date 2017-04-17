const fs = require('fs');
const msg = require('./msg');

const dbPath = 'data.json';

let db;

module.exports = {
  load: () => {
    // check if data.json exists and create with an empty array
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify([]));
      msg.info(dbPath + " created.")
    }

    db = JSON.parse(fs.readFileSync(dbPath));
    return db;
  },
  save: () => fs.writeFileSync(dbPath, JSON.stringify(db))
}