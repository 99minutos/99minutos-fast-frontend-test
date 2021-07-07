import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <meta charSet="utf-8" />
    <title>99minutos/Test</title>
    <link href="/favicon.ico" rel="shortcut icon" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
