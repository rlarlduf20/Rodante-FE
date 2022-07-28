import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, css, ThemeProvider } from "@emotion/react";
import reset from "../styles/global";
import Layout from "../components/common/layout/Layout";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
