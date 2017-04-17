const fs = require('fs');

const dbPath = 'data.json';

let db;

module.exports = {
  load: () => {
    db = JSON.parse(fs.readFileSync(dbPath));
    return db;
  },
  save: () => fs.writeFileSync(dbPath, JSON.stringify(db))
}