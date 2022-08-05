import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import styles from "../styles/Home.module.css";

let element = (
  <div className={styles.container}>
      <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="https://nextjs.org">Next.js!</a> is amazing! 😍
      </h1>
      <p>
        Deploy Deploy Deploy -{" "}
        <strong>
          <a href="https:google.com">
            Hello Boy
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

export default function App() {
  const exportPDF = () => {
    const doc = new jsPDF({
      orientation: "potrait",
      unit: "px",
      format: "a4"
    });
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('sample.pdf');
      },
      windowWidth: 1000,
      width: 300,
      margin: 10,
      x: 50,
      y: 50
    });
  };

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
              Hello Boy
            </a>
          </strong>{" "}
        </p>
      </main>

     <button onClick={exportPDF}>export</button>

      <footer className={styles.footer}>
        <a href="https://mubbashir.me">
          Next is not cool for seo and social sharing! - Vamshi
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async => {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  const seoData = {
    "metaTitle": dateTime,
    "metaDescription": "This is the default description buddy, boom boom boom",
    "metaImage": "https://www.byeindonesia.com/og-bye-indonesia.png"
  }
  return { props: seoData, revalidate: 10 };
};
