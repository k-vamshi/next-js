import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(seoData) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription}/>

        <meta property="og:url" content="https://www.byeindonesia.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={seoData.metaTitle}/>
        <meta property="og:description" content={seoData.metaDescription}/>
        <meta property="og:image" content={seoData.metaImage}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="byeindonesia.com"/>
        <meta property="twitter:url" content="https://www.byeindonesia.com/"/>
        <meta name="twitter:title" content={seoData.metaTitle}/>
        <meta name="twitter:description" content={seoData.metaDescription}/>
        <meta name="twitter:image" content={seoData.metaImage}/>

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

export const getStaticProps = async => {
  const seoData = {
    "metaTitle": "This is the title dude",
    "metaDescription": "This is the default description buddy, boom boom boom",
    "metaImage": "https://www.byeindonesia.com/og-bye-indonesia.png"
  }
  return { props: seoData };
};
