import Head from 'next/head';
import '../styles/plugins.css';
import '../styles/dark.css';
import '../styles/style.css';
import '../styles/custom.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Daniela Eichner - Senior Software Engineering Manager"
        />
        <meta name="author" content="Daniela Eichner" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>
          Daniela Eichner - Senior Software Engineering Manager | New York
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
