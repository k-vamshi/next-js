import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deploy Next JS App on AWS in 5 minutes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js!</a> is amazing! 😍
        </h1>
        <p>
          This demo app is a part of tutorial:{" "}
          <strong>
            <a href="https://dev.to/mubbashir10/host-next-js-app-on-aws-within-5-minutes-with-ci-cd-1o0a">
              Deploy Next JS App on AWS in 5 minutes
            </a>
          </strong>{" "}
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://mubbashir.me">
          Thank you so much for following along! - Mubbashir
        </a>
      </footer>
    </div>
  );
}
