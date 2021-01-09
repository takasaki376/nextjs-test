import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{" "}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
    <Layout title="Main page">
      <div className="m-10 flex">
        <Link href="/SsgPage">
          <div className="mx-10 my-0 p-10 w-32 h-15 text-center bg-indigo-500 hover:bg-indigo-600">
            <span className="m-auto text-white rounded">SSG</span>
          </div>
        </Link>
        <Link href="/IsrPage">
          <div className="mx-10 my-0 p-10 w-32 h-15 text-center  bg-indigo-500 hover:bg-indigo-600">
            <span className="m-auto text-white rounded">ISR</span>
          </div>
        </Link>
      </div>
      <div className="m-10 flex">
        <Link href="/SsgCsrPage">
          <div className="mx-10 my-0 px-5 py-10 w-32 h-15 text-center bg-indigo-500 hover:bg-indigo-600">
            <span className="m-auto text-white rounded whitespace-nowrap">
              SSG + CSR
            </span>
          </div>
        </Link>
        <Link href="/IsrCsrPage">
          <div className="mx-10 my-0 px-5 py-10 w-32 h-15 text-center bg-indigo-500 hover:bg-indigo-600">
            <a className=" text-white rounded whitespace-nowrap">ISR + CSR</a>
          </div>
        </Link>
      </div>
      <div className="m-10 flex">
        <Link href="/SsrPage">
          <div className="mx-10 my-0 p-10 w-32 h-15 text-center bg-indigo-500 hover:bg-indigo-600">
            <span className="m-auto text-white rounded whitespace-nowrap">
              SSR
            </span>
          </div>
        </Link>
        <Link href="/CsrPage">
          <div className="mx-10 my-0 p-10 w-32 h-15 text-center  bg-indigo-500 hover:bg-indigo-600">
            <span className=" text-white rounded whitespace-nowrap">CSR</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
