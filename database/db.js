const sqlite3 = require('sqlite3');
const util    = require('util');

const db = new sqlite3.Database('database/temp_data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message)
  console.log("connection successful")
});

db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);
// empty all data from db
db.clean_db = async function() {
  // await db.run("delete from users");
  // await db.run("delete from members");
  // await db.run("delete from guilds");
  // db.run("vacuum");
}

// any kind of other function ...

// and then export your module

module.exports = db;
