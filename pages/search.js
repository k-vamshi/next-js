// import fs from "fs";
import styles from "../styles/Home.module.css";
//
// import sqlite3 from 'sqlite3';

export default function Search(homeData) {
  //
  // fs.truncateSync('database/temp_data.db', 0, function(){console.log('done')});
  // const db = new sqlite3.Database('database/temp_data.db', sqlite3.OPEN_READWRITE, (err) => {
  //   if (err) return console.error(err.message)
  //   console.log("connection successful")
  // });
  //
  // db.serialize(() => {
  //   db.run('CREATE VIRTUAL TABLE searchables USING fts5(location, content, slug, id)');
  //
  //   const sql = `INSERT INTO searchables (location, content, slug, id)
  //                 VALUES(?,?,?,?)`;
  //
  //   db.run(sql, ['Home.Main.Title', `${homeData.data.attributes.Main.heading1}`, '#', 1], (err) => {
  //     if (err) return console.error(err.message)
  //     console.log("New item inserted")
  //   });
  //
  //   db.run(sql, ['Home.Main.SubTitle', `${homeData.data.attributes.Main.heading2}`, '#', 1], (err) => {
  //     if (err) return console.error(err.message)
  //     console.log("New item inserted")
  //   });
  //
  //   db.run(sql, ['Home.Careers.Description', `${homeData.data.attributes.Careers.description}`, '#', 1], (err) => {
  //     if (err) return console.error(err.message)
  //     console.log("New item inserted")
  //   });
  //
  // });
  //
  // db.close((err) => {
  //   if (err) return console.error(err.message)
  // });
  //
  // fs.copyFileSync('database/temp_data.db', 'database/data.db');
  //

  var data = {};
  const status = async () => {
    const dbBuild = await fetch('http://localhost:3000/api/db-build', {
      method: 'POST',
      body: JSON.stringify({ homeData }),
      headers: {
        'content-type': 'application/json'
      }
    })
    data = await dbBuild.json()
    console.log(data);
  }
  status ();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a> is amazing! 😍
        </h1>
        <p>
          Deploy Deploy Deploy -{" "}
          <strong>
            <a href="https:google.com">
              {homeData.data.attributes.Main.heading1}
            </a>
              <a href="https:google.com">
                {data.data}
              </a>
          </strong>{" "}
        </p>
      </main>
    </div>
  );
};


export const getStaticProps = async () => {
  var requestOptions = {
    method: 'GET'
  };
  const homeData = await fetch("https://gs-cms.dev.devathon.com/api/home?populate=Main.button&populate=Careers.button&populate=Culture.videoThumbnail&populate=Careers.video&populate=Careers.videoThumbnail&populate=Culture.video&populate=Solutions.nodes&populate=Technologies.cards.icon&populate=Technologies.cards.icon_white&populate=Technologies.RHS_image&populate=Experience.employees_graph&populate=Experience.Colleges&populate=Experience.hyperlink&populate=Featured.Cards.image&populate=Testimonials.reviews.profile_pic&populate=Testimonials.reviews.company_logo&populate=Locations.locations.pic&populate=Locations.locations.Office_image&populate=seo.metaImage&populate=seo.metaSocial.image&populate=seo.favicon&publicationState=preview", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));

  return { props: homeData, revalidate: 10 };
};
