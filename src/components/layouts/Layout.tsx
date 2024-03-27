import { debounce } from "lodash";
import React, { FC, PropsWithChildren, useCallback, useState } from "react";
import { Footer } from "./footers";
import { Header } from "./headers";
import { LayoutWrapper, LayoutPageWrapper } from "./styles";
import { DownloadUs } from "@/components/ui/DownloadUs";

/** Layout components */
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleSetHeaderHeight = useCallback((height: number) => {
    debounce((height: number) => setHeaderHeight(height), 200)(height);
  }, []);

  const measureRef = (node: object) => {
    if (!(node instanceof HTMLDivElement)) {
      return;
    }

    handleSetHeaderHeight(node.clientHeight);
  };

  return (
    <LayoutWrapper>
      <Header ref={measureRef} />
      <LayoutPageWrapper style={{ paddingTop: `${headerHeight}px` }}>
        {children}
      </LayoutPageWrapper>
      <DownloadUs />
      <Footer />
    </LayoutWrapper>
  );
};

Layout.displayName = "Layout";
