const sqlite3 = require('sqlite3').verbose();
var result = {};

export default (req, res) => {
  const {params} = req.query

  const db = new sqlite3.Database('database/data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return res.status(401).json({ error: err.message})
    console.log("connection successful")
  });

  const sql = `SELECT * FROM searchables WHERE searchables MATCH 'content:${params[0]}'`;

  db.all(sql, [], (err, response) => {
    if (err) return res.status(402).json({ error: err.message})
    result = response;
    res.status(200).json({ data: result})
  });

  db.close((err) => {
    if (err) return console.error(err.message)
  });

}
