import "@/styles/globals.css";
import { headers } from "next/headers";
import { userAgent } from "next/server";
import { ReactNode } from "react";
import Providers from "./providers";
import { Layout } from "@/components/layouts/Layout";
import { detectMobileDevice } from "@/utils/detectMobileDevice";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const reqUserAgent = userAgent({ headers: headers() });
  const isMobile = detectMobileDevice(reqUserAgent.ua);

  return (
    <html>
      <body>
        <Providers>
          <Layout isMobile={isMobile}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
