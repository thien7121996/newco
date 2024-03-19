import { NextPage } from "next";
import type { AppProps } from "next/app";
import "@/configs/i18n";
import NextNProgress from "nextjs-progressbar";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/configs/theme";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/grid";
import "swiper/css/bundle";
import "@/styles/globals.css";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.colors.primary}
        height={5}
        options={{ showSpinner: false }}
      />

      {getLayout(<Component {...pageProps} />)}
      {/* </PrivateRoute> */}
    </ThemeProvider>
  );
}

export default MyApp;
