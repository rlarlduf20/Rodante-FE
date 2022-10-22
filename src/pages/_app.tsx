import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, css, ThemeProvider } from "@emotion/react";
import reset from "../styles/global";
import Layout from "../components/common/layout";
import { useRouter } from "next/router";
import { TokenWrapper } from "../context/tokenState";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter().pathname;

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
      <TokenWrapper>
        {route === "/signin" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </TokenWrapper>
    </>
  );
}

export default MyApp;
