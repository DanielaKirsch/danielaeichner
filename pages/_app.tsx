import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Senior Software Engineering Manager and Founder 
        with extensive experience in building, planning, and managing complex, 
        high-performance, big data software applications for international companies. 
        Experience in leading teams of up to 30 engineers, recruiting, coaching, 
        and scaling teams." />
        <meta name="author" content="Daniela Eichner" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>Daniela Eichner - Tech Lead & Web3 Founder</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K21SWWF0DT"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K21SWWF0DT', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
