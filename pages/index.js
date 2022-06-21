import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>This is the title bro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a> is amazing! 😍
        </h1>
        <p>
          Deploy Deploy Deploy
          <strong>
            <a href="https:google.com">
              hmm, hmm, hmm
            </a>
          </strong>{" "}
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://mubbashir.me">
          Next is not cool for seo and social sharing! - Vamshi
        </a>
      </footer>
    </div>
  );
}
