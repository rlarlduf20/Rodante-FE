import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import reset from "../styles/global";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>로단테</title>
      </Head>
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
