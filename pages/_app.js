import "../styles/globals.css";
import Head from "next/head";
import './styles.css';

function MyApp({ Component, pageProps }) {
  <Head>
    <meta charSet="utf-8" />
    <title>99minutos/Test</title>
    <link href="/favicon.ico" rel="shortcut icon" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
