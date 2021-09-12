import { DefaultSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import SiteLayout from "../components/SiteLayout";
import Fonts from "../components/Fonts";
import theme from "../theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel='preload'
          href='/fonts/Chapter/Chapter-Regular.otf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <DefaultSeo
        title='LA DAO'
        description='Lost Ambrer DAO. Events DAO | Globally driven.'
        canonical='https://site-url'
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://site-url",
          site_name: "LA DAO",
          title: "LA DAO",
          description: "Lost Amber DAO. Events DAO | Globally driven.",
          images: [
            {
              url: "/vercel.svg", //replcace with your OG image
              width: 1200,
              height: 630,
              alt: "Alt text for logo",
            },
          ],
        }}
      />
      <Fonts />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </ChakraProvider>
  );
};
export default MyApp;
