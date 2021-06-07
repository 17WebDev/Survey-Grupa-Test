import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
