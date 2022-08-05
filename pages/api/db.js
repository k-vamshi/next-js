const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();

fs.truncate('database/temp_data.db', 0, function(){console.log('done')});
const db = new sqlite3.Database('database/temp_data.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message)
  console.log("connection successful")
});

db.serialize(() => {
  db.run('CREATE VIRTUAL TABLE searchables USING fts5(location, content, slug, id)');

  const sql = `INSERT INTO searchables (location, content, slug, id)
                VALUES(?,?,?,?)`;

  console.log(2)
  db.run(sql, ['Home.OurCulture', 'example content', '#', 1], (err) => {
    if (err) return console.error(err.message)
    console.log("New item inserted")
    fs.copyFileSync('database/temp_data.db', 'database/data.db');
  });
  console.log(1)

});

db.close((err) => {
  if (err) return console.error(err.message)
});

fs.copyFileSync('database/temp_data.db', 'database/data.db');
