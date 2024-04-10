import { atom, useAtom } from "jotai";
import { debounce } from "lodash";
import React, { FC, PropsWithChildren, useCallback } from "react";
import { Footer } from "./footers";
import { Header } from "./headers";
import { LayoutWrapper, LayoutPageWrapper } from "./styles";
import { DownloadUs } from "@/components/ui/DownloadUs";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SCREEN_SIZE } from "@/utils/screenSize";

export const headerHeightInit = atom(70);

/** Layout components */
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useAtom(headerHeightInit);

  useMediaQuery(SCREEN_SIZE.TABLET);

  const handleSetHeaderHeight = useCallback(
    (height: number) => {
      debounce((height: number) => setHeaderHeight(height), 200)(height);
    },
    [setHeaderHeight],
  );

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
