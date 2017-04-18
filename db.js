const fs = require('fs');
const path = require('path');
const msg = require('./msg');

const dbPath = path.join(__dirname, 'data.json');
let db;

module.exports = {
  load: () => {
    // check if data.json exists and create with an empty array
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify([]));
      msg.info(dbPath + " created at " + dbPath)
    }

    db = JSON.parse(fs.readFileSync(dbPath));
    return db;
  },
  save: () => fs.writeFileSync(dbPath, JSON.stringify(db))
}