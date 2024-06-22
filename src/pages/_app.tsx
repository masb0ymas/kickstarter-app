import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import env from "~/config/env";
import { theme } from "~/core/styles/theme";

const title = env.APP_NAME;
const description = `${title} - Founding for web3 project`;
const metaURL = `https://${env.APP_URL}`;
const metaImage = "/static/images/logo.png";
const webIconURL = "/static/images/logo.png";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <link rel="icon" href={webIconURL} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaURL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaURL} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
