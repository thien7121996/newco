import React, { FC, PropsWithChildren } from "react";
import { Footer } from "./footers";
import { Header } from "./headers";
import { LayoutWrapper, LayoutPageWrapper } from "./styles";
import { DownloadUs } from "@/components/ui/DownloadUs";

/** Layout components */
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />

      <LayoutPageWrapper>{children}</LayoutPageWrapper>
      <DownloadUs />
      <Footer />
    </LayoutWrapper>
  );
};

Layout.displayName = "Layout";
