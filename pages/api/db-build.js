import fs from "fs";
import sqlite3 from 'sqlite3';
import db from '../../database/db.js'
export default async (req, res) => {
  if (req.method === "POST") {
    const homeData = req.body.homeData
    if (homeData){
      await fs.truncateSync('database/temp_data.db', 0, function(){console.log('done')});
      await db.run('CREATE VIRTUAL TABLE searchables USING fts5(location, content, slug, id)');

      const sql = `INSERT INTO searchables (location, content, slug, id)
                    VALUES(?,?,?,?)`;
      await db.run(sql, ['Home.Main.Title', `${homeData.data.attributes.Main.heading1}`, '#', 1], (err) => {
        if (err) return console.error(err.message)
        console.log("New item inserted")
      });

      await  db.run(sql, ['Home.Main.SubTitle', `${homeData.data.attributes.Main.heading2}`, '#', 1], (err) => {
        if (err) return console.error(err.message)
        console.log("New item inserted")
      });

      await db.run(sql, ['Home.Careers.Description', `${homeData.data.attributes.Careers.description}`, '#', 1], (err) => {
        if (err) return console.error(err.message)
        console.log("New item inserted")
      });

      db.close((err) => {
        if (err) return console.error(err.message)
      });

      fs.copyFileSync('database/temp_data.db', 'database/data.db');
      res.status(200).json({ data: 'Done' })
    }
    else res.status(403).json({ error: 'No Data' })
  }
  else res.status(404).json({ error: 'Unauthorized' })
}
